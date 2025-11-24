# Related Resources Component - Usage Guide

## Quick Reference

### Component Location
```
/web/src/app/components/related-resources.tsx
```

### Import Statement
```typescript
import RelatedResources from "@/app/components/related-resources";
```

## Usage Pattern

All 7 guide pages follow this pattern:

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import RelatedResources from "@/app/components/related-resources";

export const metadata: Metadata = {
  // ... metadata config
};

export default function MyGuidePage() {
  // Define related resources
  const relatedResources = [
    { label: "Resource Title 1", href: "/path/to/resource", icon: "guide" as const },
    { label: "Resource Title 2", href: "/path/to/resource", icon: "calculator" as const },
    { label: "Resource Title 3", href: "/path/to/resource", icon: "chart" as const },
  ];

  return (
    <main className="relative mx-auto max-w-5xl space-y-12 px-4 py-10">
      {/* Page header */}
      <header>{/* ... */}</header>

      {/* Main content sections */}
      <section>{/* ... */}</section>

      {/* Related Resources at bottom */}
      <RelatedResources resources={relatedResources} />
    </main>
  );
}
```

## Icon Types & Usage

| Icon | Type | Best For |
|------|------|----------|
| Calculator | `"calculator"` | Financial tools, calculators, cost estimators |
| Guide | `"guide"` | Educational content, guides, tutorials |
| Checklist | `"checklist"` | Checklists, forms, task lists |
| Chart | `"chart"` | Data, analytics, comparisons |
| Tool | `"tool"` | Interactive tools, utilities |
| Default | `undefined` | Generic links |

## Current Implementation Map

### Rent Pricing Cluster

#### How Much Rent Can I Charge
```
→ Rent Estimate Calculator (calculator)
→ Run Rent Comps Guide (guide)
→ Rental Upgrades Guide (chart)
```

#### How to Run Rent Comps
```
→ Rent Estimate Calculator (calculator)
→ How Much Rent Guide (guide)
→ Rental Upgrades Guide (chart)
```

#### Rental Upgrades That Pay Off
```
→ Renovation ROI Calculator (calculator)
→ How Much Rent Guide (guide)
→ Turnover Cost Guide (chart)
```

### Turnover Cluster

#### Turnover Guide (Main Hub)
```
→ Turnover Timeline Guide (guide)
→ Cleaning Checklist (checklist)
→ True Cost Guide (chart)
→ Move-in Checklist Tool (tool)
```

#### How Long Should Turnover Take
```
→ Vacancy Calculator (calculator)
→ Turnover Guide (guide)
→ True Cost Guide (chart)
```

#### Move-Out Cleaning Checklist
```
→ Move-in Checklist (checklist)
→ Turnover Guide (guide)
→ Turnover Timeline (chart)
```

#### True Cost of Tenant Turnover
```
→ Vacancy Calculator (calculator)
→ Turnover Timeline (chart)
→ Turnover Guide (guide)
```

## Component Features Explained

### Responsive Grid Layout
```
Mobile (< sm):    1 column
Tablet (sm):      2 columns
Desktop (lg):     auto (2-4 columns based on space)
```

### Visual Styling
- **Section**: Rounded white card with subtle shadow
- **Links**: Horizontal cards with icon + text
- **Icons**: Small teal badges with 4x4 SVG icons
- **Hover**: Border color darkens, background lightens, shadow increases

### Typography
- **Section Title**: Text-lg font-semibold (md:text-xl on desktop)
- **Subtitle**: Text-sm secondary color
- **Link Text**: Text-sm font-medium

## Data Structure Reference

```typescript
interface RelatedResource {
  label: string;              // Display text for the link
  href: string;               // Next.js route path
  icon?: IconType;            // Optional icon identifier
}

type IconType = "calculator" | "guide" | "checklist" | "chart" | "tool";
```

## Design System Colors Used

```
Primary Text:       rr-text-primary
Secondary Text:     rr-text-primary/75 or rr-text-primary/80
Background:         rr-surface-white
Hover State:        rr-accent-darkteal
Icon Background:    rr-accent-darkteal/10
Border:             rr-border-gray
Border Hover:       rr-border-gray/60
```

## Tailwind Classes Structure

### Section Container
```
rounded-[1.1rem]
border border-rr-border-gray
bg-rr-surface-white
p-6 md:p-8
shadow-[var(--shadow-soft)]
space-y-4
```

### Link Cards
```
flex items-center gap-3
rounded-[0.95rem]
border border-rr-border-gray/60
bg-rr-surface-offwhite/40
px-4 py-3
transition
hover:border-rr-accent-darkteal
hover:bg-rr-surface-offwhite
hover:shadow-sm
```

### Icons
```
h-8 w-8
flex items-center justify-center
rounded-lg
bg-rr-accent-darkteal/10
text-rr-accent-darkteal
flex-shrink-0
```

## Implementation Checklist

When adding Related Resources to a new page:

- [ ] Import component: `import RelatedResources from "@/app/components/related-resources";`
- [ ] Define `relatedResources` array in component
- [ ] Choose appropriate icons for each link
- [ ] Verify links point to correct routes
- [ ] Place component before closing main tag
- [ ] Test responsive layout on mobile/tablet/desktop
- [ ] Verify hover states work smoothly
- [ ] Check link text is clear and descriptive
- [ ] Ensure context relevance (links should relate to page topic)

## Performance Notes

- Component renders nothing if resources array is empty
- All icons are inline SVGs (no external requests)
- Uses Next.js Link for optimal routing
- CSS transitions for smooth hover effects
- Grid layout uses Tailwind responsive utilities (no custom breakpoints)

## Accessibility Considerations

- Links use semantic `<a>` tags via Next.js Link
- Icon text is accessible through link label
- Color contrast meets WCAG standards
- Hover/focus states are visually distinct
- Grid layout is keyboard navigable

## Future Customization Options

If extending the component, consider:

1. **Customizable Colors**: Props for section and link styling
2. **Variable Grid Columns**: Props to control responsive breakpoints
3. **Icon Sizing**: Props to adjust icon dimensions
4. **Section Title**: Props to customize section heading
5. **Maximum Items**: Props to limit displayed links
6. **Click Tracking**: Analytics integration for link clicks
7. **Descriptions**: Optional descriptions for each resource
8. **Icons in Links**: Option to show icon on right side instead

## Browser Compatibility

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- Requires CSS Grid support (all modern browsers)
- Tailwind CSS for styling (processed at build time)

## Common Issues & Solutions

### Links Not Appearing
- Check `relatedResources` array is not empty
- Verify each item has `label` and `href` properties
- Ensure import statement is correct

### Icons Not Showing
- Verify icon type is one of: calculator, guide, checklist, chart, tool
- Check SVG rendering (inspect element to see SVG content)
- Ensure Tailwind CSS is processing file

### Layout Issues on Mobile
- Component uses responsive grid (automatically adjusts)
- Test with actual mobile device or DevTools device emulation
- Check parent container has sufficient width

### Styling Doesn't Match Site
- Verify color variables are defined in Tailwind config
- Check shadow variable exists: `--shadow-soft`
- Ensure Tailwind CSS is build and applied
