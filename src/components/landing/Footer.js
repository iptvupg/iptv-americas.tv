import React from 'react';
import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Features', href: '/#features' },
      { label: 'Devices', href: '/#devices' },
      { label: 'How It Works', href: '/#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact us', href: '/#about' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

const SOCIAL = [
  { label: 'X', glyph: 'X', href: '#contact' },
  { label: 'Facebook', glyph: 'f', href: '#contact' },
  { label: 'LinkedIn', glyph: 'in', href: 'https://www.linkedin.com/company/iptv-americas' },
  { label: 'YouTube', glyph: '▶', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`vt-container ${styles.inner}`}>
        <div className={styles.brand}>
          <a className={styles.logo} href="/#home">
            <span>IPTV</span>
            <span className={styles.badge}>Americas</span>
          </a>
          <p className={styles.tagline}>
            Premium streaming, delivered worldwide. Thousands of channels,
            films, and live sports — on every device you own.
          </p>
          <div className={styles.social}>
            {SOCIAL.map((s) => {
              const external = s.href.startsWith('http');
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {s.glyph}
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.columns}>
          {COLUMNS.map((col) => (
            <nav key={col.title} className={styles.column} aria-label={col.title}>
              <h3 className={styles.colTitle}>{col.title}</h3>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 IPTV Americas. All rights reserved.</span>
        <span className={styles.payNote}>Order over WhatsApp · pay by card, PayPal or crypto</span>
      </div>
    </footer>
  );
}
