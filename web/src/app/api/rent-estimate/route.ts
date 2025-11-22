import { NextResponse } from "next/server";

type Body = {
  zip?: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  propertyType?: string;
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

  const zip = body.zip?.trim();
  const beds = Number(body.beds || 0);
  const baths = Number(body.baths || 0);
  const sqft = Number(body.sqft || 0);
  const propertyType = mapPropertyType(body.propertyType);

  if (!zip) {
    return NextResponse.json({ error: "ZIP is required for rent estimate." }, { status: 400 });
  }

  try {
    const params = new URLSearchParams({
      zipcode: zip,
      limit: "50",
      offset: "0",
      sort: "frehsnest",
    });

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
      params.set("home_size_min", String(Math.max(300, Math.round(sqft * 0.7))));
      params.set("home_size_max", String(Math.round(sqft * 1.3)));
    }
    if (propertyType) {
      params.set("property_type", propertyType);
    }

    const url = `${RAPID_BASE}/api/v2/for-rent-by-zipcode?${params.toString()}`;
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

function mapPropertyType(type?: string) {
  if (!type) return "";
  const value = type.toLowerCase();
  if (value === "house" || value === "single_family") return "single_family";
  if (value === "condo") return "condo";
  if (value === "apartment") return "apartment";
  if (value === "duplex" || value === "multi_family") return "multi_family";
  return "";
}

type Comp = { rent: number; sqft?: number };

function extractComps(payload: unknown): Comp[] {
  const obj = payload as Record<string, unknown>;
  const data = obj?.data as Record<string, unknown> | undefined;
  const homeSearch = data?.home_search as Record<string, unknown> | undefined;
  const homeSearchResults = Array.isArray(homeSearch?.results) ? homeSearch?.results : undefined;
  const fallbackHomeSearch = obj?.home_search as Record<string, unknown> | undefined;
  const fallbackHomeResults = Array.isArray(fallbackHomeSearch?.results) ? fallbackHomeSearch?.results : undefined;
  const dataResults = Array.isArray(data?.results) ? data?.results : undefined;
  const rootResults = Array.isArray(obj?.results) ? obj?.results : undefined;

  const results = homeSearchResults || fallbackHomeResults || dataResults || rootResults || [];

  return results
    .map((item) => {
      const rec = item as Record<string, unknown>;
      const rent =
        (rec.list_price as number | undefined) ??
        (rec.price as number | undefined) ??
        (rec.list_price_min as number | undefined) ??
        (rec.price_min as number | undefined);
      const desc = rec.description as Record<string, unknown> | undefined;
      const building = rec.building_size as Record<string, unknown> | undefined;
      const sqft =
        (desc?.sqft as number | undefined) ??
        (rec.sqft as number | undefined) ??
        (building?.size as number | undefined);
      return { rent: rent ? Number(rent) : NaN, sqft: sqft ? Number(sqft) : undefined };
    })
    .filter((c) => Number.isFinite(c.rent) && c.rent > 0);
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
