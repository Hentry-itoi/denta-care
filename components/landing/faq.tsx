'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {  FloatingParticles } from '@/components/dental-vectors'

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does it take to set up DentaCare?',
      answer: 'Most practices are up and running within 24-48 hours. Our onboarding team guides you through the entire process, and we handle data migration if needed.'
    },
    {
      question: 'Is my patient data secure?',
      answer: 'Absolutely. We\'re HIPAA compliant with bank-level encryption, daily backups, and regular security audits. Your data is our top priority.'
    },
    {
      question: 'Can I integrate DentaCare with my existing systems?',
      answer: 'Yes! We offer integrations with major dental software, payment processors, and practice management tools. Our API is also available for custom integrations.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide email support for all plans, priority support for Professional and Enterprise, and 24/7 phone support for Enterprise customers.'
    },
    {
      question: 'Can I try DentaCare before committing?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required. You get full access to all features during the trial period.'
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes. We provide video tutorials, documentation, webinars, and personalized training sessions for your team at no extra cost.'
    },
  ]

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden border-t border-border/80">
      {/* Dental Vectors */}
      {/* <div className="absolute top-12 left-6 z-20 hidden md:block opacity-90">
        <AnimatedTooth size={75} />
      </div>
      <div className="absolute bottom-12 right-6 z-20 hidden md:block opacity-90">
        <AnimatedToothbrush size={85} />
      </div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 hidden xl:block opacity-80">
        <AnimatedDentalMirror size={70} />
      </div> */}

      <FloatingParticles className="opacity-15" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Frequently asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">questions</span>
          </h2>
          <p className="text-xl text-foreground/70 font-medium">
            Everything you need to know about DentaCare
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 shadow-sm"
            >
              <button
                onClick={() => setOpenId(openId === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 hover:bg-card/80 transition-colors"
              >
                <h3 className="font-bold text-lg text-left text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openId === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openId === idx && (
                <div className="px-6 pb-6 border-t border-border/60 pt-4 text-foreground/75 leading-relaxed font-medium animate-slide-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-secondary/10 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-bold text-foreground">Still have questions?</h3>
          <p className="text-foreground/75 font-medium">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Contact our team <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
