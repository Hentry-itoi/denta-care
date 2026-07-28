'use client'

import { useState } from 'react'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have questions about DentaCare? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-foreground/60 mb-4">Reach out to us via email</p>
              <a href="mailto:hello@dentacare.com" className="text-primary hover:text-primary/80 font-medium">
                hello@dentacare.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-foreground/60 mb-4">Call us during business hours</p>
              <a href="tel:+1234567890" className="text-primary hover:text-primary/80 font-medium">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-foreground/60 mb-4">Visit us in person</p>
              <p className="text-primary hover:text-primary/80 font-medium">
                123 Dental Square, NYC
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 animate-slide-up">
                  <p className="font-medium">Thank you for reaching out! We&apos;ll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your clinic and what you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">What&apos;s the typical response time?</h3>
                <p className="text-foreground/60 text-sm">
                  We aim to respond to all inquiries within 24 business hours. Most queries are answered within a few hours during business hours.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Do you offer a free trial?</h3>
                <p className="text-foreground/60 text-sm">
                  Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Can I schedule a demo?</h3>
                <p className="text-foreground/60 text-sm">
                  Absolutely! Contact us and we&apos;ll schedule a personalized demo with one of our product specialists at a time that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
