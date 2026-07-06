# Full Site Remap — Business Performance Engineering (BPE)

The uploaded Doctrine, Lexicon, and offer-stack screenshots are the source of truth. Every page, nav item, and CTA gets rewritten to speak one language: **engines, engine health, performance engineering, PEAR, PEAR Tree**.

## 1. New Canonical Language (applied site-wide)

- **Business** = coordinated network of repeatable engines.
- **Engine** = repeatable mechanism transforming inputs → valuable outputs.
- **Engine Families**: Growth, Operations, Intelligence, People, Financial, Customer, Product, Leadership.
- **Engine Health** (5 dims): Reliability, Efficiency, Measurability, Transferability, Adaptability.
- **BPE** = Business Performance Engineering.
- **PEAR** = Performance Engineering Analysis & Roadmap (the free 30-min call — replaces "Assessment / AVA / Diagnostic").
- **PEAR Tree** = the living map of engine architecture, health scores, and roadmap that drives Ignite.
- **Laws 1–4** used as anchor copy (Potential → Value; scalable via engines; weakest critical engine constrains; every business runs on engines).

Retired terms: "Architectural Vulnerability Assessment", "AVA", "Waypoints", "AI Literacy / System Integration / S³ waypoints", "Spark", "diagnostic".

## 2. New Offer Stack (replaces current tiering)

```text
ENTRY
  PEAR           Free · 30 min       Performance Engineering Analysis & Roadmap
  Field Guides   $47 – $297          Self-serve BPE literacy

ENGAGEMENTS
  Lumina Labs    $7.5K – $15K        For Teams · Workshop (engine literacy + governance)
  Lumina Compass Starting $35K       4-week engine engagement — modes: Build / Optimize / Supercharge

ONGOING
  Lumina Ignite  $7.5K – $25K/mo     Ember → Blaze → Phoenix, driven by the PEAR Tree

TRANSFORMATION
  S³             $150K – $500K       Scale · Sale · Succession
```

## 3. Information Architecture

New nav:

```text
Approach            → /approach            (BPE doctrine, Laws, Engine Families, Engine Health)
Engines             → /engines             (Engine Library overview + families)
Offers              → dropdown
   PEAR (free call) → /pear
   Field Guides     → /field-guides
   Lumina Labs      → /labs
   Lumina Compass   → /compass
   Lumina Ignite    → /ignite
   S³ Transformation→ /s3
Case Studies        → /case-studies        (reframed as Engine Installations)
About               → /about
Resources           → Newsletter, FAQ
CTA (nav):          Book PEAR (free)
```

Redirects (keep old URLs alive):
`/diagnostic`, `/waypoints/*`, `/products/lumina-*` → new equivalents.

## 4. Page-by-Page Remap

### Home (`src/pages/Index.tsx`)

- Hero: "Every business runs on engines. We engineer the ones that determine performance." Primary CTA: **Book your PEAR call (free)**. Secondary: Explore the doctrine.
- Section 2 — The Reality: Laws 1–4 as four cards.
- Section 3 — The Engines: 8 Engine Family tiles.
- Section 4 — Engine Health: 5-dimension bar (Reliability / Efficiency / Measurability / Transferability / Adaptability).
- Section 5 — The Offer Stack: the 4-tier ladder with the PEAR Tree banner beneath.
- Section 6 — Proof: Case study cards reframed as engine installations.
- Section 7 — Founder/About teaser.
- Section 8 — Newsletter + PEAR CTA.

### /approach (new — replaces Waypoints spine)

Doctrine page. Sections: Reality → Principles → Architecture → Laws → What BPE is → Human role vs AI (force multiplier). Long-form, dark/light alternating.

### /engines (new — Engine Library)

Grid of 8 Engine Families (Growth, Operations, Intelligence, People, Financial, Customer, Product, Leadership) with 1-liner + example engines from lexicon (Opportunity Discovery, Sales, Hiring, Knowledge, Client Delivery, Referral, Decision Support). Each family opens a section describing typical engines, health signals, and which offer installs them. Public catalog framing, no per-engine sub-pages yet.

### /pear (replaces /diagnostic)

- Hero: "PEAR — Performance Engineering Analysis & Roadmap. Free · 30 min."
- What it is: live diagnostic call, identify critical engines, assess health across 5 dimensions, map highest-leverage constraint.
- Outcome bullets: Engine health snapshot + prioritized constraint map + recommended next step.
- Single CTA: Google Calendar link (existing `calendar.app.google/XXdQMZcNjYjnACuz5`). No form.

### /field-guides (new hub) + existing guide pages

Hub lists Field Guides as "the doctrine in your hands — engine families, health criteria, force multiplier principles." Keep Analog/Audit/Harvest guides, rewrite intros to BPE language and price band $47–$297.

### /labs (rename from Lumina Labs product page)

- Positioning: For Teams · Workshop. "Your leadership team learns to see, diagnose, and govern their business engines. Not AI training — engine performance literacy."
- Outcome: team-wide engine literacy + governance framework + first engine diagnosis completed in-room.
- Price: $7.5K – $15K.

### /compass (rename from Lumina Compass)

- Positioning: For Business · The Sprint. 4-week engine engagement.
- Three modes as tabs/cards:
  - **Build** — you don't have the engine.
  - **Optimize** — you have one that needs to perform better.
  - **Supercharge** — strong engine, needs tuning + red-line testing.
- Outcome: engineered business capability — built, optimized, or supercharged — that your team owns, governs, and extends.
- Price: Starting at $35,000. PEAR credit ($0 since PEAR is free — remove old $2,500 credit language).

### /ignite (rename from Lumina Ignite)

- Positioning: Ongoing engine development partner.
- Tiers **Ember → Blaze → Phoenix** ($7.5K / $15K / $25K per month — confirm exact split during build).
- Introduce **PEAR Tree**: "your engine health home base — the living map of engine architecture, health scores, and engineering roadmap." Visual: tree diagram with families as branches, health dots as leaves.
- Outcome: continuous engine development + measurable performance gains + institutional intelligence that compounds monthly.

### /s3

- Positioning: The culmination of BPE. Three connected results — **Scale · Sale · Succession**.
- Copy: engineer your business to scale without you, become acquirable on your terms, transfer institutional intelligence to next-gen leadership.
- Outcome: a business that performs independently of its founder — scalable, sellable, succession-ready.
- Price band: $150K – $500K.

### /case-studies + /case-studies/pst + /case-studies/optimist

Reframe as **Engine Installations**. For each: which Engine Family, which engines installed, which health dimensions moved, which offer delivered it (Compass), and what Ignite would continue. Remove any residual pricing anchors <$35K. Keep the V3 architecture framing already in PST.

### /about

Reposition Donovan as **Business Performance Engineer**. Founder Intelligence framing from lexicon. Keep existing stats/social proof.

### /faq

Rewrite Q&A around new offers, PEAR, engine language. Remove AVA/$2,500 credit references. Update pricing to match new stack.

### /newsletter

Copy tune to "Weekly notes on Business Performance Engineering." Keep Substack link.

### Retired / redirected pages

- `/diagnostic` → 301 to `/pear` (in-app redirect).
- `/waypoints/ai-literacy`, `/waypoints/system-integration`, `/waypoints/s3` → redirect to `/engines` (first two) and `/s3`.
- `/products/lumina-compass|ignite|labs` → redirect to `/compass`, `/ignite`, `/labs`.
- Quiz page: keep, but re-map outcomes to Engine Families + recommend PEAR call as the terminal CTA.

## 5. Shared Components to Update

- **Navigation.tsx** — new nav structure + "Book PEAR" CTA.
- **Footer.tsx** — new link set (Approach, Engines, PEAR, Labs, Compass, Ignite, S³, Case Studies, About, Newsletter, FAQ).
- **MobileStickyBar.tsx** — primary CTA becomes "Book PEAR (free)"; secondary "Explore Engines".
- **BookCallButton.tsx** — default label "Book PEAR (free)".
- **NewsletterCTA.tsx** — copy tweak only.
- **WaypointDiagram.tsx** — repurpose as **PEAR Tree diagram** (engine families as branches).
- New component: **OfferStackLadder** (renders the four-tier stack + PEAR thread banner) — used on Home and each offer page as cross-sell.
- New component: **EngineHealthBar** (5 dimensions).
- New component: **LawsGrid** (Laws 1–4).

## 6. SEO / Metadata

Per-page `<title>`, `<meta description>`, OG title/description rewritten around BPE vocabulary. Home title example: "Genesis Lumina — Business Performance Engineering". Keep index.html defaults app-specific.

## 7. Memory Updates (after approval)

- Rewrite `mem://index.md` Core: replace S³/AVA/Waypoint terminology rules with BPE, PEAR, Engine Families, PEAR Tree.
- Add memories: `mem://doctrine/lexicon`, `mem://offers/stack-v2`, `mem://offers/pear-thread`.
- Retire: visual-direction rules unchanged; offer-stack-and-pricing rewritten; quiz-conversion-flow rewritten.

## 8. Technical Details

- Stack unchanged: React 18 + Vite + Tailwind + shadcn.
- Add routes in `src/App.tsx` for `/approach`, `/engines`, `/pear`, `/field-guides`, `/labs`, `/compass`, `/ignite`, `/s3`. Add `<Navigate>` redirects for legacy paths.
- Preserve `src/index.css` design tokens (Deep Green primary, Bright Blue secondary). No hardcoded colors.
- No backend needed — this is copy + IA + component work.

## 9. Build Order

1. Doctrine + Lexicon adopted in shared components (Nav, Footer, MobileStickyBar, BookCallButton).
2. New shared components (OfferStackLadder, EngineHealthBar, LawsGrid, PEAR Tree diagram).
3. New pages: `/approach`, `/engines`, `/pear`, `/field-guides`, `/labs`, `/compass`, `/ignite`, `/s3`.
4. Legacy routes → redirects.
5. Home rewrite consuming new components.
6. Case Studies, About, FAQ, Newsletter, Quiz rewrites.
7. SEO/meta pass.
8. Memory update.

## Open Items to Confirm Before Build

1. **Ignite tier prices**: Ember / Blaze / Phoenix exact monthly split (screenshot shows $7.5K–$25K/mo band only).
2. **Field Guides**: keep the three existing (Analog / Audit / Harvest) reframed, or introduce new guides matched to Engine Families?
3. **Quiz**: keep and remap to Engine Families, or retire entirely in favor of PEAR?