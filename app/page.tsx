import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { TrustedBy } from '@/components/landing/trusted-by'
import { Features } from '@/components/landing/features'
import { Showcase } from '@/components/landing/showcase'
import { Security } from '@/components/landing/security'
import { ImageGallery } from '@/components/landing/image-gallery'
import { Stats } from '@/components/landing/stats'
import { Pricing } from '@/components/landing/pricing'
import { Testimonials } from '@/components/landing/testimonials'
import { FAQ } from '@/components/landing/faq'
import { CTA } from '@/components/landing/cta'
import { Footer } from '@/components/landing/footer'

export const metadata = {
  title: 'Agoo Dental - Transform Your Dental Practice with AI & PWA Power',
  description: 'The all-in-one platform for modern dental clinics. Manage appointments, patients, payments, invoices, expenses, and analytics with beautiful simplicity.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <TrustedBy />
        <Features />
        <Showcase />
        <Security />
        <ImageGallery />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
