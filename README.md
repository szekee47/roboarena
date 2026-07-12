# ROBO ARENA 2026

Marketing website and registration form for ROBO ARENA 2026, a junior robotics competition organised by ABSEE Enterprise & Creative Robotics.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## 1. Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site will run without any configuration, but the registration form needs an email API key to actually send submissions (see below) — without it, the form shows a clear error message when someone tries to submit.

## 2. Email setup (registration form)

The registration form (`components/RegistrationForm.tsx`) posts to `app/api/register/route.ts`, which sends the submission by email using **[Resend](https://resend.com)**.

Steps:

1. Create a free account at [resend.com](https://resend.com).
2. Go to **API Keys** and create a new key.
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Paste your key into `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
5. Restart `npm run dev` if it's already running.

By default, emails are sent **from** `onboarding@resend.dev` (Resend's shared test address — works immediately, no setup) and **to** `limszekee702@gmail.com`.

To send from your own domain instead (recommended for production, and needed if `onboarding@resend.dev` emails land in spam):

1. In Resend, go to **Domains** and verify a domain you own (e.g. `absee-enterprise.com`).
2. Add to `.env.local`:
   ```
   REGISTRATION_FROM_EMAIL="ROBO ARENA 2026 <register@your-verified-domain.com>"
   ```

To change the recipient address, add to `.env.local`:

```
REGISTRATION_TO_EMAIL=someone-else@example.com
```

**If `RESEND_API_KEY` is missing**, the API route returns a clear error (HTTP 500, message explaining the email setup is incomplete) instead of silently failing. The form displays this message to the user.

## 3. Editing event content (no code changes needed)

Almost everything on the page — dates, venue, prize amounts, schedule rows, format details, contact info — lives in one file:

**[`lib/event-config.ts`](lib/event-config.ts)**

Open that file and edit the values. Each section is clearly labelled with a comment (e.g. `Prizes`, `Schedule`, `Event Details`). Save the file and the site updates automatically in dev mode.

A few specific things to know:

- **Countdown timer target**: `countdownTargetISO` near the top of the file, in the format `YYYY-MM-DDTHH:mm:ss+08:00`.
- **Prize amounts**: the `prizes` array. Set `highlight: true` on an entry to give it the amber "Champion" styling.
- **Schedule table rows**: the `scheduleRows` array.
- **Daily flow steps**: the `dailyFlow` array (the numbered 1–5 cards under Format).
- **Registration event dropdown options**: `registrationEventOptions` — the `value` field is what gets submitted, `label` is what's shown to users. If you rename these, update `app/api/register/route.ts`'s `eventLabel` lookup will keep working automatically since it reads from the same config.

You should not need to edit any `.tsx` component files just to update event details — only touch those if you're changing layout, styling, or adding/removing a section.

## 4. Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository. Framework preset "Next.js" is auto-detected — no extra config needed.
3. Before the first deploy (or in Project Settings → Environment Variables afterwards), add:
   - `RESEND_API_KEY` = your Resend API key
   - (optional) `REGISTRATION_TO_EMAIL`, `REGISTRATION_FROM_EMAIL` if you want to override the defaults
4. Deploy. Vercel builds and hosts the site automatically on every push.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Assembles all page sections in order
  globals.css          Tailwind + shared component classes
  api/register/route.ts  Registration form email handler
components/            One component per page section
lib/
  event-config.ts      <-- Edit event content here
  types.ts              Shared TypeScript types
```
