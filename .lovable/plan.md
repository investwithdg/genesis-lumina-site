

## Two Questions, Two Plans

### 1. "Thumbnails on mobile" — Social Share Previews (Open Graph Images)

When you share your site link via text, iMessage, LinkedIn, Slack, etc., the preview "thumbnail" shown is controlled by **Open Graph meta tags** in `index.html`. Right now, your site is using the **default Lovable placeholder image**:

```
og:image → https://lovable.dev/opengraph-image-p98pqg.png
twitter:image → https://lovable.dev/opengraph-image-p98pqg.png
twitter:site → @lovable_dev
```

This means every time someone shares your link, they see a generic Lovable branded card — not Genesis Lumina branding.

**To fix this:**
- Create or upload a branded OG image (recommended: 1200x630px) — could feature your logo, tagline, and brand colors (black/green)
- Update `index.html` meta tags to point to your image (hosted in `/public/` or on your published domain)
- Update `twitter:site` from `@lovable_dev` to your own Twitter/X handle
- Optionally add per-page OG tags using `react-helmet-async` so each page (Compass, Audit, etc.) has its own preview when shared

### 2. Mobile Conversion Friendliness — Current Issues

After reviewing every section on a 390px viewport, here's what needs attention:

**Good already:**
- Hero CTAs stack vertically and are full-width
- Navigation hamburger menu has proper tap targets (44px)
- Waypoint cards stack single-column
- Font sizes are readable

**Issues to fix:**

| Issue | Location | Fix |
|-------|----------|-----|
| **Client logos on About page** show in a cramped 3+1 grid, some logos tiny | About page | Use a 2-column grid on mobile, or a horizontal scroll carousel |
| **Logo carousel on homepage** may scroll too fast to be useful on small screens | Index page | Slow animation on mobile, or show static grid |
| **"Your Path to AI Clarity" journey cards** — the 3-column product grid is too tight on mobile | Index page | Already stacks via `md:grid-cols-3`, but the 2-column entry points grid (`grid-cols-2 md:grid-cols-2`) could stack to single column on small screens |
| **No sticky mobile CTA** — users scroll through a long page with no persistent way to convert | All pages | Add a sticky bottom bar on mobile with primary CTA (e.g., "Begin Diagnostic" or "Book Call") |
| **OG image is Lovable's default** — shared links look unbranded | `index.html` | Replace with branded image |
| **Twitter site tag is @lovable_dev** | `index.html` | Change to your handle |

### Implementation Plan

**File: `index.html`**
- Replace `og:image` and `twitter:image` URLs with a branded image (you'll need to upload one, or I can create a simple branded card using your colors/logo)
- Update `twitter:site` to your handle
- Add `og:url` meta tag pointing to your published domain

**File: `src/pages/Index.tsx`**
- Add a sticky mobile CTA bar that appears after scrolling past the hero
- Make the entry points grid (`AI Readiness Quiz` / `Field Guides`) single column on smallest screens

**File: `src/pages/About.tsx`**
- Improve the client logos grid to be 2-column on mobile with better sizing

**File: `src/components/ClientLogoCarousel.tsx`**
- Reduce logo size and animation speed on mobile

**Optional but high-impact: Per-page OG tags**
- Install `react-helmet-async` and add unique title/description/image per product page so shared links look professional

### What I Need From You

1. **Upload a branded OG image** (1200x630px) — or tell me to generate a simple one using your brand colors, logo text "Genesis Lumina", and tagline
2. **Your Twitter/X handle** to replace `@lovable_dev`
3. **Do you want a sticky mobile CTA bar?** (the floating "Book Call" or "Begin Diagnostic" button that stays at the bottom of the screen on phones)

