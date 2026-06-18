import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Lightning Fast IPTV Streaming`}
      description="Experience lightning-fast IPTV Americas streaming. 20k+ channels, 4K quality, multi-device support and 99.9% uptime. Flexible plans from $14.99/month."
      noFooter
      wrapperClassName="landing-main"
    >
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
