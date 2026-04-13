

# V3 Offer Architecture Update

The PDF introduces significant pricing changes and a new product reframe (Ignite becomes a platform + intelligence subscription, Compass repriced, S³ repriced). Here's what needs to change across the site.

## Key Changes Summary

| Product | Current Price | V3 Price |
|---------|--------------|----------|
| Compass | $20,000 | $35,000 |
| Ember | shown as readiness tier | $7,500/mo |
| Blaze | shown as optimization tier | $15,000/mo |
| Phoenix | shown as advisory tier | $20,000–$25,000/mo |
| S³ | $50K–$250K | $150K–$500K |

New concepts introduced: **AI Governance Report** (monthly deliverable for all Ignite tiers), **GL Intelligence Dashboard** (proprietary platform), **Defensive Infrastructure Kit** (Compass deliverable).

---

## File Changes

### 1. `src/pages/products/LuminaIgnite.tsx` — Major rewrite

- **Hero**: Change label from "Progression Retainer" to "Intelligence Platform + Advisory"
- **Hero copy**: Update to reflect Ignite is now a proprietary intelligence platform subscription with an expert service layer, not just a consulting retainer
- **Every Ignite tier now includes** (add a shared section before the tier cards):
  - Monthly AI Governance Report
  - GL Intelligence Dashboard access
  - Loom video walkthrough (~10 min)
- **Ember**: Price $7,500/mo. Update includes: Monthly Governance Report (readiness lens), Dashboard access, 10-min Loom, one 60-min call, async Slack/Notion (48hr SLA), readiness score tracking. Commitment: 3-month minimum
- **Blaze**: Price $15,000/mo. Update includes: Monthly Governance Report (optimization lens), Dashboard access, 10-min Loom, one 60-min call, up to two scoped builds/month from report findings, 24hr async SLA. Commitment: 3-month minimum
- **Phoenix**: Price $20,000–$25,000/mo. Update includes: Monthly Governance Report (strategic foresight lens), Dashboard access with S³ readiness score, 10-min Loom, one 90-min strategic session, passive monitoring, quarterly S³ assessment. Commitment: 6-month minimum
- Add pricing to each tier card visually

### 2. `src/pages/products/LuminaCompass.tsx` — Price + deliverable updates

- Change "Starting at $20,000" to "Starting at $35,000"
- Update deliverable list to use the **Defensive Infrastructure Kit** framing:
  - Organizational Intelligence Map (replaces "Operational Systems Map")
  - The Governance Framework (new)
  - The Operating System (replaces "Working System v1")
  - The Institutional Standards Library (replaces current SOPs reference)
  - GL Intelligence Dashboard Baseline (new)
  - 30-Day Continuity Protocol (replaces "30-Day Stability Window")
  - Keep: 3-5 Loom Walkthroughs, 60-90 Min Team Activation Session
- Add section header: "The Defensive Infrastructure Kit"
- Update credit note: $2,500 Assessment credit still applies within 30 days

### 3. `src/pages/waypoints/S3.tsx` — Price update

- Change "$50K – $250K" to "$150K – $500K"
- Update pricing description: base engagement $150,000, full S³ $250K–$500K
- Add mention of the Defensive Infrastructure Kit as primary deliverable

### 4. `src/pages/Index.tsx` — Journey pricing updates

- Compass: "$20,000" → "$35,000"
- S³: "$50K – $250K" → "$150K – $500K"
- Ignite subtitle: add "$7.5K – $25K/mo" pricing indicator

### 5. `src/pages/Diagnostic.tsx` — Minor terminology update

- Change "72-hour performed assessment" to "72-hour Architectural Vulnerability Assessment" to match V3 language
- Update deliverable #2: Gap Map tool reference to "(Miro or Whimsical)"

---

## What stays unchanged

- Tier 0 (Free lead gen) and Tier 1 (Field Guides $47–$297): no changes
- Vulnerability Assessment: $2,500, same deliverables, same structure
- Lumina Labs: same pricing and structure

## Technical details

All changes are copy/pricing updates in existing components. No new components, routes, or dependencies needed. Approximately 5 files edited.

