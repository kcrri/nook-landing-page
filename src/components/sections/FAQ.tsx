import { useState } from 'react';
import styles from './FAQ.module.css';
import { Badge } from '@/components/ui/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FAQ_CONTENT } from '@/constants/content';
import type { FAQItem } from '@/types';

function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`${styles.row} ${isOpen ? styles.rowOpen : ''}`}>
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className={styles.icon} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={styles.answerWrapper} aria-hidden={!isOpen}>
        <p className={styles.answer}>{item.answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <Badge>{FAQ_CONTENT.badge}</Badge>
          <h2 className={styles.headline}>{FAQ_CONTENT.headline}</h2>
        </div>
        <div ref={listRef} className={`${styles.list} reveal`}>
          {FAQ_CONTENT.items.map((item, i) => (
            <FAQRow
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
