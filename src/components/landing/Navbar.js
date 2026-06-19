import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { IconMenu, IconClose } from './Icons';
import { useCheckout } from './CheckoutContext';
import styles from './Navbar.module.css';

const LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Features', href: '/#features' },
  { label: 'Devices', href: '/#devices' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
];

function Logo() {
  return (
    <a className={styles.logo} href="/#home" aria-label="IPTV Americas home">
      <span className={styles.logoMark}>IPTV</span>
      <span className={styles.logoBadge}>Americas</span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openCheckout } = useCheckout();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={clsx(styles.header, scrolled && styles.headerScrolled)}>
      <nav className={clsx('vt-container', styles.nav)} aria-label="Primary">
        <Logo />

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a className={styles.trial} href="/#pricing">
            Renew
          </a>
          <button type="button" className={styles.renew} onClick={() => openCheckout()}>
            Get Started
          </button>
          <button
            className={styles.burger}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className={styles.mobilePanel}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className={styles.mobileRenew}
            onClick={() => {
              setOpen(false);
              openCheckout();
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
