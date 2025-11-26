import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "tool-usage.json");

export interface ToolUsageEntry {
  id: string;
  tool: string;
  inputs: Record<string, unknown>;
  results: Record<string, unknown>;
  email?: string;
  location?: {
    city?: string;
    region?: string;
    country?: string;
  };
  userAgent?: string;
  timestamp: string;
  savedAnalysis?: boolean;
}

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

async function getEntries(): Promise<ToolUsageEntry[]> {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

async function saveEntries(entries: ToolUsageEntry[]) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tool, inputs, results, email, savedAnalysis } = body;

    if (!tool) {
      return NextResponse.json({ error: "Tool name is required" }, { status: 400 });
    }

    // Get approximate location from headers (works with Vercel/Cloudflare)
    const city = request.headers.get("x-vercel-ip-city") ||
                 request.headers.get("cf-ipcity") || undefined;
    const region = request.headers.get("x-vercel-ip-country-region") ||
                   request.headers.get("cf-region") || undefined;
    const country = request.headers.get("x-vercel-ip-country") ||
                    request.headers.get("cf-ipcountry") || undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const entry: ToolUsageEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      tool,
      inputs: inputs || {},
      results: results || {},
      email: email || undefined,
      location: (city || region || country) ? { city, region, country } : undefined,
      userAgent,
      timestamp: new Date().toISOString(),
      savedAnalysis: savedAnalysis || false,
    };

    const entries = await getEntries();
    entries.unshift(entry); // Add to beginning

    // Keep only last 10,000 entries to prevent file bloat
    const trimmedEntries = entries.slice(0, 10000);
    await saveEntries(trimmedEntries);

    return NextResponse.json({ success: true, id: entry.id });
  } catch (error) {
    console.error("Track tool error:", error);
    return NextResponse.json(
      { error: "Failed to track tool usage" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    // Simple password protection via query param
    const { searchParams } = new URL(request.url);
    const password = searchParams.get("key");

    if (password !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const entries = await getEntries();

    // Optional filters
    const tool = searchParams.get("tool");
    const limit = parseInt(searchParams.get("limit") || "100");
    const emailOnly = searchParams.get("emailOnly") === "true";

    let filtered = entries;

    if (tool) {
      filtered = filtered.filter(e => e.tool === tool);
    }

    if (emailOnly) {
      filtered = filtered.filter(e => e.email);
    }

    return NextResponse.json({
      total: filtered.length,
      entries: filtered.slice(0, limit),
    });
  } catch (error) {
    console.error("Get tool usage error:", error);
    return NextResponse.json(
      { error: "Failed to get tool usage" },
      { status: 500 }
    );
  }
}
