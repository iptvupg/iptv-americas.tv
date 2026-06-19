import React from 'react';
import Layout from '@theme/Layout';
import Navbar from './Navbar';
import Footer from './Footer';
import Reveal from './Reveal';
import { CheckoutProvider } from './CheckoutContext';
import CheckoutModal from './CheckoutModal';
import styles from './Legal.module.css';

export default function Legal({ title, description, updated, children }) {
  return (
    <Layout title={title} description={description} noFooter wrapperClassName="landing-main">
      <CheckoutProvider>
        <Navbar />
        <Reveal />
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.spotlight} aria-hidden="true" />
            <div className={`vt-container ${styles.heroInner}`} data-reveal>
              <span className="vt-eyebrow">Legal</span>
              <h1 className={styles.title}>{title}</h1>
              {updated && <p className={styles.updated}>Last updated: {updated}</p>}
            </div>
          </section>

          <section className={styles.body}>
            <div className="vt-container">
              <div className={styles.prose}>{children}</div>
            </div>
          </section>
        </main>
        <Footer />
        <CheckoutModal />
      </CheckoutProvider>
    </Layout>
  );
}
