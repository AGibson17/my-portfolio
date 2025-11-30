# Visual Style Guide - Andrew Gibson Portfolio

Quick reference for the portfolio's visual design system.

---

## 🎨 Color Palette

### Primary Background Colors
```
Very Dark Blue (Main BG):    #0a0e1a  ████████
Dark Blue (Alt Sections):    #0f1419  ████████
Medium Dark (Sections):      #1a2332  ████████
Card Background:             #1e2a40  ████████
Hover State:                 #273d5a  ████████
Highlight:                   #2a3f5f  ████████
```

### Accent Colors
```
Primary Blue (CTAs):         #3b82f6  ████████
Light Blue (Hover):          #60a5fa  ████████
Dark Blue (Active):          #2563eb  ████████
Cyan (Accent):               #06b6d4  ████████
Purple (Alpha):              #8b5cf6  ████████
Orange (Alerts):             #f97316  ████████
```

### Text Colors
```
Primary Text:                #f1f5f9  ████████  (Almost white)
Secondary Text:              #cbd5e1  ████████  (Light gray)
Muted Text:                  #94a3b8  ████████  (Medium gray)
```

### Border Colors
```
Primary Border:              #2d3f5f  ████████
Secondary Border:            #1e2a3f  ████████
Accent Border:               #3b82f6  ████████
```

---

## 🔤 Typography

### Font Family
**Primary**: Montserrat (Google Fonts)
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Black: 900

### Font Sizes
```
XS:     0.75rem (12px)  - Small labels
SM:     0.875rem (14px) - Tech tags
Base:   1rem (16px)     - Body text
LG:     1.125rem (18px) - Lead text
XL:     1.25rem (20px)  - Subtitles
2XL:    1.5rem (24px)   - Card titles
3XL:    1.875rem (30px) - Subheadings
4XL:    2.25rem (36px)  - Section titles
5XL:    3rem (48px)     - Section titles
6XL:    3.75rem (60px)  - Hero title
```

### Line Heights
```
Tight:    1.25    - Headings
Snug:     1.375   - Tight paragraphs
Normal:   1.5     - Body text
Relaxed:  1.625   - Comfortable reading
Loose:    2       - Spacious text
```

---

## 📐 Spacing Scale

```
XS:   0.5rem (8px)   - Tight spacing
SM:   1rem (16px)    - Small gaps
MD:   1.5rem (24px)  - Medium spacing
LG:   2rem (32px)    - Large gaps
XL:   3rem (48px)    - Extra large
2XL:  4rem (64px)    - Section spacing
3XL:  6rem (96px)    - Major sections
```

### Section Padding
- Desktop: 6rem 4rem (96px 64px)
- Mobile: 3rem 1.5rem (48px 24px)

---

## 🎭 Effects & Animations

### Shadows
```css
/* Small Shadow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

/* Medium Shadow */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

/* Large Shadow */
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);

/* Extra Large Shadow */
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

/* Blue Glow (Cards) */
box-shadow: 0 20px 40px rgba(59, 130, 246, 0.25);

/* Purple Glow (Alpha) */
box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
```

### Transitions
```css
Fast:   0.15s ease-in-out  /* Quick interactions */
Base:   0.3s ease-in-out   /* Standard hover */
Slow:   0.5s ease-in-out   /* Deliberate animations */
```

### Border Radius
```
Small:    0.375rem (6px)  - Buttons, tags
Medium:   0.5rem (8px)    - Cards
Large:    0.75rem (12px)  - Sections
XL:       1rem (16px)     - Hero elements
Full:     9999px          - Pills, rounded buttons
```

---

## 🃏 Component Styles

### Standard Card
```css
Background:  #1e2a40
Border:      2px solid #2d3f5f
Radius:      0.75rem (12px)
Padding:     2rem (32px)
Shadow:      0 4px 8px rgba(0,0,0,0.4)

Hover:
  Transform: translateY(-8px)
  Shadow:    0 20px 40px rgba(59,130,246,0.25)
  Border:    #3b82f6
```

### Alpha Card (Prototype)
```css
Background:  rgba(30, 42, 64, 0.6) + backdrop-blur
Border:      2px solid rgba(139, 92, 246, 0.3)
Radius:      0.75rem (12px)
Shadow:      0 0 20px rgba(139, 92, 246, 0.1)

Hover:
  Transform: translateY(-8px)
  Shadow:    0 0 30px rgba(139, 92, 246, 0.3)
  Border:    #8b5cf6
```

### Tech Tag
```css
Background:  #1a2332
Color:       #60a5fa
Border:      1px solid #2d3f5f
Radius:      9999px (full rounded)
Padding:     0.375rem 0.75rem
Font:        0.875rem (14px) medium
```

### Button (Primary)
```css
Background:  #3b82f6
Color:       white
Radius:      0.5rem (8px)
Padding:     1rem 2rem
Font:        1rem (16px) semibold

Hover:
  Background: #60a5fa
  Transform:  translateY(-2px)
  Shadow:     0 10px 20px rgba(0,0,0,0.5)
```

### Button (Secondary)
```css
Background:  transparent
Color:       #3b82f6
Border:      2px solid #3b82f6
Radius:      0.5rem (8px)
Padding:     1rem 2rem
Font:        1rem (16px) semibold

Hover:
  Background: #3b82f6
  Color:      white
  Transform:  translateY(-2px)
```

---

## 📱 Breakpoints

```
Mobile:       max-width: 768px
Tablet:       max-width: 1024px
Desktop:      min-width: 1025px
Large Screen: min-width: 1600px
```

### Mobile Changes:
- Hero: Single column layout
- Navigation: Hidden, FAB always visible
- Cards: Full width stacking
- Font sizes: Reduced by ~25%
- Spacing: Reduced by ~50%

---

## 🎬 Animations

### Hero Section
```
No animations (static, clean)
```

### Professional Work Cards
```
Hover: 
  - Lift 8px
  - Blue glow intensifies
  - Border color change
  - Background lightens
Duration: 0.3s
```

### Alpha Showcase
```
Background:
  - Pulse animation (8s loop)
  - Grid overlay (static)

Cards:
  - Sweep effect on hover (0.5s)
  - Rotating gradient in image (20s loop)
  - Purple glow on hover
Duration: Various
```

### Navigation
```
FAB Appear:
  - Scale from 0 to 1
  - Fade in
Duration: 0.3s

Nav Bar Hide:
  - Slide up
  - Fade out
Duration: 0.3s
```

---

## ♿ Accessibility Standards

### Contrast Ratios (WCAG AA)
```
Normal Text:   4.5:1 minimum
Large Text:    3:1 minimum
UI Elements:   3:1 minimum
```

### Current Ratios:
- Primary text (#f1f5f9) on dark bg: ✅ 15.8:1
- Secondary text (#cbd5e1) on dark bg: ✅ 11.2:1
- Muted text (#94a3b8) on dark bg: ✅ 6.1:1
- Blue accent (#3b82f6) on dark bg: ✅ 5.2:1

### Focus States
- All interactive elements have visible focus
- Keyboard navigation fully supported
- Tab order follows logical flow

### Motion
- All animations respect `prefers-reduced-motion`
- No flashing or strobing effects
- Animation speeds are comfortable

---

## 📋 Usage Guidelines

### When to use Primary Blue (#3b82f6):
- Call-to-action buttons
- Important links
- Active navigation states
- Hover states
- Section underlines

### When to use Purple (#8b5cf6):
- Alpha Showcase section only
- Prototype/concept indicators
- Future tech aesthetic
- "In development" badges

### When to use Cyan (#06b6d4):
- Gradient accents
- Secondary highlights
- Variety in tech tags
- Combined with blue in gradients

### When to use Orange (#f97316):
- Alert states (future use)
- Important warnings (future use)
- Error states (future use)

---

## 🎯 Section-Specific Styles

### Hero Section
- Full viewport height
- 60/40 split layout
- Gradient background overlay
- No cards or borders
- Large typography
- Strong CTAs

### Professional Work
- Standard cards
- Blue accents
- Clean, professional
- Featured card: 2x width
- Clear hierarchy

### Educational Lab
- Context box with left border
- Large embedded iframe
- Educational feel
- Informative, not flashy

### Alpha Showcase
- Purple/cyan theme
- Animated background
- Glass-morphism cards
- Tech grid overlay
- Future tech aesthetic
- Glowing effects

### About
- Two-column layout
- Standard backgrounds
- No special effects
- Focus on content
- Tech tags for skills

### Contact
- Gradient background
- Centered content
- Large, clear links
- Simple layout

---

## 🚀 Performance Notes

- All colors are CSS variables (instant theme changes)
- Animations use GPU (transform, opacity)
- No external dependencies except Google Fonts
- Images lazy-loaded
- Minimal JavaScript

---

**This is a living document.** Update as the design evolves!
