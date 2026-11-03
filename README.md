# anthonymahler.ch

The website of Anthony Mahler, translator and editor: one page in English
(`index.html`) and the same page in German (`de/index.html`). There is no build
step: open either file in a browser and it works.

## What's where

| Path | What it is |
| --- | --- |
| `index.html` | The English page: text and the scrolling cover bands |
| `de/index.html` | The German page (same layout, German text) |
| `css/site.css`, `js/site.js` | Design and cover-band behaviour, shared by both pages |
| `CNAME` | Tells GitHub Pages the site's domain, anthonymahler.ch |
| `images/covers/` | Book covers, named `band1-01.jpg`, `band1-02.jpg`, … by band and position |
| `images/portrait.jpg` | Portrait for the About section |
| `images/icons/`, `favicon.ico` | The ampersand browser-tab and home-screen icons |
| `images/og-image.jpg` | The preview image shown when the link is shared |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Help search engines and AI assistants find and describe the site |
| `PROJECT-BRIEF.md` | The design brief |

## Changing things

Text and covers live in `index.html` and `de/index.html`. **Make every
change in both files** (the cover lines are identical in both). On GitHub,
open a file and click the pencil icon to edit it in the browser.

- **Reorder covers:** each cover is one line starting with
  `<a class="cover-link" …>`. Move lines up or down inside a row, or
  between the four `ROW` blocks. The most important titles are spread
  evenly across all four rows, alternating with lesser ones, because
  visitors don't necessarily look at the top row first.
- **Change where a cover links:** edit the `href="…"` on that line.
- **Text:** the Services, About and Contact sections are marked with
  comments such as `<!-- ── Services ── -->`.
- **Scrolling speed:** in `js/site.js`, `const DRIFT_SPEED = 22;`
  (pixels per second; lower is slower).

## Covers without a link yet

These covers are shown but not clickable because no publisher page has been
set. To add one, change `<span class="cover-link">…</span>` on that line to
`<a class="cover-link" href="LINK" target="_blank" rel="noopener">…</a>`.

- CIHA 2012 Nürnberg
- caa.reviews

## Putting it online (GitHub Pages, free)

1. In this repository on GitHub, go to **Settings → Pages**. (GitHub Pages is
   free for public repositories; a private one needs a paid plan, or can be
   made public under **Settings → General**, at the bottom.)
2. Under **Build and deployment**, choose **Deploy from a branch**, pick
   `main` and `/ (root)`, and save. After a minute the site is live at
   `https://aemahler.github.io/mahler-website/`.
3. To use anthonymahler.ch: on the same page, enter `anthonymahler.ch` under
   **Custom domain** and save. Then, wherever the domain is managed (if it
   was bought through Wix, that is in the Wix dashboard under **Domains**),
   replace the Wix DNS records with:
   - four `A` records for `@` pointing to `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - one `CNAME` record for `www` pointing to `aemahler.github.io`
4. Once the domain works (this can take a few hours), tick **Enforce HTTPS**.
5. Only then cancel the Wix site plan. If the domain itself is registered
   with Wix, keep paying for the domain, or transfer it to another
   registrar first.

The page's search and link-preview settings already use
`https://anthonymahler.ch/` as the site's address, so previews show the
picture once the domain points here.

## Being found on Google and by AI assistants

The page already carries what search engines and AI tools read: a clear
title and description, a structured profile (name, location, languages,
services), `sitemap.xml`, and `llms.txt`. After the domain is live:

1. **Google Search Console** (search.google.com/search-console): add
   `anthonymahler.ch`, verify it, and submit `https://anthonymahler.ch/sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): sign in, import the site from
   Google Search Console. Bing also feeds ChatGPT and Copilot search.
3. **Google Business Profile** (business.google.com): create a profile as a
   translator in Basel. This is what puts you on Google Maps and in "translator
   near me" results. A service-area business can hide its street address.
4. **Link to the site from everywhere you have a profile:** University of Basel
   staff page, LinkedIn, Academia.edu, Google Scholar, ORCID, and translator
   directories such as ASTTI (Swiss association), DVÜD or ProZ. Links from
   other sites are the strongest signal for search engines.
5. **Ask past clients** (publishers, museums, authors) to credit and link you
   where they can, for example in a book's online listing or a museum's
   catalogue page.
