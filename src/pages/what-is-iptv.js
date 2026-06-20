import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';
import {
  IconArrow, IconCheck, IconSpark, IconDevices, IconArrow as IconLink,
} from '@site/src/components/landing/Icons';
import styles from '@site/src/css/subpage.module.css';

const SITE_URL = 'https://www.iptv-americas.tv';
const PAGE_URL = `${SITE_URL}/what-is-iptv/`;

const STEPS = [
  {
    title: 'You request a stream',
    desc: 'When you open a channel or title, your app asks the IPTV server for that specific content over your internet connection.',
  },
  {
    title: 'The server sends it to you',
    desc: 'The server streams the video to your device in real time, adapting to your connection so playback stays smooth.',
  },
  {
    title: 'You watch on any screen',
    desc: 'The same service plays on your Smart TV, Firestick, phone, tablet, or computer — no cable box, dish, or aerial needed.',
  },
];

const INCLUDED = [
  'Live TV channels',
  'On-demand movies & series',
  'Catch-up / replay',
  'Electronic Program Guide (EPG)',
  'HD and 4K where available',
  'Multi-device playback',
];

const FAQ = [
  {
    q: 'What does IPTV stand for?',
    a: 'IPTV stands for Internet Protocol Television. It means TV content is delivered to your device over a standard internet connection rather than through a cable line or satellite dish.',
  },
  {
    q: 'How is IPTV different from cable or satellite?',
    a: 'Cable and satellite broadcast one fixed signal to every viewer. IPTV streams each program to your device on request over the internet, which is why it works on the devices you already own and needs no separate box, dish, or aerial.',
  },
  {
    q: 'What internet speed do I need for IPTV?',
    a: 'Around 15 Mbps is comfortable for HD streaming, and roughly 25 Mbps or higher is recommended for smooth 4K. A stable wired or strong Wi-Fi connection gives the best results.',
  },
  {
    q: 'What devices can I use with IPTV?',
    a: 'IPTV works on Smart TVs, Amazon Firestick, Apple TV, Android and iOS phones and tablets, and Windows or Mac computers using a compatible app such as IPTV Smarters Pro.',
  },
  {
    q: 'Do I need any special equipment for IPTV?',
    a: 'No. You only need an internet connection, a supported device, and a compatible app. There is no cable box, satellite dish, or aerial to install.',
  },
];

const RELATED = [
  { title: 'View IPTV Plans', desc: 'Compare subscription terms and pricing.', href: '/pricing/' },
  { title: 'Start a Free Trial', desc: '24 hours of full access, no card needed.', href: '/iptv-free-trial/' },
  { title: 'IPTV on Firestick', desc: 'Set up IPTV on an Amazon Fire TV Stick.', href: '/iptv-for-firestick/' },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'What is IPTV', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'What is IPTV? A Plain-English Guide to Internet TV',
      description:
        'What is IPTV? Learn how Internet Protocol Television delivers live channels and on-demand movies over the internet, how it differs from cable, and what you need to start.',
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

export default function WhatIsIptvPage() {
  return (
    <Layout
      title="What is IPTV? A Plain-English Guide to Internet TV"
      description="What is IPTV? Learn how Internet Protocol Television delivers live channels and on-demand movies over the internet, and how it differs from cable TV."
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
              <span className="vt-eyebrow">Streaming explained</span>
              <h1 className={styles.title}>What is IPTV?</h1>
              <p className={styles.tagline}>Internet Protocol Television, in plain English</p>
              <p className={styles.lead}>
                IPTV delivers live TV channels and on-demand movies and series over a standard
                internet connection instead of a cable line or satellite dish. Here is how it
                works, how it differs from traditional TV, and what you need to start watching.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/pricing/">
                  View IPTV plans <IconArrow width={17} height={17} />
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/iptv-free-trial/">
                  Try it free <IconSpark width={17} height={17} />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">Definition</span>
                <h2 className="vt-section-title">IPTV, defined</h2>
              </header>
              <div className={styles.prose} data-reveal>
                <p>
                  <strong>IPTV (Internet Protocol Television)</strong> is a way of delivering
                  television over the internet. Rather than broadcasting one fixed signal to
                  everyone at once — the way cable and satellite do — IPTV streams each program
                  to your device on request. That means you can watch live channels, catch up on
                  recent shows, and start movies from an on-demand library whenever you want.
                </p>
                <p>
                  Because it runs over your existing internet connection, IPTV works on the
                  devices you already own and needs no separate cable box, dish, or aerial. With{' '}
                  <a href="/pricing/">an IPTV Americas plan</a> you stream 54,000+ live channels
                  and 120,000+ on-demand titles in HD and 4K across Smart TVs, Amazon Firestick,
                  Apple TV, phones, tablets, and computers.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">How it works</span>
                <h2 className="vt-section-title">How IPTV streams to your screen</h2>
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
                <span className="vt-eyebrow">IPTV vs traditional TV</span>
                <h2 className="vt-section-title">Why people switch from cable and satellite</h2>
                <p className="vt-section-sub">
                  IPTV keeps the live-TV experience you know while adding the flexibility of
                  streaming — on your own devices, with no hardware to rent.
                </p>
              </header>
              <div className={styles.cards} data-reveal>
                <article className={styles.card}>
                  <h3 className={styles.cardTitle}>No box, dish, or aerial</h3>
                  <p className={styles.cardDesc}>
                    There is no equipment to install or rent. You stream through an app on a device
                    you already own, so setup takes minutes.
                  </p>
                </article>
                <article className={styles.card}>
                  <h3 className={styles.cardTitle}>Watch on any device</h3>
                  <p className={styles.cardDesc}>
                    The same subscription plays on your TV, phone, tablet, and computer, so you can
                    keep watching whether you are at home or on the move.
                  </p>
                </article>
                <article className={styles.card}>
                  <h3 className={styles.cardTitle}>Live plus on-demand</h3>
                  <p className={styles.cardDesc}>
                    Combine live channels with a large on-demand library and catch-up, so you are
                    not tied to a fixed broadcast schedule.
                  </p>
                </article>
                <article className={styles.card}>
                  <h3 className={styles.cardTitle}>Flexible terms</h3>
                  <p className={styles.cardDesc}>
                    Choose the subscription length that suits you on the{' '}
                    <a href="/pricing/">pricing page</a> — billed once, with no long-term contract.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">What you get</span>
                <h2 className="vt-section-title">What a typical IPTV service includes</h2>
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
                <h2 className="vt-section-title">IPTV questions, answered</h2>
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
                <span className="vt-eyebrow">Keep exploring</span>
                <h2 className="vt-section-title">Where to go next</h2>
              </header>
              <div className={styles.related} data-reveal>
                {RELATED.map((r) => (
                  <a key={r.href} className={styles.relatedCard} href={r.href}>
                    <span className={styles.relatedTitle}>
                      {r.title} <IconLink width={15} height={15} />
                    </span>
                    <span className={styles.relatedDesc}>{r.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.ctaBand}>
            <div className={`vt-container ${styles.ctaInner}`} data-reveal>
              <h2 className={styles.ctaTitle}>Ready to try IPTV for yourself?</h2>
              <p className={styles.ctaSub}>
                See how it performs on your own TV and devices with a free 24-hour trial, or pick a
                plan and start streaming today.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/iptv-free-trial/">
                  <IconSpark width={18} height={18} /> Start free trial
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/pricing/">
                  View plans <IconArrow width={17} height={17} />
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
