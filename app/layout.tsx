import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SchemaMarkup } from './schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agoo Dental - Professional Dental Practice Management Software',
  description: 'Agoo Dental is the all-in-one platform for modern dental clinics. Manage appointments, patients, payments, billing, and analytics with beautiful simplicity. Trusted by 500+ dental practices.',
  keywords: ['dental practice management', 'dental software', 'appointment scheduling', 'patient management', 'dental billing', 'clinic management', 'PWA dental app'],
  authors: [{ name: 'Agoo Dental' }],
  creator: 'Agoo Dental',
  publisher: 'Agoo Dental',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'DentaCare'
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agoodental.com',
    siteName: 'Agoo Dental',
    title: 'Agoo Dental - Professional Dental Practice Management Software',
    description: 'The all-in-one platform for modern dental clinics. Manage appointments, patients, payments, and analytics with beautiful simplicity.',
    images: [
      {
        url: '/agoo-logo.png',
        width: 1200,
        height: 630,
        alt: 'Agoo Dental - Dental Practice Management',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agoo Dental - Professional Dental Practice Management Software',
    description: 'The all-in-one platform for modern dental clinics. Manage appointments, patients, payments, and analytics.',
    images: ['/agoo-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://agoodental.com',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaMarkup />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="icon" href="/agoo-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/agoo-logo.png" />
        <meta property="og:image" content="/agoo-logo.png" />
        <meta name="twitter:image" content="/agoo-logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('SW registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
