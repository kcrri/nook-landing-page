
import styles from './AIAssistant.module.css';
import { Badge } from '@/components/ui/Badge';
import { ChatMockup } from '@/components/mockups/ChatMockup';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { AI_CONTENT } from '@/constants/content';
import type { AIFeature } from '@/types';

function FeatureItem({ feature }: { feature: AIFeature }) {
  return (
    <li className={styles.featureItem}>
      <div className={styles.featureDot} aria-hidden="true" />
      <div>
        <span className={styles.featureTitle}>{feature.title}</span>
        <p className={styles.featureDesc}>{feature.description}</p>
      </div>
    </li>
  );
}

export function AIAssistant() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const chatRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <div ref={contentRef} className={`${styles.content} reveal-left`}>
          <Badge variant="accent">{AI_CONTENT.badge}</Badge>
          <h2 className={styles.headline}>{AI_CONTENT.headline}</h2>
          <p className={styles.subheadline}>{AI_CONTENT.subheadline}</p>
          <ul className={styles.featureList}>
            {AI_CONTENT.features.map((feature) => (
              <FeatureItem key={feature.title} feature={feature} />
            ))}
          </ul>
        </div>
        <div ref={chatRef} className={`${styles.chatColumn} reveal-right`}>
          <ChatMockup messages={AI_CONTENT.chat} />
          <div className={styles.chatDecoration} aria-hidden="true">
            <div className={styles.decorationCard} />
            <div className={styles.decorationCard} />
          </div>
        </div>
      </div>
    </section>
  );
}
