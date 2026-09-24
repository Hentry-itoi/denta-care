'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 py-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Image src="/agoo-logo.png" alt="Agoo Dental" width={200} height={100} className="h-20 w-auto" />
            <p className="text-sm text-foreground/60 leading-relaxed max-w-sm">
              The all-in-one platform for modern dental practices. Simplify management, enhance patient care, and grow your business.
            </p>
            <div className="flex items-center gap-4 pt-4">
               <a
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 hover:text-green-500 transition-colors"
    aria-label="WhatsApp"
  >
    <FaWhatsapp size={20} />
  </a>

  <a
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 hover:text-pink-500 transition-colors"
    aria-label="Instagram"
  >
    <FaInstagram size={20} />
  </a>

  <a
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 hover:text-blue-600 transition-colors"
    aria-label="Facebook"
  >
    <FaFacebook size={20} />
  </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/features/security" className="hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="/#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <div>
            © {currentYear} Agoo Dental. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
