# RelatedResources Component - Code Reference

## Complete Component Code

### File: `/web/src/app/components/related-resources.tsx`

```typescript
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
```

## Integration Pattern (Used in All 7 Pages)

### Import
```typescript
import RelatedResources from "@/app/components/related-resources";
```

### Data Definition
```typescript
export default function PageComponent() {
  const relatedResources = [
    { label: "Resource 1 Title", href: "/path/to/resource-1", icon: "guide" as const },
    { label: "Resource 2 Title", href: "/path/to/resource-2", icon: "calculator" as const },
    { label: "Resource 3 Title", href: "/path/to/resource-3", icon: "chart" as const },
  ];

  return (
    <main>
      {/* Page content here */}
      <RelatedResources resources={relatedResources} />
    </main>
  );
}
```

## Actual Page Examples

### Example 1: How Much Rent Can I Charge

```typescript
const relatedResources = [
  { label: "Rent Estimate Calculator", href: "/tools/rent-estimate-calculator", icon: "calculator" as const },
  { label: "Run Rent Comps Guide", href: "/rent-pricing/how-to-run-rent-comps", icon: "guide" as const },
  { label: "Rental Upgrades Guide", href: "/rent-pricing/rental-upgrades-that-pay-off", icon: "chart" as const },
];
```

### Example 2: Turnover Guide (4 Resources)

```typescript
const relatedResources = [
  { label: "Turnover Timeline Guide", href: "/turnover/how-long-should-turnover-take", icon: "guide" as const },
  { label: "Cleaning Checklist", href: "/turnover/move-out-cleaning-checklist", icon: "checklist" as const },
  { label: "True Cost Guide", href: "/turnover/true-cost-of-tenant-turnover", icon: "chart" as const },
  { label: "Move-in Checklist Tool", href: "/landlord-forms/move-in-checklist", icon: "tool" as const },
];
```

## Component Behavior

### Empty State
```typescript
if (!resources || resources.length === 0) {
  return null;  // Component renders nothing
}
```

### Icon Type Mapping
```
"calculator" → SVG with grid/table icon
"guide"      → SVG with document/book icon
"checklist"  → SVG with checkmark icon
"chart"      → SVG with bar chart icon
"tool"       → SVG with smiley/tool icon
undefined    → SVG with link icon (default)
```

## Tailwind CSS Classes Breakdown

### Section Container
```
space-y-4           - Vertical spacing between children
rounded-[1.1rem]    - Rounded corners (custom value)
border              - 1px border
border-rr-border-gray - Border color from design system
bg-rr-surface-white - White background
p-6 md:p-8          - Padding (6 on mobile, 8 on desktop)
shadow-[var(--shadow-soft)] - Subtle shadow
```

### Grid Container
```
grid                - CSS Grid layout
gap-3               - 12px gap between items
sm:grid-cols-2      - 2 columns on tablet+
lg:grid-cols-auto   - Auto-fit columns on desktop
```

### Link Cards
```
flex                - Flexbox
items-center        - Vertical center alignment
gap-3               - Space between icon and text
rounded-[0.95rem]   - Slightly rounded
border              - 1px border
border-rr-border-gray/60 - Semi-transparent border
bg-rr-surface-offwhite/40 - Light background
px-4 py-3           - Padding (16px horizontal, 12px vertical)
transition          - Smooth transitions for hover
hover:border-rr-accent-darkteal - Border color on hover
hover:bg-rr-surface-offwhite - Opaque background on hover
hover:shadow-sm     - Subtle shadow on hover
```

### Icon Container
```
flex                - Flexbox
h-8 w-8             - 32x32px square
items-center justify-center - Center icon
rounded-lg          - Rounded corners
bg-rr-accent-darkteal/10 - Light teal background
text-rr-accent-darkteal - Teal text color
flex-shrink-0       - Don't shrink on smaller screens
```

### Icon SVG
```
h-4 w-4             - 16x16px
fill="currentColor" - Inherit text color
viewBox="0 0 24 24" - Standard SVG viewbox
```

## Type Definitions

```typescript
// Resource object structure
{
  label: string;        // Display text (required)
  href: string;         // URL path (required)
  icon?: IconType;      // Icon identifier (optional)
}

// Icon type options
type IconType = "calculator" | "guide" | "checklist" | "chart" | "tool";

// Component props
{
  resources: RelatedResource[];  // Array of resources to display
}
```

## Design System Variables Used

```
Colors:
  rr-text-primary      - Primary text color
  rr-text-primary/75   - Secondary text (75% opacity)
  rr-text-primary/80   - Tertiary text (80% opacity)
  rr-surface-white     - White background
  rr-surface-offwhite  - Off-white background
  rr-surface-offwhite/40 - Off-white with 40% opacity
  rr-accent-darkteal   - Primary accent color
  rr-accent-darkteal/10 - Accent with 10% opacity
  rr-border-gray       - Border color
  rr-border-gray/60    - Border color with 60% opacity

Shadows:
  --shadow-soft        - CSS variable for subtle shadow

Spacing:
  gap-3                - 12px
  gap-4                - 16px
  p-6                  - 24px
  p-8                  - 32px
  px-4                 - 16px horizontal
  py-3                 - 12px vertical

Border Radius:
  rounded-[1.1rem]     - 17.6px (sections)
  rounded-[0.95rem]    - 15.2px (cards)
  rounded-lg           - 8px (icon containers)
```

## Responsive Breakpoints

```
Mobile (< 640px):
  - Single column layout
  - grid-cols-1 (implicit default)
  - Full width cards

Tablet (640px - 1024px):
  - Two column layout
  - sm:grid-cols-2
  - Larger padding (p-8)

Desktop (1024px+):
  - Auto-fit layout
  - lg:grid-cols-auto
  - Multiple columns based on space
```

## Performance Considerations

- No external dependencies
- Inline SVG icons (no image requests)
- CSS Grid for optimal layout performance
- Minimal DOM elements
- No state management required
- Next.js Link for prefetching

## Accessibility Features

- Semantic HTML (section, link elements)
- Proper heading hierarchy (h2)
- Text contrast meets WCAG standards
- Keyboard navigable (uses Next.js Link)
- Icon labels through adjacent text
- No empty links (always has text label)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

## CSS Grid Specifics

```
Container: display: grid
Column definition: grid-template-columns
  - Default: auto-flow (browser determines)
  - sm: minmax(0, 1fr) minmax(0, 1fr)
  - lg: repeat(auto-fit, minmax(200px, 1fr))
Gap: 12px (gap-3)
```

## Styling Customization Points

To modify styling, edit classes in component:
1. Section container classes (top section)
2. Grid container classes
3. Link card classes
4. Icon container classes
5. Text/heading classes
