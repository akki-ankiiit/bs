# Blackspace Design System

This document outlines the core visual language, themes, and UI patterns used in the Blackspace web platform. Use this as a reference guide to maintain consistency when designing and developing new properties within the Blackspace ecosystem.

## 1. Typography

The platform heavily relies on strong typographic contrast, mixing modernist sans-serifs with classic serif italics to create a premium, editorial aesthetic.

### Font Stacks
We primarily use the **"Acid™ · Garamond · Helvetica"** stack to create our signature look:
- **Display (`F.display`)**: `"Space Grotesk", "Acid Grotesk", "Helvetica Neue", sans-serif`
  - Used for massive H1/H2 headings.
  - Tightly tracked (`letterSpacing: '-0.04em'` or `-0.02em`).
  - Tight line height (`lineHeight: 0.9` or `0.94`).
  - Bold weights (`fontWeight: 700` or `500`).
- **Italic (`F.italic`)**: `"EB Garamond", "Apple Garamond", Garamond, serif`
  - Used for contrast within Display headings, large numbers (01, 02), and short descriptors (`dek`).
  - Always `fontStyle: 'italic'`.
  - Regular weight (`fontWeight: 400`).
- **Body (`F.body`)**: `"Helvetica Neue", Helvetica, Arial, sans-serif`
  - Used for micro-copy, navigational elements, and standard text.
  - Often uppercase with wide tracking for labels (`letterSpacing: '0.15em'`).

### Typographic Patterns
- **The "Hero Mix"**: Standard `Display` font mixed with an `Italic` word for emphasis (e.g., `<h2 style={F.display}>The <span style={F.italic}>Deliverables.</span></h2>`).
- **Eyebrow Labels**: Small, uppercase sans-serif text used above large headings (e.g., `fontSize: 12`, `letterSpacing: '0.2em'`, `textTransform: 'uppercase'`, `opacity: 0.5`).

---

## 2. Color Themes

The platform is built on a themeable architecture that swaps background/ink colors and pastel accents based on the selected theme.

### Theme Dictionary

| Theme Name | Paper (Bg) | Ink (Text/Inverted Bg) | Primary Pop | Secondary Pop | Tertiary Pop |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Classic** | `#f2ede2` (Warm Off-White) | `#0a0a0a` (Deep Black) | `#FF4D1A` (Neon Orange) | `#FF2E8B` (Hot Pink) | `#2E4CFF` (Electric Blue) |
| **Citrus** | `#f5f0e4` (Cream) | `#111111` (Black) | `#FF6A00` (Orange) | `#E4003A` (Crimson) | `#007A3D` (Forest) |
| **Bubblegum** | `#f6efe7` (Blush) | `#0c0c0c` (Black) | `#FF2E8B` (Hot Pink) | `#6A2EFF` (Purple) | `#FF4D1A` (Neon Orange) |
| **Marine** | `#eee8db` (Sand) | `#0a1a24` (Navy) | `#0040D8` (Royal Blue) | `#FF4D1A` (Neon Orange) | `#009A68` (Emerald) |
| **Neon Pastel**| `#f0ece0` (Cool Off-White) | `#0a0a0a` (Deep Black) | `#FF2E8B` (Hot Pink) | `#C8FF00` (Acid Green) | `#2E4CFF` (Electric Blue) |

*Each theme also contains an array of 5 complementary **pastels** used for cards, stickers, and subtle backgrounds.*

### Color Application Rules
- **High Contrast**: Sections should alternate dramatically between `Paper` background with `Ink` text, and `Ink` background with `Paper` text.
- **Borders**: Divider lines should be subtle, usually `1px solid rgba(0,0,0,0.1)` on light themes, or `1px solid rgba(255,255,255,0.1)` on dark themes.
- **Accents**: Pop colors (`popA`, `popB`, `popC`) should be used sparingly for "Stickers", specific italicized words in hero headers, or interactive hover states.

---

## 3. UI Patterns & Components

### 3.1. Glassmorphism & Overlays
- **Modals & Sticky Headers**: Use heavily blurred, semi-transparent backgrounds to create depth.
  - CSS: `background: rgba(0,0,0,0.8)`, `backdropFilter: 'blur(10px)'`.
- **Navigation Buttons**: Floating buttons (like the carousel arrows or modal close buttons) should use subtle glassmorphism: `background: rgba(255,255,255,0.1)`, `backdropFilter: 'blur(10px)'`, `border: 1px solid rgba(255,255,255,0.3)`.

### 3.2. Motion & Interaction
- **Hover Micro-interactions**: Elements like cards and buttons should respond to mouse hover with smooth, physical-feeling transformations.
  - Hover Lift: `transform: translateY(-4px)`
  - Hover Shadow: `boxShadow: 0 12px 24px rgba(0,0,0,0.1)` (for light mode) or `rgba(255,255,255,0.15)` (for dark mode).
  - Transitions: Always use smooth easing: `transition: 'all 0.3s ease'`.
- **Parallax**: Large headings should translate vertically on scroll. Use the `SPParallax` component with a `speed` of `0.04` to `0.06`.

### 3.3. Layout Structures
- **Section Headers (`SPSectionHead`)**: 
  - Desktop: 3-column grid (`140px 1fr 300px`), aligned `flex-start`.
  - Mobile: 1-column stack.
  - Margin Bottom: Huge breathing room (e.g., `100px` on desktop, `40px` on mobile).
- **Service Deliverables Grid**:
  - CSS Grid with 4 columns on desktop, 1 column on mobile.
  - Cards span different numbers of columns (`gridColumn: span 1` vs `span 2`) to create an asymmetric, masonry-like "bento box" aesthetic.
- **Galleries**:
  - Use `columnCount` for Pinterest-style masonry grids.
  - Use `scrollSnapType: 'x mandatory'` for horizontal swiping carousels.

### 3.4. Decorative Elements ("Stickers")
- The UI uses absolute-positioned SVG "stickers" (e.g., `SPStatusSticker`, `SPStar`) layered over the content using high `zIndex`. 
- Stickers usually feature jagged/tape edges, a primary `Pop` color background, and rotated slightly (`rotate: 8deg` or `-5deg`) to look pasted on manually.
