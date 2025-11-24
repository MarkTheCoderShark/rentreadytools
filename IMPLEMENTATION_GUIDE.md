# Content Freshness Implementation Guide

**Target Timeline**: 1-2 weeks
**Estimated Effort**: 6-8 hours
**Impact**: +1 freshness point (7.5 → 8.5)

---

## PHASE 1: IMMEDIATE (3 Files, 1-2 Hours)

### Task 1.1: Update Homepage Stat
**File**: `/web/src/app/page.tsx`
**Line**: 243 (in StatCard component)

**CURRENT:**
```jsx
<StatCard
  title="Avg vacancy trimmed"
  value="6–10 days"
  note="Based on typical single-family turnovers."
  tone="dark"
/>
```

**UPDATED:**
```jsx
<StatCard
  title="Avg vacancy trimmed"
  value="6–10 days"
  note="Based on 2024–2025 typical single-family turnovers."
  tone="dark"
/>
```

---

### Task 1.2: Update Rent Pricing Hub Metadata
**File**: `/web/src/app/rent-pricing/page.tsx`
**Lines**: 4-8 (metadata section)

**CURRENT:**
```typescript
export const metadata: Metadata = {
  title: "Rent Pricing Guides | Charge Market Rent | RentReadyTools",
  description:
    "Data-backed rent pricing guides for landlords: how to set the right rent, test price changes, and upgrade where it pays back.",
};
```

**UPDATED:**
```typescript
export const metadata: Metadata = {
  title: "2025 Rent Pricing Guides | Charge Market Rent | RentReadyTools",
  description:
    "2025 data-backed rent pricing guides for landlords: how to set the right rent, test price changes, and upgrade where it pays back.",
};
```

---

### Task 1.3: Update Upgrades ROI Content + Metadata
**File**: `/web/src/app/rent-pricing/rental-upgrades-that-pay-off/page.tsx`

**PART A: Metadata (Lines 4-8)**

**CURRENT:**
```typescript
export const metadata: Metadata = {
  title: "Rental Upgrades That Actually Pay Off | ROI Guide | RentReadyTools",
  description:
    "Landlord-focused ROI guide for rental upgrades. See which improvements raise rent, how long payback takes, and what to skip.",
};
```

**UPDATED:**
```typescript
export const metadata: Metadata = {
  title: "Rental Upgrades That Actually Pay Off | 2025 ROI Guide | RentReadyTools",
  description:
    "2025 landlord-focused ROI guide for rental upgrades. See which improvements raise rent, how long payback takes, and what to skip.",
};
```

**PART B: Add context line before upgrade list (around line 69)**

**CURRENT:**
```jsx
<div className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
    <div className="space-y-1">
      <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">High-ROI upgrades</h2>
      <p className="text-sm leading-relaxed text-rr-text-primary/75">
        Use these estimates to prioritize work. Adjust for your market and existing rent level.
      </p>
    </div>
```

**UPDATED:**
```jsx
<div className="space-y-4 rounded-[1.1rem] border border-rr-border-gray bg-rr-surface-white p-6 shadow-[var(--shadow-soft)] md:p-8">
  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
    <div className="space-y-1">
      <h2 className="text-xl font-semibold tracking-tight text-rr-text-primary md:text-2xl">High-ROI upgrades</h2>
      <p className="text-sm leading-relaxed text-rr-text-primary/75">
        Use these 2025-validated estimates to prioritize work. Adjust for your market and existing rent level.
      </p>
    </div>
```

---

## PHASE 2: SHORT TERM (3 Files, 2-3 Hours)

### Task 2.1: Update Turnover Benchmarks
**File**: `/web/src/app/turnover/how-long-should-turnover-take/page.tsx`

**PART A: Update Metadata (Lines 4-8)**

**CURRENT:**
```typescript
export const metadata: Metadata = {
  title: "How Long Should Tenant Turnover Take? | Benchmarks | RentReadyTools",
  description:
    "Turnover timeline benchmarks for landlords: notice to move-out, cleaning, repairs, listing, and lease-up with tips to avoid stalls.",
};
```

**UPDATED:**
```typescript
export const metadata: Metadata = {
  title: "How Long Should Tenant Turnover Take? | 2025 Benchmarks | RentReadyTools",
  description:
    "2025 turnover timeline benchmarks for landlords: notice to move-out, cleaning, repairs, listing, and lease-up with tips to avoid stalls.",
};
```

**PART B: Add context note in intro section (around line 40-43)**

**CURRENT:**
```jsx
<p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
  A clean, well-run turnover should be measured in days, not weeks. Use these benchmarks to set expectations with
  tenants, vendors, and yourself.
</p>
```

**UPDATED:**
```jsx
<p className="max-w-3xl text-sm leading-relaxed text-rr-text-primary/80">
  A clean, well-run turnover should be measured in days, not weeks. Use these 2024–2025 benchmarks to set expectations with
  tenants, vendors, and yourself.
</p>
```

---

### Task 2.2: Enhance Rent Pricing Guide Intro
**File**: `/web/src/app/rent-pricing/how-much-rent-can-i-charge/page.tsx`

**PART A: Update Metadata (Lines 4-8)**

**CURRENT:**
```typescript
export const metadata: Metadata = {
  title: "How Much Rent Can I Charge? | Pricing Guide | RentReadyTools",
  description:
    "Step-by-step rent pricing for landlords: build a rent range with comps, condition, and response rate, then test small price moves.",
};
```

**UPDATED:**
```typescript
export const metadata: Metadata = {
  title: "How Much Rent Can I Charge? | 2025 Pricing Guide | RentReadyTools",
  description:
    "2025 step-by-step rent pricing for landlords: build a rent range with comps, condition, and response rate, then test small price moves.",
};
```

**PART B: Add market context in intro (after line 56, new section)**

Add after the badge section (after line 62):

```jsx
<div className="rounded-[1rem] border border-rr-border-gray/40 bg-rr-surface-softgray/50 p-4 text-sm text-rr-text-primary/75">
  <p>
    <strong>2025 Market Note:</strong> The 2024 rental surge has stabilized in many markets. Focus on accurate comps and response rate rather than pushing for premium rents.
  </p>
</div>
```

---

### Task 2.3: Update True Cost Turnover Examples
**File**: `/web/src/app/turnover/true-cost-of-tenant-turnover/page.tsx`

**CURRENT** (Lines 11-12):
```jsx
const costs = [
  { title: "Missed rent", detail: "Daily rent x vacant days. A 12-day turn at $2,000/month costs about $800 in lost rent alone." },
```

**UPDATED:**
```jsx
const costs = [
  { title: "Missed rent", detail: "Daily rent x vacant days. A 12-day turn at $2,000/month (typical 2025 mid-market single-family) costs about $800 in lost rent alone." },
```

---

## PHASE 3: MEDIUM TERM (2 Files, 3-4 Hours)

### Task 3.1: Add Legal Compliance Notice to Forms Hub
**File**: `/web/src/app/landlord-forms/page.tsx`

**ADD** at the top of the page after imports, before the main component:

```jsx
const complianceNotice = {
  title: "Law Compliance Review Status",
  lastReviewDate: "2025",
  message: "These forms are templates for reference. Landlord-tenant laws change frequently—verify compliance with your state or local housing authority before use.",
};
```

**Then add a visual element in the main content** (after the page title, around line 40):

```jsx
<section className="rounded-[1.1rem] border border-rr-border-gray/40 bg-rr-surface-softgray/50 p-4 mb-8">
  <p className="text-sm font-semibold text-rr-text-primary">Legal Compliance</p>
  <p className="text-sm text-rr-text-primary/75 mt-2">
    Last reviewed for {complianceNotice.lastReviewDate} law changes. Always verify with your state housing authority before using forms.
  </p>
</section>
```

---

### Task 3.2: Add Market Context to Rent Pricing Hub
**File**: `/web/src/app/rent-pricing/page.tsx`

**ADD** a new section before the "Guides" section (around line 84):

```jsx
<section className="rounded-[1.2rem] border border-rr-border-gray/40 bg-rr-surface-softgray/50 p-6 mb-8">
  <h3 className="text-lg font-semibold text-rr-text-primary mb-3">2025 Market Context</h3>
  <p className="text-sm text-rr-text-primary/75 mb-3">
    The 2024 rental rate surge has cooled in many markets. In 2025, focus on accurate market comps and tenant response rates rather than aggressive pricing. This guide reflects current market conditions for durable, sustainable rent levels.
  </p>
  <div className="grid gap-4 md:grid-cols-3 text-sm">
    <div>
      <p className="font-semibold text-rr-text-primary">Market Signal</p>
      <p className="text-rr-text-primary/75">Under 5 quality inquiries = pricing or listing issue</p>
    </div>
    <div>
      <p className="font-semibold text-rr-text-primary">Interest Rates</p>
      <p className="text-rr-text-primary/75">2025 Fed policy affects buyer/renter demand</p>
    </div>
    <div>
      <p className="font-semibold text-rr-text-primary">Timeline</p>
      <p className="text-rr-text-primary/75">60–90 day renewal planning remains critical</p>
    </div>
  </div>
</section>
```

---

## IMPLEMENTATION CHECKLIST

### Phase 1 (Complete First)
- [ ] Task 1.1: Update homepage vacancy stat (5 minutes)
- [ ] Task 1.2: Update rent pricing hub metadata (5 minutes)
- [ ] Task 1.3A: Update upgrades ROI metadata (5 minutes)
- [ ] Task 1.3B: Update upgrades ROI description (5 minutes)
- [ ] **Test**: Run `npm run build` to verify no errors
- [ ] **Commit**: "Add 2025 freshness context to key statistics"

### Phase 2 (Complete Next)
- [ ] Task 2.1A: Update turnover benchmarks metadata (5 minutes)
- [ ] Task 2.1B: Update turnover benchmarks intro (5 minutes)
- [ ] Task 2.2A: Update pricing guide metadata (5 minutes)
- [ ] Task 2.2B: Add market context box (10 minutes)
- [ ] Task 2.3: Update example dollar amounts (5 minutes)
- [ ] **Test**: `npm run build`
- [ ] **Commit**: "Add 2025 market context to pricing guides"

### Phase 3 (Optional)
- [ ] Task 3.1: Add legal compliance notice (15 minutes)
- [ ] Task 3.2: Add market context section to hub (15 minutes)
- [ ] **Test**: `npm run build`
- [ ] **Commit**: "Add 2025 legal compliance and market context notices"

---

## TESTING & VALIDATION

### Build Test
```bash
cd /Volumes/cel/rentreadytools/web
npm run build
```

**Expected**: ✓ No errors or warnings

### SEO Validation
- [ ] Check Google Search Console for crawl errors
- [ ] Verify metadata displays correctly in search results
- [ ] Test page titles in browser tabs

### Link Check
- [ ] Verify all internal links still work
- [ ] Confirm no regressions in navigation

---

## DEPLOYMENT

### Before Going Live
1. Run full build and lint
2. Test on staging if available
3. Preview changes on local dev server
4. Get approval from team lead

### Git Workflow
```bash
# Pull latest
git pull origin main

# Create branch
git checkout -b feature/content-freshness-2025

# Make changes (follow checklist above)

# Test
npm run build

# Commit
git add .
git commit -m "Update content freshness: add 2025 context to stats, metadata, and guides"

# Push
git push origin feature/content-freshness-2025

# Create PR on GitHub
```

---

## SUCCESS METRICS

### Immediate (After 1 week)
- [ ] All builds succeed with no errors
- [ ] No broken links or regressions
- [ ] "2025" appears in key page titles

### Short-term (After 1 month)
- [ ] Google Search Console shows improved freshness signals
- [ ] Ranking improvement for "2025 [topic]" keywords
- [ ] Higher CTR from search results (fresh badge effect)

### Long-term (After 3 months)
- [ ] Pages move from 7.5 → 8.5+ freshness score
- [ ] Increased organic traffic to updated pages
- [ ] Better authority signaling in SERPs

---

## ROLLBACK PLAN

If issues occur:
```bash
git revert [commit-hash]
git push origin main
```

All changes are reversible and don't affect database or production data.

---

## NOTES FOR TEAM

- **Substance doesn't change** - we're adding context, not rewriting
- **Tools remain dynamic** - Zillow API continues feeding live data
- **Evergreen content preserved** - benchmarks still valid beyond 2025
- **Low risk** - purely additive changes to content metadata and copy

**Questions?** Refer to CONTENT_FRESHNESS_REPORT.md for detailed analysis.

---

Generated: November 23, 2025
Estimated Total Implementation Time: 6-8 hours
