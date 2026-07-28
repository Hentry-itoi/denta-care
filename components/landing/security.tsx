'use client'

import { Shield, Lock, Server, Smartphone, CheckCircle, Award } from 'lucide-react'
import { FloatingParticles } from '@/components/dental-vectors'

export function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'HIPAA & GDPR Compliant',
      desc: 'Built according to strict healthcare data privacy regulations to ensure patient confidential records are protected at all times.',
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      icon: Lock,
      title: '256-Bit AES Encryption',
      desc: 'All patient data, treatment records, and payment files are encrypted both in transit (TLS 1.3) and at rest.',
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      icon: Server,
      title: '99.99% Uptime & Backup',
      desc: 'Automated daily cloud backups across redundant data centers ensuring zero data loss and uninterrupted practice access.',
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      icon: Smartphone,
      title: 'PWA & Mobile Ready',
      desc: 'Install directly on iOS, Android, Windows, and Mac as a Progressive Web App (PWA) with offline capability and push alerts.',
      color: 'text-purple-500 bg-purple-500/10'
    }
  ]

  return (
    <section id="security" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden border-t border-border/80">
      {/* Super Interactive Security Vectors */}
      {/* <div className="absolute top-12 left-8 z-20 hidden md:block">
        <AnimatedShield size={95} />
      </div>
      <div className="absolute bottom-12 right-8 z-20 hidden md:block">
        <AnimatedHeartPulse size={90} />
      </div>
      <div className="absolute top-1/2 right-12 -translate-y-1/2 z-20 hidden xl:block opacity-80">
        <AnimatedTooth size={70} />
      </div> */}

      <FloatingParticles className="opacity-15" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          Enterprise Grade Security & Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Your Patient Data is <span className="bg-gradient-to-r from-primary via-emerald-400 to-amber-400 bg-clip-text text-transparent">100% Protected</span>
          </h2>
          <p className="text-foreground/75 text-lg font-medium">
            Bank-grade encryption, HIPAA compliance standards, and continuous cloud backup so you can focus entirely on patient care.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-card border border-border/80 rounded-2xl p-6 space-y-4 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold pt-2">
                  <CheckCircle className="w-4 h-4" /> Certified & Verified
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
