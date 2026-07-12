# ROBO ARENA 2026

Marketing website for ROBO ARENA 2026, a junior robotics competition organised by ABSEE Enterprise & Creative Robotics.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## 1. Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 2. Registration

Registration is handled by an external Google Form, linked from the "Registration" button on the site. No email/API setup is required — the button just points at a URL.

To change the form link, edit `registrationCta.href` in **[`lib/event-config.ts`](lib/event-config.ts)**.

## 3. Editing event content (no code changes needed)

Almost everything on the page — dates, venue, prize amounts, schedule rows, format details, contact info — lives in one file:

**[`lib/event-config.ts`](lib/event-config.ts)**

Open that file and edit the values. Each section is clearly labelled with a comment (e.g. `Prizes`, `Schedule`, `Event Details`). Save the file and the site updates automatically in dev mode.

A few specific things to know:

- **Countdown timer target**: `countdownTargetISO` near the top of the file, in the format `YYYY-MM-DDTHH:mm:ss+08:00`.
- **Prize amounts**: the `prizes` array. Set `highlight: true` on an entry to give it the amber "Champion" styling.
- **Schedule table rows**: the `scheduleRows` array.
- **Daily flow steps**: the `dailyFlow` array (the numbered 1–5 cards under Format).
- **Registration button link**: `registrationCta.href`.

You should not need to edit any `.tsx` component files just to update event details — only touch those if you're changing layout, styling, or adding/removing a section.

## 4. Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository. Framework preset "Next.js" is auto-detected — no extra config needed.
3. Deploy. Vercel builds and hosts the site automatically on every push.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Assembles all page sections in order
  globals.css          Tailwind + shared component classes
components/            One component per page section
lib/
  event-config.ts      <-- Edit event content here
```
