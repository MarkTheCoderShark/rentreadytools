import { NextResponse } from "next/server";

type Body = {
  address?: string;
  zip?: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  propertyType?: string;
  currentRent?: number;
};

const RAPID_BASE = "https://us-real-estate.p.rapidapi.com";
const HOST_HEADER = "us-real-estate.p.rapidapi.com";

export async function POST(request: Request) {
  if (!process.env.REAL_ESTATE_API_KEY) {
    return NextResponse.json({ error: "Real estate API not configured." }, { status: 500 });
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const address = body.address?.trim();
  const zip = body.zip?.trim();
  const beds = Number(body.beds || 0);
  const baths = Number(body.baths || 0);
  const sqft = Number(body.sqft || 0);
  const propertyType = mapPropertyType(body.propertyType);
  const currentRent = Number(body.currentRent || 0);

  if (!zip && !address) {
    return NextResponse.json({ error: "Address or ZIP is required for rent estimate." }, { status: 400 });
  }

  try {
    const location = await lookupLocation(address || zip || "");
    if (!location) {
      return NextResponse.json({ error: "Unable to resolve location from address/ZIP." }, { status: 400 });
    }

    const params = new URLSearchParams({
      limit: "30",
      offset: "0",
      sort: "lowest_price",
      city: location.city,
      state_code: location.state_code,
      location: location.postal_code,
      expand_search_radius: "25",
    });

    const priceBounds = computePriceBounds({ beds, baths, sqft, currentRent });
    params.set("price_min", String(priceBounds.min));
    params.set("price_max", String(priceBounds.max));

    if (beds > 0) {
      params.set("beds_min", String(Math.max(0, beds - 1)));
      params.set("beds_max", String(beds + 1));
    }
    if (baths > 0) {
      const minBaths = Math.max(0, baths - 1);
      params.set("baths_min", minBaths.toFixed(1));
      params.set("baths_max", (baths + 1).toFixed(1));
    }
    if (sqft > 0) {
      const sizeBounds = snapSizeBounds(sqft);
      params.set("home_size_min", String(sizeBounds.min));
      params.set("home_size_max", String(sizeBounds.max));
    } else {
      params.set("home_size_min", "500");
      params.set("home_size_max", "3000");
    }
    if (propertyType) {
      params.set("property_type", propertyType);
    }

    const url = `${RAPID_BASE}/v3/for-rent?${params.toString()}`;
    const response = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": process.env.REAL_ESTATE_API_KEY as string,
        "X-RapidAPI-Host": HOST_HEADER,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: "Failed to fetch comps", details: text },
        { status: response.status },
      );
    }

    const data = await response.json();
    const comps = extractComps(data);

    if (!comps.length) {
      return NextResponse.json({ compsCount: 0 });
    }

    const filtered = filterOutliers(comps);
    const medianRent = median(filtered.map((c) => c.rent));
    const medianRentPerSqft = median(
      filtered.map((c) => (c.sqft ? c.rent / c.sqft : null)).filter((v): v is number => !!v),
    );

    return NextResponse.json({
      compsCount: filtered.length,
      medianRent,
      medianRentPerSqft,
      zip,
    });
  } catch (error) {
    console.error("Rent estimate error", error);
    return NextResponse.json({ error: "Unexpected error fetching comps." }, { status: 500 });
  }
}

async function lookupLocation(input: string) {
  const url = `${RAPID_BASE}/location/suggest?input=${encodeURIComponent(input)}`;
  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.REAL_ESTATE_API_KEY as string,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    cache: "no-store",
  });
  if (!response.ok) return null;
  const data = await response.json();
  const first = Array.isArray(data?.data) ? data.data[0] : null;
  if (!first?.city || !first?.state_code) return null;
  return {
    city: first.city as string,
    state_code: first.state_code as string,
    postal_code: first.postal_code as string,
  };
}

function mapPropertyType(type?: string) {
  if (!type) return "";
  const value = type.toLowerCase();
  if (value === "house" || value === "single_family") return "single_family";
  if (value === "condo") return "condo";
  if (value === "apartment") return "apartment";
  if (value === "duplex" || value === "multi_family") return "multi_family";
  return "";
}

function computePriceBounds({
  beds,
  baths,
  sqft,
  currentRent,
}: {
  beds: number;
  baths: number;
  sqft: number;
  currentRent: number;
}) {
  const base =
    950 +
    beds * 360 +
    baths * 180 +
    (sqft ? Math.min(sqft, 2500) * 0.65 : 0);
  const anchor = currentRent > 0 ? currentRent : base;
  const min = Math.max(800, Math.round(anchor * 0.6));
  const max = Math.round(anchor * 1.5);
  return { min, max };
}

function snapSizeBounds(sqft: number) {
  const allowed = [500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000];
  const targetMin = Math.max(500, Math.round(sqft * 0.7));
  const targetMax = Math.max(targetMin, Math.round(sqft * 1.3));

  const min = closestBelowOrEqual(allowed, targetMin);
  const max = closestAboveOrEqual(allowed, targetMax);
  return { min, max };
}

function closestBelowOrEqual(values: number[], target: number) {
  let best = values[0];
  for (const v of values) {
    if (v <= target && v >= best) best = v;
  }
  return best;
}

function closestAboveOrEqual(values: number[], target: number) {
  let best = values[values.length - 1];
  for (const v of values) {
    if (v >= target && v <= best) best = v;
  }
  return best;
}

type Comp = { rent: number; sqft?: number };

function extractComps(payload: unknown): Comp[] {
  const obj = payload as Record<string, unknown>;
  const data = obj?.data as Record<string, unknown> | undefined;
  const homeSearch = data?.home_search as Record<string, unknown> | undefined;
  const resultsArray =
    (Array.isArray(homeSearch?.results as unknown[]) ? (homeSearch?.results as unknown[]) : null) ||
    (Array.isArray(homeSearch?.properties as unknown[]) ? (homeSearch?.properties as unknown[]) : null) ||
    [];

  return resultsArray
    .map((raw) => {
      const item = raw as Record<string, unknown>;
      const community = item.community as Record<string, unknown> | undefined;
      const description = item.description as Record<string, unknown> | undefined;
      const building = item.building_size as Record<string, unknown> | undefined;
      const rent =
        (item.list_price as number | undefined) ??
        (item.price as number | undefined) ??
        (item.list_price_min as number | undefined) ??
        (item.price_min as number | undefined) ??
        (community?.price as number | undefined);
      const sqft =
        (description?.sqft as number | undefined) ??
        (item.sqft as number | undefined) ??
        (item.living_area as number | undefined) ??
        (community?.sqft_min as number | undefined) ??
        (building?.size as number | undefined);
      return { rent: rent ? Number(rent) : NaN, sqft: sqft ? Number(sqft) : undefined };
    })
    .filter((c: Comp) => Number.isFinite(c.rent) && c.rent > 0);
}

function filterOutliers(comps: Comp[]) {
  if (comps.length < 6) return comps;
  const rents = comps.map((c) => c.rent).sort((a, b) => a - b);
  const cutoff = Math.floor(rents.length * 0.15);
  const min = rents[cutoff];
  const max = rents[rents.length - 1 - cutoff];
  return comps.filter((c) => c.rent >= min && c.rent <= max);
}

function median(values: number[]) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}
