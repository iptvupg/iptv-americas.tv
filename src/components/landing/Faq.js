import React, { useState } from 'react';
import clsx from 'clsx';
import { IconChevron } from './Icons';
import styles from './Faq.module.css';

const ITEMS = [
  {
    q: 'How To Configure My Subscription After Purchasing?',
    a: 'Once you complete your purchase, our agent will send your login credentials and a step-by-step setup guide by email within minutes. You can then enter your details into any supported app and start streaming.',
  },
  {
    q: 'Can I Customize My Playlist (TV Channels, Movies, Series)?',
    a: 'Yes. We offer free playlist customization. Just tell our support team which channels, regions, or content categories you want, and we will tailor the lineup to you.',
  },
  {
    q: 'Can I Use My IPTV Account While Traveling Abroad?',
    a: 'Absolutely. Your subscription works anywhere with a stable internet connection. Many customers use a VPN for the smoothest experience while traveling.',
  },
  {
    q: 'Can I Cancel My Subscription?',
    a: 'Yes, you can cancel at any time. We also offer a money-back guarantee, so if you are not satisfied you can request a refund within the eligible period.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="contact" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">FAQ</span>
          <h2 className="vt-section-title">Frequently asked questions</h2>
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
