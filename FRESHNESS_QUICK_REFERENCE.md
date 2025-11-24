# Content Freshness - Quick Reference Guide

**Last Review**: November 23, 2025
**Overall Score**: 7.5/10 (Good with clear improvement opportunities)

---

## WHAT'S HEALTHY

✅ **No outdated information** (nothing from 2022 or earlier)
✅ **Live data integration** (Zillow API for rent estimates)
✅ **Modern tech stack** (Next.js 16, React 19, Tailwind CSS 4)
✅ **All links functional** (no 404s, no broken references)
✅ **No stale hardcoded dates** in tool logic
✅ **Recent commits** (active development within 2 days)

---

## WHAT NEEDS UPDATING

### Immediate (This Week) - 1-2 Hours
1. **Add "2025" context to 3 key stats**:
   - Homepage: "6-10 days (2024-2025 benchmark)"
   - Pricing guide: "45-55% expense ratio (validated 2025)"
   - Upgrades: "ROI based on 2025 market data"

2. **Update 2 metadata titles** to include "2025":
   - "Rent Pricing Guides | **2025** Charge Market Rent"
   - "Turnover Timeline Benchmarks | **2025** Landlord Guide"

### Short Term (This Month) - 4-6 Hours
3. **Add market context** to rent pricing pages:
   - Brief paragraph on current rental market conditions
   - Link to 2025 market reports (NAR, Zillow, Census data)

4. **Add legal freshness** to forms hub:
   - "Last reviewed for law compliance: 2025"
   - Disclaimer about checking state-specific requirements

### Nice to Have (Next Quarter) - 8-10 Hours
5. **Create "2025 Landlord Trends" mini-hub**:
   - Seasonal Q4/Q1 pricing windows
   - Remote work impact on rent demand
   - Interest rate & market normalization context

6. **Expand FAQs** with 2025 questions:
   - "Should I raise rent in 2025?"
   - "Are 2024 rents still sustainable in 2025?"

---

## CONTENT THAT NEEDS "AS OF 2025" LABELS

| Content | Location | Priority |
|---------|----------|----------|
| "6-10 days vacancy reduction" | `/page.tsx:243` | HIGH |
| "45-55% expense ratio" | `/rent-pricing/how-much-rent-can-i-charge/page.tsx:42` | HIGH |
| Upgrade ROI ranges | `/rental-upgrades-that-pay-off/page.tsx:10-41` | HIGH |
| Turnover benchmarks | `/turnover/how-long-should-turnover-take/page.tsx:10-15` | HIGH |
| "$2,000/month" example | `/true-cost-of-tenant-turnover/page.tsx:11` | MEDIUM |
| Landlord laws/forms | `/landlord-forms/page.tsx` | MEDIUM |

---

## MISSING CONTENT CLUSTERS

| Topic | Impact | Effort |
|-------|--------|--------|
| "2025 Rental Market Context" | High (SEO + Trust) | 3-4 hours |
| "Seasonal Turnover Planning" | Medium (UX) | 2 hours |
| "2025 Legal Updates & Changes" | High (Risk) | 4 hours |
| "Remote Work & Rent Demand" | Medium (Relevance) | 2 hours |
| "Technology ROI (Smart Home)" | Low (Niche) | 3 hours |

---

## FILES TO UPDATE (In Order)

### Tier 1 (Do First)
- [ ] `/web/src/app/page.tsx` - Add "2025" to vacancy stat (line 243)
- [ ] `/web/src/app/rent-pricing/page.tsx` - Update metadata title with "2025"
- [ ] `/web/src/app/rent-pricing/rental-upgrades-that-pay-off/page.tsx` - Add "as of 2025" context

### Tier 2 (Do Second)
- [ ] `/web/src/app/turnover/how-long-should-turnover-take/page.tsx` - Add year context to benchmarks
- [ ] `/web/src/app/rent-pricing/how-much-rent-can-i-charge/page.tsx` - Add 2025 market note
- [ ] `/web/src/app/property-management/page.tsx` - Update service descriptions with 2025 context

### Tier 3 (Do Later)
- [ ] `/web/src/app/turnover/true-cost-of-tenant-turnover/page.tsx` - Add regional price ranges
- [ ] `/web/src/app/landlord-forms/page.tsx` - Add legal compliance dates
- [ ] Create new: `/web/src/app/landlord-trends/page.tsx` (optional seasonal hub)

---

## BEFORE & AFTER EXAMPLES

### Example 1: Homepage Stat
**BEFORE:**
```
"Avg vacancy trimmed: 6–10 days"
```

**AFTER:**
```
"Avg vacancy trimmed: 6–10 days (2024–2025 typical single-family turnovers)"
```

---

### Example 2: Meta Title
**BEFORE:**
```
title: "Rent Pricing Guides | Charge Market Rent | RentReadyTools"
```

**AFTER:**
```
title: "Rent Pricing Guides | 2025 Charge Market Rent | RentReadyTools"
```

---

### Example 3: Upgrade ROI
**BEFORE:**
```
"In-unit laundry: $60–$120/mo lift, 8–18 month payback"
```

**AFTER:**
```
"In-unit laundry: $60–$120/mo lift (2025 validation), 8–18 month payback"
```

---

## CONTENT DECAY RISK ASSESSMENT

| Element | Risk Level | Lifespan | Action |
|---------|-----------|----------|--------|
| Pricing benchmarks | Medium | 12 months | Review Q4 2025 |
| Legal content | High | 6 months | Check quarterly |
| Turnover timelines | Low | 24+ months | Annual review |
| Tool formulas | Low | 36+ months | Check with upgrades |
| ROI data | Medium | 12 months | Annual validation |

---

## QUICK WIN CHECKLIST (1-2 hours)

- [ ] Add "(2024-2025)" to three key statistics
- [ ] Update 2 page titles with "2025" keyword
- [ ] Add market context line to rent pricing hub
- [ ] Add "Last reviewed 2025" to forms pages
- [ ] Link to one external 2025 market report

---

## MONITORING RECOMMENDATIONS

### Monthly
- Check Zillow API integration status
- Monitor for new landlord law changes in target states

### Quarterly
- Review pricing benchmark accuracy
- Audit for any stale external links
- Check SEO rankings for "2025" content

### Annually
- Full content audit (refresh in Nov 2026)
- Update all year-dependent statistics
- Validate upgrade ROI ranges

---

## SUCCESS METRICS

**After implementing HIGH priority updates, you should see:**
- Improved freshness signals in Google Search Console
- Better ranking for "2025 [topic]" keyword variations
- Increased CTR from SERPs (fresh badges boost clicks)
- Higher engagement on recently updated pages

**Target**: Move from 7.5/10 to 8.5/10 within 30 days

---

## NOTES

- Content is intentionally **timeless** (good for evergreen SEO) - don't force "2024" references everywhere
- Focus on **adding context**, not replacing substance
- Tools are **dynamically fresh** (live APIs) - prioritize static content updates
- Forms hub has **legal compliance risk** - this is highest priority for brand safety

---

Generated: November 23, 2025
