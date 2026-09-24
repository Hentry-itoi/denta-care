"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { FloatingParticles } from '@/components/dental-vectors'

const screenshots = [
  {
    id: 1,
    title: "Dashboard Overview",
    description:
      "Get instant insights with real-time metrics, upcoming appointments, recent invoices, and activity feeds.",
    image: "/features/dashboard.png",
    highlight: "Revenue tracking and quick access to all clinic data",
  },
  {
    id: 2,
    title: "Smart Scheduling",
    description:
      "Manage appointments with our intuitive calendar interface. View daily, weekly, or monthly schedules.",
    image: "/features/appointments.png",
    highlight: "Never miss an appointment with automated reminders",
  },
  {
    id: 3,
    title: "User Management",
    description:
      "Manage your team with role-based access control. Track logins and keep your clinic organized.",
    image: "/features/users.png",
    highlight: "Control who has access to what with granular permissions",
  },
  {
    id: 4,
    title: "Payment Processing",
    description:
      "Track all patient payments in one place. Support multiple payment methods and payment statuses.",
    image: "/features/payments.png",
    highlight: "Reduce payment processing time by 80%",
  },
  {
    id: 5,
    title: "Invoice Management",
    description:
      "Generate, send, and track invoices automatically. Get detailed payment tracking and history.",
    image: "/features/invoices.png",
    highlight: "Professional invoices sent automatically to patients",
  },
  {
    id: 6,
    title: "Expense Tracking",
    description:
      "Monitor clinic expenses across categories. Track spending and manage your operational costs.",
    image: "/features/expenses.png",
    highlight: "Better financial visibility and cost control",
  },
  {
    id: 7,
    title: "Comprehensive Reports",
    description:
      "Access detailed analytics including patient, payment, expense, and appointment reports.",
    image: "/features/reports.png",
    highlight: "Data-driven insights for better business decisions",
  },
  {
    id: 8,
    title: "System Settings",
    description:
      "Configure medicines, locations, templates, and system-wide preferences from one place.",
    image: "/features/settings.png",
    highlight: "Customize every aspect to match your workflow",
  },
];

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  const current = screenshots[activeIndex];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden border-t border-border/80">
      {/* Decorative Interactive Vector Accents */}
      {/* <div className="absolute top-10 left-6 z-20 hidden md:block">
        <AnimatedTooth size={70} />
      </div>
      <div className="absolute bottom-12 right-6 z-20 hidden md:block">
        <AnimatedDentalMirror size={65} />
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 hidden xl:block">
        <AnimatedAligner size={80} />
      </div> */}

      {/* <FloatingParticles className="opacity-15" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Live Interface Tour
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Explore Every{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Clinic Module
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-medium">
            See how DentaCare transforms your dental practice management with
            beautiful, intuitive interfaces
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl bg-card group">
              <Image
                src={current.image}
                alt={current.title}
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-2xl" />

              {/* Corner Tooth Decor */}
              {/* <div className="absolute top-3 right-3 z-30 opacity-90">
                <AnimatedImplant size={55} />
              </div> */}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-md"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              <div className="flex gap-2">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 w-2.5 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-md"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Right side - Details */}
          <div className="space-y-8">
            <div className="animate-fade-in space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-xs font-bold text-primary">
                  Module {activeIndex + 1} of {screenshots.length}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                {current.title}
              </h3>

              <p className="text-foreground/75 text-base leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-inner">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                  Key Advantage
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {current.highlight}
                </p>
              </div>
            </div>

            {/* Feature list */}
            <div className="space-y-3 pt-2 border-t border-border/60">
              <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">
                Standard across all plans:
              </h4>
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

        {/* Thumbnail grid */}
        <div className="mt-16 pt-8 border-t border-border/60">
          <h4 className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-4">
            Jump Directly to Screen
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {screenshots.map((shot, idx) => (
              <button
                key={shot.id}
                onClick={() => setActiveIndex(idx)}
                className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  idx === activeIndex
                    ? "border-primary ring-4 ring-primary/20 scale-105"
                    : "border-border hover:border-primary/50"
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
  );
}
