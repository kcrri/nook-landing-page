
import styles from './OwnerCallout.module.css';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';
import { OWNER_CONTENT } from '@/constants/content';
import type { OwnerFeature } from '@/types';

function OwnerFeatureCard({ feature }: { feature: OwnerFeature }) {
  return (
    <div className={styles.featureCard}>
      <h4 className={styles.featureTitle}>{feature.title}</h4>
      <p className={styles.featureDesc}>{feature.description}</p>
    </div>
  );
}

export function OwnerCallout() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const featuresRef = useStaggerReveal<HTMLDivElement>(OWNER_CONTENT.features.length);

  return (
    <section id="for-owners" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div ref={headerRef} className={`${styles.header} reveal-left`}>
            <Badge variant="dark">{OWNER_CONTENT.badge}</Badge>
            <h2 className={styles.headline}>{OWNER_CONTENT.headline}</h2>
            <p className={styles.subheadline}>{OWNER_CONTENT.subheadline}</p>
            <Button variant="primary" size="lg" href="#waitlist">
              {OWNER_CONTENT.cta}
            </Button>
          </div>
          <div ref={featuresRef} className={`${styles.featuresGrid} stagger-children`}>
            {OWNER_CONTENT.features.map((feature) => (
              <OwnerFeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
