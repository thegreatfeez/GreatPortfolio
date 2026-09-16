# Adams Afeez — Portfolio

Personal portfolio site — smart contract engineering, AI engineering, financial
analysis, and a public audit log.

Live: [thegreatfeez.netlify.app](https://thegreatfeez.netlify.app/)

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, React Router, Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Updating content

All copy, projects, learning tracks, and audits live in [src/data.ts](src/data.ts) —
edit that file and redeploy to update the site.

## Structure

```
src/
  data.ts              all site content and types
  index.css            design tokens (@theme), base styles, reduced-motion
  App.tsx              routes + MotionConfig
  lib/auditStats.ts    derived audit totals (submissions, platforms, bounties)
  components/          Navbar, Hero, Disciplines, Spotlight, Learning,
                       AuditBand, Roadmap, Footer, Reveal, SectionHeading
  pages/               Home, Projects, Audits, Models, Finance
```

## Design tokens

Colour, typography, motion, and voice rules are documented in [brand.md](brand.md).
Tokens are defined once in `src/index.css` under `@theme` and consumed as Tailwind
utilities (`bg-surface`, `text-ink-muted`, `border-line/20`, `font-display`). Do not
inline hex values in components.

## Routes

| Route | Page |
|---|---|
| `/` | Hero, three disciplines, selected work, current learning, audit band |
| `/projects` | All shipped projects with live and source links |
| `/audits` | Audit log — submissions, findings, rewards, running totals |
| `/models` | AI engineering — roadmap, entries land as they are finished |
| `/finance` | Financial analysis — roadmap, entries land as they are finished |
| `/security` | 301 redirect to `/audits` |

## Adding an entry to a roadmap page

`/models` and `/finance` are rendered by the shared `Roadmap` component from the
`modelsPage` and `financePage` objects in [src/data.ts](src/data.ts). To publish a
new entry, add it to that page's `items` array and flip its `status` from `planned`
to `in-progress` (or give the page a real `statusLabel`). The "nothing published
yet" notice is driven by the page's `statusLabel` and `note` fields.
