'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { FloatingParticles } from '@/components/dental-vectors'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      location: 'DELHI, IN',
      initials: 'PS',
      badgeBg: 'bg-[#00c9a7]',
      content:
        'Finally, practice software that feels modern and effortless. DentaCare has reduced our front-desk workload and improved patient satisfaction week after week!',
      rating: 5,
    },
    {
      name: 'Dr. Amit Patel',
      location: 'BANGALORE, IN',
      initials: 'AP',
      badgeBg: 'bg-[#ff5252]',
      content:
        'The automated scheduling and billing features are incredible. Our clinic efficiency has gone up drastically, never going back to legacy tools.',
      rating: 5,
    },
    {
      name: 'Dr. Sneha Gupta',
      location: 'HYDERABAD, IN',
      initials: 'SG',
      badgeBg: 'bg-[#5b73ff]',
      content:
        'Quality analytics, amazing user interface, perfect workflow integration. DentaCare has completely won over our entire dental team!',
      rating: 5,
    },
    {
      name: 'Dr. Rajesh Kumar',
      location: 'MUMBAI, IN',
      initials: 'RK',
      badgeBg: 'bg-[#ffb300]',
      content:
        'Implementation was seamless. The patient records and analytics dashboard give us insights we never had before.',
      rating: 5,
    },
    {
      name: 'Dr. Ananya Roy',
      location: 'KOLKATA, IN',
      initials: 'AR',
      badgeBg: 'bg-[#a855f7]',
      content:
        'The multi-branch clinic feature simplified our operations across 3 locations. Exceptional customer support as well!',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const maxIndex = testimonials.length - 1

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [handleNext, isPaused])

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background border-y border-border/80 overflow-hidden"
    >
      {/* Interactive Vectors */}
      {/* <div className="absolute top-10 left-8 z-20 hidden md:block opacity-90">
        <AnimatedTooth size={70} />
      </div>
      <div className="absolute bottom-10 right-8 z-20 hidden md:block opacity-90">
        <AnimatedDentalMirror size={65} />
      </div>
      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20 hidden xl:block opacity-80">
        <AnimatedHeartPulse size={80} />
      </div> */}

      <FloatingParticles className="opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Loved by dental{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              professionals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            See what top clinic owners and practice managers have to say
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slide Window */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="relative flex flex-col justify-between h-full rounded-3xl bg-card border border-border p-8 shadow-sm transition-all hover:border-emerald-500/50 hover:shadow-xl">
                    
                    {/* Top Row: Stars + Quote Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-muted-foreground/30 rotate-180" />
                      </div>

                      {/* Review Text */}
                      <p className="text-foreground text-base leading-relaxed font-medium mb-8">
                        “{testimonial.content}”
                      </p>
                    </div>

                    {/* Footer: Colored Initials + Name & Location */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div
                        className={`w-12 h-12 rounded-full ${testimonial.badgeBg} text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        {testimonial.initials}
                      </div>

                      <div>
                        <h3 className="font-bold text-base text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls & Dots */}
          <div className="flex items-center justify-between mt-8 pt-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="p-3 rounded-full border border-border bg-card text-foreground hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                className="p-3 rounded-full border border-border bg-card text-foreground hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-emerald-500'
                      : 'w-2.5 bg-muted hover:bg-emerald-500/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}