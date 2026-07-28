
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Maximize2, X, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FloatingParticles } from '@/components/dental-vectors'

interface SystemModule {
  id: string
  title: string
  subtitle: string
  category: 'Operations' | 'Financials' | 'Administration'
  image: string
  badge: string
  description: string
  keyFeatures: string[]
}

const systemModules: SystemModule[] = [
  {
    id: 'dashboard',
    title: 'Executive Dashboard & Overview',
    subtitle: 'Real-time clinic metrics & schedule',
    category: 'Operations',
    image: '/dashboard.png',
    badge: 'Core Hub',
    description: 'Get an instant 360° overview of your practice with real-time revenue stats, pending invoices, and daily patient queues.',
    keyFeatures: ['Live revenue counters', 'Quick action shortcuts', 'Patient activity timeline', 'Multi-dentist schedule']
  },
  {
    id: 'appointments',
    title: 'Smart Appointment Scheduling',
    subtitle: 'Drag-and-drop calendar & reminders',
    category: 'Operations',
    image: '/appointments.png',
    badge: 'Scheduling',
    description: 'Manage doctor schedules effortlessly. Track appointment statuses and eliminate double-booking with conflict detection.',
    keyFeatures: ['Daily & weekly views', 'Automated SMS reminders', 'Chair assignment', 'Check-in tracker']
  },
  {
    id: 'users',
    title: 'User & Staff Management',
    subtitle: 'Role-based access control for staff',
    category: 'Administration',
    image: '/users.png',
    badge: 'Security',
    description: 'Grant precise permissions to clinic staff. Manage dentist availability, working hours, and monitor user login logs securely.',
    keyFeatures: ['Granular role permissions', 'Staff duty rosters', 'HIPAA compliant logs', 'Multi-branch switching']
  },
  {
    id: 'payments',
    title: 'Payment Processing Center',
    subtitle: 'Seamless multi-method tracking',
    category: 'Financials',
    image: '/payments.png',
    badge: 'Payments',
    description: 'Accept cash, cards, online transfers, and insurance payouts. Track partial payments and overdue balances instantly.',
    keyFeatures: ['Split-payment support', 'Instant confirmation', 'Insurance claim tracking', 'Gateway integration']
  },
  {
    id: 'invoices',
    title: 'Automated Invoicing & Billing',
    subtitle: 'Itemized treatment breakdown',
    category: 'Financials',
    image: '/invoices.png',
    badge: 'Billing',
    description: 'Generate itemized invoices for treatments. Send PDF receipts directly to patients via email or WhatsApp.',
    keyFeatures: ['Itemized procedure billing', 'Tax & discount calculation', 'PDF download & export', 'Automated payment links']
  },
  {
    id: 'expenses',
    title: 'Clinic Expense Tracking',
    subtitle: 'Categorized expenditure management',
    category: 'Financials',
    image: '/expenses.png',
    badge: 'Accounting',
    description: 'Log operational costs such as lab fees, equipment maintenance, staff salaries, and supply inventory purchases.',
    keyFeatures: ['Expense tagging', 'Receipt uploads', 'Monthly expense breakdown', 'Profitability analysis']
  },
  {
    id: 'reports',
    title: 'Comprehensive Analytics',
    subtitle: 'In-depth financial & retention reports',
    category: 'Administration',
    image: '/reports.png',
    badge: 'Analytics',
    description: 'Make data-driven decisions with detailed reports on monthly profits, treatment success rates, and staff performance.',
    keyFeatures: ['Exportable Excel & PDF', 'Patient acquisition stats', 'Revenue graphs', 'Dentist productivity']
  },
  {
    id: 'settings',
    title: 'System & Practice Settings',
    subtitle: 'Custom treatment templates & setup',
    category: 'Administration',
    image: '/settings.png',
    badge: 'Configuration',
    description: 'Customize DentaCare to match your exact clinic workflow. Configure procedure lists, medicine catalogs, and branding.',
    keyFeatures: ['Procedure price lists', 'Prescription templates', 'Clinic logo upload', 'Multi-location settings']
  }
]

export function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Operations' | 'Financials' | 'Administration'>('All')
  const [previewImage, setPreviewImage] = useState<SystemModule | null>(null)

  const filteredModules = selectedCategory === 'All' 
    ? systemModules 
    : systemModules.filter(m => m.category === selectedCategory)

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-background to-muted/20 overflow-hidden border-t border-border/80">
      <FloatingParticles className="opacity-15" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            Comprehensive Visual Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Explore All <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">System Modules & Screens</span>
          </h2>
          <p className="text-foreground/75 text-lg font-medium">
            Take a guided visual tour through all 8 core application modules powering modern, high-performing dental clinics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(['All', 'Operations', 'Financials', 'Administration'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                  : 'bg-card text-foreground/75 border border-border hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat === 'All' ? 'All 8 Screens' : cat}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredModules.map((module) => (
            <div
              key={module.id}
              className="group relative bg-card border border-border/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Preview Container */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-black/40 cursor-pointer"
                onClick={() => setPreviewImage(module)}
              >
                <Image
                  src={module.image}
                  alt={module.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/90 text-primary-foreground text-[10px] font-extrabold shadow-md">
                    {module.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-bold border border-white/20">
                    {module.category}
                  </span>
                </div>

                {/* Lightbox Zoom Button */}
                <button
                  onClick={() => setPreviewImage(module)}
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/70 hover:bg-primary text-white backdrop-blur-md transition-all duration-200 shadow-xl opacity-90 group-hover:scale-110"
                  aria-label="Enlarge Screenshot"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Content Details */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-xs font-bold text-primary">{module.subtitle}</p>
                  <p className="text-xs text-foreground/75 leading-relaxed pt-1 font-medium line-clamp-3">
                    {module.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="pt-3 border-t border-border/60">
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-foreground/80 font-medium">
                    {module.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Popup */}
        {previewImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-5xl w-full bg-card border border-border rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {previewImage.badge}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{previewImage.title}</h3>
                  </div>
                  <p className="text-xs text-foreground/60">{previewImage.subtitle}</p>
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image */}
              <div className="relative rounded-xl overflow-hidden border border-border bg-black max-h-[70vh] flex items-center justify-center">
                <Image
                  src={previewImage.image}
                  alt={previewImage.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-foreground/70">{previewImage.description}</p>
                <a href="#pricing" onClick={() => setPreviewImage(null)}>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Get Started with {previewImage.badge} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
