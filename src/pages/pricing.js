import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Pricing from '@site/src/components/landing/Pricing';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';
import { IconArrow, IconCheck, IconSpark, IconShield } from '@site/src/components/landing/Icons';
import styles from '@site/src/css/subpage.module.css';

const SITE_URL = 'https://www.iptv-americas.tv';
const PAGE_URL = `${SITE_URL}/pricing/`;

const INCLUDED = [
  '54,000+ live TV channels',
  '120,000+ movies & series',
  '4K, HD & SD quality',
  'Live sports coverage',
  'TV Guide (EPG) & catch-up',
  'Multi-device playback',
  'Anti-freezing technology',
  '24/7 technical support',
];

const FAQ = [
  {
    q: 'How much does an IPTV subscription cost?',
    a: 'IPTV Americas plans start at $7.50 per month on the 12-month term. We offer 1-month, 3-month, 6-month, and 12-month options, each billed once with no auto-renewal.',
  },
  {
    q: 'Is the subscription billed monthly or once?',
    a: 'Each plan is billed once for the full term you choose. There is no recurring auto-charge — when the term ends, you simply renew if you want to continue.',
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'You can pay by card, PayPal, or crypto. Orders are confirmed over WhatsApp, and no payment is taken on the website itself.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes. Every paid plan is backed by a 30-day money-back guarantee, so you can subscribe with confidence.',
  },
  {
    q: 'Can I try IPTV before paying?',
    a: 'Yes. You can start a free 24-hour trial with full access before choosing a plan — no card and no commitment required.',
  },
];

const RELATED = [
  { title: 'What is IPTV?', desc: 'A plain-English guide to internet TV.', href: '/what-is-iptv/' },
  { title: 'Free Trial', desc: 'Test the full service for 24 hours.', href: '/iptv-free-trial/' },
  { title: 'About Us', desc: 'Who we are and how we support you.', href: '/about/' },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'IPTV Pricing & Subscription Plans',
      description:
        'IPTV Americas subscription plans and pricing — 1, 3, 6, and 12-month options from $7.50/mo, billed once with no auto-renewal and a 30-day money-back guarantee.',
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
    {
      '@type': 'Product',
      '@id': `${PAGE_URL}#product`,
      name: 'IPTV Americas Subscription',
      brand: { '@id': `${SITE_URL}/#organization` },
      image: [`${SITE_URL}/img/og-image.jpg`],
      description:
        '54,000+ live TV channels and 120,000+ movies & series in 4K, with live sports coverage, EPG, catch-up and 24/7 support. Works on Smart TV, Firestick, phone, tablet and PC.',
      offers: [
        { '@type': 'Offer', name: '1 Month', price: '16', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: PAGE_URL },
        { '@type': 'Offer', name: '3 Months', price: '39', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: PAGE_URL },
        { '@type': 'Offer', name: '6 Months', price: '60', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: PAGE_URL },
        { '@type': 'Offer', name: '12 Months', price: '90', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function PricingPage() {
  return (
    <Layout
      title="IPTV Pricing & Subscription Plans"
      description="IPTV Americas plans from $7.50/mo — 1, 3, 6 & 12-month options, billed once with no auto-renewal and a 30-day money-back guarantee."
      noFooter
      wrapperClassName="landing-main"
    >
      <Head>
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(STRUCTURED_DATA)}</script>
      </Head>
      <CheckoutProvider>
        <Navbar />
        <Reveal />
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.spotlight} aria-hidden="true" />
            <div className={`vt-container ${styles.heroInner}`} data-reveal>
              <span className="vt-eyebrow">Pricing</span>
              <h1 className={styles.title}>IPTV Plans &amp; Pricing</h1>
              <p className={styles.tagline}>From $7.50/mo · billed once · no auto-renewal</p>
              <p className={styles.lead}>
                Pick the subscription term that suits you. Every plan unlocks the same broad
                channel selection — 54,000+ live channels and 120,000+ on-demand titles — and is
                backed by a 30-day money-back guarantee.
              </p>
              <ul className={styles.trust}>
                <li>
                  <IconSpark width={15} height={15} /> Free 24-hour trial available
                </li>
                <li>
                  <IconShield width={15} height={15} /> 30-day money-back guarantee
                </li>
              </ul>
            </div>
          </section>

          <Pricing />

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">What every plan includes</span>
                <h2 className="vt-section-title">The same service on every term</h2>
                <p className="vt-section-sub">
                  The plan length only changes how long your subscription lasts — the channel
                  selection and features are the same across all of them.
                </p>
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
                <span className="vt-eyebrow">FAQ</span>
                <h2 className="vt-section-title">Pricing questions, answered</h2>
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

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">Before you decide</span>
                <h2 className="vt-section-title">Learn more first</h2>
              </header>
              <div className={styles.related} data-reveal>
                {RELATED.map((r) => (
                  <a key={r.href} className={styles.relatedCard} href={r.href}>
                    <span className={styles.relatedTitle}>
                      {r.title} <IconArrow width={15} height={15} />
                    </span>
                    <span className={styles.relatedDesc}>{r.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.ctaBand}>
            <div className={`vt-container ${styles.ctaInner}`} data-reveal>
              <h2 className={styles.ctaTitle}>Not sure yet? Try it free first.</h2>
              <p className={styles.ctaSub}>
                Test the full service on your own devices for 24 hours, then pick the plan that
                fits — no card, no commitment.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/iptv-free-trial/">
                  <IconSpark width={18} height={18} /> Start free trial
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/what-is-iptv/">
                  What is IPTV? <IconArrow width={17} height={17} />
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CheckoutModal />
      </CheckoutProvider>
    </Layout>
  );
}
