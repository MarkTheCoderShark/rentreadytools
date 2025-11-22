import { NextResponse } from "next/server";

type Body = {
  address?: string;
};

const BASE = "https://zillow-working-api.p.rapidapi.com";
const HOST_HEADER = "zillow-working-api.p.rapidapi.com";

export async function POST(request: Request) {
  if (!process.env.ZILLOW_API_KEY) {
    return NextResponse.json({ error: "Zillow API not configured." }, { status: 500 });
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const address = body.address?.trim();
  if (!address) {
    return NextResponse.json({ error: "Address is required for rent estimate." }, { status: 400 });
  }

  try {
    const url = `${BASE}/graph_charts?recent_first=True&byaddress=${encodeURIComponent(address)}&which=rent_zestimate_history`;
    const response = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": process.env.ZILLOW_API_KEY,
        "X-RapidAPI-Host": HOST_HEADER,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json({ error: "Failed to fetch Zillow data", details: text }, { status: response.status });
    }

    const data = await response.json();
    const history = extractHistory(data);

    if (!history.length) {
      return NextResponse.json({ compsCount: 0 });
    }

    const medianRent = median(history);

    return NextResponse.json({
      compsCount: history.length,
      medianRent,
      medianRentPerSqft: 0,
      address,
    });
  } catch (error) {
    console.error("Zillow rent estimate error", error);
    return NextResponse.json({ error: "Unexpected error fetching Zillow data." }, { status: 500 });
  }
}

function extractHistory(payload: unknown): number[] {
  const values: number[] = [];
  const seen = new Set<unknown>();

  const walk = (node: unknown) => {
    if (node === null || node === undefined) return;
    if (seen.has(node)) return;
    if (typeof node === "number" && Number.isFinite(node)) {
      values.push(node);
      return;
    }
    if (typeof node === "object") {
      seen.add(node);
      if (Array.isArray(node)) {
        for (const item of node) {
          if (typeof item === "number" && Number.isFinite(item)) {
            values.push(item);
          } else if (item && typeof item === "object" && "y" in (item as Record<string, unknown>)) {
            const y = (item as Record<string, unknown>).y;
            if (typeof y === "number" && Number.isFinite(y)) values.push(y);
          } else {
            walk(item);
          }
        }
      } else {
        const obj = node as Record<string, unknown>;
        for (const key of Object.keys(obj)) {
          walk(obj[key]);
        }
      }
    }
  };

  walk(payload);

  return values.filter((v) => Number.isFinite(v) && v > 0);
}

function median(values: number[]) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}
