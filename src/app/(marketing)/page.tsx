import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Bot, BarChart3, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Sony blue gradient with logo pattern */}
      <section className="relative overflow-hidden bg-sony-hero bg-logo-pattern-dense py-32">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
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
            <Button asChild size="lg" className="bg-white text-[#0066b3] hover:bg-white/90">
              <Link href="/book">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - Blue tint with logos */}
      <section className="container mx-auto px-4 py-24 bg-logo-pattern">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#003087]">Everything you need to grow</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          AI Booking Solutions helps local businesses automate bookings and retain customers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border-2 border-[#0066b3]/20 bg-white/80 backdrop-blur hover:border-[#0066b3]/40 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#0066b3]/10 flex items-center justify-center mb-4">
              <Bot className="h-7 w-7 text-[#0066b3]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#003087]">AI Booking Assistant</h3>
            <p className="text-muted-foreground">
              Let customers book 24/7 with our intelligent chatbot that understands natural language.
            </p>
          </div>
          <div className="p-8 rounded-2xl border-2 border-[#0066b3]/20 bg-white/80 backdrop-blur hover:border-[#0066b3]/40 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#0066b3]/10 flex items-center justify-center mb-4">
              <Calendar className="h-7 w-7 text-[#0066b3]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#003087]">Smart Scheduling</h3>
            <p className="text-muted-foreground">
              Automatically find the best time slots, fill gaps, and optimize your team's schedule.
            </p>
          </div>
          <div className="p-8 rounded-2xl border-2 border-[#0066b3]/20 bg-white/80 backdrop-blur hover:border-[#0066b3]/40 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#0066b3]/10 flex items-center justify-center mb-4">
              <BarChart3 className="h-7 w-7 text-[#0066b3]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#003087]">Churn Prevention</h3>
            <p className="text-muted-foreground">
              Get AI-powered insights on at-risk customers and actionable suggestions to retain them.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Sony blue */}
      <section className="mx-4 md:mx-auto max-w-5xl px-4 py-24 text-center bg-sony-hero rounded-2xl bg-logo-pattern-dense">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to get started?</h2>
        <p className="text-white/90 mb-8 max-w-lg mx-auto">
          Join local businesses using AI Booking Solutions to grow their customer base.
        </p>
        <Button asChild size="lg" className="bg-white text-[#0066b3] hover:bg-white/90">
          <Link href="/book">Start Free Trial</Link>
        </Button>
      </section>
    </div>
  )
}
