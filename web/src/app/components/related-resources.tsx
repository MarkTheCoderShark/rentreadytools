import Link from "next/link";

export interface RelatedResource {
  label: string;
  href: string;
  icon?: "calculator" | "guide" | "checklist" | "chart" | "tool";
}

export interface RelatedResourcesProps {
  resources: RelatedResource[];
}

function getIconSVG(iconType?: string) {
  switch (iconType) {
    case "calculator":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm2 2h6v4H9V4zm0 6h6v2H9v-2zm0 4h4v2H9v-2z" />
        </svg>
      );
    case "guide":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm3 1h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
        </svg>
      );
    case "checklist":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
      );
    case "chart":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z" />
        </svg>
      );
    case "tool":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M9 10a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm-6 4a4 4 0 008 0H9z" />
        </svg>
      );
    default:
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
  }
}

export default function RelatedResources({ resources }: RelatedResourcesProps) {
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-rr-text-primary md:text-xl">Related resources</h2>
        <p className="text-sm leading-relaxed text-rr-text-primary/75">
          Continue your learning with these related guides and tools.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-auto">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="flex items-center gap-3 rounded-[0.95rem] border border-rr-border-gray/60 bg-rr-surface-offwhite/40 px-4 py-3 transition hover:border-rr-accent-darkteal hover:bg-rr-surface-offwhite hover:shadow-sm"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rr-accent-darkteal/10 text-rr-accent-darkteal flex-shrink-0">
              {getIconSVG(resource.icon)}
            </div>
            <span className="text-sm font-medium text-rr-text-primary hover:text-rr-accent-darkteal">
              {resource.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
