# Vai TV — Design System

The single source of truth for every size on the website. All values are defined
as CSS custom properties in `src/css/custom.css` and consumed via `var(--vt-*)`.

**Core rule:** No arbitrary values. Every size below belongs to a fixed scale.
Anything not on these scales is either (a) a documented optical/decorative
exception listed in §12, or (b) a bug.

---

## 1. Typography Scale

One family — Inter. Discrete, fixed steps. No size lives off this ladder.

| Token | Role | Size |
|---|---|---|
| `--vt-fs-display-xl` | Display XL (hero) | **72px** |
| `--vt-fs-display-l` | Display L | **64px** |
| `--vt-fs-display-m` | Display M | **56px** |
| `--vt-fs-h1` | H1 | **48px** |
| `--vt-fs-h2` | H2 / section titles | **40px** |
| `--vt-fs-h3` | H3 | **32px** |
| `--vt-fs-h4` | H4 | **24px** |
| `--vt-fs-h5` | H5 | **20px** |
| `--vt-fs-body-lg` | Body Large / leads | **18px** |
| `--vt-fs-body` | Body | **16px** |
| `--vt-fs-sm` | Small | **14px** |
| `--vt-fs-xs` | Caption | **12px** |

**Aliases** (stable API, no new sizes): `--vt-fs-display → display-xl`,
`--vt-fs-lead → body-lg`.

**Weights:** 400 `regular` · 500 `medium` · 600 `semibold` · 700 `bold` · 800 `heavy`.

**Tracking (letter-spacing):** -0.04em `tight` (display) · -0.025em `snug` (headings)
· 0 `normal` (body) · 0.08em `wide` · 0.14em `wider` (eyebrows).

**Leading (line-height):** 1.05 `tight` · 1.2 `snug` · 1.6 `normal` · 1.7 `relaxed`.

### Responsive type steps (stay on the scale)

| Breakpoint | Overrides |
|---|---|
| ≤ 1024px | Display XL → 56 · Display L → 48 · H1 → 40 |
| ≤ 640px | Display XL/L/M → 40 · H1/H2 → 32 · H3 → 24 |

---

## 2. Spacing Scale

The ONLY spacing values. Used for all padding, margin, and gap.

| Token | Value |
|---|---|
| `--vt-space-1` | **4px** |
| `--vt-space-2` | **8px** |
| `--vt-space-3` | **12px** |
| `--vt-space-4` | **16px** |
| `--vt-space-6` | **24px** |
| `--vt-space-8` | **32px** |
| `--vt-space-12` | **48px** |
| `--vt-space-16` | **64px** |
| `--vt-space-24` | **96px** |
| `--vt-space-32` | **128px** |

**Off-scale legacy names snap to the nearest allowed step** (no new values):
`--vt-space-5 → 24` · `--vt-space-10 → 48` · `--vt-space-20 → 64`.

---

## 3. Layout & Section Scale

| Token | Role | Value |
|---|---|---|
| `--vt-container` | Max content width | **1280px** |
| `--vt-container-narrow` | Reading column / sub width | **768px** |
| `--vt-gutter` | Page side gutter | **24px** (space-6) |
| `--vt-grid-gap` | Default grid gap | **24px** (space-6) |
| `--vt-section-sm` | Section rhythm — Small | **64px** (space-16) |
| `--vt-section-y` | Section rhythm — Normal (default) | **96px** (space-24) |
| `--vt-section-lg` | Section rhythm — Large | **128px** (space-32) |

**Responsive (≤1024px):** `section-y → 64` · `section-lg → 96`.

---

## 4. Grid System

12-step-free, semantic column counts that collapse on documented breakpoints.
All column gaps come from the spacing scale (default `--vt-grid-gap` = 24).

| Block | Desktop | Tablet | Mobile |
|---|---|---|---|
| Stats bar | 4 cols | — | 2 cols (≤700) |
| Features | 3 cols | — | 1 col |
| Benefits | 3 cols | 2 (≤900) | 1 (≤540) |
| How It Works | 4 cols | 2 (≤900) | 1 (≤540) |
| Pricing | 3 cols | — | 1 (≤560) |
| Hero poster row | 5 cols | 4 (≤768) | 4 |
| Devices | infinite marquee (auto-scroll) | | |

---

## 5. Container Widths

| Width | Value | Used by |
|---|---|---|
| Max container | **1280px** | global page width |
| Narrow column | **768px** | section subtitles, FAQ-adjacent copy |
| Hero subtitle | 552px | optical line-length (see §12) |
| Hero mockup | 940px | product illustration (see §12) |

---

## 6. Icon & Control Size Scale

Square interactive/visual surfaces (icon tiles, avatars, nodes, toggles).

| Token | Value |
|---|---|
| `--vt-control-xs` | **32px** |
| `--vt-control-sm` | **40px** |
| `--vt-control-md` | **48px** |
| `--vt-control-lg` | **56px** |
| `--vt-control-xl` | **64px** |
| `--vt-control-2xl` | **72px** |

**Glyph (SVG inside) scale:**

| Token | Value |
|---|---|
| `--vt-icon-xs` | **16px** |
| `--vt-icon-sm` | **20px** |
| `--vt-icon-md` | **24px** |
| `--vt-icon-lg` | **32px** |

### Where each control size is used

| Surface | Token | Size |
|---|---|---|
| Navbar menu toggle | `control-sm` | 40 |
| Testimonial avatar | `control-sm` | 40 |
| Footer social button | `control-sm` | 40 |
| Showcase action button | `control-xs` | 32 |
| Features icon tile | `control-lg` | 56 |
| Benefits icon tile | `control-lg` | 56 |
| How It Works step node | `control-lg` | 56 |
| Devices logo tile | `control-xl` | 64 |
| Devices logo glyph | `icon-lg` | 32 |

---

## 7. Radius Scale

Exactly four steps plus pill. No other rounding exists.

| Token | Value | Typical use |
|---|---|---|
| `--vt-r-sm` | **8px** | small tiles, inputs, social buttons |
| `--vt-r-md` | **12px** | feature card inner, nav toggle, marquee tiles |
| `--vt-r-lg` | **16px** | cards |
| `--vt-r-xl` | **24px** | large panels (stats bar, reseller) |
| `--vt-r-pill` | **999px** | buttons, eyebrows, badges |

**Aliases:** `--vt-r-xs → 8` · `--vt-r-2xl → 24`. Circular elements use `50%`.

---

## 8. Button System

One base, three intents, three sizes. Radius = pill. Weight = 600. Line-height 1.

| Size | Token | Padding | Font |
|---|---|---|---|
| Small | `.vt-btn-sm` | 8 / 16 (space-2 / space-4) | 14 |
| **Base** | `.vt-btn` | 12 / 24 (space-3 / space-6) | 14 |
| Large | `.vt-btn-lg` | 16 / 32 (space-4 / space-8) | 16 |
| Hero CTA | `.ctas .vt-btn` | 16 / 24 (space-4 / space-6) | 16 |

**Intents:**

| Class | Style |
|---|---|
| `.vt-btn-primary` / `.vt-btn-light` | solid white, dark text — highest intent |
| `.vt-btn-secondary` | accent gradient fill |
| `.vt-btn-ghost` | translucent surface + hairline border — low intent |

Heights are derived from padding + line-height (no fixed pixel heights).

---

## 9. Card System

One card style site-wide (`.vt-card`).

| Property | Value |
|---|---|
| Radius | **16px** (`--vt-r-lg`) |
| Border | 1px hairline (`--vt-border`) |
| Surface | `--vt-surface` on elevation plane 2 |
| Shadow | `--vt-e2` |
| Light-catch ring | `::before` 1px gradient inset |

**Pricing card** (the only card with a bespoke internal layout) uses standard
`.vt-card` chrome plus padding `32 / 24` (space-8 / space-6); grid gap 24;
grid margin-top 48.

---

## 10. Component Sizes (primitives)

| Primitive | Spec |
|---|---|
| Eyebrow `.vt-eyebrow` | padding 8 / 12 (space-2 / space-3) · font 12 · pill · dot 5px |
| Section title `.vt-section-title` | font H2 (40) · line-height snug · margin 0 |
| Section subtitle `.vt-section-sub` | font body-lg (18) · line-height normal · max-width 768 · margin 0 |
| Section heads `.head` | flex column, gap from spacing scale (24 / 12) |

---

## 11. Elevation Scale

Neutral ambient shadow only; higher plane = softer/larger.

| Token | Plane | Alias |
|---|---|---|
| `--vt-e0` | none | — |
| `--vt-e1` | resting | `shadow-sm`, `shadow-btn` |
| `--vt-e2` | card | `shadow-md` |
| `--vt-e3` | raised | `shadow-card`, `shadow-accent` |
| `--vt-e4` | overlay | `shadow-lg` |
| `--vt-e5` | hero mockup | — |

---

## 12. Documented exceptions (intentional, non-tokenized)

These are **not** UI sizes and deliberately sit outside the scales above. They
are bespoke optical / decorative geometry, listed here so the system stays honest.

- **Ambient glow blobs** (radial-gradient art): Hero spotlight 1100×720,
  Devices glow 900×520, Reseller glow 600×320. Pure light, no structural role.
- **Hero faux-dashboard mockup internals**: window bar 42, traffic dots 11,
  play button 38, feature panel 150 (124 mobile), poster strips. This is an
  illustration of the product, not a reusable component.
- **Hairline/decorative strokes**: connector line 2px, progress/marquee strips
  5–6px. Sub-token rendering details.
- **Optical line-length caps**: 552 (hero sub), 820 (FAQ), 540 / 340 / 280
  (copy columns). Bounded for readability, not part of the layout grid.

---

## 13. Responsive breakpoints

| Breakpoint | Scope |
|---|---|
| **1024px** | Global type + section rhythm step-down |
| **640px** | Global type step-down |
| 996 / 900 / 768 / 760 / 700 / 560 / 540 / 480 | Component-local layout reflow only |

Global type/rhythm is governed solely by 1024 and 640; component breakpoints
only change column counts and wrapping, never introduce new sizes.
