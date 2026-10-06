# Anthony Mahler — Website Redesign Brief

## Overview
Redesign of anthonymahler.ch, a freelance translator/editor portfolio site. Currently hosted on Wix (no template). Rebuilding as a standalone HTML site for better performance, no vendor lock-in, and no subscription fees.

## Current site
- URL: https://www.anthonymahler.ch/
- Single-page layout: Hero header → Services → About (with portrait photo) → Published Translations gallery → Contact
- Services listed: Translating (DE→EN, humanities/social sciences) and Copyediting
- Gallery: ~25 book covers linking to publisher pages or downloadable PDF samples
- Languages: German, English, French, Italian

## Design direction
- **Ambition level:** Full portfolio rethink — design-forward, let the covers and publishers tell the story
- **Visual style:** Modernize with cleaner typography and better spacing. Think editorial/bookish, not corporate. Closer to how an architect or designer presents work.
- **Tone:** Refined, confident, literary. The site should signal "this person works in the world of books and art."
- **Typography:** Serif display font (prototype uses Cormorant Garamond) + clean sans-serif body (prototype uses Jost). Open to alternatives.
- **Color:** Warm, muted palette. Prototype uses parchment background (#f5f2ed) with dark text (#1a1a1a).

## Key design decisions made

### Hero section: Scrolling book cover bands
- **4 horizontal bands** of book covers, filling the viewport
- Bands scroll continuously: left, right, left, right (alternating)
- Slow, ambient drift speed — not hectic
- **Pause on hover** (desktop)
- Covers link to publisher pages or PDF samples (same as current site)
- **No captions** visible by default — covers speak for themselves
- Hover overlay with author/title/publisher was discussed but **deferred for later**
- Mobile: no overlay, tap goes straight to link
- **Bands ordered by importance:** Band 1 = most significant/recent work, Band 4 = earlier/minor work
- Anthony will provide cover images named: band1-01.jpg, band1-02.jpg, band2-01.jpg, etc.
- Order within each band = display order; strongest cover first (visible on page load)
- Aim for 6–10 covers per band, ~25–40 total
- Cover height: ~220px desktop, ~150px tablet, ~120px mobile

### Below the bands
- Sections: Services → About → Contact (order TBD, but covers come first)
- **Services:** Need updating — current descriptions undersell the work. Should emphasize specificity: full monographs, exhibition catalogues, art theory, philosophy, and the caliber of publishers.
- **About/bio:** Needs updating. Anthony will provide corrected bio details. (Note: I incorrectly assumed academic roles — wait for his input.)
- **Contact:** Keep simple. No pricing on the site — the work quality and publisher names justify rates before any conversation.
- A short note about typical engagement process was suggested: "I typically begin with a sample translation of 2–3 pages so we can assess fit."

### Downloadable samples
- Some covers link to PDF samples (currently hosted on Wix). These PDFs should be hosted alongside the site in a /samples/ folder.
- Other covers link to external publisher pages.
- Anthony will specify which covers link where.

## Content still needed from Anthony
1. **Updated bio** — current roles, how he wants to describe himself
2. **Services to add or revise** — beyond translating and copyediting
3. **Complete publication list** with tier assignments (bands 1–4)
4. **Cover images** — named band1-01.jpg etc.
5. **Link destinations** for each cover (publisher URL or PDF sample)
6. **Portrait photo** — keep current or provide new one
7. **PDF samples** to host locally

## Hosting plan
- Static HTML site (single file or small folder with images + PDFs)
- Recommended: GitHub Pages or Netlify (both free)
- Point existing domain anthonymahler.ch to new host
- Setup walkthrough needed — Anthony has no programming experience

## Prototype
- A working prototype of the hero section exists (index.html in this project)
- Uses cover images hotlinked from the current Wix site as placeholders
- Band assignments are rough guesses — need Anthony's input to reorder
- Rest of site (services, about, contact) not yet built

## Technical notes
- Pure HTML/CSS/JS, no framework needed
- Google Fonts for typography
- CSS animations for scrolling bands (keyframes, translateX, duplicated DOM for seamless loop)
- Responsive: 3 breakpoints (desktop, tablet, mobile)
- All images lazy-loaded
- No build tools required
