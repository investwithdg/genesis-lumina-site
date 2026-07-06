## Visual Identity Refresh — "Precision at Speed"

Refresh the site's visual language to feel like **high-performance engineering** (F1 telemetry, wind-tunnel data, machined precision) with **collage-like geometric moments** (Matisse cut-outs, Basquiat energy) — expressed through our brand palette, not literal imagery. Dark is the dominant tone; light sections become rare, deliberate breaks.

### Aesthetic direction

**Mood:** Dark, engineered, kinetic. Motion-blur where warranted, stillness where it matters. Nothing decorative — every shape earns its place.

**Palette rebalance (tokens only, no hardcoded colors):**
- Base: near-black `#0a0a0a` (deeper than current `#000`) — the "track surface"
- Surface layer: charcoal `#141414` for elevated cards/sections
- Primary: Deep Green `#1c7051` (existing) — used sparingly as accent, not fill
- Secondary: Bright Blue `#243aff` (existing) — reserved for motion/kinetic accents
- New tertiary: warm off-white `#f5f0e6` (cream) for occasional light-section breaks
- New signal color: ember/red-orange `#e85d3a` used *once per page max* as an attention marker (like an F1 brake light) — inspired by the racing energy without being literal

**Typography:**
- Keep Inter for body
- Add a display face with engineered feel: **Space Grotesk** (mono-adjacent, technical) for H1/H2 to replace the current thin Inter display treatment
- Introduce a mono accent (JetBrains Mono) for telemetry-style labels, metrics, section indices ("01 / 08", "ENGINE FAMILY", coordinates)

### Structural moves

**1. Section pattern → dark-dominant**
Current pattern alternates dark/light evenly. Shift to: **dark base with occasional light "reveal" bands** (cream, not pure white). Roughly 75% dark / 25% light per page. Light sections become moments of clarity, not the default.

**2. Collage-geometric composition**
Replace floating circles/squares in `SectionDark` with **hard-edged geometric blocks** — asymmetric color fields (green/blue/cream/ember rectangles and triangles) positioned like Matisse cut-outs. Static, not drifting. Layered behind or beside content with intentional negative space. No drop shadows, no blur orbs.

**3. Motion language**
- Kinetic horizontal streak transitions between sections (motion-blur line, single color, 400ms)
- Numeric counters and metric labels use a fast tick-up animation on scroll-into-view
- Retire the current slow "drift" and "float" keyframes on ambient shapes — they feel wellness-y, not engineered
- Framer-motion for entrance staggers on grids (Engine Families, Laws, Health dimensions)

**4. Typographic scale**
- Bigger, tighter display type (`text-6xl` → `text-7xl/8xl` on hero, tracking tighter)
- Mono labels above every H2: `01 — ENGINE ARCHITECTURE`
- Metric callouts in mono: `Δ 34%`, `05 / 05`, `t=00:30`

### Component-level updates

- **`SectionDark`**: swap particle/orb effects for static geometric collage panels; add optional `withCollage` prop with 3–4 preset compositions
- **`SectionLight`**: rework `muted` variant to use cream (`--cream`) instead of gray secondary
- **`LawsGrid`, `EngineHealthBar`, `EngineFamiliesGrid`**: dark-first styling, mono index labels, hard borders, hover state that reveals a colored edge (green/blue/ember)
- **`Navigation`**: darker on scroll, mono nav labels, thin ember underline on active route
- **`Footer`**: default to darkest tier, mono microcopy
- **`OfferStackLadder`**: each rung gets a distinct brand-color edge (Field Guides=cream, Labs=green, Compass=blue, Ignite=ember, S³=green+blue split)
- **Buttons**: primary button becomes solid green with tighter radius (currently rounded, move to `rounded-md`); ghost button gets mono label treatment

### Token & config work

- Extend `index.css` root tokens: add `--surface`, `--ember`, adjust `--background` and `--foreground` for the new near-black base, refine `--cream` usage
- Add Space Grotesk + JetBrains Mono via `<link>` in `index.html`
- Extend `tailwind.config.ts` `fontFamily` with `display` (Space Grotesk) and `mono` (JetBrains Mono)
- New keyframes: `streak` (horizontal motion line), `tick` (metric counter), retire `float`/`drift` usage sitewide
- New utility classes: `.label-mono`, `.metric`, `.collage-panel`

### Rollout order

1. Tokens + fonts + tailwind config (foundation)
2. `SectionDark` / `SectionLight` / `Navigation` / `Footer` (chrome)
3. Shared BPE components (`LawsGrid`, `EngineHealthBar`, `EngineFamiliesGrid`, `OfferStackLadder`)
4. Homepage hero + section rhythm
5. Sweep remaining pages (`/approach`, `/engines`, `/pear`, `/labs`, `/compass`, `/ignite`, `/s3`, case studies)
6. QA in preview at mobile + desktop

### Explicitly out of scope

- No literal F1 imagery, no race car photos, no track graphics
- No paint-splatter or graffiti textures (Basquiat is a *composition* reference, not a texture reference)
- No content or copy rewrites — visuals only
- No routing / IA changes

### Confirm before I build

1. Sound good to add the **ember signal color** (`#e85d3a`) as a third accent, or keep strictly to green + blue?
2. OK to introduce **Space Grotesk + JetBrains Mono** as display + mono, keeping Inter for body?
3. Preference on light-section frequency: **rare (25%)** as proposed, or **very rare (10%, only PEAR + About)**?
