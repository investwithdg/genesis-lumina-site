

# Case Studies: Dedicated Page + Site Integration

## Two Case Studies

1. **PST (Preferred Solutions Transport)** — $15K Compass engagement, logistics platform, 72-hour final build, webhook-native architecture
2. **Optimist Business Solutions** — $3,750 engagement, AI-powered intake system, 51% of process steps eliminated, 2 weeks → 1 day

## Plan

### 1. Create a Case Studies index page (`src/pages/CaseStudies.tsx`)

Route: `/case-studies`

Follows the site's dark/light section pattern. Lists both case studies as cards with headline, client name, key metric, and a "Read Case Study" link. Each card links to its detail page.

### 2. Create individual case study pages

- **`src/pages/case-studies/PST.tsx`** — Route: `/case-studies/pst`
  - Hero: "From Manual to Machine."
  - Sections: The Problem, The Build Journey (4 versions), The Solution (tech stack table, 7-stage pipeline), The Complication (scope discipline), Principles Proved
  - Stats bar: $15K engagement, 72-hour final build, 100% collected
  - CTA → Compass page

- **`src/pages/case-studies/Optimist.tsx`** — Route: `/case-studies/optimist`
  - Hero: "From Bottleneck to Breakthrough."
  - Sections: The Problem, The Build, The Solution (before/after table, flow diagram), Principles Proved
  - Stats bar: $3,750 engagement, 51% steps eliminated, 2 weeks → 1 day
  - CTA → Compass page

### 3. Add routes in `App.tsx`

Three new routes: `/case-studies`, `/case-studies/pst`, `/case-studies/optimist`

### 4. Add "Case Studies" to navigation

Add link in `Navigation.tsx` and `Footer.tsx`.

### 5. Highlight case studies where relevant

- **Homepage (`Index.tsx`)**: Add a "Case Studies" section between the social proof quote and the journey visual — two cards side by side with key metrics and links
- **Compass page (`LuminaCompass.tsx`)**: Add a "Results in Practice" section with both case study cards (both are Compass engagements)
- **About page (`About.tsx`)**: Brief mention/link in the credibility section

### Technical Details

- No new dependencies. Uses existing `SectionDark`, `SectionLight`, `Card`, `Button` components
- Follows the page structure pattern: Dark hero → Light problem → Dark solution → Light deliverables → Dark CTA
- 5 new files, 4 edited files

