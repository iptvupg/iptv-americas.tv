import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';
import { IconArrow, IconWhatsapp, IconCheck, IconShield, IconSpark } from '@site/src/components/landing/Icons';
import styles from './iptv-free-trial.module.css';

const SITE_URL = 'https://www.iptv-americas.tv';
const WHATSAPP_HREF =
  'https://wa.me/447848197761?text=' +
  encodeURIComponent("Hi! I'd like to start my free 24-hour IPTV trial.");

const INCLUDED = [
  '24-hour full access',
  '54,000+ live channels',
  '120,000+ on-demand titles',
  'True 4K on your own TV',
  'No credit card required',
  'No commitment, no auto-charge',
];

const STEPS = [
  {
    title: 'Message us on WhatsApp',
    desc: 'Tap the button and send one message. There is no form to fill in.',
  },
  {
    title: 'Get your trial login',
    desc: 'We send your trial credentials within minutes — nothing to pay.',
  },
  {
    title: 'Stream for 24 hours',
    desc: 'Watch the full library on any device. Like it? Pick a plan when you are ready.',
  },
];

const FAQ = [
  {
    q: 'Is the IPTV free trial really free?',
    a: 'Yes. The 24-hour trial is completely free. You do not need a credit card or any payment method to start.',
  },
  {
    q: 'How long does the free trial last?',
    a: 'The trial gives you 24 hours of full access to the complete live channel and on-demand library.',
  },
  {
    q: 'Do I need to enter card details?',
    a: 'No. There is no form and no payment method required — you start the trial with a single WhatsApp message.',
  },
  {
    q: 'What can I watch during the trial?',
    a: 'Everything: 54,000+ live channels and 120,000+ on-demand titles, in up to true 4K, on your own TV and devices.',
  },
  {
    q: 'How do I start the free trial?',
    a: 'Send us one message on WhatsApp and we will set up your trial login so you can start streaming right away.',
  },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/iptv-free-trial#faq`,
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function IptvFreeTrial() {
  return (
    <Layout
      title="IPTV Free Trial — 24-Hour Full Access, No Card"
      description="Try IPTV free for 24 hours — full access to 54,000+ live channels and 120,000+ on-demand titles in true 4K. No form, no card, no commitment. One WhatsApp message starts it."
      noFooter
      wrapperClassName="landing-main"
    >
      <Head>
        <script type="application/ld+json">{JSON.stringify(STRUCTURED_DATA)}</script>
      </Head>
      <CheckoutProvider>
        <Navbar />
        <Reveal />
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.spotlight} aria-hidden="true" />
            <div className={`vt-container ${styles.heroInner}`} data-reveal>
              <span className="vt-eyebrow">Free trial</span>
              <h1 className={styles.title}>IPTV Free Trial</h1>
              <p className={styles.tagline}>24 hours · full access · zero card</p>
              <p className={styles.lead}>
                Test the full IPTV service before you pay — 54,000+ live channels,
                120,000+ on-demand titles, and true 4K on your own TV. One WhatsApp
                message starts it: no form, no payment method, no commitment.
              </p>

              <div className={styles.ctas}>
                <a
                  className="vt-btn vt-btn-primary vt-btn-lg"
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsapp width={20} height={20} /> Start my free trial
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/#pricing">
                  View plans <IconArrow width={17} height={17} />
                </a>
              </div>

              <ul className={styles.trust}>
                <li>
                  <IconSpark width={15} height={15} /> Activated in minutes
                </li>
                <li>
                  <IconShield width={15} height={15} /> No card, no commitment
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">What you get</span>
                <h2 className="vt-section-title">Everything unlocked for 24 hours</h2>
              </header>
              <ul className={styles.included} data-reveal>
                {INCLUDED.map((item) => (
                  <li key={item}>
                    <IconCheck width={16} height={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">How it works</span>
                <h2 className="vt-section-title">Start your trial in 3 steps</h2>
              </header>
              <ol className={styles.steps}>
                {STEPS.map((s, i) => (
                  <li key={s.title} className={styles.step} data-reveal style={{ '--i': i }}>
                    <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">FAQ</span>
                <h2 className="vt-section-title">IPTV Free Trial FAQs</h2>
              </header>
              <div className={styles.faq}>
                {FAQ.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary className={styles.faqQ}>{item.q}</summary>
                    <p className={styles.faqA}>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.ctaBand}>
            <div className={`vt-container ${styles.ctaInner}`} data-reveal>
              <h2 className={styles.ctaTitle}>Ready to test it for free?</h2>
              <p className={styles.ctaSub}>
                One message on WhatsApp and your 24-hour trial begins — no card, no risk.
              </p>
              <a
                className="vt-btn vt-btn-primary vt-btn-lg"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsapp width={20} height={20} /> Start my free trial
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <CheckoutModal />
      </CheckoutProvider>
    </Layout>
  );
}
