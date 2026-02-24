

## Remove Prices from Navigation Dropdowns

Prices shown on hover in the navigation dropdowns look tacky. They should be removed from both the Solutions and Resources dropdown menus.

### Changes

**File: `src/components/Navigation.tsx`**
- Remove the `price` property from all items in `solutionsLinks` and `resourcesLinks` arrays
- Remove the conditional `{link.price && ...}` rendering in both desktop dropdowns and mobile menu

This is a straightforward cleanup — prices belong on the product pages, not in navigation.

