import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import styles from './HowItWorks.module.css';
import { Badge } from '@/components/ui/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { HOW_IT_WORKS_CONTENT } from '@/constants/content';
import type { Step } from '@/types';

const ICONS = ['⟶', '◈', '✓'];

interface StepCardProps extends Step {
  index: number;
  offset: number;
}

function cardStyle(offset: number): CSSProperties {
  // offset = index - activeIndex
  // 0 = front card, >0 = still in the deck (peeking behind), <0 = swiped away
  if (offset < 0) {
    return {
      transform: 'translate(-125%, -8%) rotate(-14deg)',
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none',
    };
  }
  const depth = Math.min(offset, 3);
  return {
    transform: `translateY(${depth * 16}px) scale(${1 - depth * 0.05})`,
    opacity: offset > 3 ? 0 : 1 - depth * 0.12,
    zIndex: 10 - depth,
    pointerEvents: offset === 0 ? 'auto' : 'none',
  };
}

function StepCard({ number, title, description, index, offset }: StepCardProps) {
  return (
    <article
      className={styles.card}
      style={cardStyle(offset)}
      aria-hidden={offset !== 0}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardNumber}>{number}</span>
        <span className={styles.cardIcon} aria-hidden="true">{ICONS[index]}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
}

function ProgressDots({ total, active }: { total: number; active: number }) {
  return (
    <div className={styles.dots} aria-label={`Step ${active + 1} of ${total}`} role="status">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} />
      ))}
    </div>
  );
}

export function HowItWorks() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const steps = HOW_IT_WORKS_CONTENT.steps;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    function update() {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? -rect.top / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      const next = Math.min(steps.length - 1, Math.floor(clamped * steps.length));
      setActiveIndex(next);
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [steps.length]);

  return (
    <section id="how-it-works" ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.inner}>
          <div ref={headerRef} className={`${styles.header} reveal`}>
            <Badge>{HOW_IT_WORKS_CONTENT.badge}</Badge>
            <h2 className={styles.headline}>{HOW_IT_WORKS_CONTENT.headline}</h2>
            <p className={styles.subheadline}>{HOW_IT_WORKS_CONTENT.subheadline}</p>
          </div>

          <div className={styles.deck}>
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                {...step}
                index={i}
                offset={i - activeIndex}
              />
            ))}
          </div>

          <ProgressDots total={steps.length} active={activeIndex} />
        </div>
      </div>
    </section>
  );
}
