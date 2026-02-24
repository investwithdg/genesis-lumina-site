

## Color Scheme Update + Mobile Optimization

### Color Palette from Your Image

| Swatch | Hex | Usage |
|--------|-----|-------|
| Light gray | `#ededed` | Muted backgrounds, alternate sections |
| Warm cream | `#f2eddb` | Secondary backgrounds, subtle warmth |
| Deep green | `#1c7051` | Primary accent, CTAs, links, active states |
| Black | `#000000` | Dark sections, hero backgrounds, text |
| Bright blue | `#243aff` | Secondary accent, hover states, highlights |

### Part 1: Apply Color Scheme

**File: `tailwind.config.ts`**
- Change `primary.DEFAULT` from `#000000` to `#1c7051` (green becomes the main action color)
- Change `primary.foreground` stays `#ffffff`
- Change `background` from `#ffffff` to `#ededed` or keep white and use `#ededed` for muted sections
- Add `accent` color: `#243aff` (blue)
- Add `cream` color: `#f2eddb`
- Keep `foreground` as `#000000` (black for text/dark sections)

**File: `src/index.css`**
- Update CSS variables to match the new palette
- Update waypoint glow colors to use green/blue from the palette instead of indigo/cyan

**File: `src/components/ui/button.tsx`**
- Default button becomes green (`#1c7051`) with white text
- Outline variant uses green border
- This cascades to all CTAs site-wide automatically

**File: `src/components/SectionDark.tsx`**
- Keep black background (already `#000000` via foreground)

**File: `src/components/SectionLight.tsx`**
- Default: white background
- Muted variant: use `#ededed` (light gray) or `#f2eddb` (cream) for alternating sections

**File: `src/components/Navigation.tsx`**
- Active link color becomes green
- "Start Diagnostic" button becomes green
- Mobile menu active states use green

**File: `src/components/Footer.tsx`**
- Links and button accents use green

**File: `src/pages/Index.tsx`**
- Hero CTA buttons: white button on dark bg stays, but secondary outline gets green tint
- Waypoint card hover borders shift to green/blue from the palette
- Stats bar stays black/dark

### Part 2: Mobile Optimization

**File: `src/components/Navigation.tsx`**
- Increase mobile tap targets (min 44px height on links)
- Add smooth slide-down animation for mobile menu
- Make mobile menu full-width with better spacing
- Ensure hamburger is easily tappable

**File: `src/pages/Index.tsx`**
- Reduce hero heading size on mobile (`text-4xl` instead of `text-5xl`)
- Stack CTA buttons vertically on small screens (already done with `flex-col sm:flex-row`)
- Ensure journey cards don't overflow on small screens
- Add horizontal scroll or stack for the 3-column waypoint grid on mobile

**File: `src/components/Footer.tsx`**
- Stack footer links vertically on mobile instead of wrapping
- Increase tap target size for footer links

**File: `src/index.css`**
- Add touch-friendly tap target utility
- Ensure text sizes are readable on mobile (min 16px for body to prevent iOS zoom)

**Global mobile fixes across all pages:**
- Ensure no horizontal overflow on any page
- Padding adjustments: `px-4` on mobile, `px-8` on desktop
- Font sizes: reduce heading sizes on mobile breakpoints
- Button heights: minimum 44px for touch targets
- Card grids: single column on mobile, multi-column on desktop

### Files to Modify

| File | Changes |
|------|---------|
| `tailwind.config.ts` | New color tokens (green, blue, cream, gray) |
| `src/index.css` | CSS variables, waypoint colors, mobile utilities |
| `src/components/ui/button.tsx` | Green primary, blue accent variant |
| `src/components/SectionLight.tsx` | Cream/gray muted variant |
| `src/components/Navigation.tsx` | Green accents, better mobile tap targets |
| `src/components/Footer.tsx` | Green accents, mobile-friendly link layout |
| `src/pages/Index.tsx` | Color updates, mobile sizing |
| `src/components/BookCallButton.tsx` | No changes needed (inherits button styles) |

