import React from 'react';
import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'Features', href: '#features' },
      { label: 'Supported Devices', href: '#install' },
      { label: 'How It Works', href: '#install' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Reseller Program', href: '#reseller' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact us', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Refund Policy', href: '#contact' },
      { label: 'Terms of Service', href: '#contact' },
      { label: 'Privacy Policy', href: '#contact' },
    ],
  },
];

const SOCIAL = [
  { label: 'X', glyph: 'X' },
  { label: 'Facebook', glyph: 'f' },
  { label: 'LinkedIn', glyph: 'in' },
  { label: 'YouTube', glyph: '▶' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`vt-container ${styles.inner}`}>
        <div className={styles.brand}>
          <a className={styles.logo} href="#home">
            <span>IPTV</span>
            <span className={styles.badge}>Americas</span>
          </a>
          <p className={styles.tagline}>
            Premium streaming, delivered worldwide. Thousands of channels,
            films, and live sports — on every device you own.
          </p>
          <div className={styles.social}>
            {SOCIAL.map((s) => (
              <a key={s.label} href="#contact" aria-label={s.label}>
                {s.glyph}
              </a>
            ))}
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
        <span className={styles.payNote}>Secure, SSL-encrypted checkout</span>
      </div>
    </footer>
  );
}
