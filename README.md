# anthonymahler.ch

The website of Anthony Mahler, translator and editor. It is a single page,
`index.html`, with no build step: open it in a browser and it works.

## What's where

| Path | What it is |
| --- | --- |
| `index.html` | The whole site: text, layout and the scrolling cover bands |
| `images/covers/` | Book covers, named `band1-01.jpg`, `band1-02.jpg`, … by band and position |
| `images/portrait.jpg` | Portrait for the About section |
| `samples/` | PDF sample translations that some covers link to |
| `PROJECT-BRIEF.md` | The design brief |

## Changing things

All edits happen in `index.html`. On GitHub, open the file and click the
pencil icon to edit it in the browser.

- **Reorder covers:** each cover is one line starting with
  `<a class="cover-link" …>`. Move lines up or down inside a band, or
  between the four `BAND` blocks. Band 1 is the top row.
- **Change where a cover links:** edit the `href="…"` on that line.
- **Text:** the Services, About and Contact sections are marked with
  comments such as `<!-- ── Services ── -->`.
- **Scrolling speed:** near the bottom, `const DRIFT_SPEED = 28;`
  (pixels per second; lower is slower).

## Covers without a link yet

These covers are shown but not clickable because no publisher page has been
set. To add one, change `<span class="cover-link">…</span>` on that line to
`<a class="cover-link" href="LINK" target="_blank" rel="noopener">…</a>`.

- *Vacillating Voices* (Frauke Berndt, diaphanes)
- *Van Gogh and the Stars*
- *Master/s*
- *Vincenzo Bellini on Stage and Screen*
- *Textile Terms: A Glossary*
- *What Images Do*
- *Text as Source and Material in Contemporary Music Theatre*
- caa.reviews
- *Zeitschrift für Kunstgeschichte* 4.2019

## Sample PDFs

Some covers link to sample PDFs still hosted on the old Wix site
(`https://www.anthonymahler.ch/_files/…`). Those links stop working once the
domain moves. Before cancelling Wix, put the PDFs in `samples/` and point
the covers' links there.

## Putting it online (GitHub Pages, free)

1. In this repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, pick
   `main` and `/ (root)`, and save. After a minute the site is live at
   `https://aemahler.github.io/mahler-website/`.
3. To use anthonymahler.ch: on the same page, enter `anthonymahler.ch` under
   **Custom domain**. Then, at the company where the domain is registered,
   set these DNS records (and remove the old Wix ones):
   - four `A` records for `@` pointing to `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - one `CNAME` record for `www` pointing to `aemahler.github.io`
4. Once the domain works, tick **Enforce HTTPS**.

Before cancelling Wix, make sure every sample PDF has been copied into
`samples/` and the covers point to it. Links that start with
`https://www.anthonymahler.ch/_files/` stop working once the domain moves.
