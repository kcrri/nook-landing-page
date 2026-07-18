import { useRef } from 'react';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PhoneMockup } from '@/components/mockups/PhoneMockup';
import { useThreeScene } from '@/hooks/useThreeScene';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { HERO_CONTENT } from '@/constants/content';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  useThreeScene(canvasRef, 18);

  return (
    <section className={styles.hero} aria-label="Hero">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.inner}>
        <div ref={contentRef} className={`${styles.content} reveal`}>
          {HERO_CONTENT.badge && <Badge variant="accent">{HERO_CONTENT.badge}</Badge>}
          <h1 className={styles.headline}>{HERO_CONTENT.headline}</h1>
          <p className={styles.subheadline}>{HERO_CONTENT.subheadline}</p>
          <p className={styles.body}>{HERO_CONTENT.body}</p>
          <div className={styles.ctas}>
            <Button variant="primary" size="lg" href="#waitlist">
              {HERO_CONTENT.ctaPrimary}
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </div>
        </div>
        <div className={styles.visual}>
          <PhoneMockup />
        </div>
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
