'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Settings, ArrowRight, ArrowLeft, Pill, MapPin, Palette, Workflow, ListTree, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { FloatingParticles } from '@/components/dental-vectors'

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

export default function SettingsPage() {
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

          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-reveal-left" style={{ animationFillMode: 'both' }}>
              <Link href="/features" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-bold">
                <ArrowLeft className="w-4 h-4" /> Back to All Features
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <Settings className="w-4 h-4" /> Feature 06 — Configuration
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="text-foreground">Clinic </span>
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">Configuration & Workflow</span>
              </h1>
              <p className="text-xl text-foreground/75 max-w-lg leading-relaxed font-medium">
                Customize every aspect of your dental practice—treatment templates, medicine catalogs, 
                multi-location setup, branding, and automated workflow triggers.
              </p>
              <Link href="/#pricing">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold shadow-xl">
                  Configure Your Clinic <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="animate-reveal-right" style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-card">
                <Image src="/settings.png" alt="Clinic Settings" width={1200} height={800} className="w-full h-auto" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section ref={sec1.ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 border-b border-border/80">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className={`text-center space-y-4 ${sec1.isVisible ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Your Clinic, Your Way</h2>
            </div>
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${sec1.isVisible ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
              {[
                { icon: ListTree, title: 'Procedure Catalog', desc: 'Create custom dental procedure lists with codes, descriptions, and pricing tiers.' },
                { icon: Pill, title: 'Medicine Database', desc: 'Build a medicine catalog with dosage templates for quick prescription writing.' },
                { icon: MapPin, title: 'Multi-Location', desc: 'Manage multiple clinic branches with location-specific settings and staff.' },
                { icon: Palette, title: 'Clinic Branding', desc: 'Custom logo, colors, letterhead, and receipt formatting for your brand.' },
                { icon: Workflow, title: 'Workflow Automation', desc: 'Set up triggers for auto-reminders, follow-ups, and status transitions.' },
                { icon: Building2, title: 'Department Config', desc: 'Configure specialty departments: Orthodontics, Endodontics, Periodontics, etc.' }
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
              { value: '100+', label: 'Configurable settings' },
              { value: '∞', label: 'Custom templates' },
              { value: '5', label: 'Branches supported' },
              { value: '10min', label: 'Setup time' }
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
            Ready to <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Customize Everything?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#pricing"><Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold shadow-xl">Start Free Trial <ArrowRight className="ml-2" /></Button></Link>
            <Link href="/features"><Button size="lg" variant="outline" className="text-lg font-bold">Explore All Features</Button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
