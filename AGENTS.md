# AGENTS.md

Portfolio site for Darsh Gangakhedkar. The git repo is **not** at the workspace root — it is
`C:\Users\darsh\Documents\darsh-portfolio\Darshmello.github.io` (branch `main`).

It is a hand-written static site: **no framework, no build step, no package manager, no tests, no
linter, no CI.** `package.json`, `src/`, `public/`, `build/`, `README.md` are the *deleted* React
predecessor and still appear as tracked deletions until the static site is first committed. Don't
run `npm install`/`npm test` here; there is nothing to run.

Four files are the whole site:

| Path | Role |
|---|---|
| `index.html` | All markup and section order |
| `assets/css/main.css` | All styling; design tokens are the single `:root` block at the top |
| `assets/js/main.js` | All behaviour **and most of the page content** (see below) |
| `.nojekyll` | Load-bearing: without it GitHub Pages' Jekyll step drops `assets/` |

## Content lives in JS, not HTML

`main.js` holds the `timeline` and `work` arrays and renders them into `#timeline` / `#workList`.
Editing `index.html` alone will not change experience or project content, and with JS disabled those
regions are empty. This is a known, accepted tradeoff — do not "fix" it while restyling.

Each `work` entry is `kind: "arch"` (renders its `flow` array as a numbered architecture diagram) or
`kind: "video"` (renders a media slot keyed by the entry's `slug`). A `video` entry needs three
files whose names match `slug`:

- `assets/video/<slug>-loop.mp4` — silent inline autoplay loop, 1280x720
- `assets/video/<slug>.mp4` — full recording, opened by the "Watch the full demo" lightbox button
- `assets/video/<slug>.jpg` — poster frame

Images are pre-sized WebP: photos `<slug>-{480,900,1600}.webp`, portrait
`portrait-{480,760,1100}.webp`. The display face is the self-hosted `assets/fonts/tenor-sans-latin.woff2`.

## Honesty constraints are product requirements

The badge labels are claims and must stay true: `Recorded demo`, `Recorded run`, `Architecture
only`. Two cards (ModelGate, Apple Container MCP Eval Harness) deliberately have **no** demo — never
add a placeholder screenshot or fabricated recording for them. Copy metrics come from the résumé; do
not invent numbers. TEAMUP's recorded run uses the *sample* dataset shipped in that repo, because the
real lab spreadsheet is gitignored upstream.

## Load-bearing behaviour — regressions here are invisible until they ship

- `.reveal` is `opacity:0` until JS adds `.in`. The `<noscript>` override in `index.html` keeps the
  page readable without JS. Both halves are required.
- Stat counters carry the true value in HTML (`data-count` / `data-suffix`); JS resets them to zero
  and counts up, so crawlers and no-JS visitors still read `84%`, `0.78`, `89%`, `42`.
- Work cards alternate the media side via `.work-card:nth-child(even) .work-media{order:1}` (reset
  inside the narrow-screen media query). This only works if DOM order stays meaningful.
- The play button is revealed only through `.media.has-video`, which is set on `loadeddata`. A
  missing video must degrade to the `.media-fallback` panel, never to a dead control.
- `@media (prefers-reduced-motion:reduce)` short-circuits the reveal, the counters and video
  autoplay. `@media print` forces white/black for paper and is intentional.

## Local preview

Serve over HTTP — relative WebP/MP4 and the self-hosted font fail under `file://`:

```
py -3 -m http.server 8137 --bind 127.0.0.1 --directory "C:\Users\darsh\Documents\darsh-portfolio\Darshmello.github.io"
```

Stale servers are the usual cause of "connection closed unexpectedly". Kill leftovers first:

```
Get-CimInstance Win32_Process -Filter "Name='python.exe'" | Where-Object { $_.CommandLine -match 'http.server' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
```

Screenshot checks: Chrome headless CLI with `--window-size` (desktop 1440x900, mobile 390x844).
Add `--force-prefers-reduced-motion` for a truthful settled full-page capture. Playwright screenshots
of tall *elements* crash — capture the window/viewport instead.

## Deploy — the live site is NOT served from `main`

`gh-pages` currently serves https://darshmello.github.io, so **pushing `main` changes nothing live.**
Verify on `main` first, then switch the Pages source to `main` / `/` (GitHub web UI preferred, so no
token is handled in a shell), wait for the build, hard-refresh, and only then delete `gh-pages`.

`gh` CLI is not installed. Git holds a stored credential for `Darshmello`, so plain `git push` works —
never print it or write it to a file.

## Environment gotchas

- Site files are UTF-8 without BOM and contain em dashes and "résumé". PowerShell's default
  `Get-Content` renders them as mojibake; that is a console artifact, not file corruption. Pass
  `-Encoding utf8` when reading/writing.
- Windows PowerShell has no `\` line continuation and no `&&`; write a `.ps1` file for anything
  multi-line.
- Docker and `gh` are absent. Python is `py -3`.

## Keep out of commits

`zz-shot-*.html` (screenshot scratch), `PRODUCT.md`, `.impeccable/`, `.cursor/`, `.gemini/`,
`.agents/` — design-process and local-tooling artifacts, already covered by `.gitignore`.

The active redesign spec is `C:\Users\darsh\.opencode\plan\dune-portfolio-revamp.md` (workspace root,
outside the repo). It holds the palette, type scale, verification checklist and cutover steps; read it
before changing anything visual.
