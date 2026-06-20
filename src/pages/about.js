import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';
import { IconArrow, IconCheck, IconHeadset, IconShield, IconWhatsapp } from '@site/src/components/landing/Icons';
import styles from '@site/src/css/subpage.module.css';

const SITE_URL = 'https://www.iptv-americas.tv';
const PAGE_URL = `${SITE_URL}/about/`;
const WHATSAPP_HREF =
  'https://wa.me/447848197761?text=' +
  encodeURIComponent("Hi! I'd like to ask a question about IPTV Americas.");

const VALUES = [
  {
    title: 'Service you can rely on',
    desc: 'We run high-capacity servers and anti-freezing technology so your channels and on-demand titles play smoothly across every device you own.',
  },
  {
    title: 'Clear, honest pricing',
    desc: 'Plans are billed once for the term you choose, with no auto-renewal and no hidden fees. You always know exactly what you are paying for.',
  },
  {
    title: 'Real human support',
    desc: 'Our team answers questions over WhatsApp and email, helping with setup, device compatibility, and anything else — 24 hours a day.',
  },
  {
    title: 'Try before you commit',
    desc: 'A free 24-hour trial and a 30-day money-back guarantee mean you can test the service on your own setup with confidence.',
  },
];

const COMMITMENTS = [
  '54,000+ live TV channels',
  '120,000+ movies & series',
  'HD and 4K where available',
  'Works on Smart TV, Firestick, mobile & PC',
  'Billed once — no auto-renewal',
  '30-day money-back guarantee',
];

const RELATED = [
  { title: 'View Plans', desc: 'Compare subscription terms and pricing.', href: '/pricing/' },
  { title: 'What is IPTV?', desc: 'Understand how internet TV works.', href: '/what-is-iptv/' },
  { title: 'Free Trial', desc: '24 hours of full access, no card.', href: '/iptv-free-trial/' },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'About IPTV Americas',
      description:
        'Learn about IPTV Americas — a premium IPTV service offering 54,000+ live channels and 120,000+ on-demand titles in 4K, with honest pricing, 24/7 support, and a money-back guarantee.',
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
  ],
};

export default function AboutPage() {
  return (
    <Layout
      title="About IPTV Americas"
      description="About IPTV Americas — a premium IPTV service with 54,000+ live channels and 120,000+ on-demand titles in 4K, honest pricing, and 24/7 support."
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
              <span className="vt-eyebrow">About us</span>
              <h1 className={styles.title}>About IPTV Americas</h1>
              <p className={styles.tagline}>Premium IPTV, delivered with honest service</p>
              <p className={styles.lead}>
                IPTV Americas is a premium IPTV service built for households across the USA,
                Canada, and Latin America. We bring together a broad channel selection, a large
                on-demand library, and dependable support so you can watch what you love on every
                device you own.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/pricing/">
                  View plans <IconArrow width={17} height={17} />
                </a>
                <a
                  className="vt-btn vt-btn-ghost vt-btn-lg"
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsapp width={18} height={18} /> Talk to us
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">What we do</span>
                <h2 className="vt-section-title">Streaming made simple</h2>
              </header>
              <div className={styles.prose} data-reveal>
                <p>
                  We provide an <a href="/what-is-iptv/">IPTV</a> subscription that streams live TV
                  and on-demand movies and series over your internet connection — no cable box,
                  satellite dish, or aerial required. With 54,000+ live channels and 120,000+
                  on-demand titles in HD and 4K, there is something for every member of the
                  household, from sports and news to international content and family entertainment.
                </p>
                <p>
                  Our focus is on making the service easy to start and reliable to use. After you
                  order, we send your login and a short setup guide so you can be watching within
                  minutes on a Smart TV, Amazon Firestick, Apple TV, phone, tablet, or computer. If
                  you ever need a hand, our support team is available around the clock.
                </p>
                <p>
                  We built IPTV Americas for households across the USA, Canada, and Latin America
                  who want one subscription that covers the whole family. Sports fans get live
                  coverage, film and series lovers get a deep on-demand library, and viewers who
                  follow international channels can keep up with content from back home — all in one
                  place, in the language and quality that suits them.
                </p>
                <p>
                  Whether you are switching from cable, cutting the cord for the first time, or just
                  curious about how streaming TV works, we make it simple to try. Start with a{' '}
                  <a href="/iptv-free-trial/">free 24-hour trial</a>, learn the basics on our{' '}
                  <a href="/what-is-iptv/">what is IPTV guide</a>, or compare options on the{' '}
                  <a href="/pricing/">pricing page</a> — there is no contract and no pressure.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">What we stand for</span>
                <h2 className="vt-section-title">How we work</h2>
              </header>
              <div className={styles.cards} data-reveal>
                {VALUES.map((v) => (
                  <article key={v.title} className={styles.card}>
                    <h3 className={styles.cardTitle}>{v.title}</h3>
                    <p className={styles.cardDesc}>{v.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">Our commitment</span>
                <h2 className="vt-section-title">What you can count on</h2>
              </header>
              <ul className={styles.included} data-reveal>
                {COMMITMENTS.map((item) => (
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
                <span className="vt-eyebrow">Get in touch</span>
                <h2 className="vt-section-title">We are here to help</h2>
                <p className="vt-section-sub">
                  Questions about devices, plans, or setup? Message us on WhatsApp and a real
                  person will help you get started.
                </p>
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
              <h2 className={styles.ctaTitle}>Ready to get started?</h2>
              <p className={styles.ctaSub}>
                Pick a plan or try the service free for 24 hours — our support team is one message
                away whenever you need it.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/pricing/">
                  View plans <IconArrow width={17} height={17} />
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/iptv-free-trial/">
                  <IconHeadset width={18} height={18} /> Start free trial
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
