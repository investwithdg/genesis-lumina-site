## Visual Refresh v3 — "The Supercar as Mascot"

The **supercar silhouette** becomes the site's mascot and primary visual motif — a recurring symbol of performance, ingenuity, and bespoke engineering. Telemetry, schematics, and motion-blur remain, but as **supporting vocabulary** around the hero motif, not equals to it.

### Direction

**The supercar is the anchor.** Not literal race cars, not branded manufacturers — stylized, editorial supercar silhouettes: side-profile line-art, three-quarter views, aerodynamic curves rendered with the same engineering-drawing feel as the rest of the system. Monochrome, brand-color accented, always dark-first.

**Visual hierarchy of motifs:**
1. **Primary — Supercar silhouettes & motion:** the recurring mascot. Appears on every major page.
2. **Secondary — Telemetry HUD, motion-blur streaks:** wrap and support the supercar.
3. **Tertiary — Engine schematics, gauges, data ribbons:** used on BPE components and inner sections.
4. **Retired:** the Matisse geometric collage panels.

### The supercar library

Generated as a small set of assets — reused across the site so the mascot feels consistent, not random.

1. **Hero silhouette (side profile)** — long, low, aerodynamic. Line-art, thin white/cream strokes on `#0a0a0a`, brand-green underglow beneath the chassis. Sits behind homepage hero copy at ~0.35 opacity.
2. **Three-quarter front silhouette** — used on `/approach` and `/pear`. Ember signal at the headlight to echo the brake-light accent.
3. **Rear/exhaust silhouette with motion streaks** — used on `/ignite` and case studies. Bright-blue streak trails.
4. **Isolated silhouette badge** — a tight, small silhouette used as a mascot mark in the footer, 404 page, and mobile sticky bar.
5. **Chassis wireframe** — top-down technical drawing showing the "engines inside" — used on `/engines` as the composition anchor, with the 8 Engine Family cards positioned like components inside a chassis diagram.
6. **Motion sequence** — one hero-only animation: silhouette entering from left with a heavy motion-blur trail, settling into position. Framer-motion, plays once on load, respects `prefers-reduced-motion`.

Assets generated as **SVG where possible** (crisp, tokenized, brand-colorable) plus **one or two generated PNGs** for the hero silhouette if SVG can't carry the aerodynamic detail. Bespoke, not stock.

### Motif pairing per page

Every page pairs the supercar with a supporting motif:

| Page | Supercar treatment | Support motif |
|---|---|---|
| `/` | Side silhouette + motion sequence | Telemetry HUD, heavy streaks |
| `/approach` | Three-quarter, static | Contour/topo behind Laws |
| `/engines` | Chassis wireframe as grid backdrop | Engine schematics per family |
| `/pear` | Three-quarter, front-facing | Gauge cluster, data ribbon |
| `/labs` | Side silhouette, mid-corner | Schematic cross-section |
| `/compass` | Silhouette with directional streaks | Instrument dial |
| `/ignite` | Rear + exhaust streaks | Ignition/spark schematic per tier |
| `/s3` | Side silhouette, longest streak treatment | Drivetrain schematic |
| `/field-guides` | Small silhouette in header | Blueprint grid |
| `/case-studies/*` | Rear silhouette + telemetry ribbon of case metrics | — |
| `/about`, `/faq` | Small mascot badge only | Minimal ribbon |
| `/404` | Silhouette in headlights-off state | — |

### Component-level changes

- **`SectionDark`** — `motif` prop expands: `"supercar-side" | "supercar-front" | "supercar-rear" | "chassis" | "telemetry" | "schematic" | "streaks" | "none"`. Supercar variants compose silhouette SVG + streak layer + optional HUD.
- **`Navigation`** — small supercar mascot mark replaces or joins the wordmark on dark pages.
- **`Footer`** — mascot silhouette as a subtle backdrop element.
- **`Homepage hero`** — full motion sequence (silhouette + streaks + telemetry) replaces the current collage.
- **`EngineFamiliesGrid`** — sits inside a top-down chassis wireframe on `/engines`; on the homepage stays as-is with schematic hover.
- **`LawsGrid`**, **`EngineHealthBar`**, **`OfferStackLadder`** — unchanged from v2 plan (schematic corners, gauges, tier glyphs).
- **`MobileStickyBar`** — small mascot mark on the left edge.

### Contrast & readability pass (unchanged from v2)

- All motif SVGs live in `.motif-layer`, max opacity 0.35 for silhouettes, 0.18 for line-art detail, 0.55+ dark overlay behind text.
- New `.on-motif` utility forces text to `/75` minimum over imagery.
- Audit and raise all `text-white/40–/55` over motif backgrounds to `/70+`.
- WCAG AA verified on desktop and mobile via headless screenshots.

### Rollout

1. Generate supercar SVG library (5 silhouette variants + chassis wireframe) + 1 hero PNG if needed
2. Refactor `SectionDark` to new `motif` API with supercar variants
3. Contrast utility + global sweep of low-opacity text
4. Homepage hero motion sequence
5. Update `Navigation`, `Footer`, `MobileStickyBar` with mascot mark
6. Update BPE components with supporting schematics/gauges
7. Sweep every page per the pairing table
8. Verify contrast + motion at desktop + mobile

### Explicitly out of scope

- No manufacturer logos, no branded cars, no real license plates
- No literal race tracks, drivers, or motorsport imagery
- No content/copy changes
- No routing/IA changes

### Confirm before build

1. **Silhouette style:** editorial line-art (thin strokes, engineering-drawing feel, matches telemetry motifs) or filled/dramatic silhouette (heavier, poster-like, more graphic)?
2. **Hero motion:** one-shot entrance on page load, or looping ambient motion (silhouette drifting through streaks continuously)?
3. **Mascot mark placement:** add to nav + footer + mobile sticky as proposed, or keep the mascot to page backgrounds only and leave chrome text-only?
