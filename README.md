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
  components/          Navbar, Hero, Disciplines, Spotlight, Learning,
                       SecurityBand, Footer, Reveal, SectionHeading
  pages/               Home, Projects, Security
```

## Design tokens

Colour, typography, motion, and voice rules are documented in [brand.md](brand.md).
Tokens are defined once in `src/index.css` under `@theme` and consumed as Tailwind
utilities (`bg-surface`, `text-ink-muted`, `border-line/20`, `font-display`). Do not
inline hex values in components.

## Routes

| Route | Page |
|---|---|
| `/` | Hero, three disciplines, selected work, current learning, security practice |
| `/projects` | All shipped projects with live and source links |
| `/security` | Audit contest submissions and findings |
| `/audits` | 301 redirect to `/security` |
