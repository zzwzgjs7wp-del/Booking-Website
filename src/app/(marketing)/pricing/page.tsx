import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, Zap } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for solo practitioners & small teams',
      features: [
        'Up to 500 appointments/month',
        'AI booking chatbot',
        'Basic scheduling',
        'Email reminders',
        'Email support',
      ],
      cta: 'Start Free Trial',
      monetizationNote: 'Appointment limit drives upgrade to Pro',
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'For growing SMBs with high volume',
      features: [
        'Unlimited appointments',
        'AI chatbot (booking, rescheduling, FAQs)',
        'Smart scheduling with availability optimization',
        'SMS + email automated follow-ups',
        'AI review sentiment summaries',
        'Churn prediction & retention suggestions',
        'Priority support',
      ],
      popular: true,
      cta: 'Get Started',
      monetizationNote: 'Full feature set for SMB SaaS revenue',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Multi-location & custom needs',
      features: [
        'Everything in Professional',
        'Multi-location support',
        'Custom integrations (CRM, POS)',
        'Dedicated account manager',
        'Custom AI training',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      monetizationNote: 'High-touch, high ARPU',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-neon-cyan font-display">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Clear monetization for SMB SaaS. Start small, scale as you grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-8 relative ${
              plan.popular
                ? 'border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.2)]'
                : 'border-neon-cyan/30'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-neon-cyan text-[#0a0a1a] text-xs font-semibold px-3 py-1 rounded-full font-display">
                  <Zap className="h-3 w-3" />
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2 text-neon-cyan font-display">{plan.name}</h3>
            <p className="text-muted-foreground mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-neon-cyan font-display">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full font-display"
              variant={plan.popular ? 'default' : 'outline'}
            >
              <Link
                href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
              >
                {plan.cta}
              </Link>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground italic">
              {plan.monetizationNote}
            </p>
          </Card>
        ))}
      </div>

      {/* Monetization Hooks Section */}
      <section className="mt-24 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-neon-cyan mb-4 font-display">
          SMB SaaS Monetization Hooks
        </h2>
        <p className="text-muted-foreground mb-6">
          Clear upgrade paths drive expansion revenue:
        </p>
        <ul className="text-left space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#0066b3] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Usage limits</strong> — Appointment caps on Starter drive upgrades
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#0066b3] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Feature gating</strong> — SMS, churn, AI summaries unlock at Pro
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#0066b3] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Enterprise</strong> — Custom pricing for multi-location & integrations
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
