"use client";

import { Button } from "@/components/atom/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// import { FloatingParticles } from "@/components/dental-vectors";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-25 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-25 pointer-events-none"></div>

      {/* Super Interactive Dental Vector Accents */}
      {/* <div className="absolute top-20 right-8 lg:right-16 z-20 hidden lg:block">
        <AnimatedTooth size={110} />
      </div>
      <div className="absolute bottom-12 left-6 lg:left-12 z-20 hidden lg:block">
        <AnimatedToothbrush size={100} />
      </div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 hidden xl:block opacity-80">
        <AnimatedDentalMirror size={85} />
      </div> */}
      {/* <div className="absolute top-28 left-1/3 z-20 hidden 2xl:block opacity-80">
        <AnimatedAligner size={90} />
      </div>
      <div className="absolute bottom-20 right-1/3 z-20 hidden xl:block opacity-80">
        <AnimatedDentalChair size={120} />
      </div> */}

      {/* <FloatingParticles className="opacity-25" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shadow-sm">
              <span className="text-sm text-primary font-semibold">
                Next-Gen Dental Clinic Platform
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.1]">
              <span className="text-foreground">Elevate Your </span>
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Dental Business
              </span>
            </h1>

            <p className="text-lg text-foreground/75 max-w-lg leading-relaxed font-medium">
              Agoo Dental streamlines your entire practice—from smart scheduling
              and patient records to instant payments and AI analytics. Join
              500+ successful dental clinics today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                linkHref="/#pricing"
                className="text-lg font-bold h-14 px-8"
              >
                Get Started Free <ArrowRight className="ml-2" size={22} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                linkHref="/contact"
                className="text-lg font-bold h-14 px-8"
              >
                Schedule Live Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 text-sm text-foreground/70 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-primary font-extrabold text-base">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-extrabold text-base">✓</span>
                <span>14-day full trial access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-extrabold text-base">✓</span>
                <span>Instant 2-min setup</span>
              </div>
            </div>
          </div>

          {/* Right Dashboard Image with Floating Vectors */}
          <div className="relative h-96 lg:h-full min-h-96 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-cyan-500/20 to-transparent rounded-3xl blur-3xl opacity-40"></div>

            {/* Interactive floating elements on screenshot */}
            {/* <div className="absolute -top-8 -left-8 z-30">
              <AnimatedTooth size={65} />
            </div>
            <div className="absolute -bottom-6 -right-6 z-30">
              <AnimatedImplant size={75} />
            </div> */}

            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-border/80 bg-card group-hover:border-primary/50 transition-colors">
              <Image
                src="/features/dashboard.png"
                alt="DentaCare Practice Dashboard"
                width={1200}
                height={800}
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
