import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Hero from '@site/src/components/landing/Hero';
import HowItWorks from '@site/src/components/landing/HowItWorks';
import Devices from '@site/src/components/landing/Devices';
import Pricing from '@site/src/components/landing/Pricing';
import Stats from '@site/src/components/landing/Stats';
import Features from '@site/src/components/landing/Features';
import WhatIsIptv from '@site/src/components/landing/WhatIsIptv';
import About from '@site/src/components/landing/About';
import Faq from '@site/src/components/landing/Faq';
import FinalCta from '@site/src/components/landing/FinalCta';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';

const SITE_URL = 'https://www.iptv-americas.tv';

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'IPTV Americas',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/img/IPTV-Americas-logo.png`,
        width: 942,
        height: 265,
        caption: 'IPTV Americas',
      },
      description:
        'Premium IPTV service with 54,000+ live channels and 120,000+ movies & series in 4K across every device.',
      sameAs: ['https://www.linkedin.com/company/iptv-americas'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+44-7848-197761',
        availableLanguage: ['English', 'Spanish'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'IPTV Americas',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'IPTV Americas', item: `${SITE_URL}/` },
      ],
    },
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/#product`,
      name: 'IPTV Americas Subscription',
      brand: { '@id': `${SITE_URL}/#organization` },
      image: [`${SITE_URL}/img/og-image.jpg`],
      description:
        '54,000+ live TV channels and 120,000+ movies & series in 4K, with live sports coverage, EPG, catch-up and 24/7 support. Works on Smart TV, Firestick, phone, tablet and PC.',
      offers: [
        { '@type': 'Offer', name: '1 Month', price: '16', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/pricing/` },
        { '@type': 'Offer', name: '3 Months', price: '39', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/pricing/` },
        { '@type': 'Offer', name: '6 Months', price: '60', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/pricing/` },
        { '@type': 'Offer', name: '12 Months', price: '90', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/pricing/` },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I set up my subscription after purchasing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After you complete your order, our team sends your login credentials and a step-by-step setup guide by email within minutes. Enter your details into any supported app and start streaming.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which devices can I use with IPTV Americas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can stream on Smart TVs (Samsung, LG), Amazon Firestick and Fire TV, Apple TV, Roku, Android and iOS phones and tablets, MAG boxes, and Windows or macOS computers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly is my subscription activated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Activation is instant. Your login credentials are emailed to you within minutes of your order being confirmed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What payment methods do you accept?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We accept card payments, PayPal, and USDT (crypto). Orders are completed with our team over WhatsApp — no payment is taken directly on this website.',
          },
        },
        {
          '@type': 'Question',
          name: 'What internet speed do I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A stable broadband connection is recommended. Around 15 Mbps is comfortable for HD, and roughly 25 Mbps or higher is recommended for smooth 4K streaming.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I customize my playlist (TV channels, movies, series)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer free playlist customization. Tell our support team which channels, regions, or content categories you want, and we will tailor the lineup to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use my IPTV account while traveling abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Your subscription works anywhere with a stable internet connection. Many customers use a VPN for the smoothest experience while traveling.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a money-back guarantee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every plan is backed by a 30-day money-back guarantee. If you are not satisfied, you can request a refund within the eligible period.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I cancel my subscription?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can cancel at any time. Because plans are billed once with no auto-renewal, your subscription simply ends when its term is over unless you choose to renew.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer a free IPTV trial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can start a free 24-hour trial with full access to the channel and movie library before you pay. No card is required — just message us to begin.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does an IPTV subscription cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plans start at $16 for one month and drop to as low as $7.50 per month on the 12-month plan. Every term includes the full channel and movie library, billed once with no auto-renewal.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <Layout
      title="Best IPTV Service 2026 | USA, Canada & Latin America"
      description="IPTV service with 54,000+ live channels & 120,000+ movies in HD & 4K on any device. Instant setup, no contract, 30-day money-back guarantee."
      noFooter
      wrapperClassName="landing-main"
    >
      <Head>
        <title>Best IPTV Service 2026 | USA, Canada &amp; Latin America</title>
        <script type="application/ld+json">
          {JSON.stringify(STRUCTURED_DATA)}
        </script>
      </Head>
      <CheckoutProvider>
        <Navbar />
        <Reveal />
        <main>
          <Hero />
          <Pricing />
          <Stats />
          <Devices />
          <Features />
          <HowItWorks />
          <WhatIsIptv />
          <About />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <CheckoutModal />
      </CheckoutProvider>
    </Layout>
  );
}
