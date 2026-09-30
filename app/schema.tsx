export function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agoo Clinic',
    url: 'https://agooclinic.com',
    logo: 'https://agooclinic.com/agoo-logo.png',
    description: 'Professional clinic practice management software for modern clinics',
    sameAs: [
      'https://twitter.com/agooClinic',
      'https://facebook.com/agooClinic',
      'https://linkedin.com/company/agooClinic',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'support@agooclinic.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Agoo Clinic',
    description: 'All-in-one clinic practice management software for scheduling, patients, payments, and analytics',
    url: 'https://agooclinic.com',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '500',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can Agoo Clinic help my practice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Agoo Clinic streamlines appointment scheduling, patient management, payment processing, and provides detailed analytics to help you grow your practice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data secure with Agoo Clinic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we use enterprise-grade encryption and HIPAA-compliant security measures to protect all your patient data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I try Agoo Clinic for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer a 7-Day free trial with full access to all features. No credit card required.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
