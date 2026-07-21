# Garage Door Group — Website

Next.js 16 (App Router, TypeScript) + Tailwind CSS website for Garage Door Group, North Auckland.

## Stack

- **Framework**: Next.js 16 App Router + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon (Postgres via `@neondatabase/serverless` + Drizzle ORM)
- **Email**: Resend
- **Hosting**: Vercel (recommended) or Netlify

---

## Local development

```bash
npm install
cp .env.example .env.local
# Edit .env.local and fill in all values
npm run dev
```

Open http://localhost:3000

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `DATABASE_URL` — Neon/Supabase Postgres connection string
- `RESEND_API_KEY` — Resend API key (resend.com)
- `SENDING_DOMAIN` — Domain to send email from (e.g. `garagedoorgroup.co.nz`)
- `OWNER_EMAIL` — Owner notification email (chris@gdgroup.co.nz)
- `ADMIN_PASSWORD` — Password for the /admin panel
- `NEXT_PUBLIC_BASE_URL` — Full site URL (https://www.garagedoorgroup.co.nz)

---

## Database setup

Run the SQL in `drizzle/0000_create_submissions.sql` in your Neon/Supabase SQL editor, or use `npx drizzle-kit push` (requires DATABASE_URL in environment).

---

## Deploying to Vercel

1. Push to GitHub
2. Import the repo in vercel.com
3. Add all environment variables from `.env.example`
4. Deploy

Set up HTTPS + www redirect in Vercel Domains settings.

---

## Email setup (Resend + domain verification)

1. Sign up at resend.com
2. Go to Domains → Add domain → enter `garagedoorgroup.co.nz`
3. Add the DNS records Resend provides (SPF, DKIM, DMARC)
4. Wait for verification (5-30 minutes)
5. Set `SENDING_DOMAIN=garagedoorgroup.co.nz` in environment variables

DNS records to add (Resend provides exact values):
- TXT `@` — SPF record
- TXT `resend._domainkey` — DKIM public key
- TXT `_dmarc` — DMARC policy: `v=DMARC1; p=none; rua=mailto:chris@gdgroup.co.nz`

---

## Admin panel

Access at `/admin` — password set in `ADMIN_PASSWORD` env var.

- Lists all submissions newest-first
- Search by name, mobile, email or message
- One-click CSV export
- Session lasts 8 hours

The Neon/Supabase dashboard is always available as a backup view.

---

## Form submissions

Flow: client → POST /api/contact → validate (Zod) → write to DB → send email → return success.

DB write is the source of truth. If email fails, lead is still saved and user sees success.
Rate limiting: 5 requests per IP per 15 minutes.

---

## Analytics

No analytics in this build. Add GTM/GA4 snippet to the commented placeholder in `app/layout.tsx`.

---

## Site structure

All original URLs preserved. `/garage-services` (was 404) now 301 redirects to `/garage-services/garage-door-repairs`.
