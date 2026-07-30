'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { 
  Calendar, Users, CreditCard, BarChart3, Lock, Settings, 
  ArrowRight, CheckCircle2, Star
} from 'lucide-react'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { 
  AnimatedTooth, AnimatedDentalMirror, AnimatedToothbrush, 
  AnimatedDentalChair, AnimatedShield, AnimatedHeartPulse, FloatingParticles 
} from '@/components/dental-vectors'
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

const allFeatures = [
  {
    slug: 'scheduling',
    icon: Calendar,
    title: 'Smart Scheduling',
    tagline: 'Zero missed appointments. Zero wasted chair time.',
    description: 'Our AI-powered scheduling engine automatically optimizes dentist availability, chair utilization, and patient flow to maximize revenue.',
    image: '/features/appointments.png',
    color: 'from-primary to-emerald-400',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    vector: AnimatedDentalChair,
    highlights: [
      'Drag-and-drop appointment calendar with daily, weekly & monthly views',
      'Automated SMS, WhatsApp & email appointment reminders',
      'Smart conflict detection prevents double-booking',
      'Chair and room assignment with color-coded dentist schedules',
      'Patient check-in tracker with real-time queue management',
      'Recurring appointment templates for treatment plans'
    ],
    stats: [
      { value: '95%', label: 'Reduction in no-shows' },
      { value: '3x', label: 'Faster booking process' },
      { value: '40%', label: 'More patients per day' }
    ]
  },
  {
    slug: 'patients',
    icon: Users,
    title: 'Patient Records & Management',
    tagline: 'Complete patient story. One unified profile.',
    description: 'Manage comprehensive patient profiles with dental charts, X-ray history, treatment plans, allergies, and insurance details in one unified record.',
    image: '/features/users.png',
    color: 'from-primary via-cyan-400 to-emerald-400',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    vector: AnimatedHeartPulse,
    highlights: [
      'Detailed patient profiles with medical history & allergies',
      'Digital dental chart with tooth-by-tooth condition tracking',
      'Treatment plan builder with estimated cost breakdown',
      'Insurance verification and claim management',
      'Patient communication log and follow-up reminders',
      'Family grouping for pediatric and family dentistry'
    ],
    stats: [
      { value: '50+', label: 'Clinics trust us' },
      { value: '2M+', label: 'Patient records managed' },
      { value: '99.9%', label: 'Data accuracy' }
    ]
  },
  {
    slug: 'billing',
    icon: CreditCard,
    title: 'Billing & Invoice Automation',
    tagline: 'Get paid faster. Bill smarter.',
    description: 'Generate professional dental invoices with itemized treatment breakdowns, process multi-method payments, and track overdue balances automatically.',
    image: '/features/invoices.png',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    vector: AnimatedTooth,
    highlights: [
      'Itemized invoices with procedure codes and descriptions',
      'Split-payment support: cash, card, UPI, insurance',
      'Automated payment reminders for overdue invoices',
      'PDF invoice generation with clinic branding',
      'Tax calculation with GST/VAT compliance',
      'Payment link generation for easy patient checkout'
    ],
    stats: [
      { value: '80%', label: 'Faster billing cycle' },
      { value: '₹2Cr+', label: 'Processed monthly' },
      { value: '35%', label: 'Fewer unpaid invoices' }
    ]
  },
  {
    slug: 'analytics',
    icon: BarChart3,
    title: 'Real-time Analytics & Reports',
    tagline: 'See the data. Make the decisions.',
    description: 'Transform raw clinic data into visual dashboards with revenue trends, patient retention rates, treatment success metrics, and dentist productivity reports.',
    image: '/features/reports.png',
    color: 'from-primary via-emerald-400 to-teal-500',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    vector: AnimatedDentalMirror,
    highlights: [
      'Real-time revenue dashboard with daily/weekly/monthly comparisons',
      'Patient acquisition and retention analytics',
      'Treatment-wise revenue breakdown and popularity metrics',
      'Dentist performance and productivity reports',
      'Expense tracking with profit margin calculation',
      'Excel & PDF report export for accounting teams'
    ],
    stats: [
      { value: '360°', label: 'Business visibility' },
      { value: '15+', label: 'Report templates' },
      { value: '5min', label: 'To actionable insights' }
    ]
  },
  {
    slug: 'security',
    icon: Lock,
    title: 'HIPAA Security & Compliance',
    tagline: 'Bank-grade protection for patient data.',
    description: 'Built with healthcare-grade security from the ground up: 256-bit AES encryption, HIPAA compliance, role-based access control, and automated daily cloud backups.',
    image: '/features/users.png',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    vector: AnimatedShield,
    highlights: [
      'HIPAA & GDPR compliant data handling',
      '256-bit AES encryption for data at rest and in transit (TLS 1.3)',
      'Role-based access control with granular permissions',
      'Automated daily cloud backups across redundant data centers',
      'Complete audit trail and access logging',
      'Two-factor authentication (2FA) for all staff accounts'
    ],
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '0', label: 'Data breaches' },
      { value: '24/7', label: 'Security monitoring' }
    ]
  },
  {
    slug: 'settings',
    icon: Settings,
    title: 'Clinic Configuration & Workflow',
    tagline: 'Your clinic, your rules.',
    description: 'Customize every aspect of your dental practice: treatment templates, medicine catalogs, multi-location setup, branding, and automated workflow triggers.',
    image: '/features/settings.png',
    color: 'from-emerald-500 via-teal-500 to-primary',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    vector: AnimatedToothbrush,
    highlights: [
      'Custom dental procedure catalog with pricing',
      'Prescription template builder for common treatments',
      'Multi-location clinic management and switching',
      'Clinic branding (logo, colors, letterhead, receipt format)',
      'Automated workflow triggers and notifications',
      'Medicine inventory with reorder point alerts'
    ],
    stats: [
      { value: '100+', label: 'Configurable settings' },
      { value: '∞', label: 'Custom templates' },
      { value: '5', label: 'Branches supported' }
    ]
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">

        {/* ====== HERO SECTION with theme colors ====== */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated gradient blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-cyan-500/20 rounded-full blur-3xl animate-morph-blob opacity-30" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-primary/30 rounded-full blur-3xl animate-morph-blob opacity-20" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-morph-blob opacity-15" style={{ animationDelay: '2s' }} />

          <FloatingParticles className="opacity-25" />

          <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold shadow-sm">
            All Platform Capabilities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="text-foreground">Powerful Features for </span>
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Modern Dental Clinics
              </span>
            </h1>

            <p className="text-xl text-foreground/75 max-w-3xl mx-auto leading-relaxed font-medium">
              Every tool your dental practice needs—from appointment scheduling and patient records 
              to automated billing, analytics dashboards, and enterprise-grade security. All in one platform.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button linkHref='/contact' size="lg" className="h-14 px-8 sm:px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-2xl transition-all hover:scale-105">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button linkHref='/contact' size="lg" variant="outline" className="h-14 px-8 sm:px-10 rounded-full border-2 border-border hover:bg-primary/10 text-base sm:text-lg font-semibold transition-all">
                 Book Live Demo
                </Button>
            </div>
          </div>
        </section>

        {/* ====== FEATURE SECTIONS with unified theme ====== */}
        {allFeatures.map((feature, index) => {
          const isEven = index % 2 === 0
          return (
            <FeatureSection key={feature.slug} feature={feature} isEven={isEven} index={index} />
          )
        })}

        {/* ====== BOTTOM CTA ====== */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-border/80">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10" />
          <FloatingParticles className="opacity-20" />

          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Ready to <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Transform Your Practice?</span>
            </h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto font-medium">
              Join 500+ dental clinics who trust DentaCare to manage their operations, patients, and revenue growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" linkHref='/contact' className="h-14 px-8 sm:px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-2xl transition-all hover:scale-105">
                  Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" linkHref='/contact'  className="h-14 px-8 sm:px-10 rounded-full border-2 border-border hover:bg-primary/10 text-base sm:text-lg font-semibold transition-all">
                  Talk to Sales
                </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

/* ====== Individual Feature Section Component ====== */
function FeatureSection({ feature, isEven, index }: { feature: typeof allFeatures[0]; isEven: boolean; index: number }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section
      ref={ref}
      id={feature.slug}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-border/60 ${
        index % 2 === 1 ? 'bg-gradient-to-b from-muted/30 via-muted/10 to-background' : ''
      }`}
    >
      {/* Background decorative blob */}
      <div className={`absolute ${isEven ? 'top-10 -right-20' : 'top-10 -left-20'} w-96 h-96 bg-gradient-to-br from-primary/15 to-emerald-500/10 rounded-full blur-3xl opacity-20 animate-morph-blob`} />

      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${!isEven ? 'md:grid-flow-col-dense' : ''}`}>

          {/* Content Side */}
          <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''} ${isVisible ? (isEven ? 'animate-reveal-left' : 'animate-reveal-right') : 'opacity-0'}`}
               style={{ animationFillMode: 'both' }}>
            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-primary/10 border border-primary/20`}>
                <feature.icon className={`w-6 h-6 text-primary`} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest text-primary`}>
                Feature {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
              {feature.title}
            </h2>

            <p className={`text-xl font-bold bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent`}>
              {feature.tagline}
            </p>

            <p className="text-foreground/75 text-lg leading-relaxed font-medium">
              {feature.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {feature.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 className={`w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                  <span className="text-foreground/80 text-sm leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {feature.stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-colors group shadow-sm">
                  <p className={`text-2xl font-extrabold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Learn More link */}
            <Link href={`/features/${feature.slug}`} className={`inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline transition-all group`}>
              Learn more about {feature.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Side */}
          <div className={`relative ${!isEven ? 'lg:col-start-1' : ''} ${isVisible ? (isEven ? 'animate-reveal-right' : 'animate-reveal-left') : 'opacity-0'}`}
               style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
            {/* Orbiting sparkles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="relative w-[400px] h-[400px]">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-dental-orbit"
                    style={{ animationDelay: `${i * 3}s`, animationDuration: `${12 + i * 2}s` }}
                  >
                    <Star className={`w-3 h-3 text-primary opacity-40`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Main screenshot */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-border/80 shadow-2xl group hover:border-primary/50 transition-all duration-500 bg-card">
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10 opacity-30 group-hover:opacity-50 transition-opacity`} />
              <Image
                src={feature.image}
                alt={feature.title}
                width={1200}
                height={800}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating badge overlay */}
              <div className={`absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-extrabold shadow-lg flex items-center gap-2`}>
                <feature.icon className="w-4 h-4" />
                {feature.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
