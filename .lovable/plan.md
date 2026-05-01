## Goal

Reposition the PST  and Optimist Business Solution case studies (and aligned surfaces) from a "$15K project" or "$x project" anchor into "Compass-grade infrastructure" or "Ignite level integration." Strip price references, upgrade language from "project/app" to "infrastructure/architecture," and add Compass/Ignite bridge framing. Also sweep the site for V3 architecture consistency.

---

## 1. Rewrite `src/pages/case-studies/PST.tsx` (primary surgery)

**Hero section**

- Keep "From Manual to Machine."
- Subhead rewrite (no time/sprint anchor): "A logistics operator received a webhook-native, multi-stage operational system — architected, deployed, and transferred into team ownership."
- Add a prominent reanchor line directly below the subhead:
  > *"This system reflects the type of infrastructure typically delivered through Genesis Lumina's Compass engagements."*

**Stats Bar — replace pricing/time with magnitude**
Replace the three stats (`$15,000`, `72 Hours`, `100% Collected`) with:

- `7-Stage` — Automated Pipeline
- `Webhook-Native` — Real-Time Architecture
- `100%` — Team Ownership Transfer

**The Problem** — keep, minor edit: replace "off-the-shelf TMS" project framing with infrastructure language ("they needed an operational layer that fit their architecture, not a tool that forced them into someone else's").

**The Build Journey** — keep the four-version arc but rename V4 from "72-Hour Final Build" to "Production Deployment & Ownership Transfer," and remove the "72-hour" phrase from its description.

**The Solution** — keep 7-stage pipeline + tech stack. No changes (HubSpot/Google Drive already applied).

**NEW section: Scope of Work** (between Solution and Complication, LIGHT)
Header: "Scope of Work Included"
Bulleted infrastructure inventory:

- Multi-stage operational system architecture
- CRM and pipeline infrastructure (HubSpot)
- Webhook orchestration layer (Make)
- Automated dispatch-to-invoice flow
- Documentation and SOP environment (Google Drive)
- Team activation and ownership transfer (Loom walkthroughs)

**NEW section: Execution Context** (replaces or augments "The Complication," DARK)
Header: "Execution Context"

> "This system was delivered inside a live logistics operation with multi-party coordination, active dispatching, and zero downtime tolerance. Scope discipline — knowing what to build now and what to defer — was the architecture decision."
> Keep the "scope discipline is a feature, not a limitation" line.

**Principles Proved** — keep, swap "Ownership transfer is the product — PST runs this system without us" wording stays (already aligned).

**NEW: Silent Compass/Ignite bridge** (just above the CTA)
A single italic line in muted treatment:

> *"Engagements of this nature are typically structured as Compass builds, followed by ongoing optimization through Ignite."*

**NEW: Forward-looking close** (lead-in to CTA)

> "The resulting system provides a foundation for continued optimization, expansion, and monetization — not a one-time build."

**CTA** — keep, but change "Explore Compass" framing copy to: "Compass builds the infrastructure your team owns and extends."

**Global find/replace inside PST.tsx**

- "built, tested, and deployed in a 72-hour final sprint" → remove time anchor
- "$15,000" / "$15K" → removed entirely
- "developed a solution" / "built an app" / "completed a project" → "architected," "installed," "designed" variants
- "project" (when describing the engagement) → "engagement" or "infrastructure build"

---

## 2. `src/pages/CaseStudies.tsx` — index page

PST card:

- Description: remove "$15K Compass engagement" phrasing → "A Compass-grade engagement that installed a webhook-native, 7-stage operational system in a live logistics environment."
- Stats: replace `$15K / 72 hrs / 100%` with `7-Stage / Webhook-Native / Team-Owned`

Optimist card:

- Description: remove "$3,750 engagement" → "An infrastructure rebuild that compressed a 2-week manual intake into a 1-day AI-routed system."
- Stats: replace `$3,750` with `AI-Routed` (keep `51%` and `2wk → 1d`)

---

## 3. `src/pages/Index.tsx` (Proof of Principle section, ~line 187)

PST card:

- Remove `$15K` stat → replace with `7-Stage Pipeline`
- Update one-line description to drop price implication, use "infrastructure" framing

Optimist card:

- Remove `$3,750` stat → replace with `AI-Routed Intake`
- Same language sweep

---

## 4. `src/pages/products/LuminaCompass.tsx` (Results in Practice, ~line 185–196)

- PST line: "$15K engagement · 72-hour final build · 7-stage automated pipeline" → **"Webhook-native operational system · 7-stage automated pipeline · team-owned infrastructure"**
- Optimist line: "$3,750 engagement · 51% steps eliminated · 2 weeks → 1 day" → **"AI-routed intake architecture · 51% steps eliminated · 2 weeks → 1 day"**

---

## 5. `src/pages/About.tsx`

Line 122 already references infrastructure correctly. No edit needed beyond confirmation.

---

## 6. V3 architecture consistency sweep

Quick verification pass (read-only confirmation, edit only if drift found):

- `Diagnostic.tsx` — confirm "Architectural Vulnerability Assessment" naming, $2,500 price, credit toward Compass/S³
- `LuminaIgnite.tsx` — confirm Ember $7,500 / Blaze $15,000 / Phoenix $20K–$25K tiers and Intelligence Platform framing
- `LuminaCompass.tsx` — confirm $35,000 + Defensive Infrastructure Kit deliverables
- `S3.tsx` — confirm $150K–$500K range
- `SystemIntegration.tsx` line 176 ("Starting at $15K") — **flag for rewrite**: this is stale Compass pricing language. Update to "Starting at $35K" to match V3 Compass pricing, or reframe as "Compass-grade infrastructure" with no number.
- `FAQ.tsx` — scan for any remaining `$15K` Compass references and update to $35K

---

## Files edited (estimated)

1. `src/pages/case-studies/PST.tsx` — major rewrite
2. `src/pages/CaseStudies.tsx` — card descriptions + stats
3. `src/pages/Index.tsx` — Proof of Principle stats + copy
4. `src/pages/products/LuminaCompass.tsx` — Results in Practice copy
5. `src/pages/waypoints/SystemIntegration.tsx` — fix stale $15K Compass price
6. `src/pages/FAQ.tsx` — sweep for stale pricing (only if found)

No price numbers will remain on the PST case study page or the case study index card. Compass page and pricing pages keep the official $35K (per V3 memory).