# mohsenmosleh.com

Single-page academic site built with Astro + Tailwind, Oxford-blue theme.

## Adding a new publication

1. Copy `src/content/publications/_TEMPLATE.md` to a new file, e.g.
   `src/content/publications/2026-paper-name.md`.
2. Fill in the frontmatter fields (title, authors, venue, year, links...).
3. Set `featured: true` to show it on the homepage's "Selected publications" section.
4. Optionally add:
   - `journalLogo: "/journals/<file>.svg"` — place the logo file in `public/journals/`.
   - `infographic: "/infographics/<file>.png"` — place the image in `public/infographics/`.
5. Set `draft: false` to publish it.

## Development

```
nvm use
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```
