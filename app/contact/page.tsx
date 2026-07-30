'use client'

import { useState } from 'react'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react'
import { FAQ } from '@/components/landing/faq'
import { Button } from '@/components/atom/Button'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in" data-wow-delay="0.2s">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Have questions about DentaCare? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.</p>
          </div>
<section className="pb-24">
  <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">

    {/* Form */}
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-10">
      <div className="mb-8">
        <span className="text-sm font-semibold text-primary">
          CONTACT US
        </span>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Send us a message
        </h2>

        <p className="mt-2 text-muted-foreground">
          Fill out the form and our team will get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold"
          >
            Phone Number
            <span className="ml-1 font-normal text-muted-foreground">
              (Optional)
            </span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (234) 567-890"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold"
          >
            How can we help?
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your clinic and what you're looking for..."
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <Button
          type="submit"
          linkHref='/contact'
          loading={loading}
          loadingText="Sending..."
          className="h-13 w-full rounded-xl bg-primary text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] hover:bg-primary/90"
        >
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>

    {/* Contact Information */}
<div className="flex flex-col gap-5">

  {/* Main Contact Card */}
  <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary via-primary to-primary/80 p-7 text-primary-foreground shadow-2xl shadow-primary/20 sm:p-8">

    {/* Decorative circles */}
    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
    <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/5 blur-3xl" />

    <div className="relative">

      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
          Get in touch
        </div>

        <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          We&apos;re here to help your practice grow.
        </h2>

        <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/75">
          Have questions about DentaCare? Our team is ready to help
          you find the right solution for your dental practice.
        </p>
      </div>

      {/* Contact Items */}
      <div className="space-y-3">

        {/* Email */}
        <a
          href="mailto:hello@dentacare.com"
          className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:translate-x-1"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
            <Mail size={19} />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-primary-foreground/60">
              Email us
            </p>

            <p className="mt-1 truncate text-sm font-semibold">
              hello@dentacare.com
            </p>
          </div>

          <ArrowUpRight
            className="ml-auto shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70"
            size={18}
          />
        </a>

        {/* Phone */}
        <a
          href="tel:+1234567890"
          className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:translate-x-1"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
            <Phone size={19} />
          </div>

          <div>
            <p className="text-xs font-medium text-primary-foreground/60">
              Call us
            </p>

            <p className="mt-1 text-sm font-semibold">
              +1 (234) 567-890
            </p>
          </div>

          <ArrowUpRight
            className="ml-auto shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70"
            size={18}
          />
        </a>

        {/* Location */}
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
            <MapPin size={19} />
          </div>

          <div>
            <p className="text-xs font-medium text-primary-foreground/60">
              Visit us
            </p>

            <p className="mt-1 text-sm font-semibold">
              123 Dental Square, NYC
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Response Time Card */}
  <div className="group rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-center gap-4">

      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
        <span className="absolute inset-0 animate-ping rounded-2xl bg-emerald-500/10" />
        <Mail className="relative" size={20} />
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-semibold">
            Quick response
          </p>

        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          We usually respond within 24 business hours.
        </p>
      </div>

      <div className="ml-auto hidden text-right sm:block">
        <p className="text-xs text-muted-foreground">
          Response time
        </p>
        <p className="font-bold text-primary">
      24h
        </p>
      </div>

    </div>
  </div>

</div>
  </div>
</section>

        <FAQ/>
        </div>
      </main>

      <Footer />
    </div>
  )
}
