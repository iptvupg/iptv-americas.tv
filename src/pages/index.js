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
import Testimonials from '@site/src/components/landing/Testimonials';
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
      logo: `${SITE_URL}/img/logo.svg`,
      description:
        'Premium IPTV service with 30,000+ live channels and 150,000+ movies & series in 4K across every device.',
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
      '@type': 'Product',
      '@id': `${SITE_URL}/#product`,
      name: 'IPTV Americas Subscription',
      brand: { '@id': `${SITE_URL}/#organization` },
      description:
        '30,000+ live TV channels and 150,000+ movies & series in 4K, with all sports, EPG, catch-up and 24/7 support. Works on Smart TV, Firestick, phone, tablet and PC.',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '2000',
        bestRating: '5',
      },
      offers: [
        { '@type': 'Offer', name: '1 Month', price: '16', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#pricing` },
        { '@type': 'Offer', name: '3 Months', price: '39', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#pricing` },
        { '@type': 'Offer', name: '6 Months', price: '60', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#pricing` },
        { '@type': 'Offer', name: '12 Months', price: '90', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#pricing` },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How To Configure My Subscription After Purchasing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once you complete your purchase, our agent will send your login credentials and a step-by-step setup guide by email within minutes. You can then enter your details into any supported app and start streaming.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Customize My Playlist (TV Channels, Movies, Series)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer free playlist customization. Just tell our support team which channels, regions, or content categories you want, and we will tailor the lineup to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Use My IPTV Account While Traveling Abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Your subscription works anywhere with a stable internet connection. Many customers use a VPN for the smoothest experience while traveling.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Cancel My Subscription?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can cancel at any time. We also offer a money-back guarantee, so if you are not satisfied you can request a refund within the eligible period.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <Layout
      title="Lightning-Fast IPTV Streaming — 30,000+ Channels in 4K"
      description="Stream 30,000+ live TV channels and 150,000+ movies & series in 4K on any device. All sports, instant activation, no contract — plans from $7.50/mo with a 30-day money-back guarantee."
      noFooter
      wrapperClassName="landing-main"
    >
      <Head>
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
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <CheckoutModal />
      </CheckoutProvider>
    </Layout>
  );
}
