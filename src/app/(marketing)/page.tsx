import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Calendar,
  Bot,
  Mail,
  BarChart3,
  TrendingDown,
  Zap,
  CheckCircle2,
} from 'lucide-react'

export default function HomePage() {
  const coreFeatures = [
    {
      icon: Calendar,
      title: 'Smart Scheduling with Availability Optimization',
      description:
        'Intelligent availability solver that fills gaps, minimizes idle time, and optimizes your team\'s schedule. 15-minute slot increments with gap-filling heuristics to avoid small unusable windows.',
    },
    {
      icon: Bot,
      title: 'AI Chatbot for Booking, Rescheduling & FAQs',
      description:
        '24/7 natural language chatbot that handles booking, rescheduling, cancellations, and common FAQs. Customers get instant responses without phone calls.',
    },
    {
      icon: Mail,
      title: 'Automated Follow-ups via SMS & Email',
      description:
        'Reduce no-shows with automated reminders sent before appointments. Configurable timing, multi-channel (SMS + email), and smart retry logic.',
    },
    {
      icon: BarChart3,
      title: 'AI Review Analysis & Sentiment Summaries',
      description:
        'Ingest reviews from multiple sources. AI summarizes customer sentiment, identifies trends, and surfaces actionable insights.',
    },
    {
      icon: TrendingDown,
      title: 'Customer Churn Prediction & Retention Suggestions',
      description:
        'Identify at-risk customers before they leave. AI-powered churn analysis with concrete retention suggestions and outreach triggers.',
    },
  ]

  const outputHighlights = [
    { icon: CheckCircle2, text: 'Fully working MVP' },
    { icon: CheckCircle2, text: 'Forecasting logic documented' },
    { icon: CheckCircle2, text: 'Sample data included' },
    { icon: CheckCircle2, text: 'Clear SMB SaaS monetization hooks' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cyberpunk-hero bg-logo-pattern-dense py-32">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/50 bg-neon-cyan/10 px-4 py-1.5 text-sm font-medium text-neon-cyan backdrop-blur font-display">
            <Zap className="h-4 w-4" />
            AI-Powered Scheduling
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 md:text-7xl">
            AI Booking Solutions
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Smart appointment booking for local businesses. Reduce no-shows, automate scheduling, and grow with AI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-neon-cyan text-[#0a0a1a] hover:bg-neon-cyan/90 font-display">
              <Link href="/book">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-display">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container mx-auto px-4 py-24 bg-logo-pattern">
        <h2 className="text-3xl font-bold text-center mb-4 text-neon-cyan font-display">
          Core Features
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Everything SMBs need to automate bookings, reduce no-shows, and retain customers.
        </p>
        <div className="space-y-8 max-w-4xl mx-auto">
          {coreFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border-2 border-neon-cyan/30 bg-white/5 backdrop-blur hover:border-neon-cyan/60 transition-colors flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-7 w-7 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neon-cyan font-display">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Output / MVP Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-4 text-neon-cyan font-display">
          What You Get
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Production-ready MVP with clear monetization for SMB SaaS.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {outputHighlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-neon-cyan/30 bg-white/5 flex items-center gap-3"
              >
                <Icon className="h-6 w-6 text-neon-cyan flex-shrink-0" />
                <span className="font-medium text-neon-cyan">{item.text}</span>
              </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/docs/forecasting">Forecasting Logic</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-4 md:mx-auto max-w-5xl px-4 py-24 text-center bg-cyberpunk-hero rounded-2xl bg-logo-pattern-dense border border-neon-cyan/30">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to get started?</h2>
        <p className="text-white/90 mb-8 max-w-lg mx-auto">
          Join local businesses using AI Booking Solutions to grow their customer base.
        </p>
        <Button asChild size="lg" className="bg-neon-cyan text-[#0a0a1a] hover:bg-neon-cyan/90 font-display">
          <Link href="/book">Start Free Trial</Link>
        </Button>
      </section>
    </div>
  )
}
