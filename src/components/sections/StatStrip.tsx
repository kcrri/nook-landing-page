
import styles from './StatStrip.module.css';
import { useStaggerReveal } from '@/hooks/useScrollReveal';
import { STATS_CONTENT } from '@/constants/content';
import type { Stat } from '@/types';

function StatItem({ value, label, footnote }: Stat) {
  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>{value}</div>
      <p className={styles.statLabel}>{label}</p>
      {footnote && <span className={styles.statFootnote}>{footnote}</span>}
    </div>
  );
}

export function StatStrip() {
  const gridRef = useStaggerReveal<HTMLDivElement>(STATS_CONTENT.stats.length);

  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={gridRef} className={`${styles.statsGrid} stagger-children`}>
          {STATS_CONTENT.stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
