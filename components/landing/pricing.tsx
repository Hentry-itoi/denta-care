'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import {  FloatingParticles } from '@/components/dental-vectors'
import Link from 'next/link'

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const monthlyPlans = [
    {
      name: 'Starter',
      price: '₹750',
      period: '/month',
      billingText: 'Billed monthly',
      description: 'Perfect for small clinics starting out',
      cta: 'Start Free Trial',
      popular: false,
      badge: null,
      features: [
        'Up to 500 patient records',
        'Appointment scheduling',
        'Basic reporting',
        'Email support',
        'Single user account',
      ],
    },
    {
      name: 'Professional',
      price: '₹1,000',
      period: '/month',
      billingText: 'Billed monthly',
      description: 'For growing practices needing power',
      cta: 'Start Free Trial',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Unlimited patient records',
        'Advanced scheduling',
        'Complete analytics',
        'Priority support',
        'Up to 10 team members',
        'Multi-branch support',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      billingText: 'Tailored for your organization',
      description: 'For large clinics & organizations',
      cta: 'Contact Sales',
      popular: false,
      badge: null,
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom workflows',
        '24/7 phone support',
        'White-label options',
        'API access',
        'SLA guarantee',
      ],
    },
  ]

  const yearlyPlans = [
    {
      name: 'Starter',
      price: '₹7,830',
      period: '/year',
      billingText: 'Equivalent to ₹652/month',
      description: 'Great value for small clinics',
      cta: 'Start Free Trial',
      popular: false,
      badge: 'Save 13%',
      features: [
        'Up to 500 patient records',
        'Appointment scheduling',
        'Basic reporting',
        'Email support',
        'Single user account',
      ],
    },
    {
      name: 'Professional',
      price: '₹10,440',
      period: '/year',
      billingText: 'Equivalent to ₹870/month',
      description: 'For growing practices needing power',
      cta: 'Start Free Trial',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Unlimited patient records',
        'Advanced scheduling',
        'Complete analytics',
        'Priority support',
        'Up to 10 team members',
        'Multi-branch support',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      billingText: 'Tailored for your organization',
      description: 'For large clinics & organizations',
      cta: 'Contact Sales',
      popular: false,
      badge: null,
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom workflows',
        '24/7 phone support',
        'White-label options',
        'API access',
        'SLA guarantee',
      ],
    },
  ]

  const activePlans = billingCycle === 'monthly' ? monthlyPlans : yearlyPlans

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-t border-border/80">
      {/* Dental Vector Accents */}
      {/* <div className="absolute top-12 left-6 z-20 hidden md:block opacity-90">
        <AnimatedTooth size={80} />
      </div>
      <div className="absolute bottom-16 right-6 z-20 hidden md:block opacity-90">
        <AnimatedToothbrush size={90} />
      </div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 hidden xl:block opacity-80">
        <AnimatedAligner size={75} />
      </div>
      <div className="absolute top-16 right-12 z-20 hidden xl:block opacity-80">
        <AnimatedImplant size={80} />
      </div> */}

      <FloatingParticles className="opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Choose the perfect plan for your dental clinic
          </p>

          {/* Navigation Tabs */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-muted/70 border border-border/60 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-background text-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`flex items-center gap-2 px-6 py-2.5 cursor-pointer rounded-xl text-sm font-bold transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-background text-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>Annually</span>
                <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                  Save 13%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {activePlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-3xl border transition-all duration-300 p-8 ${
                plan.popular
                  ? 'border-emerald-500/50 bg-card shadow-2xl ring-2 ring-emerald-500/20 scale-[1.02] md:scale-105 z-10'
                  : 'border-border/80 bg-card/70 shadow-sm hover:shadow-xl hover:border-emerald-500/40'
              }`}
            >
              {/* Badge for Popular or Discount */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-extrabold shadow-md tracking-wider uppercase ${
                      plan.popular
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-500 text-white'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1.5">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-1 min-h-[64px]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm font-semibold">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    {plan.billingText}
                  </p>
                </div>
<Link href='/contact'>
                <Button
                  className={`w-full font-bold py-6 text-base cursor-pointer ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25'
                      : 'border border-border bg-background hover:bg-accent hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
                </Link>

                <div className="border-t border-border/60 pt-6 space-y-3.5 flex-1">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center text-muted-foreground font-semibold">
          <p className="text-xs">
            All plans include a 7-Day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}