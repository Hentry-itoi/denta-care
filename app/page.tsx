import { CTA, FAQ, Features, Hero, ImageGallery, Pricing, Security, Showcase, Stats, Testimonials, TrustedBy } from "@/components/common/landing";

export const metadata = {
  title: 'Agoo Dental - Transform Your Dental Practice with AI & PWA Power',
  description: 'The all-in-one platform for modern dental clinics. Manage appointments, patients, payments, invoices, expenses, and analytics with beautiful simplicity.',
}

export default function Home() {
  return (
    <div className="bg-background text-foreground">
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
    </div>
  )
}
