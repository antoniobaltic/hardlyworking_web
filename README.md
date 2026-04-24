# Hardly Working — Landing Page

The marketing site for [Hardly Working](https://apps.apple.com/app/id6761917321) — a satirical iOS break timer that tracks time spent *not* working and calculates its dollar value at the user's hourly rate. The app is a product of **Hardly Working Corp.**, a fictional time reclamation firm.

Live at **[hardlyworking.app](https://hardlyworking.app)**.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **Framer Motion** for section animations and the Employee Toolkit carousel
- **Vercel** for hosting and analytics
- JSON-LD (`SoftwareApplication` schema) + OG / Twitter cards for SEO

See [`AGENTS.md`](./AGENTS.md) before letting an AI assistant write code in this repo — the Next.js version is a recent major with breaking changes from older training data. Consult `node_modules/next/dist/docs/` when in doubt.

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx            Landing page composition + JSON-LD schema
  layout.tsx          Global metadata (title, description, OG, icons)
  globals.css         Brand tokens + custom keyframes
  memos/              In-universe memos from Hardly Working Corp.
    page.tsx            Memo index
    <slug>/page.tsx     One folder per memo, composes MemoLayout
  privacy/            Privacy policy
  terms/              Terms of service
  sitemap.ts          Dynamic sitemap
  not-found.tsx       404 page — "#EMPLOYEE_NOT_FOUND"
components/           Landing page sections + shared UI
public/
  mascot_*.png        John D. (Employee Relations Officer)
  screenshots/        App screenshots used in the Employee Toolkit
  llms.txt            Structured summary for LLM crawlers
  humans.txt          Personnel directory, brand-flavored
  robots.txt          Allow list for AI crawlers
```

## Brand

| Token | Hex |
|---|---|
| Background | `#FFFFFF` |
| Text navy | `#1D3557` |
| Dead blue | `#457B9D` |
| Blood red | `#E63946` |
| Caution yellow | `#F4A261` |
| Reclaimed green (money only) | `#2A9D8F` |
| Card background | `#F1FAEE` |

- **Fonts** — Inter (body) and JetBrains Mono (everything that reads like a memo)
- **Mascot** — John D., Employee Relations Officer (wooden-toy office worker, dead eyes, blue shirt)
- **Voice** — J. Pemberton, Chief Slacking Officer. Dry, bureaucratic, institutional. Never snarky. No crime metaphors.
- **Copy rules** — "Reclaimed" not "stolen." "Activity" not "offense." "Employee" not "perpetrator." Money always shown in reclaimed green, once per screen.

## Adding a memo

Each memo is its own route. To publish one:

1. Create `app/memos/<slug>/page.tsx` rendering `<MemoLayout>` with `memoRef`, `date`, `title`, `department`, `classification`, and `readTime`.
2. Register the new entry in:
   - `app/memos/page.tsx` (the memo index, newest first)
   - `app/sitemap.ts`
   - `public/llms.txt`
   - `components/RecentMemos.tsx` (the three most recent memos surfaced on the homepage — roll the tail off)

Memos cross-reference each other by their `MEMO-2026-NNN` ref. Keep numbering sequential.

## Deployment

Every push to `main` auto-deploys to Vercel. No CI gate.

---

© 2026 Hardly Working Corp. All rights reclaimed.
