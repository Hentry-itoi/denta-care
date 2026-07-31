import React from 'react'

export const metadata = {
  title: 'Terms of Service - Agoo Dental',
  description: 'Terms of Service for Agoo Dental',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/80 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
            <p>By accessing or using Agoo Dental's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Agoo Dental's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Agoo Dental's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Disclaimer</h2>
            <p>The materials on Agoo Dental's website are provided on an 'as is' basis. Agoo Dental makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Limitations</h2>
            <p>In no event shall Agoo Dental or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Agoo Dental's website, even if Agoo Dental or an Agoo Dental authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Email: legal@agoodental.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
