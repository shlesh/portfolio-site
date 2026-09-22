# Shailesh Tiwari — portfolio

Same design and features as the 2021 site: custom cursor, overlay menu, intersection
observers, home split-background, project cards, about skills, contact form, footer.

## What changed in this revamp

- Create React App + React 17 + `react-scripts@2` → Vite 7 + **React 19**
- React Router 5 `Switch` → Router 7 `Routes`
- Redux + thunk store → Redux Toolkit, same `state.data.pageContent` shape
- styled-components 6
- Menu `NavLink` API updated, all existing active/hover animations kept
- Contact form now opens a prefilled `mailto:` instead of a no-op
- Observers and menu listeners no longer crash if a node is missing
- Extra page-enter motion layered on top of the original animations
- `prefers-reduced-motion` respected

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`vite.config.js` uses `base: '/portfolio-site/'` for GitHub Pages.
