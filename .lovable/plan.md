

## Site-Wide Offer Alignment Plan

### The Gap Analysis

After comparing your Operations Manual (GL) with the current site, here are the critical misalignments:

**Current Site Structure:**
- 3 Product Pages: Labs, Compass, Ignite
- 3 Field Guides: Analog, Harvest, Audit
- 1 Diagnostic Page (currently links to Google Calendar, not a paid offering)
- 3 Waypoint Pages: AI Literacy, System Integration, S3

**Your Actual Offer Stack (from GL):**
| Tier | Offer | Price | Current Site Status |
|------|-------|-------|---------------------|
| 0 | Free Quiz + Lead Magnet | Free | Quiz exists but not connected to lead magnet |
| 1 | Field Guides (Analog, Harvest, Audit) | $47-$297 | Exists but pricing is wrong on Audit ($297, not $97) |
| 2 | AI Readiness Audit | $1,500 | Diagnostic page exists but positions as free calendar link |
| 3 | Lumina Labs (Workshops) | $1,500-$3,000 | Exists - pricing matches |
| 4 | Lumina Compass | $15,000 | Exists - pricing matches |
| 5 | Lumina Ignite | $3K-$7.5K/mo | Exists but shows $3K-$8K (should be $3K-$7.5K) |
| 6 | S3 (Scale/Sale/Succession) | $50K-$250K | S3 page shows this but needs better positioning |

---

### Critical Issues to Fix

**1. Diagnostic Page Confusion**
- Current: Links to Google Calendar for a "free" call
- GL Reality: The AI Readiness Audit is a $1,500 paid service
- Fix: Transform Diagnostic into the $1,500 offer with clear deliverables OR create a separate page

**2. Missing "Audit by Lumina" Pricing**
- Current: Audit field guide shows generic placeholder
- GL Reality: Audit by Lumina is $297 (self-serve diagnostic)
- Fix: Update price to $297 and clarify it's a self-serve quiz, not the $1,500 performed audit

**3. Ignite Tier Structure Missing**
- Current: Shows generic "$3K-$8K/mo"
- GL Reality: Three distinct tiers:
  - Standard: $3,000/mo (15 hours)
  - Plus: $5,000/mo (25 hours)
  - Phoenix: $7,500/mo or $20,000/quarter
- Fix: Add tier comparison table

**4. Lead Magnet Not Present**
- Current: Newsletter signup only
- GL Reality: "Custom Instructions Framework" PDF as lead magnet
- Fix: Either create placeholder or reference it

**5. Hourly Rate Not Shown**
- Your project rules mention "hourly" as one of four offers
- GL mentions "Spark" indirectly through hourly billing context
- Current site has no hourly option visible
- Fix: Either add hourly consulting option or confirm it's intentionally hidden

---

### Phased Implementation Plan

#### Phase 1: Core Offer Corrections (Highest Impact)

**1.1 Fix Diagnostic Page Positioning**
File: `src/pages/Diagnostic.tsx`
- Change from "free call" to $1,500 paid service
- Add clear deliverables list (matches GL exactly):
  - Readiness Scorecard (PDF)
  - Gap Map (Visual)
  - 30/60/90-Day Action Plan
  - Loom Walkthrough (20-30 min)
  - Next Steps Recommendation
- Add 72-hour turnaround promise
- Add "Credit toward Compass/S3" upsell: "$1,500 rolls forward if you proceed within 30 days"
- Remove or replace Google Calendar link with Stripe checkout or intake form

**1.2 Fix Ignite Pricing Structure**
File: `src/pages/products/LuminaIgnite.tsx`
- Replace generic "$3K-$8K/mo" with tier table:

| Tier | Price | Hours | Best For |
|------|-------|-------|----------|
| Standard | $3,000/mo | 15 hrs | Post-Compass tune-ups |
| Plus | $5,000/mo | 25 hrs | Active scaling |
| Phoenix | $7,500/mo | Engagement-based | Strategic partners |

- Add "3-month minimum commitment" for each tier
- Clarify hour banking (unused hours roll 60 days)

**1.3 Fix Audit Field Guide Pricing**
File: `src/pages/guides/Audit.tsx`
- Update price from placeholder to $297
- Clarify difference from $1,500 performed audit:
  - Self-serve: Automated scoring, no interpretation
  - Performed: Expert analysis, custom gap map, Loom walkthrough
- Add "Want expert analysis? Book the $1,500 Audit" upsell

---

#### Phase 2: Add Missing Deliverables Clarity

**2.1 Compass Deliverables (What Exactly They Get)**
File: `src/pages/products/LuminaCompass.tsx`
Add explicit deliverables section matching GL:
- Systems Map (Miro board)
- Working System v1 (functional, not prototype)
- Notion "Clarity Portal" with SOPs
- 3-5 Loom Walkthroughs
- 60-90 min Team Training Session
- 30-Day Post-Launch Support

**2.2 Labs Deliverables**
File: `src/pages/products/LuminaLabs.tsx`
Add explicit breakdown:
- Pre-workshop intake survey
- 2-3 hour live workshop
- Slide deck provided afterward
- Hands-on exercises
- Follow-up resources

Pricing table:
| Format | Participants | Price |
|--------|-------------|-------|
| Virtual | Up to 15 | $1,500 |
| Virtual | 16-30 | $2,000 |
| In-person | Up to 30 | $3,000 + travel |

**2.3 S3 Deliverables**
File: `src/pages/waypoints/S3.tsx`
Add explicit deliverables matching GL:
- Complete Systems Documentation Suite
- Leadership Dashboard(s)
- Branded SOP Library
- Data Room Prep (for sale/investment)
- Succession Architecture
- Cultural + Leadership Continuity Design
- 60 days post-launch support

---

#### Phase 3: Customer Journey Clarity

**3.1 Update Homepage Journey Visual**
File: `src/pages/Index.tsx`
Replace generic "Orientation, Literacy, Integration, Scale" with actual offer progression:

```text
Free Quiz/Lead Magnet
       |
Field Guides ($47-$297)
       |
AI Readiness Audit ($1,500)
       |
   [BRANCH]
  /   |   \
Labs  Compass  S3
($1.5-3K) ($15K) ($50-250K)
       |
    Ignite ($3K-$7.5K/mo)
```

**3.2 Add Routing Logic Hints**
On Diagnostic/Audit result pages or in copy, hint at the routing:
- Score 0-40: Route to Labs or Field Guides
- Score 41-70: Route to Compass
- Score 71+: Route to S3 conversation

---

#### Phase 4: Navigation and Offer Hierarchy

**4.1 Update Navigation Structure**
File: `src/components/Navigation.tsx`
Reorganize to reflect offer stack:
- Solutions dropdown:
  - Start Here: AI Readiness Audit ($1,500)
  - Lumina Labs ($1.5K-$3K)
  - Lumina Compass ($15K)
  - Lumina Ignite ($3K-$7.5K/mo)
  - S3 Transformation ($50K+)
- Resources dropdown:
  - Field Guides (Analog, Harvest, Audit)
  - Free Quiz
  - Newsletter
  - FAQ

---

### Files to Modify

| File | Phase | Changes |
|------|-------|---------|
| `src/pages/Diagnostic.tsx` | 1 | Fix positioning as $1,500 paid service, add deliverables |
| `src/pages/products/LuminaIgnite.tsx` | 1 | Add tier table with correct pricing |
| `src/pages/guides/Audit.tsx` | 1 | Update to $297, clarify vs. performed audit |
| `src/pages/products/LuminaCompass.tsx` | 2 | Add explicit deliverables from GL |
| `src/pages/products/LuminaLabs.tsx` | 2 | Add pricing table and deliverables |
| `src/pages/waypoints/S3.tsx` | 2 | Add deliverables from GL |
| `src/pages/Index.tsx` | 3 | Update journey visual to show offer stack |
| `src/components/Navigation.tsx` | 4 | Reorganize to reflect offer hierarchy |

---

### What Visitors Will Understand After Implementation

After each page visit, visitors will know:

| Page | What They Learn |
|------|-----------------|
| Homepage | The journey from free to $250K, entry points at each level |
| Diagnostic | Exactly what $1,500 buys: scorecard, gap map, action plan, video walkthrough |
| Labs | $1,500-$3K for 2-3 hour workshop, pricing by team size and format |
| Compass | $15K for 4-week sprint, exactly what's built and delivered |
| Ignite | $3K-$7.5K/mo with three tiers, hour allotments, and what's included |
| S3 | $50K-$250K for 6-8 week transformation, all 6 deliverable categories |
| Audit Guide | $297 self-serve vs. $1,500 performed audit |

---

### Technical Notes

- All pricing will be pulled from the GL document exactly
- Stripe links will need to be updated/added for each tier
- Consider adding a pricing comparison page that shows all offers in one view
- Each product page will have explicit "What's Included" and "What's NOT Included" sections

