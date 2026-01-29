# AI Booking Solutions

**Fully working MVP** — AI-powered appointment booking and customer retention platform for local service businesses (SMB SaaS).

## Core Features

- **Smart scheduling system** — Availability optimization with 15-min slots, gap-filling heuristics, staff hours, time-off blocking
- **AI chatbot** — Handles booking, rescheduling, FAQs 24/7 via natural language
- **Automated follow-ups** — SMS and email reminders to reduce no-shows
- **AI review analysis** — Summarizes customer sentiment from ingested reviews
- **Customer churn prediction** — Retention suggestions based on recency, frequency, and AI analysis

## Output

| Deliverable | Status |
|-------------|--------|
| **Fully working MVP** | ✅ Complete |
| **Forecasting logic explanation** | ✅ See [Forecasting Logic](/docs/forecasting) |
| **Sample data** | ✅ See `supabase/seed.sql` |
| **Clear monetization hooks for SMB SaaS** | ✅ See [Pricing](/pricing) |

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL + Auth + RLS)
- **Payments**: Stripe
- **AI**: OpenAI (GPT-4)
- **Deployment**: Vercel

## Local Setup

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stripe account
- OpenAI API key

### 1. Clone and Install

```bash
git clone <your-repo>
cd booking-website
npm install
```

### 2. Set Up Supabase

1. Create a new Supabase project at https://supabase.com
2. Run `supabase/schema.sql` in the SQL Editor
3. Run `supabase/policies.sql` in the SQL Editor
4. (Optional) Run `supabase/seed.sql` for sample data

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `OPENAI_API_KEY`

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Forecasting Logic

See **[Forecasting Logic](/docs/forecasting)** for a detailed explanation of:

1. **Availability optimization** — 15-min slots, staff hours, time-off, existing appointments
2. **Gap-filling heuristic** — Prefer contiguous slots, avoid small unusable gaps
3. **Churn prediction** — Recency, frequency, review sentiment, AI suggestions
4. **Review sentiment summarization** — OpenAI analysis, theme extraction, caching

## Sample Data

`supabase/seed.sql` includes:

- **Businesses** — 2 demo businesses
- **Services** — Consultation, Repair, Installation, Maintenance
- **Staff** — With weekly hours (Mon–Fri 9–5)
- **Customers** — 5 sample customers
- **Appointments** — Past completed + future scheduled (for reminders)
- **Reviews** — 4 reviews with sentiment (positive, neutral)
- **Review summaries** — AI-generated sample summary
- **Churn snapshots** — Sample at-risk customers
- **Churn suggestions** — AI-generated retention actions
- **Jobs** — Sample reminder job (email)

## Monetization Hooks (SMB SaaS)

| Tier | Price | Key Limits | Upgrade Driver |
|------|-------|------------|----------------|
| **Starter** | $49/mo | 500 appointments/mo | Usage cap |
| **Professional** | $149/mo | Unlimited | Full AI features, SMS, churn |
| **Enterprise** | Custom | Multi-location | High-touch, integrations |

- **Usage limits** — Appointment caps on Starter drive upgrades
- **Feature gating** — SMS, churn prediction, AI summaries unlock at Pro
- **Enterprise** — Custom pricing for multi-location & integrations

## Deployment on Vercel

1. Push to GitHub and import to Vercel
2. Add environment variables
3. Configure Stripe webhook: `https://your-domain.vercel.app/api/stripe/webhook`
4. Set up Vercel Cron: `/api/jobs/dispatch` at `0 9 * * *` (daily)

## API Routes

- `GET/POST /api/businesses`, `GET/POST /api/services`, `GET/POST /api/staff`
- `POST /api/availability` — Smart scheduling
- `GET/POST /api/appointments`, `PATCH/DELETE /api/appointments/[id]`
- `POST /api/chatbot` — AI booking chatbot
- `POST /api/reviews/ingest`, `POST /api/reviews/summarize`
- `POST /api/churn/run` — Churn analysis
- `POST /api/jobs/dispatch` — Cron entry for reminders, churn, reviews

## License

MIT
