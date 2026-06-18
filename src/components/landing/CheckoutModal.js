import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { IconClose, IconShield, IconWhatsapp } from './Icons';
import { useCheckout } from './CheckoutContext';
import styles from './CheckoutModal.module.css';

// WhatsApp business number, digits only incl. country code (+44 7848 197761).
const WHATSAPP_NUMBER = '447848197761';

const DEFAULT_PLAN = { duration: '6 Months', total: 60 };

const PAYMENTS = [
  { id: 'paypal', label: 'PayPal', logos: ['/img/pay/paypal.svg'] },
  { id: 'usdt', label: 'USDT (TRC-20)', logos: ['/img/pay/crypto.svg'] },
  { id: 'card', label: 'Pay with Card', logos: ['/img/pay/visa.svg', '/img/pay/mastercard.svg'] },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CheckoutModal() {
  const { isOpen, plan, close } = useCheckout();
  const selected = plan || DEFAULT_PLAN;

  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState('');
  const [payment, setPayment] = useState('');
  const [touched, setTouched] = useState(false);

  const emailRef = useRef(null);

  // Reset the form each time the modal opens, then focus the first field.
  useEffect(() => {
    if (!isOpen) return undefined;
    setEmail('');
    setWhatsapp('');
    setCountry('');
    setPayment('');
    setTouched(false);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => emailRef.current?.focus(), 60);

    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const emailValid = EMAIL_RE.test(email.trim());
  const countryValid = country.trim().length > 0;
  const paymentValid = payment.length > 0;
  const formValid = emailValid && countryValid && paymentValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!formValid) return;

    const method = PAYMENTS.find((p) => p.id === payment)?.label || payment;
    const lines = [
      'New IPTV Americas order',
      `Plan: ${selected.duration} — $${selected.total}`,
      `Email: ${email.trim()}`,
      whatsapp.trim() ? `WhatsApp: ${whatsapp.trim()}` : null,
      `Country: ${country.trim()}`,
      `Payment: ${method}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
      >
        <div className={styles.head}>
          <div>
            <h2 id="checkout-title" className={styles.title}>
              Complete your order
            </h2>
            <p className={styles.summary}>
              <span className={styles.summaryDim}>Selected:</span> {selected.duration}
              <span className={styles.dot}>·</span>
              <span className={styles.summaryPrice}>${selected.total}</span>
            </p>
          </div>
          <button type="button" className={styles.close} aria-label="Close" onClick={close}>
            <IconClose width={18} height={18} />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.field}>
            <span className={styles.label}>Email address *</span>
            <input
              ref={emailRef}
              className={clsx(styles.input, touched && !emailValid && styles.inputError)}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>WhatsApp number (optional)</span>
            <input
              className={styles.input}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+1 555 000 0000"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Country *</span>
            <input
              className={clsx(styles.input, touched && !countryValid && styles.inputError)}
              type="text"
              autoComplete="country-name"
              placeholder="United States"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>

          <fieldset className={styles.payset}>
            <legend className={styles.label}>Payment method *</legend>
            <div className={styles.payList}>
              {PAYMENTS.map((m) => (
                <label
                  key={m.id}
                  className={clsx(styles.payOption, payment === m.id && styles.payOptionActive)}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m.id}
                    checked={payment === m.id}
                    onChange={() => setPayment(m.id)}
                    className={styles.radioInput}
                  />
                  <span className={styles.radio} aria-hidden="true" />
                  <span className={styles.payLogos}>
                    {m.logos.map((src) => (
                      <span key={src} className={styles.payLogo}>
                        <img src={src} alt="" loading="lazy" />
                      </span>
                    ))}
                  </span>
                  <span className={styles.payName}>{m.label}</span>
                </label>
              ))}
            </div>
            {touched && !paymentValid && (
              <span className={styles.errorText}>Please choose a payment method.</span>
            )}
          </fieldset>

          <button type="submit" className={styles.submit} disabled={touched && !formValid}>
            <IconWhatsapp width={20} height={20} /> Continue to WhatsApp
          </button>

          <p className={styles.note}>
            <IconShield width={13} height={13} /> Your details are sent privately to confirm your order.
          </p>
        </form>
      </div>
    </div>
  );
}
