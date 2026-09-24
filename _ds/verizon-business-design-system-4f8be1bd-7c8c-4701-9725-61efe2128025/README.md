# Verizon Business Design System

A high-fidelity recreation of the visual foundations + components used across **Verizon Business (VBG)** marketing surfaces — the B2B side of Verizon (`verizonbusiness.com`). Built from the **Verizon Design System (VDS)** + VBG-specific design guidelines.

---

## Sources

This system was reconstructed from a single attached design audit file:

- **Figma:** `VBG Design Audit.fig` — a 2026-05 design-audit Figma containing the VDS Sticker Sheet (Style Index), VBG Design Guidelines, audited live screens (Gridwall, Plans, iPhone PDP), and a mobile journey map. 90 top-level frames across 13 pages.
- **Fonts:** `VerizonNHGDS-Light`, `VerizonNHGeDS-Regular/Bold`, `VerizonNHGeTX-Regular/Bold` — the brand's proprietary Neue Haas Grotesk derivative. Provided as `.otf` and `.ttf` uploads.

The audit also references the live site `verizonbusiness.com/products/wireless/...` — none of that markup was provided, so all UI here is a recreation from Figma + the .fig pseudocode.

> **Not provided** (and therefore not modeled in detail): the consumer-side `verizon.com` design (this is B2B only); the My Verizon dashboard / customer-portal UI; mobile-app surfaces beyond the buy-flow journey map.

---

## What's in here

Root files are the manifest. Open them in any order.

| File | What it is |
|---|---|
| `README.md` | This file — system overview, content + visual foundations, iconography. |
| `SKILL.md` | Agent skill entry point. Cross-compatible with Claude Code skills. |
| `colors_and_type.css` | All CSS variables + utility classes. Import this anywhere. |
| `fonts/` | Verizon NHG TTF webfonts. |
| `assets/` | Logos and brand marks (6 official Verizon Business wordmark SVGs in `assets/logos/`). |
| `preview/` | Individual cards that populate the Design System review tab. |
| `ui_kits/vbg-marketing/` | Interactive UI kit recreating the Verizon Business marketing surface (header, hero, gridwall, plan tiles, footer). |

---

## Content Fundamentals

The brand voice is **direct, plain-spoken, and offer-driven**. Verizon Business writes to a **time-poor SMB owner or IT decision-maker**, not a consumer.

**Tone.** Confident, efficient, never breezy. Sentences are short and load-bearing. Marketing rarely uses metaphor; it leads with the offer and the obligation. There is almost no humor.

**Person.** Mostly **second-person you** ("Don't want to buy a device? Get your device as a service…"). The brand voice is "we" implicitly but rarely referenced by name in body copy — the wordmark does the work.

**Casing.** Headlines are **sentence case**, not title case ("All business devices", "Bring your device", "Switch to Verizon Business, and we'll pay off your phone"). Buttons + nav are sentence case too ("Apply now", "Get started", "Log In", "Search Verizon"). The only uppercase is the **brand-red eyebrow label** ("PROSPECT", "DEVIATION", "CRITICAL") and occasional badge text.

**Numerals and offers.** Money lives in the copy. Numerals are concrete and front-loaded: "$200 off", "$50/line/mo.", "256 results", "$100 off select Tablet or Laptop." Slash-separated unit prices ("$/mo.", "$/line/mo.") and the abbreviation "mo." are standard.

**Promo language pattern.** "{Offer} — {qualifier}. {CTA}." e.g. *"Online Exclusive. New Verizon customers can get $200 off each new smartphone. Limited time offer. Details"*. The word **"Details"** is the universal trailing link.

**Emoji.** None. Emoji do not appear anywhere in the audit. Status indicators are tiny dot glyphs (●) or filled checkmarks, not emoji.

**Forbidden moves.** No exclamation points. No "delight" copy. No flowery adjectives. No first-person plural beyond "we'll pay off your phone" style promises tied to a concrete offer.

**Sample copy in the wild:**
- *"All business devices"* (page H1)
- *"You may qualify for device financing"* + *"Apply now"* (banner)
- *"Verizon Business Complete. Don't want to buy a device? Get your device as a service with an unlimited plan, 24/7 support, device protection and more. Starting as low as $50/line/mo."* (promo card)
- *"Bring your device and save 50%"* (cross-sell)
- *"Switch to Verizon Business, and we'll pay off your phone and give you a new one."* (hero promo)

---

## Visual Foundations

**Surfaces.** Three primary canvases:
1. **White** (`#FFFFFF`) — default, used for product grids, modals, forms.
2. **Stone** (`#F8F3E9`) — the warm cream that defines the B2B brand. Used for page heroes, full-bleed promo sections, audit/document chrome. This is the single most recognizable VBG surface color and it appears on almost every above-fold marketing hero.
3. **Black** (`#000000`) — section backgrounds + the "Verizon Business Complete" upsell cards. White type, red accents.
4. **Neon Yellow** (`#F8FF3C`) — exclusively for the **top promo banner**. Red text on bright yellow, full viewport width, ~36–48px tall. Never used for buttons, never tiled into content blocks.

**Color use.** The palette is wide (10-step ramps for blue/green/yellow/orange/pink/purple/iris) but **product UI is monochrome**: black text, gray secondary text, white surfaces, and **red is reserved for one job at a time** — the brand wordmark, the page H1, eyebrows on plan tiles, error states, and "saving" pricing accents. Multicolor ramps only appear in dataviz, avatars, and infographic illustrations. **No gradients in product UI.** No bluish-purple anywhere.

**Type.** The proprietary **Verizon NHG** typeface (Neue Haas Grotesk Display + Text variants). Three sub-families:
- `NHG DS` (Light) — oversized hero numerals only (50–144px). Light weight.
- `NHG eDS` (Regular / Bold) — titles, body, buttons. The workhorse.
- `NHG eTX` (Regular / Bold) — micro text, legal, footnotes (12px and under).

The scale tops out at **Feature XLarge 144px / 136 lh / Bold** for marketing hero numerals and descends through `Feature → Title → Body → Micro`. Tracking is **0** everywhere except buttons + eyebrows (**+0.5 px**). Sentence case headlines. Underline appears only on text links (`Details`, breadcrumb separators).

**Backgrounds.** Real **photography** for hero shots — products on stone or against muted-blue landscapes, slight cool grade, no overlays. Stone backgrounds are flat; not textured. No repeating patterns, no hand-drawn illustrations, no full-bleed gradients.

**Animation.** Minimal. Verizon UI relies on cuts and snap-replacement rather than animation: tab swaps happen instantly, modal panels fade ~150 ms, carousel slides translate-X with a `cubic-bezier(0.4, 0, 0.2, 1)` ease-out feeling. No bouncing, no overshoot, no scroll-jacked motion. Page-level animation is absent.

**Hover states.** Buttons gain a slightly heavier label weight on hover (the system uses a denser optical variant rather than a color change — the fill stays the same black). Text links underline on hover. Secondary buttons fill with subtle gray. No scale, no shadow lift.

**Press / active states.** Same fill, same border, no movement. Verizon avoids "press depth" effects — the design language is flat.

**Borders.** A single 1px hairline at `rgba(170,168,163,0.4)` — a translucent stone-gray — defines all card edges, dividers, input fields, tab containers. Strong borders (1px solid black) appear only on secondary buttons and the focused tab underline. No double borders, no inset borders.

**Shadows.** Used sparingly, almost imperceptibly. The system's signature is `0 16px 24px rgba(0,0,0,0.02)` — a 2%-opacity, generous drop that gives tiles a soft float without darkening. Hover lifts to 6–10% but stays small. No inner shadows. **No colored glows.**

**Cards / tiles.** Rounded 8px corners, white fill, hairline border, near-invisible drop shadow. Tiles can be aspect-ratio-locked (1:1, 2:3) for product imagery. Plan tiles use either white or stone backgrounds and stack inside a black-bordered group container.

**Corner radii.**
- `2px` — flat UI chrome, dividers (subtle softening).
- `8px` — the default for tiles, cards, surfaces, banners.
- `9999px` — pill-shaped buttons (all sizes), filter chips, badges.
- `40px` — large display sheets / sticker sheets.

**Transparency + blur.** No backdrop blur anywhere. Transparency is used for borders (`rgba(170,168,163,0.4)`) and selectable card overlays. **No frosted glass.**

**Layout rules.**
- 12-column grid at desktop (1440), 4-column at mobile (390).
- Page max width is implicit — content blocks stretch but text columns cap around 1140–1280px.
- The persistent top header is **two-tier**: a 32px utility bar (Personal | Business | Contact us | Support | Stores) above a 56–64px primary nav (logo + Mobile / Internet / Solutions / Insights + Log In + Search).
- Below the nav: optional **yellow promo banner**, then optional **stepper** (4-step buy flow: Select device → Select plan → Review cart → Checkout), then breadcrumbs, then the page H1.

**Imagery vibe.** Slightly cool, slightly desaturated. Products shot on light stone or neutral surfaces. People shots are sparse and businesslike. No grain, no film looks, no warmth filters. The mood is professional, not lifestyle.

**The signature visual move.** Big red sentence-case H1 on stone background, with a yellow promo above and a black product-grid below. That stack — *yellow strip, stone hero, white grid* — is the Verizon Business homepage formula and recurs across every category page.

---

## Iconography

Verizon uses a **proprietary monoline icon set** of ~1,200+ glyphs (audit shows them in the VDS Icons sheet). They are:
- Strictly **monochrome** (black on light, white on dark — never multi-color, never tinted)
- **1px stroke**, geometric, rounded line caps but not too soft
- Designed at four sizes — micro (12px), small (16px), medium (24px), large (32px)
- Cover hardware, networking, finance, navigation, status, accessibility, and SMB-specific concepts (POS terminals, sim swap, dispatch, fleet)
- Always rendered as inline SVG in production; no PNG icons, no icon font

**Substitution flag.** The audit file does not export the icons as individual SVG files we can copy out — they live as Figma symbols. Where the design calls for an icon, this kit substitutes **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) which match the monoline / 1px-stroke / rounded-cap aesthetic closely. **Replace `<i data-lucide="...">` references with the real Verizon icon when shipping production code.**

**Logo.** Six official Verizon Business 2025 wordmark lockups live in `assets/logos/`:

- `verizon-business-black.svg` — default on light surfaces
- `verizon-business-red.svg` — single-color red on light
- `verizon-business-white.svg` — for dark surfaces
- `verizon-business-stone.svg` — for stone surfaces
- `verizon-business-yellow.svg` — for the neon-yellow promo strip + on red surfaces
- `verizon-business-glow.svg` — glow-treatment lockup for dark backgrounds

The shipped SVGs from the brand portal referenced CSS classes that weren't defined in the export, so I rewrote each file with explicit `fill="…"` attributes and a `display="none"` on the clearspace marker group. Visual result is identical; the files now render correctly in every browser, in `<img>` tags, and in offline renderers.

**Emoji.** Not used.

**Unicode glyphs.** Occasionally — `●` (status dot), `✓` (success), `›` (breadcrumb separator at small sizes). Bullet points in lists are typography-driven, not iconic.

---

## How to use this system

In an HTML mock or prototype:

```html
<link rel="stylesheet" href="colors_and_type.css">
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<h1 class="vds-feature-md" style="color: var(--vds-brand-red)">All business devices</h1>
<p class="vds-body-md" style="color: var(--vds-element-secondary)">256 results</p>
<button class="vbg-btn vbg-btn--primary">Apply now</button>
```

Component CSS lives in the UI kit (`ui_kits/vbg-marketing/styles.css`). For one-off mocks you can import that too.

---

## Caveats + next steps

- **Icons** are CDN-substituted (Lucide). The real Verizon proprietary monoline set is not in the binary as exportable SVGs.
- **Photography** is not provided. Image slots in mocks are kept as placeholders or use neutral stock substitutes.
- The audit covers the **marketing / buy-flow surfaces only**. Authenticated dashboards, My Verizon, and the consumer (`verizon.com`) brand are out of scope.
