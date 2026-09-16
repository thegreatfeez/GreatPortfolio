# Brand — Adams Afeez Portfolio

_Status: active_

Source of truth for colour, typography, and voice on this site. Tokens live in
`src/index.css` under `@theme` — change them there, not inline in components.

## Palette

Dark-only, cool-tinted. Surfaces get lighter as they elevate.

| Token | Value | Role |
|---|---|---|
| `abyss` | `#0c0e17` | Page background |
| `surface` | `#101320` | Section / card surface |
| `raised` | `#14192a` | Elevated card |
| `high` | `#191e35` | Hover surface |
| `chip` | `#1e2440` | Tags, chips, icon wells |
| `ink` | `#e1e4ff` | Primary text |
| `ink-muted` | `#a3a9cc` | Body text |
| `ink-subtle` | `#7d86a8` | Labels, meta, captions |
| `line` | `#404664` | Borders and dividers |
| `accent` | `#bdc7dc` | Primary accent, primary buttons |
| `mint` | `#6debdf` | Secondary accent, status, focus ring |
| `danger` | `#bb5551` | High complexity |
| `danger-soft` | `#ee7d77` | Security-track eyebrow |

Rules:

- `mint` is the only colour used for focus rings and live/status dots.
- `accent` is the only colour used for primary button fills.
- Text uses `ink` / `ink-muted` / `ink-subtle`. Never place `ink-subtle` on `chip`.
- Secondary buttons use `border-ink-subtle/30`; card borders use `border-line/20`.
  A `line`-based border is too faint to read as an interactive edge.

## Typography

| Token | Family | Used for |
|---|---|---|
| `font-display` | Space Grotesk | Headings, names, buttons, big numbers |
| `font-sans` | Inter | Body copy |
| `font-mono` | Roboto Mono | Labels, IDs, tags, meta, eyebrow text |

Conventions:

- Uppercase mono labels with wide tracking (`tracking-[0.2em]` to `[0.3em]`) are the
  site's signature micro-type. Keep them at 0.625–0.6875rem.
- Display headings are tight (`tracking-tight`, `leading-[1.05]`–`[1.1]`).

## Motion

Framer Motion for scroll reveals and ambient drift. Durations sit at 0.4–0.5s with
`easeOut`. Infinite ambient motion (glows, status pulses, marquee) is covered by
`<MotionConfig reducedMotion="user">` and the `prefers-reduced-motion` block in
`src/index.css`.

## Voice

- First person, direct, no agency speak. "I ship", not "we deliver solutions".
- Security is framed as a standing discipline that is _always being sharpened_,
  never as the headline identity.
- Concrete beats clever: numbers, reward amounts, and repo links over adjectives.

## Contact

`adamsafeez4@gmail.com` — set in `src/data.ts` as `contact.email`.
