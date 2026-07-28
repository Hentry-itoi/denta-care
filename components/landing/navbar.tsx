'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect, useCallback } from 'react'
import { 
  Menu, X, ChevronDown, Calendar, Users, CreditCard, 
  BarChart3, Lock, Settings, LayoutGrid, Calculator, 
  ShieldCheck, MessageSquare, HelpCircle, PhoneCall, Sparkles, DollarSign,
  Sun, Moon
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'features' | 'pages' | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<'features' | 'pages' | null>(null)
  const [isDark, setIsDark] = useState(false)

  // Initialize theme from DOM (set by inline script in layout)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = useCallback(() => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }, [])
  
  const navRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const featureLinks = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      desc: 'Automated appointments & calendar management',
      href: '/features/scheduling',
    },
    {
      icon: Users,
      title: 'Patient Records',
      desc: 'Complete medical history & staff roles',
      href: '/features/patients',
    },
    {
      icon: CreditCard,
      title: 'Billing & Invoices',
      desc: 'Instant invoice generation & payment tracking',
      href: '/features/billing',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      desc: 'Real-time revenue, expense & patient insights',
      href: '/features/analytics',
    },
    {
      icon: Lock,
      title: 'HIPAA & Security',
      desc: '256-bit encryption & compliance standard',
      href: '/features/security',
    },
    {
      icon: Settings,
      title: 'Clinic Configuration',
      desc: 'Custom workflows, medicines & templates',
      href: '/features/settings',
    }
  ]

  const pageLinks = [
    { icon: LayoutGrid, title: 'All Modules Gallery', desc: 'View all 8 live dashboard interfaces', href: '#gallery' },
    { icon: DollarSign, title: 'Pricing Plans', desc: 'Flexible tiers for solo & multi-dentist clinics', href: '#pricing' },
    { icon: ShieldCheck, title: 'Security & Trust', desc: 'HIPAA compliance & backup guarantees', href: '#security' },
    { icon: MessageSquare, title: 'Testimonials', desc: 'Stories from top dental practice owners', href: '#testimonials' },
    { icon: HelpCircle, title: 'Frequently Asked Questions', desc: 'Answers to common questions', href: '#faq' },
    { icon: PhoneCall, title: 'Contact Us', desc: 'Reach out to our support team', href: '/contact' }
  ]

  return (
    <nav ref={navRef} className="fixed top-0 z-[100] w-full bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-sm transition-all duration-300 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex justify-between items-center h-16 overflow-visible">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/agoo-logo.png" 
                alt="Agoo Dental Logo" 
                width={130} 
                height={52} 
                className="h-9 w-auto transition-transform group-hover:scale-105" 
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            
            {/* Features Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeDropdown === 'features' ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
              </button>

              {activeDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-1 w-[540px] p-3 bg-card border border-border rounded-xl shadow-2xl animate-in fade-in-50 slide-in-from-top-2 duration-200 z-[200] grid grid-cols-2 gap-2">
                  <div className="col-span-2 px-3 py-1.5 border-b border-border/50 flex items-center justify-between">
                    <span className="text-xs text-primary font-medium flex items-center gap-1">
                    </span>
                  </div>
                  {featureLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/60 transition-all duration-150 group"
                      >
                        <div className={`p-2 rounded-lg text-primary group-hover:scale-110 transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">{item.desc}</p>
                        </div>
                      </a>
                    )
                  })}
                  <div className="col-span-2 mt-1 p-2.5 bg-primary/5 rounded-lg border border-primary/20 flex items-center justify-between">
                    <span className="text-xs text-foreground/80">Want to see all feature screens in action?</span>
                    <a href="#gallery" onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                      View UI Gallery →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('pages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              {activeDropdown === 'pages' && (
                <div className="absolute top-full left-0 mt-1 w-80 p-2 bg-card border border-border rounded-xl shadow-2xl animate-in fade-in-50 slide-in-from-top-2 duration-200 z-[200] space-y-1">
                  <div className="px-3 py-1.5 border-b border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Quick Navigation
                  </div>
                  {pageLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/60 transition-colors group"
                      >
                        <div className="p-1.5 rounded-md bg-muted text-foreground/70 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Direct Navigation Links */}
            <a href="#gallery" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
              UI Gallery
            </a>
            <a href="#pricing" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
              Testimonials
            </a>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-primary/30 hover:border-primary bg-card hover:bg-primary/10 transition-all duration-300 shadow-sm"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-500" />
              )}
              <span className="text-xs font-semibold text-foreground">
                {isDark ? 'Light' : 'Dark'}
              </span>
            </button>

            <a href="#pricing">
              <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-md">
                Get Started Free
              </Button>
            </a>
          </div>

          {/* Mobile Theme Toggle + Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border-2 border-primary/30 bg-card hover:bg-primary/10 transition-all duration-300"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-muted text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-3 animate-in fade-in-50 slide-in-from-top-2">
            
            {/* Features Accordion */}
            <div className="border border-border/60 rounded-xl overflow-hidden bg-card/50">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'features' ? null : 'features')}
                className="w-full flex justify-between items-center px-4 py-3 text-sm font-semibold text-foreground bg-muted/30"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Key Features
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'features' ? 'rotate-180 text-primary' : ''}`} />
              </button>
              {mobileExpanded === 'features' && (
                <div className="p-2 space-y-1 bg-card">
                  {featureLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-2 text-xs text-foreground/80 hover:text-primary rounded-md hover:bg-muted"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Pages Accordion */}
            <div className="border border-border/60 rounded-xl overflow-hidden bg-card/50">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'pages' ? null : 'pages')}
                className="w-full flex justify-between items-center px-4 py-3 text-sm font-semibold text-foreground bg-muted/30"
              >
                <span className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-primary" /> Explore All Pages
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'pages' ? 'rotate-180 text-primary' : ''}`} />
              </button>
              {mobileExpanded === 'pages' && (
                <div className="p-2 space-y-1 bg-card">
                  {pageLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-2 text-xs text-foreground/80 hover:text-primary rounded-md hover:bg-muted"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href="#gallery" onClick={() => setIsOpen(false)} className="px-3 py-2 text-xs font-medium text-center rounded-lg bg-muted text-foreground">
                UI Gallery
              </a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="px-3 py-2 text-xs font-medium text-center rounded-lg bg-muted text-foreground">
                Pricing
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              
              <a href="#pricing" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Get Started Free
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
