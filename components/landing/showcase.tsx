'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { FloatingParticles } from '@/components/dental-vectors'

const screenshots = [
  {
    id: 1,
    title: 'Dashboard Overview',
    description: 'Get instant insights with real-time metrics, upcoming appointments, recent invoices, and activity feeds.',
    image: '/dashboard.png',
    highlight: 'Revenue tracking and quick access to all clinic data',
  },
  {
    id: 2,
    title: 'Smart Scheduling',
    description: 'Manage appointments with our intuitive calendar interface. View daily, weekly, or monthly schedules.',
    image: '/appointments.png',
    highlight: 'Never miss an appointment with automated reminders',
  },
  {
    id: 3,
    title: 'User Management',
    description: 'Manage your team with role-based access control. Track logins and keep your clinic organized.',
    image: '/users.png',
    highlight: 'Control who has access to what with granular permissions',
  },
  {
    id: 4,
    title: 'Payment Processing',
    description: 'Track all patient payments in one place. Support multiple payment methods and payment statuses.',
    image: '/payments.png',
    highlight: 'Reduce payment processing time by 80%',
  },
  {
    id: 5,
    title: 'Invoice Management',
    description: 'Generate, send, and track invoices automatically. Get detailed payment tracking and history.',
    image: '/invoices.png',
    highlight: 'Professional invoices sent automatically to patients',
  },
  {
    id: 6,
    title: 'Expense Tracking',
    description: 'Monitor clinic expenses across categories. Track spending and manage your operational costs.',
    image: '/expenses.png',
    highlight: 'Better financial visibility and cost control',
  },
  {
    id: 7,
    title: 'Comprehensive Reports',
    description: 'Access detailed analytics including patient, payment, expense, and appointment reports.',
    image: '/reports.png',
    highlight: 'Data-driven insights for better business decisions',
  },
  {
    id: 8,
    title: 'System Settings',
    description: 'Configure medicines, locations, templates, and system-wide preferences from one place.',
    image: '/settings.png',
    highlight: 'Customize every aspect to match your workflow',
  },
]

export function Showcase() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Configure Embla Autoplay Plugin
  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: false })

  // Listen to slide changes from Shadcn Carousel
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  // Toggle Play / Pause Autoplay
  const toggleAutoplay = useCallback(() => {
    if (!api) return
    const autoplay = api.plugins().autoplay
    if (!autoplay) return

    if (autoplay.isPlaying()) {
      autoplay.stop()
      setIsPlaying(false)
    } else {
      autoplay.play()
      setIsPlaying(true)
    }
  }, [api])

  // Thumbnail Navigation handler
  const handleSelectSlide = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  const current = screenshots[activeIndex]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden border-t border-border/80">
      <FloatingParticles className="opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span>Live Interface Tour</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Explore Every{' '}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Clinic Module
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-medium">
            See how DentaCare transforms your dental practice management with beautiful, intuitive interfaces
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Shadcn Carousel */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              plugins={[autoplayPlugin]}
              className="w-full"
              opts={{
                loop: true,
              }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl bg-card">
                <CarouselContent>
                  {screenshots.map((shot) => (
                    <CarouselItem key={shot.id}>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={shot.image}
                          alt={shot.title}
                          width={1000}
                          height={800}
                          className="w-full h-full object-cover object-top"
                          priority={shot.id === 1}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-2xl" />
              </div>

              {/* Navigation Controls & Indicators */}
              <div className="flex items-center justify-between mt-6">
                <CarouselPrevious className="static translate-y-0 p-3 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/10 text-primary transition-all duration-300 shadow-md" />

                {/* Dot Indicators */}
                <div className="flex items-center gap-2">
                  {screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex
                          ? 'bg-primary w-8 shadow-sm'
                          : 'bg-primary/30 w-2.5 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to screenshot ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                 

                  <CarouselNext className="static translate-y-0 p-3 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/10 text-primary transition-all duration-300 shadow-md" />
                </div>
              </div>
            </Carousel>
          </div>

          {/* Right side - Module Details */}
          <div className="space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500 key={current.id}">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-xs font-bold text-primary">
                  Module {activeIndex + 1} of {screenshots.length}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                {current.title}
              </h3>

              <p className="text-foreground/75 text-base leading-relaxed font-medium">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-inner">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Key Advantage</p>
                <p className="text-sm font-semibold text-foreground">
                  {current.highlight}
                </p>
              </div>
            </div>

            {/* Feature list */}
            <div className="space-y-3 pt-2 border-t border-border/60">
              <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">Standard across all plans:</h4>
              <ul className="grid grid-cols-2 gap-2 text-foreground/80 text-xs font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Full features included
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Real-time sync
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Unlimited staff seats
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  24/7 priority support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Thumbnail Grid */}
        <div className="mt-16 pt-8 border-t border-border/60">
          <h4 className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-4">Jump Directly to Screen</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {screenshots.map((shot, idx) => (
              <button
                key={shot.id}
                onClick={() => handleSelectSlide(idx)}
                className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  idx === activeIndex
                    ? 'border-primary ring-4 ring-primary/20 scale-105 shadow-lg'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Image
                  src={shot.image}
                  alt={shot.title}
                  width={200}
                  height={160}
                  className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center p-1 text-center opacity-90">
                  <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs line-clamp-1">
                    {shot.title}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}