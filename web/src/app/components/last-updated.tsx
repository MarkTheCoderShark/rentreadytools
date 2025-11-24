export function LastUpdated({ date = "January 2025" }: { date?: string }) {
  return (
    <p className="text-xs text-rr-text-primary/60">
      Last Updated: {date}
    </p>
  );
}
