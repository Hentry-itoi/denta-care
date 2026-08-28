"use client";

import {
  Calendar,
  Users,
  CreditCard,
  BarChart3,
  Bell,
  Lock,
  Zap,
  Settings,
} from "lucide-react";
// import { FloatingParticles } from "@/components/dental-vectors";

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Intuitive appointment scheduling with automated SMS reminders and conflict detection.",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Users,
      title: "Patient Management",
      description:
        "Comprehensive patient profiles with complete medical history and treatment plans.",
      color: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description:
        "Secure payments with multiple methods and automated invoice generation.",
      color: "from-emerald-500/20 to-emerald-600/20",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Comprehensive dashboards with key metrics and financial insights at a glance.",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Real-time alerts for appointments, payments, and important clinic activities.",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "HIPAA compliant with end-to-end encryption and automated daily backups.",
      color: "from-red-500/20 to-red-600/20",
    },
    {
      icon: Zap,
      title: "Lightning Fast PWA",
      description:
        "Optimized for speed with sub-second response times and 99.9% uptime.",
      color: "from-yellow-500/20 to-yellow-600/20",
    },
    {
      icon: Settings,
      title: "Fully Customizable",
      description:
        "Tailor workflows to match your clinic operations with flexible configurations.",
      color: "from-teal-500/20 to-teal-600/20",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
      {/* Floating dental vectors throughout the section */}
      {/* <div className="absolute top-12 left-6 lg:left-12 z-20 hidden md:block">
        <AnimatedTooth size={80} />
      </div>
      <div className="absolute top-1/3 right-4 lg:right-10 z-20 hidden md:block">
        <AnimatedDentalChair size={110} />
      </div>
      <div className="absolute bottom-20 left-1/4 z-20 hidden lg:block">
        <AnimatedToothbrush size={95} />
      </div>
      <div className="absolute bottom-10 right-1/4 z-20 hidden lg:block">
        <AnimatedDentalMirror size={80} />
      </div>
      <div className="absolute top-2/3 left-6 z-20 hidden xl:block">
        <AnimatedAligner size={85} />
      </div>
      <div className="absolute top-16 right-1/3 z-20 hidden xl:block">
        <AnimatedImplant size={75} />
      </div> */}

      {/* <FloatingParticles className="opacity-15" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Everything You Need To{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Run Your Practice
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
            Comprehensive features designed for modern, high-volume dental
            clinics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group cursor-pointer relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform shadow-md`}
                  >
                    <Icon className={`text-primary w-6 h-6`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
