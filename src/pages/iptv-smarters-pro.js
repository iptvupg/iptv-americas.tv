import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';
import { IconArrow, IconCheck, IconSpark, IconLayers } from '@site/src/components/landing/Icons';
import styles from '@site/src/css/subpage.module.css';

const SITE_URL = 'https://www.iptv-americas.tv';
const PAGE_URL = `${SITE_URL}/iptv-smarters-pro/`;

const STEPS = [
  {
    title: 'Install IPTV Smarters Pro',
    desc: 'Download IPTV Smarters Pro from your device’s app store — it is available for Fire TV, Android, iOS, and Windows.',
  },
  {
    title: 'Choose “Login with Xtream Codes”',
    desc: 'Open the app and select the Xtream Codes API login option, which is the simplest way to connect your subscription.',
  },
  {
    title: 'Enter your details and stream',
    desc: 'Type in the username, password, and server URL we email after your order. The app loads your channels, on-demand library, and EPG automatically.',
  },
];

const INCLUDED = [
  'Live TV with EPG',
  'On-demand movies & series',
  'Xtream Codes login support',
  'Fire TV, Android, iOS & Windows',
  'Favourites & multi-screen layout',
  'Built-in player controls',
];

const FAQ = [
  {
    q: 'What is IPTV Smarters Pro?',
    a: 'IPTV Smarters Pro is a popular third-party media player app that lets you watch IPTV subscriptions. It supports live TV, on-demand content, and the electronic program guide in a single, easy-to-use interface.',
  },
  {
    q: 'How do I set up IPTV Smarters Pro?',
    a: 'Install the app, choose the “Login with Xtream Codes API” option, then enter the username, password, and server URL from your order confirmation. Your channels and on-demand library load automatically.',
  },
  {
    q: 'Which devices support IPTV Smarters Pro?',
    a: 'IPTV Smarters Pro runs on Amazon Fire TV and Firestick, Android phones and TV boxes, iPhone and iPad, and Windows computers, so you can use the same login across your devices.',
  },
  {
    q: 'Is IPTV Smarters Pro free?',
    a: 'The IPTV Smarters Pro app itself is free to download. You still need an active IPTV subscription, such as an IPTV Americas plan, to sign in and stream.',
  },
  {
    q: 'Can I use IPTV Smarters Pro on Firestick?',
    a: 'Yes. IPTV Smarters Pro is one of the most common players on Amazon Fire TV Stick. See our IPTV for Firestick guide for the full installation steps.',
  },
];

const RELATED = [
  { title: 'IPTV for Firestick', desc: 'Install the app on your Fire TV Stick.', href: '/iptv-for-firestick/' },
  { title: 'View Plans', desc: 'Get a subscription to sign in with.', href: '/pricing/' },
  { title: 'Free Trial', desc: 'Test the app with a 24-hour trial.', href: '/iptv-free-trial/' },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'IPTV Smarters Pro', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'IPTV Smarters Pro — Setup Guide',
      description:
        'How to set up IPTV Smarters Pro. Install the app, log in with Xtream Codes, and stream 54,000+ live channels and 120,000+ on-demand titles on Fire TV, Android, iOS, and Windows.',
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
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

export default function IptvSmartersPro() {
  return (
    <Layout
      title="IPTV Smarters Pro — Setup Guide"
      description="How to set up IPTV Smarters Pro — install the app, log in with Xtream Codes, and stream live channels and on-demand titles on Fire TV, Android, iOS & Windows."
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
              <span className="vt-eyebrow">App guide</span>
              <h1 className={styles.title}>IPTV Smarters Pro</h1>
              <p className={styles.tagline}>Set up the player app in a few minutes</p>
              <p className={styles.lead}>
                IPTV Smarters Pro is a popular player for watching your IPTV subscription on Fire
                TV, Android, iOS, and Windows. Install the app, log in with your details, and
                stream 54,000+ live channels and 120,000+ on-demand titles with a built-in TV guide.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/pricing/">
                  View plans <IconArrow width={17} height={17} />
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/iptv-free-trial/">
                  Try free <IconSpark width={17} height={17} />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">What it is</span>
                <h2 className="vt-section-title">About IPTV Smarters Pro</h2>
              </header>
              <div className={styles.prose} data-reveal>
                <p>
                  <strong>IPTV Smarters Pro</strong> is a widely used third-party media player that
                  turns your <a href="/what-is-iptv/">IPTV</a> subscription into an organised, easy
                  to navigate experience. It brings live channels, on-demand movies and series, and
                  the electronic program guide together in one interface, with favourites and a
                  multi-screen layout.
                </p>
                <p>
                  The app is free to download; you simply need an active subscription to sign in.
                  Once you have an <a href="/pricing/">IPTV Americas plan</a>, you enter the login
                  details we send you and start watching across your devices.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">Setup</span>
                <h2 className="vt-section-title">How to set up IPTV Smarters Pro in 3 steps</h2>
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
                <span className="vt-eyebrow">Features</span>
                <h2 className="vt-section-title">What the app gives you</h2>
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
                <h2 className="vt-section-title">IPTV Smarters Pro questions</h2>
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
                <span className="vt-eyebrow">Related guides</span>
                <h2 className="vt-section-title">Keep going</h2>
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
              <h2 className={styles.ctaTitle}>Get a subscription to sign in with</h2>
              <p className={styles.ctaSub}>
                The app is free — add an IPTV Americas plan or a free 24-hour trial and start
                streaming in IPTV Smarters Pro today.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/pricing/">
                  <IconLayers width={18} height={18} /> View plans
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/iptv-free-trial/">
                  Start free trial <IconArrow width={17} height={17} />
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
