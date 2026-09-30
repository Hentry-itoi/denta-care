import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { SchemaMarkup } from "./schema";
import "./globals.css";
import { WhatsAppSticky } from "@/components/atom/WhatsAppSticky";
import { Navbar, Footer } from "@/components/common/landing";

export const metadata: Metadata = {
  title: "Agoo Clinic - Professional Clinic Practice Management Software",
  description:
    "Agoo Clinic is the all-in-one platform for modern medical clinics. Manage appointments, patients, payments, billing, and analytics with beautiful simplicity. Trusted by 500+ clinic practices.",
  keywords: [
    "clinic practice management",
    "clinic software",
    "appointment scheduling",
    "patient management",
    "clinic billing",
    "clinic management",
    "PWA clinic app",
  ],
  authors: [{ name: "Agoo Clinic" }],
  creator: "Agoo Clinic",
  publisher: "Agoo Clinic",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Agoo Clinic",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agooclinic.com",
    siteName: "Agoo Clinic",
    title: "Agoo Clinic - Professional Clinic Practice Management Software",
    description:
      "The all-in-one platform for modern medical clinics. Manage appointments, patients, payments, and analytics with beautiful simplicity.",
    images: [
      {
        url: "/agoo-logo.png",
        width: 1200,
        height: 630,
        alt: "Agoo Clinic - Clinic Practice Management",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agoo Clinic - Professional Clinic Practice Management Software",
    description:
      "The all-in-one platform for modern medical clinics. Manage appointments, patients, payments, and analytics.",
    images: ["/agoo-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://agooclinic.com",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        url: "/icon-light-32x32.png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/agoo-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/agoo-logo.png" />
        <meta property="og:image" content="/agoo-logo.png" />
        <meta name="twitter:image" content="/agoo-logo.png" />
        <script
          id="theme-sw-script"
          dangerouslySetInnerHTML={{
            __html: `
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
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppSticky />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
