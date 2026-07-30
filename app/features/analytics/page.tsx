'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BarChart3, ArrowRight, ArrowLeft, TrendingUp, PieChart, LineChart, FileDown, Eye, Activity } from 'lucide-react'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { FloatingParticles } from '@/components/dental-vectors'
import { Button } from '@/components/atom/Button'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, isVisible }
}

export default function AnalyticsPage() {
  const sec1 = useInView()
  const sec2 = useInView()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-border/80">
          <div className="absolute top-10 right-0 w-80 h-80 bg-gradient-to-br from-primary/20 to-emerald-400/20 rounded-full blur-3xl animate-morph-blob opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-primary/15 rounded-full blur-3xl animate-morph-blob opacity-20" style={{ animationDelay: '3s' }} />
          
          <FloatingParticles className="opacity-20" />

          <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-reveal-left" style={{ animationFillMode: 'both' }}>
              <Link href="/features" className="flex w-fit items-center gap-2 text-sm text-primary hover:underline font-bold ml-4">
                <ArrowLeft className="w-4 h-4" /> Back to All Features
              </Link>
              <div className="flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" /> Feature 04 — Analytics
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="text-foreground">Real-time </span>
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">Analytics & Reports</span>
              </h1>
              <p className="text-xl text-foreground/75 max-w-lg leading-relaxed font-medium">
                Transform raw clinic data into actionable visual dashboards. Track revenue trends, 
                patient retention rates, treatment metrics, and dentist productivity.
              </p>
                <Button size="lg" linkHref='/contact' className="h-14 px-8 sm:px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-2xl transition-all hover:scale-105">
                  Unlock Analytics <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
            <div className="animate-reveal-right" style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-card">
                <Image src="/features/reports.png" alt="Analytics Dashboard" width={1200} height={800} className="w-full h-auto" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section ref={sec1.ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 border-b border-border/80">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className={`text-center space-y-4 ${sec1.isVisible ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Data-Driven Decisions, Made Easy</h2>
            </div>
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${sec1.isVisible ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
              {[
                { icon: TrendingUp, title: 'Revenue Dashboard', desc: 'Real-time revenue tracking with daily, weekly, and monthly trend comparisons.' },
                { icon: PieChart, title: 'Treatment Analytics', desc: 'See which procedures generate the most revenue and which need promotion.' },
                { icon: Activity, title: 'Patient Metrics', desc: 'Track new patient acquisition, retention rates, and patient lifetime value.' },
                { icon: LineChart, title: 'Dentist Performance', desc: 'Monitor individual dentist productivity, appointment counts, and revenue contribution.' },
                { icon: Eye, title: 'Expense Visibility', desc: 'Compare revenue vs expenses with real-time profit margin calculations.' },
                { icon: FileDown, title: 'Export Reports', desc: 'Download comprehensive Excel and PDF reports for accounting and review meetings.' }
              ].map((cap, i) => (
                <div key={i} className="group bg-card border border-border/80 rounded-2xl p-6 space-y-4 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cap.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{cap.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed font-medium">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section ref={sec2.ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-cyan-500/10 border-b border-border/80">
          <div className={`max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${sec2.isVisible ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
            {[
              { value: '360°', label: 'Business visibility' },
              { value: '15+', label: 'Report templates' },
              { value: '5min', label: 'To insights' },
              { value: 'Real-time', label: 'Data refresh' }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">See Your Data?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
              <Button linkHref='/contact' size="lg" className="h-14 px-8 sm:px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-2xl transition-all hover:scale-105">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" linkHref='/features' variant="outline" className="h-14 px-8 sm:px-10 rounded-full border-2 border-border hover:bg-primary/10 text-base sm:text-lg font-semibold transition-all">
                Explore All Features
              </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
