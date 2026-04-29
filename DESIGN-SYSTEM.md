# JEDCO Air Systems — Design System Reference

> Extracted from `index.html` (single-file vanilla HTML/CSS/JS, no build system).  
> All CSS lives in a `<style>` block. No Tailwind, no SCSS, no component framework.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Design Tokens (CSS Custom Properties)](#design-tokens)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing](#spacing)
6. [Border Radius](#border-radius)
7. [Borders](#borders)
8. [Shadows](#shadows)
9. [Animations & Transitions](#animations--transitions)
10. [Breakpoints](#breakpoints)
11. [Z-Index Layers](#z-index-layers)
12. [Layout & Page Structure](#layout--page-structure)
13. [Component Patterns](#component-patterns)
14. [Decorative Patterns](#decorative-patterns)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Vanilla HTML5, single `index.html` |
| Styles | Plain CSS in `<style>` block |
| Scripts | Vanilla JS (inline) |
| Fonts | Google Fonts — Inter, Barlow Condensed |
| CRM/Forms | HubSpot Forms v2 (`js.hsforms.net`) |
| Analytics | Google Tag Manager (`GTM-NM9DKVW9`) |
| OG Image | `generate-og.js` (Puppeteer, 1200×630 @2x) |
| Favicon | `JedTriangleNew.svg` |

---

## Design Tokens

All tokens are defined as CSS custom properties on `:root`.

```css
:root {
  /* Brand primaries */
  --red:        #C8272D;
  --red-dark:   #A51E23;
  --blue:       #1B4F91;
  --blue-dark:  #143D72;

  /* Backgrounds */
  --dark:       #0C1A28;   /* hero, footer, dark sections */
  --dark-2:     #112236;   /* defined but not applied */
  --gray-light: #F4F6F9;   /* light section backgrounds */
  --gray-mid:   #DDE2EC;   /* borders, separators */

  /* Text */
  --text-dark:  #1A202C;
  --text-mid:   #4A5568;
  --text-light: #718096;

  --white:      #FFFFFF;
}
```

---

## Color System

### Brand Primaries

| Token | Hex | Usage |
|---|---|---|
| `--red` | `#C8272D` | CTAs, accents, eyebrows, icon backgrounds, hero badge, vendor separators |
| `--red-dark` | `#A51E23` | Red button hover state |
| `--blue` | `#1B4F91` | Nav logo, vendor bar bg, stats bar bg, section accents, numbered circles |
| `--blue-dark` | `#143D72` | Blue button hover state |

### Backgrounds

| Token | Hex | Usage |
|---|---|---|
| `--dark` | `#0C1A28` | Hero, footer, markets section, contact section |
| `--gray-light` | `#F4F6F9` | "Why JEDCO" section background |
| `--gray-mid` | `#DDE2EC` | Nav border, card borders, product grid border, mobile nav dividers |
| `--white` | `#FFFFFF` | Nav, service cards, product cards, line cards, modal |

### Text

| Token | Hex | Usage |
|---|---|---|
| `--text-dark` | `#1A202C` | Primary body text on light backgrounds |
| `--text-mid` | `#4A5568` | Secondary body text, descriptions |
| `--text-light` | `#718096` | Meta text, captions |

One-off text color: `#5a6a80` (product card list item text — not tokenized, consider aliasing to `--text-mid`).

### One-Off Colors (not tokenized)

| Hex | Usage |
|---|---|
| `#e05055` | Dark-section eyebrow text, form error state |
| `#4caf82` | Form success state |
| `#c5ccd9` | Nav supply link hover border |

### Alpha / Translucent Values

These are all inline (not tokenized). Grouped by context for reference.

**On dark (`--dark`) backgrounds:**

| Value | Usage |
|---|---|
| `rgba(255,255,255,0.04)` | Hero panel bg, market card bg, dot grid |
| `rgba(255,255,255,0.05)` | Contact form box bg |
| `rgba(255,255,255,0.07)` | Market icon bg, footer top border-ish (see borders) |
| `rgba(255,255,255,0.08)` | Footer social icon hover bg |
| `rgba(255,255,255,0.1)` | Hero panel border, contact form border, vendor bar borders |
| `rgba(255,255,255,0.14)` | Form input borders |
| `rgba(255,255,255,0.15)` | Stats bar item dividers |
| `rgba(255,255,255,0.25)` | Form input placeholder text |
| `rgba(255,255,255,0.3)` | Vendor bar label text, footer copyright |
| `rgba(255,255,255,0.35)` | Footer social icons, footer supply link |
| `rgba(255,255,255,0.4)` | Hero panel label |
| `rgba(255,255,255,0.45)` | Hero panel item sub-text, hero sub-text, btn outline-white border |
| `rgba(255,255,255,0.5)` | Vendor names, form labels |
| `rgba(255,255,255,0.55)` | Footer brand name |
| `rgba(255,255,255,0.6)` | Contact lead text |
| `rgba(255,255,255,0.65)` | Hero sub text, stat description |
| `rgba(255,255,255,0.75)` | Contact detail text, footer social hover |
| `rgba(255,255,255,0.8)` | Btn outline-white hover border |

**Red/blue transparent variants:**

| Value | Usage |
|---|---|
| `rgba(200,39,45,0.05)` | Hero right gradient accent |
| `rgba(200,39,45,0.09)` | Service icon background |
| `rgba(200,39,45,0.1)` | Market card hover bg |
| `rgba(200,39,45,0.15)` | Hero panel icon bg |
| `rgba(200,39,45,0.35)` | Market card hover border |
| `rgba(27,79,145,0.09)` | Hero right gradient accent |
| `rgba(27,79,145,0.1)` | Line card hover shadow |

**Other:**

| Value | Usage |
|---|---|
| `rgba(0,0,0,0.6)` | Modal overlay |
| `rgba(0,0,0,0.09)` | Service card hover shadow |

### Gradients

| Name | Value | Usage |
|---|---|---|
| Top stripe | `linear-gradient(90deg, #C8272D 0%, #C8272D 40%, #1B4F91 60%, #1B4F91 100%)` | 4px bar at top of page |
| Section divider | `linear-gradient(90deg, #C8272D 0%, #1B4F91 100%)` | 3px divider between Why and Contact sections |
| Hero accent | `linear-gradient(135deg, transparent 30%, rgba(200,39,45,0.05) 60%, rgba(27,79,145,0.09) 100%)` | Subtle overlay on hero right side |

---

## Typography

### Font Families

| Family | Weights Loaded | Role |
|---|---|---|
| `'Inter', sans-serif` | 300, 400, 500, 600, 700 | UI, body, labels, buttons, nav |
| `'Barlow Condensed', sans-serif` | 600, 700, 800, 900 | Display, headings, stats, titles |

**Global base:**
```css
html { font-size: 16px; }
body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Type Scale

#### Display / Headings (Barlow Condensed)

| Element | Size | Weight | Transform | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| H1 hero | `clamp(46px, 6.5vw, 78px)` | 900 | uppercase | -0.01em | 1.0 |
| Section title | `clamp(30px, 4vw, 46px)` | 800 | uppercase | -0.01em | 1.05 |
| Section title (≤768px) | `28px` | 800 | uppercase | -0.01em | 1.05 |
| Contact heading | `clamp(34px, 4vw, 48px)` | 900 | uppercase | — | 1.05 |
| Stat number | `38px` | 900 | — | — | 1 |
| Modal title | `26px` | 800 | — | 0.01em | — |
| Service card h3 | `20px` | 800 | uppercase | 0.02em | — |
| Form title | `20px` | 800 | uppercase | 0.04em | — |
| Product card title | `20px` | 700 | uppercase | 0.02em | 1.1 |
| Market card h3 | `17px` | 800 | uppercase | 0.04em | — |
| Footer brand name | `17px` | 800 | uppercase | 0.06em | — |
| Vendor name | `16px` | 700 | uppercase | 0.07em | — |
| Nav logo "JEDCO" | `24px` (mobile: `20px`) | 800 | — | 0.03em | 1 |
| Nav logo "Air Systems" | `12px` (mobile: `10px`) | 800 | uppercase | 0.18em | 1 |
| Product card number | `11px` | 800 | uppercase | 0.16em | — |

#### UI / Body (Inter)

| Element | Size | Weight | Transform | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Hero sub paragraph | `17px` | 400 | — | — | 1.7 |
| Body / section description | `16px` | 400 | — | — | 1.7 |
| Contact lead text | `16px` | 400 | — | — | 1.7 |
| Why item h3 | `15px` | 700 | — | — | — |
| Mobile nav links | `15px` | 500 | — | — | — |
| Hero CTA buttons | `14.5px` | 600 | — | — | — |
| Service card paragraph | `14.5px` | 500 | — | — | 1.65 |
| Contact detail | `14.5px` | 400 | — | — | — |
| Form submit button | `14.5px` | 600 | — | — | — |
| Base `.btn` | `14px` | 600 | — | 0.02em | — |
| Why item paragraph | `14px` | 400 | — | — | 1.65 |
| Form inputs | `14px` | 400 | — | — | — |
| Lines footer text | `14px` | 400 | — | — | — |
| Nav links | `13.5px` | 500 | — | 0.01em | — |
| Hero panel item title | `13.5px` | 600 | — | — | — |
| Line card name | `13.5px` | 700 | — | — | — |
| Nav CTA button | `13px` | 600 | — | — | — |
| Market card paragraph | `13px` | 400 | — | — | 1.55 |
| Product card list items | `13px` | 400 | — | — | 1.4 |
| Form status messages | `13px` | 400 | — | — | — |
| Nav supply link | `12px` | 600 | — | 0.01em | — |
| Hero panel item sub | `12px` | 400 | — | — | 1.4 |
| Hero panel category text | `12.5px` | 400 | — | — | 1.5 |
| Footer copyright | `12.5px` | 400 | — | — | — |
| Footer supply link | `12.5px` | 400 | — | — | — |
| Stat description | `12px` | 400 | — | — | — |
| Line card products list | `11px` | 400 | — | — | 1.4 |
| Section eyebrow | `11px` | 700 | uppercase | 0.14em | — |
| Hero badge | `11px` | 700 | uppercase | 0.13em | — |
| Hero panel label | `11px` | 700 | uppercase | 0.12em | — |
| Hero panel category title | `11px` | 700 | uppercase | 0.1em | — |
| Stat label | `11px` | 600 | uppercase | 0.09em | — |
| Form field labels | `11px` | 700 | uppercase | 0.1em | — |
| Vendor bar label | `10px` | 700 | uppercase | 0.16em | — |

### Typography Patterns

**Eyebrow pattern:** Red `#e05055` or `var(--red)` label, `11px / 700 / uppercase / letter-spacing: 0.14em`, preceded by a `20×2px` red decorative dash via `::before`.

**Display pairing:** Section eyebrow → section title in Barlow Condensed → body paragraph in Inter is the standard section opener.

---

## Spacing

### Global Layout

```css
.container,
.nav-inner,
.hero-inner,
.stats-inner,
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;   /* ~24px at 480px, ~60px at 1200px */
}
```

### Section Padding

| Section | Desktop | ≤768px |
|---|---|---|
| `.section` (generic) | `84px 0` | `52px 0` |
| `.hero` | `96px 0 80px` | `56px 0 52px` |
| `.vendor-bar` | `20px 0` | `14px 0` |
| `.stats-bar` | (via item padding) | (via item padding) |
| `.footer` | `28px 0` | — |

### Grid Gaps

| Grid | Gap | Columns |
|---|---|---|
| Hero inner | `60px` | `1fr 420px` |
| Services | `22px` | `3` |
| Markets | `18px` | `4` → `2` → `1` |
| Products | `2px` | `3` → `1` |
| Lines | `10px` | `5` → `4` → `2` → `2` |
| Why JEDCO | `36px 48px` | `3` → `2` → `1` |
| Contact | `72px` (desktop) / `40px` (≤768px) | `2` → `1` |
| Form two-column row | `14px` | `2` → `1` |
| Nav inner | `32px` | — |
| Nav links | `30px` | — |
| Nav right area | `12px` | — |
| Hero CTA buttons | `14px` | — |
| Vendor bar | `40px` | — |
| Footer inner | `20px` | — |
| Contact details | `16px` | — |
| Form groups | `16px` (margin-bottom) | — |
| Why items | `18px` (desktop) / `10px` (≤768px) | — |

### Component Padding

| Component | Padding |
|---|---|
| `.btn` (base) | `12px 26px` |
| `.btn` (hero size) | `13px 28px` |
| `.btn` (nav size) | `9px 20px` |
| Service card | `34px 30px` |
| Market card | `30px 22px` |
| Product card | `32px 28px` |
| Line card | `14px` |
| Hero panel | `32px 28px` |
| Contact form box | `36px 34px` |
| Modal box | `40px` |
| Nav supply link | `6px 12px` |
| Stats bar item | `28px 20px` (desktop) / `22px 16px` (≤768px) |
| Vendor bar label | `0 28px` |
| Form inputs / textarea | `10px 13px` |
| Mobile nav | `8px 5% 16px` |
| Mobile nav link | `13px 0` |
| Modal overlay (inner) | `24px` |
| Hamburger button | `4px` |

---

## Border Radius

| Element | Radius |
|---|---|
| Buttons (`.btn`, submit) | `4px` |
| Form inputs / textarea | `4px` |
| Service card | `6px` |
| Service icon container | `8px` |
| Line card | `6px` |
| Nav supply link | `5px` |
| Footer social icon links | `6px` |
| Hero panel icon | `6px` |
| Hero panel | `10px` |
| Contact form box | `10px` |
| Products grid (outer) | `10px` |
| Market card | `8px` |
| Modal box | `12px` |
| Circles (market icon, badge dot, Why number, vendor separator) | `50%` |
| Hero badge dot | `50%` |
| Hamburger bar spans | `2px` |

---

## Borders

### Light-surface borders

| Element | Border |
|---|---|
| Nav (bottom) | `1px solid var(--gray-mid)` |
| Service card | `1px solid var(--gray-mid)` |
| Service card (top accent) | `3px solid var(--red)` |
| Products grid (outer) | `2px solid var(--gray-mid)` |
| Line card (default) | `1px solid var(--gray-mid)` |
| Line card (hover) | `1px solid var(--blue)` |
| Mobile nav items | `1px solid var(--gray-mid)` |
| Nav supply link | bg `var(--gray-light)`, border `var(--gray-mid)` |
| Nav supply link (hover) | border-color `#c5ccd9` |

### Dark-surface borders (translucent)

| Element | Border |
|---|---|
| Hero panel | `1px solid rgba(255,255,255,0.1)` |
| Contact form box | `1px solid rgba(255,255,255,0.1)` |
| Form inputs (default) | `1px solid rgba(255,255,255,0.14)` |
| Form inputs (focus) | `1px solid var(--blue)` |
| Market card (default) | `1px solid rgba(255,255,255,0.1)` |
| Market card (hover) | `1px solid rgba(200,39,45,0.35)` |
| Vendor bar (bottom) | `1px solid rgba(255,255,255,0.1)` |
| Vendor bar label (right) | `1px solid rgba(255,255,255,0.1)` |
| Stats bar item dividers | `1px solid rgba(255,255,255,0.15)` (not last-child) |
| Footer (top) | `1px solid rgba(255,255,255,0.07)` |

### Button borders

| Variant | Border |
|---|---|
| Base `.btn` | `2px solid transparent` |
| `.btn-red` | `2px solid var(--red)` |
| `.btn-blue` | `2px solid var(--blue)` |
| `.btn-outline-white` | `2px solid rgba(255,255,255,0.45)` |
| `.btn-outline-white` (hover) | `2px solid rgba(255,255,255,0.8)` |

---

## Shadows

Only used on hover states — no persistent shadows anywhere.

| Element | Shadow |
|---|---|
| Service card (hover) | `0 10px 36px rgba(0,0,0,0.09)` |
| Line card (hover) | `0 3px 14px rgba(27,79,145,0.1)` |

---

## Animations & Transitions

### Keyframe Animations

**`pulse`** — applied to hero badge dot:
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
}
/* Applied as: animation: pulse 2s ease-in-out infinite; */
```

**`vendor-scroll`** — applied to `.vendor-bar-inner`:
```css
@keyframes vendor-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
/* Applied as: animation: vendor-scroll 30s linear infinite; */
/* Paused on hover: animation-play-state: paused; */
```

### Transition Definitions

All transitions use `0.2s` duration except where noted.

| Element | Property | Duration |
|---|---|---|
| `.btn` | `all` | `0.2s ease` |
| `.nav-links a` | `color` | `0.2s` |
| `.nav-supply-link` | `background, border-color` | `0.15s` |
| `.service-card` | `box-shadow, transform` | `0.25s` |
| `.market-card` | `background, border-color` | `0.2s` |
| `.prod-card` | `background` | `0.2s` |
| `.prod-card::before` (accent bar) | `opacity` | `0.2s` |
| `.line-card` | `border-color, box-shadow` | `0.2s` |
| `.vendor-name` | `opacity` | `0.2s` |
| `.contact-detail a` | `color` | `0.2s` |
| Form `input`, `textarea` | `border-color` | `0.2s` |
| `.cf-submit` | `background, border-color` | `0.2s` |
| `.modal-close` | `opacity` | `0.2s` |
| `.footer-social a` | `color, background` | `0.2s` |
| `.footer-supply a` | `color` | `0.2s` |
| `.nav-hamburger span` | `transform, opacity` | `0.25s` |

**Hover transforms:**
- Service card: `translateY(-4px)` on hover

---

## Breakpoints

| Breakpoint | Key changes |
|---|---|
| `≤1024px` | Hero → 1 col (right panel hidden); markets → 2 cols; lines → 4 cols; why → 2 cols |
| `≤768px` | Hamburger shown, desktop nav hidden; services → 1 col; markets → 2 cols; lines → 2 cols; why → 1 col; contact → 1 col; all section/hero padding reduced; footer stacked; vendor bar label hidden; section title fixed at 28px |
| `≤560px` | Two-column form rows (`cf-row-2`) → 1 col |
| `≤480px` | Markets → 1 col; lines → 2 cols; nav logo img height `36px`; logo text adjustments |

---

## Z-Index Layers

| Layer | z-index | Element |
|---|---|---|
| Base content | `0` | General page flow |
| Hero content | `1` | `.hero-inner` (above hero pseudo-elements) |
| Mobile nav | `199` | Mobile nav dropdown |
| Sticky nav | `200` | `.nav` |
| Modal | `1000` | `.modal-overlay` |

---

## Layout & Page Structure

### Page Flow (top to bottom)

```
┌─────────────────────────────────────────┐
│  Top stripe (4px, red→blue gradient)    │
├─────────────────────────────────────────┤
│  Sticky nav (68px, white)               │
├─────────────────────────────────────────┤
│  Hero section (dark bg, 2-col)          │
├─────────────────────────────────────────┤
│  Vendor bar (blue bg, scroll ticker)    │
├─────────────────────────────────────────┤
│  Services section (white bg, 3-col)     │
├─────────────────────────────────────────┤
│  Markets section (dark bg, 4-col)       │
├─────────────────────────────────────────┤
│  Stats bar (blue bg, 3-stat row)        │
├─────────────────────────────────────────┤
│  Products section (white bg, 3-col)     │
├─────────────────────────────────────────┤
│  Why JEDCO section (gray-light, 3-col)  │
├─────────────────────────────────────────┤
│  Gradient divider (3px, red→blue)       │
├─────────────────────────────────────────┤
│  Contact section (dark bg, 2-col)       │
├─────────────────────────────────────────┤
│  Footer (dark bg, single row)           │
└─────────────────────────────────────────┘
```

### Alternating Background Rhythm

```
dark → blue → white → dark → blue → white → gray-light → dark → dark
```

### Nav Anatomy

```
[Logo SVG + text stack]  ←gap: 32px→  [Nav links]  [Nav right: supply link + CTA btn]
                                                       [Hamburger — mobile only]
```

### Hero Anatomy (desktop)

```
Left column (1fr)          Right column (420px)
──────────────────         ──────────────────────────
Badge                      Panel (glass, border-radius 10px)
H1 (clamp, 900 weight)       Label
Sub paragraph                4× icon+text rows
CTA buttons (flex row)       Dividers between rows
                             2× product categories
```

Right column hidden at `≤1024px`.

---

## Component Patterns

### Buttons

Base class: `.btn` — always used with one modifier.

```
.btn-red          → bg: var(--red),  border: var(--red),  text: white
                    hover: bg: var(--red-dark), border: var(--red-dark)

.btn-blue         → bg: var(--blue), border: var(--blue), text: white
                    hover: bg: var(--blue-dark), border: var(--blue-dark)

.btn-outline-white → bg: transparent, border: rgba(255,255,255,0.45), text: white
                     hover: border: rgba(255,255,255,0.8), bg: rgba(255,255,255,0.08)
```

Shared properties:
- `display: inline-flex; align-items: center; gap: 8px`
- `border-radius: 4px; border: 2px solid`
- `font: 14px / 600 Inter; letter-spacing: 0.02em`
- `padding: 12px 26px` (hero), `9px 20px` (nav)
- `transition: all 0.2s ease`

### Section Eyebrow

```html
<p class="eyebrow">Services</p>
```
```css
/* ::before: 20px × 2px red block */
font: 11px / 700 Inter; text-transform: uppercase; letter-spacing: 0.14em;
color: var(--red);  /* or #e05055 on dark sections */
```

### Service Card

- White bg, `border-radius: 6px`, `1px solid var(--gray-mid)`, `3px solid var(--red)` top accent
- Padding: `34px 30px`
- Icon in `rgba(200,39,45,0.09)` rounded square (`8px`)
- H3: Barlow Condensed 20px/800/uppercase
- Paragraph: Inter 14.5px/500, line-height 1.65, color `--text-mid`
- Hover: `translateY(-4px)` + `0 10px 36px rgba(0,0,0,0.09)` shadow

### Market Card

- Dark, glass-style: `rgba(255,255,255,0.04)` bg, `1px solid rgba(255,255,255,0.1)` border, `border-radius: 8px`
- Padding: `30px 22px`
- Icon in circle (`50%`), `rgba(255,255,255,0.07)` bg, SVG at `rgba(255,255,255,0.8)`
- H3: Barlow Condensed 17px/800/uppercase/letter-spacing 0.04em
- Paragraph: Inter 13px/400, line-height 1.55
- Hover: bg `rgba(200,39,45,0.1)`, border `rgba(200,39,45,0.35)`

### Product Card

- White bg, tiled with `2px` gap (gap acts as visible border), `border-radius: 10px` on outer grid
- Padding: `32px 28px`
- `::before` pseudo-element: `3px wide` blue left accent bar, `opacity: 0` → `1` on hover
- Number header: Inter 11px/800/uppercase/letter-spacing 0.16em, color `var(--red)`, in `var(--blue)` numbered circle
- Title: Barlow Condensed 20px/700/uppercase/letter-spacing 0.02em/line-height 1.1
- List items: Inter 13px/400/line-height 1.4, `padding-left: 14px`, marker color `var(--red)`
- Hover: bg transitions (subtle lift)

### Line Card

- White bg, `border-radius: 6px`, `1px solid var(--gray-mid)`, padding `14px`
- Name: Inter 13.5px/700
- Products list: Inter 11px/400/line-height 1.4
- Hover: border → `var(--blue)`, shadow `0 3px 14px rgba(27,79,145,0.1)`

### Why JEDCO Item

- Horizontal flex, `gap: 18px` (desktop) / `10px` (mobile), `align-items: flex-start`
- Number: Barlow Condensed in blue circle (`50%`, `var(--blue)` bg, white text)
- H3: Inter 15px/700
- Paragraph: Inter 14px/400/line-height 1.65/color `--text-mid`

### Stats Bar

- Blue (`var(--blue)`) full-width background
- 3-col flex row, items separated by `1px solid rgba(255,255,255,0.15)` (except last)
- Stat number: Barlow Condensed 38px/900/white
- Stat label: Inter 11px/600/uppercase/letter-spacing 0.09em/`rgba(255,255,255,0.65)`
- Stat description: Inter 12px/400/`rgba(255,255,255,0.45)`

### Contact Form (dark glass)

- Box: `rgba(255,255,255,0.05)` bg, `1px solid rgba(255,255,255,0.1)` border, `border-radius: 10px`, padding `36px 34px`
- Labels: Inter 11px/700/uppercase/letter-spacing 0.1em/`rgba(255,255,255,0.5)`
- Inputs/textareas: `rgba(255,255,255,0.07)` bg, `1px solid rgba(255,255,255,0.14)` border, `border-radius: 4px`, padding `10px 13px`, `border-color: var(--blue)` on focus
- Placeholder: `rgba(255,255,255,0.25)`
- Submit: full-width, `.btn-red` styles, `border-radius: 4px`
- Success color: `#4caf82` / Error: `#e05055`

### Modal

- Fixed overlay: `rgba(0,0,0,0.6)` bg, `z-index: 1000`, `padding: 24px`
- Box: white, `border-radius: 12px`, `max-width: 560px`, `max-height: 90vh`, overflow-y scroll, `padding: 40px`
- Close button: absolute top-right, `opacity: 0.4` → `1` on hover, `transition: 0.2s`
- Contains HubSpot-rendered form

### Nav

- Sticky, `z-index: 200`, white bg, `1px solid var(--gray-mid)` bottom border
- Height: `68px` via padding/flex alignment
- Logo: SVG (36px height) + text stack ("JEDCO" + "Air Systems")
- Links: Inter 13.5px/500/letter-spacing 0.01em, color `--text-dark`, hover → `--red`
- Supply link: styled as subtle pill (`border-radius: 5px`, gray bg)
- CTA button: `.btn-red`, smaller padding (`9px 20px`), `font-size: 13px`

### Vendor Bar

- Blue (`var(--blue)`) full-width background
- Inner: `display: flex`, duplicated content for infinite scroll effect (`translateX(-50%)` on loop)
- Animation: `vendor-scroll 30s linear infinite`, paused on hover
- Label: Inter 10px/700/uppercase/letter-spacing 0.16em/`rgba(255,255,255,0.3)`, separated by right border
- Vendor names: Barlow Condensed 16px/700/uppercase/letter-spacing 0.07em, `opacity: 0.5` → `1` on hover
- Separators: `var(--red)` circles, `opacity: 0.5`

### Footer

- Dark (`var(--dark)`) bg, `1px solid rgba(255,255,255,0.07)` top border, `padding: 28px 0`
- Single-row flex: `brand name` ← `flex: 1` gap → `copyright` → `social icons + supply link`
- Brand name: Barlow Condensed 17px/800/uppercase/`rgba(255,255,255,0.55)`
- Copyright: Inter 12.5px/400/`rgba(255,255,255,0.3)`
- Social icons: `border-radius: 6px`, `rgba(255,255,255,0.35)` → `rgba(255,255,255,0.75)` on hover
- Supply link: Inter 12.5px/400/`rgba(255,255,255,0.35)` → `rgba(255,255,255,0.65)` on hover
- Stacks to column on `≤768px`

---

## Decorative Patterns

| Pattern | Implementation |
|---|---|
| **Dot grid texture** | `radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)` at `background-size: 28px 28px` — used in hero, applied via `::before` pseudo-element |
| **Top stripe** | `4px` div, `linear-gradient(90deg, red 0–40%, blue 60–100%)` |
| **Section divider** | `3px` div, `linear-gradient(90deg, red → blue)` |
| **Service card top accent** | `border-top: 3px solid var(--red)` |
| **Product card left accent** | `3px wide` `::before` pseudo-element in `var(--blue)`, `opacity 0→1` on hover |
| **Section eyebrow dash** | `::before`: `width: 20px; height: 2px; background: var(--red); display: inline-block` |
| **Hero badge dot** | `6×6px` circle, `var(--red)`, `pulse` animation (2s ease-in-out infinite) |
| **Vendor separator dot** | `var(--red)` circle, `opacity: 0.5`, between vendor names in ticker |

---

*Last extracted: April 2026 from `index.html` (jedcoairsystems.com)*
