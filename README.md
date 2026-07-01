# CashPilot — Landing page

Marketing site for CashPilot, the mobile-first cash monitoring app for
independent ATM operators.

Built with Next.js 14 (App Router), TypeScript, React, and CSS Modules.
Deployable to Vercel from a public GitHub repo. Contact form via Formspree.
Checkout via Stripe Payment Links. Automation glue via Zapier.

---

## Stack

| Layer            | Choice                                        |
| ---------------- | --------------------------------------------- |
| Framework        | Next.js 14 (App Router)                       |
| Language         | TypeScript (strict, `noImplicitAny`)          |
| UI               | React 18                                      |
| Styling          | CSS Modules + `globals.css` design tokens     |
| Font             | Inter (via Google Fonts)                      |
| Forms            | Formspree                                     |
| Payments         | Stripe Payment Links (test mode)              |
| Automation       | Zapier (Formspree → Sheets/Slack)             |
| Hosting          | Vercel                                        |
| Source control   | GitHub (public repo)                          |

No database. No API routes. No server code beyond what Next.js provides.

---

## File layout

```
cashpilot-landing/
├── app/
│   ├── layout.tsx          Root layout, metadata, favicon, Inter font
│   ├── page.tsx            Composes all sections
│   └── globals.css         Design tokens + resets
├── components/
│   ├── Logo/               Brand mark
│   ├── Nav/                Sticky header with mobile menu
│   ├── Hero/               Cream band — headline, sub, CTA, trust line
│   ├── TrustBar/           Soft band — customer category pills
│   ├── PainSection/        White band — 4 red cost stats
│   ├── HowItWorks/         Navy dark band — 3-step onboarding
│   ├── ProductScreens/     Soft band — dashboard + detail phones
│   ├── WhoItsFor/          White band — 6 target segments
│   ├── Features/           Soft band — 4 core capabilities
│   ├── Testimonials/       White band — 3 operator quotes
│   ├── ImpactStats/        Forest dark band — 4 big impact numbers
│   ├── FAQ/                Soft band — 6 collapsible objections
│   ├── Pricing/            White band — 3 tiers with Stripe links
│   ├── FinalCTA/           Navy dark band — form + booking button
│   └── Footer/             Navy-tint band — copyright + links
├── lib/
│   └── stripe.ts           Env-driven Stripe/Cal/Formspree links + handler factory
├── public/
│   ├── logo.svg            Full CashPilot logo (mark + wordmark)
│   ├── logo-mark.svg       Mark only
│   ├── favicon.svg         Browser tab icon
│   ├── dashboard.svg       Product screenshot (fleet overview)
│   └── detail.svg          Product screenshot (machine detail)
├── .env.local.example      Copy to .env.local and fill in your values
├── next.config.js
├── package.json
├── tsconfig.json           Strict mode, no implicit any
└── README.md
```

---

## Local setup

**Prerequisites:** Node.js 18.17+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and fill in real values
cp .env.local.example .env.local

# 3. Start the dev server
npm run dev
```

The site runs at `http://localhost:3000`.

---

## Environment variables

Fill these in `.env.local` (see `.env.local.example` for the template):

| Variable                             | What it is                                       | Where to get it                                                    |
| ------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT`     | Contact-form submission URL                      | https://formspree.io/ — create a form, copy the endpoint           |
| `NEXT_PUBLIC_STRIPE_LINK_SOLO`       | Stripe checkout URL for the Solo tier            | https://dashboard.stripe.com/test/payment-links — create a link    |
| `NEXT_PUBLIC_STRIPE_LINK_ROUTE`      | Stripe checkout URL for the Route tier           | Same as above                                                      |
| `NEXT_PUBLIC_STRIPE_LINK_FLEET`      | Stripe checkout URL for the Fleet tier           | Same as above                                                      |
| `NEXT_PUBLIC_BOOKING_URL`            | Booking link for "Book a call" buttons           | https://cal.com/ — set up a 15-min event, copy the URL             |

If a variable is missing, the corresponding button/form will safely no-op.

---

## Zapier automation (optional)

Wire form submissions into Google Sheets + Slack so leads land somewhere useful:

1. In Formspree, connect your form to Zapier.
2. In Zapier, create a Zap: **Trigger** = "New Submission in Formspree".
3. **Action 1** = "Create Spreadsheet Row in Google Sheets" (map name/email/machines).
4. **Action 2** = "Send Channel Message in Slack" — post to `#leads` with the details.
5. Turn the Zap on. Every new lead now goes to both places automatically.

---

## Deploy to Vercel

1. Push the repo to GitHub (public is fine).
2. In Vercel, click **Add New → Project** and import the repo.
3. Under **Environment Variables**, add every variable from `.env.local`.
4. Click **Deploy**.
5. Every push to `main` from now on triggers an automatic redeploy.

---

## Code conventions

The codebase follows a few strict rules:

- **No `any`.** `tsconfig.json` enforces `noImplicitAny`. All types are explicit.
- **No `var`.** Only `const` and `let`.
- **Closures for factory-style handlers.** See `createTierClickHandler` in
  `lib/stripe.ts`, `createToggleHandler` in `FAQ.tsx`, and `createChangeHandler`
  in `FinalCTA.tsx`. Each captures its argument in scope and returns a handler
  bound to that value.
- **User input goes through React's `{value}` interpolation**, which escapes
  automatically — equivalent to `textContent`, never `innerHTML`.
- **Component structure.** Every component lives in its own folder with a
  `.tsx` and a `.module.css`. `globals.css` holds design tokens only.
- **Color bands bleed edge-to-edge.** Each section is a full-width `<section>`
  with its own background color drawn from the `--band-*` tokens. The content
  inside is capped at `--max-content` (1120px) and centered.

---

## Design tokens

Defined once in `app/globals.css` under `:root`, referenced everywhere via
`var(--token-name)`. Change a token in one place, it updates everywhere.

Band colors: `--band-cream`, `--band-white`, `--band-soft`, `--band-navy`,
`--band-navy-tint`, `--band-forest`, `--band-forest-tint`.

Brand: `--brand-blue`, `--brand-blue-light`, `--brand-blue-lightest`,
`--brand-blue-dark`.

Semantic: `--success`, `--warning`, `--danger` (each with `-dark` and `-light`
variants for text and background use).

---

## Scripts

```bash
npm run dev          # Dev server on :3000
npm run build        # Production build
npm run start        # Serve the production build locally
npm run lint         # ESLint (Next.js ruleset)
npm run type-check   # tsc --noEmit
```

---

## License

Private / all rights reserved. This is a portfolio project — not for
redistribution.
