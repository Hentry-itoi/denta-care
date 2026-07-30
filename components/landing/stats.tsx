'use client'

import { Building2, Users, CreditCard, Zap } from 'lucide-react'
import { FloatingParticles } from '@/components/dental-vectors'

export function Stats() {
  const stats = [
    {
      value: '50+',
      label: 'Dental Practices',
      description: 'Trusted by clinics nationwide',
      icon: Building2,
    },
    {
      value: '10K+',
      label: 'Patient Records',
      description: 'Securely stored and managed',
      icon: Users,
    },
    {
      value: '₹2Cr+',
      label: 'Payments Processed',
      description: 'With 99.9% reliability',
      icon: CreditCard,
    },
    {
      value: '99.9%',
      label: 'Platform Uptime',
      description: 'Enterprise-grade reliability',
      icon: Zap,
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-emerald-500/[0.03] to-background border-y border-border/60 overflow-hidden">
      {/* Dental vector decorations */}
      {/* <div className="absolute top-8 right-8 lg:right-20 opacity-15 hidden md:block">
        <AnimatedTooth size={80} />
      </div>
      <div className="absolute bottom-8 left-8 lg:left-16 opacity-12 hidden md:block">
        <AnimatedHeartPulse size={70} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8 hidden xl:block">
        <AnimatedDNAHelix size={140} />
      </div> */}
      <FloatingParticles className="opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Trusted By{' '}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Dental Professionals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform powers practices of all sizes with enterprise-grade reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-6">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Value & Labels */}
                  <div className="space-y-1">
                    <div className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-lg font-bold text-foreground pt-2">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}