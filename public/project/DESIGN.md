# Blackspace Web — Design System & Documentation

**Date:** May 27, 2026  
**Project:** Blackspace® — A content studio  
**Location:** Bengaluru, IN  
**Status:** Live (5 pages + client deck)

---

## Overview

Blackspace is a content studio redesigned with the **Sticker Pop** aesthetic — a handmade, playful visual language combining pastel colors, hand-drawn stickers with tape, varied rotations, and irreverent copy. The design celebrates imperfection, movement, and personality while maintaining professional credibility.

**Core principle:** Writers who shoot. Editors who pitch. Directors who care about commas.

---

## Design System

### Color Palette

All colors preserve 100% saturation in print and screen (`-webkit-print-color-adjust: exact`).

| Name | Hex | Usage | Role |
|------|-----|-------|------|
| **Paper** | `#f2ede2` | Background, base | Warm off-white, cream |
| **Ink** | `#0a0a0a` | Text, borders, shadows | Near-black |
| **Mint** | `#9de6d8` | Sticker, accent | Soft cyan-green |
| **Lilac** | `#dfc4f0` | Sticker, accent | Soft purple |
| **Sky** | `#a7d0f5` | Sticker, accent | Soft blue |
| **Butter** | `#f5d77a` | Sticker, accent | Warm yellow |
| **Peach** | `#f6b39a` | Sticker, accent | Soft orange-pink |
| **Pop A** | `#FF4D1A` | CTA, highlights | Vibrant orange-red |
| **Pop B** | `#FF2E8B` | Accents | Vibrant magenta |
| **Pop C** | `#2E4CFF` | Accents | Vibrant blue |

**Theme system:** 5 interchangeable palettes (Classic, Citrus, Bubblegum, Marine, Neon pastel) — all paper + ink, varied pastels + pops.

### Typography

**Three font pairings** (swappable via Tweaks):

1. **Acid Grotesk + Garamond + Helvetica** (Default)
   - Display: Space Grotesk (font-weight: 700, letter-spacing: -0.045em)
   - Italic: EB Garamond (font-style: italic, font-weight: 400)
   - Body: Helvetica Neue / system

2. **All Helvetica**
   - Display: Helvetica Neue bold
   - Italic: Helvetica Neue italic
   - Body: Helvetica Neue regular

3. **Garamond-led**
   - Display: EB Garamond (font-weight: 600, serif)
   - Italic: EB Garamond italic
   - Body: EB Garamond regular

**Sizes (1920px deck basis, scale proportionally for web):**
- Display (hero): 240–380px
- H2 (section): 120–160px
- H3 (card): 36–72px
- Label: 11–13px, letter-spacing 0.15em, text-transform uppercase
- Body: 14–22px, line-height 1.4–1.55

### Spacing & Layout

- **Padding:** 40px (page edges), 28–32px (cards), 14–24px (sticker)
- **Gap:** 12–24px (grid), 16–18px (cards), 6–12px (sticker content)
- **Border-radius:** 20px (cards), 12px (icons), 999px (chips/buttons)
- **Box-shadow:** `4px 5px 0 var(--ink)` (stickers), `0 14px 28px rgba(0,0,0,0.18)` (torn stickers), `6px 6px 0 var(--ink)` (form cards)

---

## Components

### Stickers (Core Visual)

Handmade status badges combining:
- **Tape variant:** White or color semi-transparent top strip with repeating pattern, 22px height, 45° rotation
- **Torn variant:** Irregular clip-path polygon (6 points) for soft torn-paper effect, drop-shadow for depth
- **Square variant:** Sharper 4-corner design, light rotation
- **Round variant:** border-radius 999px, no tape

**Anatomy:**
```
.sticker {
  background: var(--mint);
  border: 1px solid var(--ink);
  border-radius: 12px;
  padding: 14px 18px;
  box-shadow: 4px 5px 0 var(--ink);
  transform: rotate(-7deg to 11deg);
}
.sticker::before { /* tape */ }
.sticker .ico { width/height 44px, border-radius 12px }
.sticker .lbl-sm { font-size 11px, uppercase, opacity 0.7 }
.sticker .lbl-lg { font-size 16px, font-weight 600 }
```

**Copy style:** Irreverent, present-tense. "Right now: On Set" / "Currently: Editing" / "Team status: Brewing Coffee" / "In the oven: Draft Engine"

### Stars (Decorative)

CSS clip-path 10-point stars, positioned absolutely, varied sizes (44–180px), varied rotations (±20deg), varied colors (pop A/B/C or pastels).

```css
clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
```

### Cards

Generic white or pastel container with border + shadow.

```css
background: var(--paper) | var(--mint) | var(--lilac);
border: 1px solid var(--ink);
border-radius: 20px;
padding: 28–40px;
box-shadow: 4px 4px 0 var(--ink);
```

### Navigation

Horizontal pill nav (sticky? TBD):
- Logo: `✳ blackspace` (Acid Grotesk, 16px, pop-A icon)
- Links: `Work / Studio / Services / Contact`
- Font: 14px, letter-spacing 0.2em

### Chips & Buttons

**Chip (label):**
```css
padding: 8px 16px;
border-radius: 999px;
border: 1px solid var(--ink);
font-size: 13px;
font-weight: 500;
```

**Button (CTA):**
```css
background: var(--ink);
color: var(--paper);
padding: 22–24px 34–36px;
border-radius: 999px;
box-shadow: 4px 4px 0 rgba(0,0,0,0.15);
font-size: 15–18px;
font-weight: 500;
```

---

## Pages

### 1. **index.html** — Homepage
**Content:** Hero with floating stickers + marquee + services grid (6 items, CSS grid, varied sizes) + work bento (7 projects) + AI section (color pop-A) + "Why us" (6 points, 2-col) + CTA.

**Key sections:**
- Marquee: scrolling list of words (Scripts, Campaigns, Edits, AI, Brand, Web, Social)
- Services: 6-col grid, biggest = 2×2, smaller = 1×1
- Work: 12-col bento with 1 hero (7 cols×2 rows) + 6 smaller cards
- "Why us": 2-col, left/right split numbered 01–06

**Colors:** Paper (base) + lilac + butter + mint for sections.

### 2. **work.html** — Project Index
**Content:** Hero + filter pills (All, Campaigns, Films, etc.) + bento grid (7 projects) + marquee + chronological list (9 past projects, table-like) + big quote + CTA.

**Key sections:**
- Bento: 12-col grid, sizes vary (8×3, 4×3, 4×2, 4×2, 6×2, 6×2)
- List: display grid, 6 columns (Year, Client, Project, Scope, Result, Arrow), striped
- Quote: big italic serif, lilac background, centered

### 3. **studio.html** — About
**Content:** Hero + photo placeholder + beliefs (6, 2-col, italic/bold mix) + team cards (8 people + dog) + timeline (6 milestones) + marquee + press/recognition (4 items) + CTA.

**Key sections:**
- Beliefs: numbered 01–06 (Roman numerals in italic), grid-auto-rows
- Team: 6-col grid, each card 3/4 aspect, emoji + name + role
- Timeline: 3-col grid, each with year sticker at top-left (position: absolute)
- Press: 4-col, each with pub name + quote

### 4. **services.html** — Services Menu
**Content:** Hero + 6 service cards (CSS grid, varied sizes) + marquee + process (5 steps, 5-col grid) + FAQ (2-col, 6 Q&As) + CTA.

**Key sections:**
- Services: 12-col grid, biggest (01 Campaigns) = 6×2, others = 3–4×1–2
- Process: 5 cards, equal width, step icon (36px, bold Acid Grotesk), h3, body text
- FAQ: 2-col, alternating text-heavy left/right

### 5. **contact.html** — Contact Form
**Content:** Hero + form (2-col input grid) + service/budget chip toggles + textarea + checkbox + send button + side cards (email, address, social, careers) + "What happens next" timeline + CTA.

**Key sections:**
- Form: display grid, 2 cols (name/company, email/phone, then full-width service/budget chips, textarea)
- Side cards: 4 cards stacked, each with bg color + border + icon + heading + copy + optional link
- Timeline: 4 steps (Day 0–7), each with italic day label + h3 + body text

---

## Client Deck (Blackspace Client Deck.html)

**12 slides, 1920×1080px, 16:9.**

1. **Cover** — Wordmark hero + floating stickers + stars
2. **Index** — 8 agenda items (2-col list)
3. **Who we are** — Tagline + team/project stats + hero text
4. **What we do** — 6 service cards (bento grid, varied sizes)
5. **Process** — 5 step cards (Call, Brief, Concept, Make, Ship)
6. **Selected work** — 7 project cards (bento, 1 hero)
7. **Case study — Okinawa** — Split screen (left: poster/gradient, right: text)
8. **AI tastefully** — Hero text + 4 info cards (2×2 grid)
9. **Team** — 6 team members (6-col) + note "5 more not pictured"
10. **Why us** — 6 numbered arguments (2-col, italic/bold mix)
11. **Engagements** — 6 pricing cards (3×2 grid, varied content)
12. **Let's make something** — Big hero text + contact info + two questions

**Speaker notes:** 12 full scripts (conversational, ~2min per slide).

---

## Tweaks System

**Location:** Floating panel, bottom-right, draggable (via tweaks-panel.jsx starter).

**Available tweaks:**
1. **Color theme** — Radio select: Classic / Citrus / Bubblegum / Marine / Neon pastel
   - Display: 5 color swatches (first pastels + 2 pops)
2. **Typography pairing** — Radio select: Acid+Gara+Helv / All Helvetica / Garamond-led
   - Display: name + font preview

**Persistence:** JSON block `/*EDITMODE-BEGIN*/ { ... } /*EDITMODE-END*/` in each page's `<script>`. Host rewrites on tweak change.

---

## Shared Kit (sp-kit.jsx)

Reusable components exported to `window`:

- `SP_THEMES` — 5 theme objects (name, paper, ink, pastels, pops)
- `SP_TYPE` — 3 type pairing objects (name, display, italic, body, fonts)
- `SPNav(T, F, active)` — Horizontal nav with logo + links
- `SPSticker(props)` — Single sticker with tape/torn/square/round variants
- `SPStatusSticker(props)` — Status-specific sticker (on-set, editing, etc.)
- `SPStar(size, color, rotate, top, right)` — CSS clip-path star
- `SPMarquee(T, F, words)` — Scrolling word list
- `SPSectionHead(T, F, num, title, titleIt, dek)` — Section heading (numbered + italic + subtext)
- `SPFooter(T, F)` — Footer (copyright + nav)

---

## File Structure

```
/
├── index.html                    # Home
├── work.html                     # Work index
├── studio.html                   # About
├── services.html                 # Services
├── contact.html                  # Contact form
├── Blackspace Client Deck.html   # 12-slide deck
├── contact-print.html            # Print-ready version
├── tweaks-panel.jsx              # Tweaks shell (starter)
├── sp-kit.jsx                    # Shared component kit
├── deck-stage.js                 # Deck nav/scaling (starter)
├── pages/
│   ├── home.jsx                  # SPHome component
│   ├── work.jsx                  # SPWork component
│   ├── studio.jsx                # SPStudio component
│   ├── services.jsx              # SPServices component
│   ├── contact.jsx               # SPContact component
│   └── app.jsx                   # SPApp (Tweaks wrapper)
├── directions/                   # Earlier explorations (archived)
└── DESIGN.md                     # This file
```

---

## CSS Architecture

**Global styles:**
- `:root` CSS variables for colors, fonts
- HTML/body reset (margin, padding, background)
- Generic box-sizing, font fallbacks
- `@media print` for PDF export (force colors, break-before: page, hide tweaks)

**Component styles:**
- Inline `style={}` in JSX (React convention)
- Named style objects (e.g., `stickerStyles`, `cardStyles`) to avoid collisions
- No external CSS files (all in HTML `<style>` or inline)

**Responsive:**
- Not fully responsive (designed 1440px fixed width for web, 1920×1080 for deck)
- `min-width: 1440px` on body to prevent mobile collapse
- Could be enhanced with CSS media queries if needed

---

## Interactions

**None (all static).** Hover states removed for print. Navigation via standard `<a>` tags.

**Tweaks:** Panel toggle shows/hides via host protocol (`window.parent.postMessage`).

**Deck:** Keyboard nav (← →), click thumbnails, print-to-PDF via browser.

---

## Performance Notes

- Fonts: Google Fonts (EB Garamond, Space Grotesk) — 3 weights each
- React + Babel used (not tree-shaken, full bundles loaded)
- No images (all SVG/CSS stars, color blocks, text)
- Tweaks panel adds ~20KB JS (starter component)

---

## Accessibility

- High contrast (ink on paper, reversed on dark sections)
- Large type (24px minimum, more on headings)
- Skip nav not implemented (could add)
- Semantic HTML (section, h1–h3, p, a, form, etc.)
- No ARIA labels yet (could enhance)

---

## Known Limitations & Future Work

1. **Not mobile-responsive** — Designed for desktop 1440px. Could add breakpoints.
2. **No form submission** — Contact form is styled only (no backend).
3. **No animations** — CSS transitions/animations removed for clarity. Could add on hover.
4. **Deck speaker notes** — Loaded but require `window.postMessage` coordination with host.
5. **Print quality** — Color accuracy depends on browser/printer. Tested Chrome.
6. **Accessibility** — WCAG 2.1 not fully compliant (no keyboard nav, limited ARIA).

---

## Design Decisions

### Why Sticker Pop?

1. **Personality:** Handmade, imperfect aesthetic matches studio vibe (small, agile, creative).
2. **Playfulness:** Tape + rotation + irreverent copy feels fresh vs. corporate.
3. **Affordance:** Stickers signal status (On Set, Editing) clearly.
4. **Contrast:** Pastel palette (soft, approachable) + pop colors (urgent, action) creates visual hierarchy.

### Why 5 Tweakable Themes?

Clients + internal team can swap palettes without rebuilding. Validates core design works across color variations.

### Why No Images?

Keeps the focus on typography + layout + stickers. Content studios can easily drop footage/photos into hero blocks.

### Why Serif + Sans Combo?

Italicized serif (Garamond) for emphasis + poetry. Grotesk (Space Grotesk / Helvetica) for readability + speed. Blended = writers + editors + design.

---

## Export & Delivery

- **Web:** 5 HTML pages, self-contained (no dependencies except fonts + React)
- **Deck:** Single 53KB HTML file, drag-and-drop presentation, print-to-PDF
- **PDF contact form:** Print-ready HTML, opens browser print dialog, save as PDF

---

## Contact & Credits

**Studio:** Blackspace® — A content studio  
**Location:** Koramangala 5th Block, Bengaluru 560095, IN  
**Email:** hello@blackspace.media  
**Founded:** 2023  
**Team:** 11 humans, 1 dog

**Design:** Sticker Pop system (2025)  
**Fonts:** Space Grotesk, EB Garamond, Helvetica Neue  
**Tools:** React 18, Babel, deck-stage.js, tweaks-panel.jsx

---

## Revision History

| Date | Version | Change |
|------|---------|--------|
| May 27, 2026 | 1.0 | Initial release: 5 web pages + client deck + PDF export |

