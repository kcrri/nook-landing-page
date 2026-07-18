import { useState, FormEvent } from 'react';
import styles from './FooterCTA.module.css';
import { Button } from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FOOTER_CTA_CONTENT } from '@/constants/content';

function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function validateEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.successMessage}>
        <span className={styles.successCheck}>✓</span>
        <p>You're on the list. We'll reach out when Nook goes live in Montreal.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.inputRow}>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          placeholder={FOOTER_CTA_CONTENT.inputPlaceholder}
          className={`${styles.emailInput} ${error ? styles.inputError : ''}`}
          aria-label="Email address"
          required
        />
        <Button type="submit" variant="primary" size="lg">
          {FOOTER_CTA_CONTENT.ctaLabel}
        </Button>
      </div>
      {error && <p className={styles.errorMsg} role="alert">{error}</p>}
      <p className={styles.disclaimer}>{FOOTER_CTA_CONTENT.disclaimer}</p>
    </form>
  );
}

export function FooterCTA() {
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <section id="waitlist" className={styles.section}>
        <div className="container">
          <div ref={contentRef} className={`${styles.inner} reveal`}>
            <h2 className={styles.headline}>{FOOTER_CTA_CONTENT.headline}</h2>
            <p className={styles.subheadline}>{FOOTER_CTA_CONTENT.subheadline}</p>
            <WaitlistForm />
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={`${styles.footerInner} container`}>
          <span className={styles.footerLogo}>Nook</span>
          <span className={styles.footerCopy}>
            © {new Date().getFullYear()} Nook Technologies Inc.
          </span>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <a href="#" className={styles.footerLink}>Privacy</a>
            <a href="#" className={styles.footerLink}>Terms</a>
            <a href="#" className={styles.footerLink}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
