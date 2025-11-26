"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface ToolUsageEntry {
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

interface Analytics {
  total: number;
  entries: ToolUsageEntry[];
}

const TOOL_NAMES: Record<string, string> = {
  "rent-estimate-calculator": "Rent Calculator",
  "vacancy-rate-calculator": "Vacancy Calculator",
  "cap-rate-calculator": "Cap Rate Calculator",
  "renovation-roi": "Renovation ROI",
  "move-in-checklist": "Move-In Checklist",
};

export default function AnalyticsDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterTool, setFilterTool] = useState("");
  const [filterEmailOnly, setFilterEmailOnly] = useState(false);

  const adminKey = searchParams.get("key") || "";

  useEffect(() => {
    if (adminKey) {
      setIsAuthenticated(true);
      fetchData(adminKey);
    }
  }, [adminKey]);

  const fetchData = async (key: string) => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ key, limit: "500" });
      if (filterTool) params.set("tool", filterTool);
      if (filterEmailOnly) params.set("emailOnly", "true");

      const response = await fetch(`/api/track-tool?${params}`);
      if (!response.ok) {
        if (response.status === 401) {
          setIsAuthenticated(false);
          setError("Invalid admin key");
          return;
        }
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch {
      setError("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/admin/analytics?key=${encodeURIComponent(password)}`);
  };

  const handleFilter = () => {
    if (adminKey) {
      fetchData(adminKey);
    }
  };

  // Stats calculations
  const stats = data
    ? {
        totalUsage: data.total,
        emailCaptures: data.entries.filter((e) => e.email).length,
        captureRate: data.total > 0
          ? ((data.entries.filter((e) => e.email).length / data.total) * 100).toFixed(1)
          : "0",
        byTool: Object.entries(
          data.entries.reduce((acc, e) => {
            acc[e.tool] = (acc[e.tool] || 0) + 1;
            return acc;
          }, {} as Record<string, number>)
        ).sort((a, b) => b[1] - a[1]),
        todayUsage: data.entries.filter((e) => {
          const today = new Date().toDateString();
          return new Date(e.timestamp).toDateString() === today;
        }).length,
        thisWeek: data.entries.filter((e) => {
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          return new Date(e.timestamp) > weekAgo;
        }).length,
      }
    : null;

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-rr-surface-offwhite p-4">
        <div className="w-full max-w-sm rounded-2xl border border-rr-border-gray bg-rr-surface-white p-8 shadow-lg">
          <h1 className="text-xl font-semibold text-rr-text-primary">Admin Analytics</h1>
          <p className="mt-1 text-sm text-rr-text-primary/70">Enter your admin key to continue</p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin key"
              className="w-full rounded-lg border border-rr-border-gray px-4 py-2.5 text-sm focus:border-rr-accent-darkteal focus:outline-none"
            />
            {error && <p className="text-sm text-rr-status-alert">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-rr-accent-darkteal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rr-accent-darkteal/90"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-rr-surface-offwhite p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-rr-text-primary">Tool Analytics Dashboard</h1>
          <p className="text-sm text-rr-text-primary/70">Track tool usage and lead captures</p>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-rr-accent-darkteal border-t-transparent" />
          </div>
        ) : stats ? (
          <>
            {/* Stats Grid */}
            <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard label="Total Tool Usage" value={stats.totalUsage.toLocaleString()} />
              <StatCard label="Email Captures" value={stats.emailCaptures.toLocaleString()} highlight />
              <StatCard label="Capture Rate" value={`${stats.captureRate}%`} />
              <StatCard label="Today / This Week" value={`${stats.todayUsage} / ${stats.thisWeek}`} />
            </div>

            {/* Usage by Tool */}
            <div className="mb-8 rounded-xl border border-rr-border-gray bg-rr-surface-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-rr-text-primary">Usage by Tool</h2>
              <div className="space-y-3">
                {stats.byTool.map(([tool, count]) => (
                  <div key={tool} className="flex items-center gap-4">
                    <span className="w-40 text-sm font-medium text-rr-text-primary">
                      {TOOL_NAMES[tool] || tool}
                    </span>
                    <div className="flex-1">
                      <div className="h-6 rounded-full bg-rr-surface-offwhite">
                        <div
                          className="h-6 rounded-full bg-rr-accent-darkteal/20"
                          style={{
                            width: `${Math.max(5, (count / stats.totalUsage) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                    <span className="w-16 text-right text-sm font-semibold text-rr-text-primary">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <select
                value={filterTool}
                onChange={(e) => setFilterTool(e.target.value)}
                className="rounded-lg border border-rr-border-gray px-3 py-2 text-sm focus:border-rr-accent-darkteal focus:outline-none"
              >
                <option value="">All tools</option>
                {Object.entries(TOOL_NAMES).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <label className="flex items-center gap-2 text-sm text-rr-text-primary">
                <input
                  type="checkbox"
                  checked={filterEmailOnly}
                  onChange={(e) => setFilterEmailOnly(e.target.checked)}
                  className="rounded border-rr-border-gray"
                />
                Email captures only
              </label>
              <button
                onClick={handleFilter}
                className="rounded-lg bg-rr-accent-darkteal px-4 py-2 text-sm font-semibold text-white"
              >
                Apply Filters
              </button>
            </div>

            {/* Recent Activity Table */}
            <div className="overflow-hidden rounded-xl border border-rr-border-gray bg-rr-surface-white">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-rr-surface-offwhite">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Time</th>
                      <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Tool</th>
                      <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Email</th>
                      <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Location</th>
                      <th className="px-4 py-3 text-left font-semibold text-rr-text-primary">Key Inputs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rr-border-gray">
                    {(data?.entries ?? []).slice(0, 100).map((entry) => (
                      <tr key={entry.id} className={entry.email ? "bg-rr-accent-gold/5" : ""}>
                        <td className="whitespace-nowrap px-4 py-3 text-rr-text-primary/70">
                          {new Date(entry.timestamp).toLocaleString()}
                        </td>
                        <td className="px-4 py-3 font-medium text-rr-text-primary">
                          {TOOL_NAMES[entry.tool] || entry.tool}
                        </td>
                        <td className="px-4 py-3">
                          {entry.email ? (
                            <span className="inline-flex items-center gap-1 text-rr-accent-darkteal">
                              <span className="h-2 w-2 rounded-full bg-rr-status-success" />
                              {entry.email}
                            </span>
                          ) : (
                            <span className="text-rr-text-primary/40">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-rr-text-primary/70">
                          {entry.location
                            ? [entry.location.city, entry.location.region, entry.location.country]
                                .filter(Boolean)
                                .join(", ")
                            : "—"}
                        </td>
                        <td className="max-w-xs truncate px-4 py-3 text-rr-text-primary/70">
                          {Object.entries(entry.inputs)
                            .slice(0, 3)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-rr-text-primary/70">No data available</p>
        )}
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-rr-accent-darkteal/30 bg-rr-accent-darkteal/5"
          : "border-rr-border-gray bg-rr-surface-white"
      }`}
    >
      <p className="text-sm text-rr-text-primary/70">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${highlight ? "text-rr-accent-darkteal" : "text-rr-text-primary"}`}>
        {value}
      </p>
    </div>
  );
}
