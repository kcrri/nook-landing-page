import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS } from '@/constants/content';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.logo} aria-label="Nook home">
          <img src="/favicon.svg" className={styles.logoMark} alt="" aria-hidden="true" />
          Nook
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.navCta}>
          <Button variant="primary" size="sm" href="#waitlist">
            Join waitlist
          </Button>
        </div>
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="md" href="#waitlist">
            Join waitlist
          </Button>
        </div>
      )}
    </header>
  );
}
