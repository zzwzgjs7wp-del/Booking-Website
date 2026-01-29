import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Forecasting Logic",
  description:
    "How AI Booking Solutions calculates availability, optimizes scheduling, and predicts churn.",
};

export default function ForecastingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-cyberpunk-hero bg-logo-pattern-dense py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="container relative mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Forecasting Logic
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            How AI Booking Solutions calculates availability, optimizes scheduling, and predicts churn.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4 font-display">
              1. Availability Optimization
            </h2>
            <p className="text-muted-foreground mb-4">
              The smart scheduling system uses a slot-based availability solver:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>15-minute increments</strong> — Slots are generated in 15-min steps to allow flexible booking.
              </li>
              <li>
                <strong>Staff weekly hours</strong> — Each staff member has configurable weekly hours (e.g., Mon–Fri 9–5).
              </li>
              <li>
                <strong>Time-off blocking</strong> — Staff time off (vacation, sick) blocks those slots.
              </li>
              <li>
                <strong>Existing appointments</strong> — Confirmed/scheduled appointments block overlapping slots.
              </li>
              <li>
                <strong>Minimum lead time</strong> — Slots must be at least 1 hour in the future.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4 font-display">
              2. Gap-Filling Heuristic
            </h2>
            <p className="text-muted-foreground mb-4">
              To minimize idle time and avoid small unusable gaps:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Prefer contiguous slots</strong> — Slots are sorted by start time; earliest available is preferred.
              </li>
              <li>
                <strong>Avoid gaps &lt; service duration</strong> — The solver skips slots that would create gaps too small for another booking.
              </li>
              <li>
                <strong>Preferred time matching</strong> — If the user specifies a preferred time, the closest available slot is returned.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4 font-display">
              3. Churn Prediction Logic
            </h2>
            <p className="text-muted-foreground mb-4">
              Churn analysis uses heuristics and AI to identify at-risk customers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Recency</strong> — Customers who haven&apos;t booked recently are flagged.
              </li>
              <li>
                <strong>Frequency</strong> — Declining visit frequency suggests disengagement.
              </li>
              <li>
                <strong>Review sentiment</strong> — Negative or declining review sentiment is factored in.
              </li>
              <li>
                <strong>AI suggestions</strong> — OpenAI generates retention actions (e.g., &quot;Send a personalized offer&quot;, &quot;Follow up with a call&quot;).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4 font-display">
              4. Review Sentiment Summarization
            </h2>
            <p className="text-muted-foreground mb-4">
              Ingested reviews are analyzed by OpenAI to produce:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Overall sentiment</strong> — Positive, neutral, or negative.
              </li>
              <li>
                <strong>Theme extraction</strong> — Common topics (e.g., &quot;fast service&quot;, &quot;pricing&quot;).
              </li>
              <li>
                <strong>Summary text</strong> — A concise narrative for quick insights.
              </li>
              <li>
                <strong>Caching</strong> — Summaries are stored in the DB to avoid re-running unless data changes.
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <Button asChild variant="outline">
              <Link href="/book">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
