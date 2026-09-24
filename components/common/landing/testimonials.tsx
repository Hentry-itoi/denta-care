"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
// import { FloatingParticles } from '@/components/dental-vectors'

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      location: "DELHI, IN",
      initials: "PS",
      badgeBg: "bg-[#00c9a7]",
      content:
        "Finally, practice software that feels modern and effortless. DentaCare has reduced our front-desk workload and improved patient satisfaction week after week!",
      rating: 5,
    },
    {
      name: "Dr. Amit Patel",
      location: "BANGALORE, IN",
      initials: "AP",
      badgeBg: "bg-[#ff5252]",
      content:
        "The automated scheduling and billing features are incredible. Our clinic efficiency has gone up drastically, never going back to legacy tools.",
      rating: 5,
    },
    {
      name: "Dr. Sneha Gupta",
      location: "HYDERABAD, IN",
      initials: "SG",
      badgeBg: "bg-[#5b73ff]",
      content:
        "Quality analytics, amazing user interface, perfect workflow integration. DentaCare has completely won over our entire dental team!",
      rating: 5,
    },
    {
      name: "Dr. Rajesh Kumar",
      location: "MUMBAI, IN",
      initials: "RK",
      badgeBg: "bg-[#ffb300]",
      content:
        "Implementation was seamless. The patient records and analytics dashboard give us insights we never had before.",
      rating: 5,
    },
    {
      name: "Dr. Ananya Roy",
      location: "KOLKATA, IN",
      initials: "AR",
      badgeBg: "bg-[#a855f7]",
      content:
        "The multi-branch clinic feature simplified our operations across 3 locations. Exceptional customer support as well!",
      rating: 5,
    },
    {
      name: "Dr. Vikram Joshi",
      location: "PUNE, IN",
      initials: "VJ",
      badgeBg: "bg-[#ec4899]",
      content:
        "The digital treatment plans and consent forms saved us tons of paper and time. Patients appreciate the transparent and modern approach!",
      rating: 5,
    },
    {
      name: "Dr. Meera Nair",
      location: "KOCHI, IN",
      initials: "MN",
      badgeBg: "bg-[#06b6d4]",
      content:
        "Managing inventory and lab orders used to be a headache. DentaCare streamlined everything into a few quick clicks.",
      rating: 5,
    },
    {
      name: "Dr. Rohan Verma",
      location: "CHENNAI, IN",
      initials: "RV",
      badgeBg: "bg-[#8b5cf6]",
      content:
        "Our appointment no-show rate dropped significantly thanks to the automated SMS and WhatsApp reminders. Truly a game changer!",
      rating: 5,
    },
    {
      name: "Dr. Kavita Reddy",
      location: "AHMEDABAD, IN",
      initials: "KR",
      badgeBg: "bg-[#10b981]",
      content:
        "The cloud backup and top-tier security give me peace of mind. I can access patient records securely from anywhere.",
      rating: 5,
    },
    {
      name: "Dr. Siddharth Mehta",
      location: "JAIPUR, IN",
      initials: "SM",
      badgeBg: "bg-[#f97316]",
      content:
        "Clean interface, quick response time, and zero learning curve for new staff. Best investment we made for our dental practice this year.",
      rating: 5,
    },
  ];

  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background border-y border-border/80 overflow-hidden"
    >
      {/* <FloatingParticles className="opacity-15" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Loved By Dental{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Professionals
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
                transform: `translateX(-${currentPage * 100}%)`,
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
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-amber-400 text-amber-400"
                              />
                            )
                          )}
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4">
            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Page"
                className="p-3 rounded-full border border-border bg-card text-foreground hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-md active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Page"
                className="p-3 rounded-full border border-border bg-card text-foreground hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-md active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Page Pagination Dots (1 Dot = 3 Cards) */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  type="button"
                  onClick={() => setCurrentPage(pageIdx)}
                  aria-label={`Go to page ${pageIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === pageIdx
                      ? "w-8 bg-emerald-500"
                      : "w-2.5 bg-muted hover:bg-emerald-500/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
