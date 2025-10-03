# Brand Implementation Notes

## Current Brand Compliance Status

### ✅ Correct
- Colors are close (using similar blues and oranges)
- Overall layout and structure
- Service area coverage (Boise)

### ⚠️ Needs Adjustment

#### 1. Typography (HIGH PRIORITY)
**Brand Standard:**
- **Headlines**: Harmonia Sans Semi Bold (Title or Sentence Case)
- **Body Copy**: Harmonia Sans Std Regular OR Georgia Regular
- **CTAs**: HARMONIA SANS STD BLACK (UPPERCASE ONLY)
- **Taglines/Subheadings**: GEORGIA ITALIC (UPPERCASE)

**Current Implementation:**
- Using Inter and Open Sans (incorrect)
- **Temporary Fix**: Switched to Montserrat (closest Google Fonts alternative) + Georgia
- **Production Solution Needed**: License Harmonia Sans from Adobe Fonts or Monotype

#### 2. Color Palette Adjustments
**Brand Guide Colors:**
- **Polar Blue**: #4589A6 (primary brand blue)
- **Horizon Blue**: #55AAD2 (lighter complementary blue)
- **Evening Blue**: PMS 7462 (darker blue)
- **Gunmetal**: #1F201D (dark/black)
- **CTA Rose**: #F66256 (call-to-action buttons)
- **UB Yellow**: #FFC845 (highlights/accents)
- **Sandstone**: #B7A99A (neutral tone)
- **Fog**: #F4F5F6 (light backgrounds)
- **Pure White**: #FFFFFF
- **True Black**: #000000

**Current Colors (need updating):**
- `#1e3a5f` → Should be `#4589A6` (Polar Blue)
- `#4a90e2` → Should be `#55AAD2` (Horizon Blue)
- `#ff6b35` → Should be `#F66256` (CTA Rose)

#### 3. Logo Usage (CRITICAL)
**Issue**: Currently using text "TOP SHELF" instead of actual logo

**Brand Standard Logo Variations:**
1. **Primary Logo**: Full horizontal layout with icon + "TopShelf STORAGE"
2. **Secondary Logo (1-color)**: White or black version for simple applications
3. **Tertiary Logo (Stacked)**: Icon above text, for tight spaces

**Available Logo Files:**
- `/assets/Logos/Asset 5@4x.png`
- `/assets/Logos/full.png`

**Action Required:**
- Replace text logo in header with actual logo image
- Use appropriate logo variation based on background
- Ensure proper clear space (.5X on all sides)
- Note: Brand uses "TopShelf STORAGE" not "Top Shelf Moving and Junk Removal"

#### 4. Business Name Discrepancy
**Brand Guide**: "TopShelf Storage"
**Current Website**: "Top Shelf Moving and Junk Removal"

**Question for Client**:
- Is this a different business unit/division?
- Should website use "TopShelf Storage" branding or create new branding for "Moving and Junk Removal"?
- Can we use the existing TopShelf Storage logo or need custom logo?

## Implementation Checklist

### Phase 1: Quick Fixes
- [x] Update fonts from Inter/Open Sans to Montserrat/Georgia (temporary)
- [x] Add brand colors to Tailwind config
- [ ] Replace text logo with actual logo image
- [ ] Update all color references to use brand palette
- [ ] Apply correct typography hierarchy

### Phase 2: Production Ready
- [ ] License Harmonia Sans font
- [ ] Implement Harmonia Sans via Adobe Fonts or self-hosted
- [ ] Get clarification on business name/branding
- [ ] Create/obtain proper logo for "Moving and Junk Removal" division
- [ ] Update all font-family references to use Harmonia Sans

### Phase 3: Polish
- [ ] Verify logo clear space requirements
- [ ] Ensure CTA buttons use uppercase + Harmonia Sans Black
- [ ] Apply Georgia Italic Uppercase for taglines
- [ ] Color audit: replace all hardcoded colors with brand palette
- [ ] Test on various backgrounds (dark/light) with appropriate logo versions

## Font Fallback Strategy
Since Harmonia Sans is not available on Google Fonts:

**Option 1: Adobe Fonts** (Recommended)
```html
<link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css">
```

**Option 2: Self-hosted**
- Purchase Harmonia Sans license
- Add font files to `/public/fonts/`
- Define @font-face in globals.css

**Option 3: Stick with Montserrat** (Current temporary solution)
- Montserrat is geometrically similar to Harmonia Sans
- Free and performs well
- Close enough for MVP/testing

## Notes
- Brand guide is from 2019 - verify if still current
- All brand assets prepared by Superbase Creative
- Original brand focuses on "Storage" - website is for "Moving and Junk Removal" services
