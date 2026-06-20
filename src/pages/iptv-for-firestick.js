import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';
import { IconArrow, IconCheck, IconSpark, IconDevices } from '@site/src/components/landing/Icons';
import styles from '@site/src/css/subpage.module.css';

const SITE_URL = 'https://www.iptv-americas.tv';
const PAGE_URL = `${SITE_URL}/iptv-for-firestick/`;

const STEPS = [
  {
    title: 'Allow app installs',
    desc: 'On your Firestick, open Settings → My Fire TV → Developer Options and turn on “Apps from Unknown Sources” so you can install a player.',
  },
  {
    title: 'Install a player app',
    desc: 'Search the Amazon Appstore for a compatible IPTV player such as IPTV Smarters Pro and install it on your device.',
  },
  {
    title: 'Enter your login details',
    desc: 'Open the app and enter the credentials we email you after your order. Your channels and on-demand library load automatically.',
  },
];

const INCLUDED = [
  'Works on all Fire TV Stick models',
  'Fire TV Stick 4K & 4K Max ready',
  '54,000+ live channels',
  '120,000+ on-demand titles',
  'EPG / TV guide support',
  'Smooth HD & 4K playback',
];

const FAQ = [
  {
    q: 'Does IPTV work on Amazon Firestick?',
    a: 'Yes. IPTV Americas works on every Fire TV Stick model, including the Fire TV Stick 4K and 4K Max. You install a compatible player app and sign in with the credentials we send you.',
  },
  {
    q: 'Which app should I use for IPTV on Firestick?',
    a: 'A popular choice is IPTV Smarters Pro, which supports live TV, on-demand content, and the EPG. See our IPTV Smarters Pro guide for full setup steps.',
  },
  {
    q: 'How do I install IPTV on a Fire TV Stick?',
    a: 'Enable “Apps from Unknown Sources” in your Fire TV settings, install a compatible IPTV player, then enter the login details from your order confirmation. The full library loads automatically.',
  },
  {
    q: 'What internet speed do I need on Firestick?',
    a: 'Around 15 Mbps is comfortable for HD and roughly 25 Mbps or higher is recommended for 4K. A strong Wi-Fi signal or the Fire TV Ethernet adapter gives the most stable playback.',
  },
  {
    q: 'Why is my Firestick buffering?',
    a: 'Buffering is usually caused by a weak Wi-Fi signal or limited device memory. Move the Firestick closer to your router, close other apps, and restart the device. Our support team can help if it continues.',
  },
];

const RELATED = [
  { title: 'IPTV Smarters Pro Setup', desc: 'Configure the recommended player app.', href: '/iptv-smarters-pro/' },
  { title: 'View Plans', desc: 'Choose a subscription for your Firestick.', href: '/pricing/' },
  { title: 'Free Trial', desc: 'Test it on your Firestick for 24 hours.', href: '/iptv-free-trial/' },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'IPTV for Firestick', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'IPTV for Firestick — Setup Guide & Plans',
      description:
        'How to set up IPTV on Amazon Firestick. Install a compatible player, sign in, and stream 54,000+ live channels and 120,000+ on-demand titles in HD and 4K on any Fire TV Stick.',
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

export default function IptvForFirestick() {
  return (
    <Layout
      title="IPTV for Firestick — Setup Guide & Plans"
      description="How to set up IPTV on Amazon Firestick — install a player, sign in, and stream 54,000+ live channels and 120,000+ titles in HD & 4K on any Fire TV Stick."
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
              <span className="vt-eyebrow">Device guide</span>
              <h1 className={styles.title}>IPTV for Firestick</h1>
              <p className={styles.tagline}>Stream on any Amazon Fire TV Stick in minutes</p>
              <p className={styles.lead}>
                The Amazon Firestick is one of the easiest ways to watch IPTV on your TV. Install a
                compatible player, sign in with your details, and stream 54,000+ live channels and
                120,000+ on-demand titles in HD and 4K — on Fire TV Stick, 4K, and 4K Max.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/pricing/">
                  View plans <IconArrow width={17} height={17} />
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/iptv-free-trial/">
                  Try free on Firestick <IconSpark width={17} height={17} />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">Setup</span>
                <h2 className="vt-section-title">How to set up IPTV on Firestick in 3 steps</h2>
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
                <span className="vt-eyebrow">Recommended app</span>
                <h2 className="vt-section-title">Use IPTV Smarters Pro on your Firestick</h2>
                <p className="vt-section-sub">
                  We recommend IPTV Smarters Pro as your player on Fire TV — it handles live TV,
                  on-demand titles, and the EPG in one clean interface.
                </p>
              </header>
              <div className={styles.prose} data-reveal>
                <p>
                  Once the app is installed, you only need the login details from your order
                  confirmation. Enter them once and the app loads your full channel list and
                  on-demand library, ready to watch. For a complete walkthrough, see our{' '}
                  <a href="/iptv-smarters-pro/">IPTV Smarters Pro setup guide</a>.
                </p>
                <p>
                  New to streaming TV over the internet? Our{' '}
                  <a href="/what-is-iptv/">guide to what IPTV is</a> explains how it works and what
                  you need before you start.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">What you get</span>
                <h2 className="vt-section-title">Built for Fire TV</h2>
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
                <h2 className="vt-section-title">Firestick IPTV questions</h2>
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
              <h2 className={styles.ctaTitle}>Get streaming on your Firestick</h2>
              <p className={styles.ctaSub}>
                Pick a plan or start a free 24-hour trial and test IPTV on your own Fire TV Stick
                before you commit.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/pricing/">
                  <IconDevices width={18} height={18} /> View plans
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
