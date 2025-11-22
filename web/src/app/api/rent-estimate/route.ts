import { NextResponse } from "next/server";

type Body = {
  address?: string;
};

type GraphPoint = { x?: number; y?: number };

type ZillowGraphResponse = {
  DataPoints?: {
    Current_Rent_Zestimate?: number;
    homeValueChartData?: { points?: GraphPoint[] }[];
  };
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

    const data: ZillowGraphResponse = await response.json();
    const { history, current } = extractHistory(data);

    if (!history.length && !current) {
      return NextResponse.json({ compsCount: 0 });
    }

    const medianRent = current ?? median(history);

    return NextResponse.json({
      compsCount: history.length || (current ? 1 : 0),
      medianRent,
      medianRentPerSqft: 0,
      address,
      currentRentZestimate: current,
    });
  } catch (error) {
    console.error("Zillow rent estimate error", error);
    return NextResponse.json({ error: "Unexpected error fetching Zillow data." }, { status: 500 });
  }
}

function extractHistory(payload: ZillowGraphResponse) {
  const history: number[] = [];
  const current = payload?.DataPoints?.Current_Rent_Zestimate;
  const series = payload?.DataPoints?.homeValueChartData;
  if (Array.isArray(series)) {
    for (const item of series) {
      if (Array.isArray(item?.points)) {
        for (const point of item.points) {
          if (typeof point?.y === "number" && Number.isFinite(point.y) && point.y > 0) {
            history.push(point.y);
          }
        }
      }
    }
  }
  return { history, current: typeof current === "number" ? current : undefined };
}

function median(values: number[]) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}
