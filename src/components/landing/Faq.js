import React, { useState } from 'react';
import clsx from 'clsx';
import { IconChevron } from './Icons';
import styles from './Faq.module.css';

const ITEMS = [
  {
    q: 'How do I set up my subscription after purchasing?',
    a: 'After you complete your order, our team sends your login credentials and a step-by-step setup guide by email within minutes. Enter your details into any supported app and start streaming.',
  },
  {
    q: 'Which devices can I use with IPTV Americas?',
    a: 'You can stream on Smart TVs (Samsung, LG), Amazon Firestick and Fire TV, Apple TV, Roku, Android and iOS phones and tablets, MAG boxes, and Windows or macOS computers.',
  },
  {
    q: 'How quickly is my subscription activated?',
    a: 'Activation is instant. Your login credentials are emailed to you within minutes of your order being confirmed.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept card payments, PayPal, and USDT (crypto). Orders are completed with our team over WhatsApp — no payment is taken directly on this website.',
  },
  {
    q: 'What internet speed do I need?',
    a: 'A stable broadband connection is recommended. Around 15 Mbps is comfortable for HD, and roughly 25 Mbps or higher is recommended for smooth 4K streaming.',
  },
  {
    q: 'Can I customize my playlist (TV channels, movies, series)?',
    a: 'Yes. We offer free playlist customization. Tell our support team which channels, regions, or content categories you want, and we will tailor the lineup to you.',
  },
  {
    q: 'Can I use my IPTV account while traveling abroad?',
    a: 'Yes. Your subscription works anywhere with a stable internet connection. Many customers use a VPN for the smoothest experience while traveling.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes. Every plan is backed by a 30-day money-back guarantee. If you are not satisfied, you can request a refund within the eligible period.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes, you can cancel at any time. Because plans are billed once with no auto-renewal, your subscription simply ends when its term is over unless you choose to renew.',
  },
  {
    q: 'Do you offer a free IPTV trial?',
    a: (
      <>
        Yes. You can <a href="/iptv-free-trial/">start a free 24-hour trial</a> with full
        access to the channel and movie library before you pay. No card is required — just
        message us to begin.
      </>
    ),
  },
  {
    q: 'How much does an IPTV subscription cost?',
    a: (
      <>
        Plans start at $16 for one month and drop to as low as $7.50 per month on the
        12-month plan. <a href="/pricing/">Compare IPTV plans</a> to see what each term
        includes — every plan is billed once with no auto-renewal.
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">FAQ</span>
          <h2 className="vt-section-title">IPTV Service FAQs</h2>
        </header>

        <div className={styles.list}>
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={clsx(styles.item, isOpen && styles.itemOpen)}>
                <button
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <IconChevron className={styles.chevron} width={18} height={18} />
                </button>
                <div className={styles.panel} hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
