'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import {  FloatingParticles } from '@/components/dental-vectors'

export function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background border-t border-border/80">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Dental Vector Accents */}
      {/* <div className="absolute top-8 left-8 z-20 hidden md:block opacity-90">
        <AnimatedTooth size={90} />
      </div>
      <div className="absolute bottom-8 right-8 z-20 hidden md:block opacity-90">
        <AnimatedToothbrush size={95} />
      </div>
      <div className="absolute top-1/2 left-6 -translate-y-1/2 z-20 hidden xl:block opacity-80">
        <AnimatedDentalMirror size={80} />
      </div>
      <div className="absolute top-10 right-12 z-20 hidden xl:block opacity-80">
        <AnimatedAligner size={85} />
      </div> */}

      <FloatingParticles className="opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Glowing Outer Card Container */}
        <div className="relative rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-emerald-500/10 text-center space-y-8 overflow-hidden">
          
          {/* Corner vector decor inside card */}
          {/* <div className="absolute top-4 right-4 z-20 opacity-80 hidden sm:block">
            <AnimatedImplant size={60} />
          </div> */}

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
            <span>Transform Your Practice Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-[1.15]">
            Ready to elevate your{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              dental practice?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Join hundreds of dental clinics streamlining operations, reducing administrative workload, and delivering top-tier patient care.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-base font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-base font-bold border-border hover:bg-accent text-foreground rounded-xl transition-all"
            >
              <Calendar className="mr-2 w-5 h-5 text-emerald-500" />
              Schedule Live Demo
            </Button>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-6 border-t border-border/60 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground font-bold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>14-Day Full Access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Cancel Anytime</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}