import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Navbar from '@site/src/components/landing/Navbar';
import Footer from '@site/src/components/landing/Footer';
import Reveal from '@site/src/components/landing/Reveal';
import { CheckoutProvider } from '@site/src/components/landing/CheckoutContext';
import CheckoutModal from '@site/src/components/landing/CheckoutModal';
import { IconArrow, IconSpark, IconWrench } from '@site/src/components/landing/Icons';
import styles from '@site/src/css/subpage.module.css';

const SITE_URL = 'https://www.iptv-americas.tv';
const PAGE_URL = `${SITE_URL}/iptv-troubleshooting/`;

const ISSUES = [
  {
    title: 'IPTV buffering',
    desc: 'Buffering is almost always a connection or device issue, not the stream. Run a speed test (aim for 15+ Mbps for HD, 25+ for 4K), use Ethernet or move closer to the router, close background apps, and restart the device. On Wi-Fi, the 5 GHz band is more stable than 2.4 GHz.',
  },
  {
    title: 'M3U playlist not loading',
    desc: 'Check that the M3U URL is copied exactly with no extra spaces, that your subscription is active, and that the line limit has not been reached on another device. Re-add the playlist, refresh it inside the app, and confirm the date and time on your device are correct.',
  },
  {
    title: 'IPTV Smarters Pro not working',
    desc: 'Force-close and reopen the app, then clear its cache. Confirm you entered the correct username, password, and server URL. If login works but channels are blank, refresh the EPG and content list. Reinstalling the latest version usually fixes a frozen or crashing app.',
  },
  {
    title: 'TiviMate EPG not updating',
    desc: 'Open Settings → EPG, confirm an EPG source is assigned to your playlist, then force a manual update. Set the EPG time offset to match your timezone. If the guide is still empty, remove and re-add the playlist so TiviMate pulls a fresh guide.',
  },
  {
    title: 'Xtream Codes login failed',
    desc: 'Re-enter the server URL, username, and password exactly as supplied — they are case-sensitive. Make sure the http/https prefix and port are included and that your subscription has not expired. A wrong device clock can also cause authentication to fail.',
  },
  {
    title: 'Firestick IPTV freezing',
    desc: 'Fire TV Sticks have limited memory. Restart the device, clear the player app cache, and remove unused apps to free up space. Use the 4K or 4K Max model for heavier streams, and prefer a wired Ethernet adapter or a strong 5 GHz signal.',
  },
  {
    title: 'Smart TV IPTV app not loading',
    desc: 'Restart the TV by unplugging it for 30 seconds, update the system firmware, and check the app store for a player update. On Samsung and LG, clearing the app data or reinstalling the player resolves most loading errors. Confirm the TV is online first.',
  },
  {
    title: 'When to test a different IPTV provider',
    desc: 'If channels still fail after fixing your connection, device, and app settings, the source may be the problem. The fastest way to tell is to test a stable service on the same setup — start an IPTV free trial and compare playback before you decide.',
  },
];

const FAQ = [
  {
    q: 'Why does my IPTV keep buffering even on fast internet?',
    a: 'Fast download speed alone is not enough — an unstable Wi-Fi signal, a busy network, or limited device memory can still cause buffering. Use Ethernet where possible, switch to the 5 GHz Wi-Fi band, close other apps, and restart the device.',
  },
  {
    q: 'How do I fix an IPTV playlist that will not load?',
    a: 'Confirm the M3U or Xtream Codes details are entered exactly, your subscription is active, and you have not exceeded the connection limit. Refresh the playlist inside the app and check that your device clock is set correctly.',
  },
  {
    q: 'Why is my EPG or TV guide empty?',
    a: 'An empty guide usually means no EPG source is assigned or the timezone offset is wrong. Assign the EPG to your playlist, set the correct offset, and force a manual EPG update. Re-adding the playlist pulls a fresh guide.',
  },
  {
    q: 'How do I know if the problem is my setup or the IPTV provider?',
    a: 'Work through your connection, device, and app settings first. If issues continue across multiple devices and apps, test a stable service on the same hardware. A free 24-hour trial lets you compare playback without paying.',
  },
];

const RELATED = [
  { title: 'IPTV Smarters Pro Setup', desc: 'Full setup and login walkthrough.', href: '/iptv-smarters-pro/' },
  { title: 'IPTV for Firestick', desc: 'Fix and set up IPTV on Fire TV.', href: '/iptv-for-firestick/' },
  { title: 'What is IPTV?', desc: 'How internet TV works, explained.', href: '/what-is-iptv/' },
  { title: 'Compare Plans', desc: 'See subscription terms and pricing.', href: '/pricing/' },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'IPTV Troubleshooting', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'IPTV Troubleshooting Guide — Fix Common Issues',
      description:
        'Fix common IPTV problems: buffering, M3U playlists not loading, IPTV Smarters Pro errors, TiviMate EPG issues, Xtream Codes login failures, and Firestick or Smart TV freezing.',
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

export default function IptvTroubleshooting() {
  return (
    <Layout
      title="IPTV Troubleshooting Guide — Fix Common Issues"
      description="Fix common IPTV problems — buffering, M3U not loading, IPTV Smarters Pro errors, EPG issues, Xtream Codes login, and Firestick or Smart TV freezing."
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
              <span className="vt-eyebrow">Help & support</span>
              <h1 className={styles.title}>IPTV Troubleshooting Guide</h1>
              <p className={styles.tagline}>Quick fixes for the most common IPTV problems</p>
              <p className={styles.lead}>
                Most IPTV issues — buffering, a playlist that will not load, login errors, or a
                frozen app — come down to your connection, device, or app settings. Use the fixes
                below to get streaming again, and learn how to tell when the problem is your setup
                versus the service itself.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/iptv-free-trial/">
                  Test IPTV before paying <IconSpark width={17} height={17} />
                </a>
                <a className="vt-btn vt-btn-ghost vt-btn-lg" href="/pricing/">
                  Compare plans <IconArrow width={17} height={17} />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">Common issues</span>
                <h2 className="vt-section-title">Fix the most common IPTV problems</h2>
                <p className="vt-section-sub">
                  Work through the fix that matches your symptom. Each one takes a few minutes and
                  solves the majority of playback and login issues.
                </p>
              </header>
              <div className={styles.cards} data-reveal>
                {ISSUES.map((item) => (
                  <article key={item.title} className={styles.card}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">Still stuck?</span>
                <h2 className="vt-section-title">When to test a different IPTV provider</h2>
              </header>
              <div className={styles.prose} data-reveal>
                <p>
                  If you have checked your connection, device, and app settings and channels still
                  fail across more than one device, the source stream may be the problem rather than
                  your setup. The quickest way to confirm this is to run a known-stable service on
                  the same hardware and compare.
                </p>
                <p>
                  You can <a href="/iptv-free-trial/">start a free 24-hour trial</a> and watch on
                  your own TV, Firestick, or phone before paying anything. If playback is smooth on
                  the trial, the earlier issues were with the previous source. New to it all? Our{' '}
                  <a href="/what-is-iptv/">guide to what IPTV is</a> explains the basics, and the{' '}
                  <a href="/iptv-smarters-pro/">IPTV Smarters Pro setup guide</a> walks through the
                  player most people use.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`vt-container ${styles.sectionInner}`}>
              <header className={styles.head} data-reveal>
                <span className="vt-eyebrow">FAQ</span>
                <h2 className="vt-section-title">IPTV troubleshooting FAQs</h2>
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
              <h2 className={styles.ctaTitle}>Want a stream that just works?</h2>
              <p className={styles.ctaSub}>
                Test IPTV Americas free for 24 hours on your own devices, or compare plans and
                switch with no contract.
              </p>
              <div className={styles.ctas}>
                <a className="vt-btn vt-btn-primary vt-btn-lg" href="/iptv-free-trial/">
                  <IconWrench width={18} height={18} /> Start free trial
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
