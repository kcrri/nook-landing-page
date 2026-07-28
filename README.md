# Nook — Landing Page

Marketing site for **Nook**, a rental marketplace for Montreal. Swipe listings, ask an AI that knows each unit, send a request.

Built with React 18, TypeScript, Vite, CSS Modules, and Three.js.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check with `tsc` and build to `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
src/
  App.tsx              Page composition (section order)
  index.css            Design tokens, reset, reveal animations, .container
  components/
    sections/          One component + CSS module per page section
    mockups/           Phone and chat UI mockups used by sections
    ui/                Button, Badge
  constants/content.ts All page copy
  hooks/
    useScrollReveal.ts IntersectionObserver reveal + staggered reveal
    useThreeScene.ts   Animated wireframe background for the hero
  types/index.ts       Shared interfaces
```

## Conventions

- **Copy lives in `src/constants/content.ts`.** Components read from it rather than hardcoding strings, so text can be edited in one place.
- **Styling uses CSS Modules** (`Component.module.css`) with design tokens from `src/index.css`. No inline styles or utility frameworks.
- **Imports use the `@/` alias** for `src/` (configured in both `vite.config.ts` and `tsconfig.json`).
- **Animations are CSS-driven.** Hooks add a `revealed` class when an element scrolls into view; the transition itself is defined in `index.css`.

## Section order

Navigation → Hero → HowItWorks → AIAssistant → StatStrip → FAQ → OwnerCallout → AppStoreBanner → FooterCTA

Anchor targets: `#how-it-works`, `#faq`, `#for-owners`, `#waitlist`.

## Notes

- The waitlist form in `FooterCTA` validates the email client-side and shows a success state. It is not yet wired to a backend — connect `handleSubmit` to your signup endpoint before launch.
- Footer `Privacy`, `Terms`, and `Contact` links are placeholders (`href="#"`).
