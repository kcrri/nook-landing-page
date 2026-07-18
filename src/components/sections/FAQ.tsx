import { useState } from 'react';
import styles from './FAQ.module.css';
import { Badge } from '@/components/ui/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is Nook available right now?',
    answer:
      'We are in private beta in Montreal. Join the waitlist and we will reach out when your spot opens up. Toronto is next.',
  },
  {
    question: 'How does the AI actually know about a listing?',
    answer:
      'Every listing on Nook includes a structured data layer covering lease terms, pet policy, included utilities, and move-in conditions. The AI reads that layer before answering your question, so its answers are specific to the unit, not generic.',
  },
  {
    question: 'What does it cost for renters?',
    answer:
      'Nothing. Nook is free for renters. We charge owners a flat listing fee, not a percentage of rent.',
  },
  {
    question: 'How is this different from Kijiji or Facebook Marketplace?',
    answer:
      'Listings on those platforms go stale, contact info is often wrong, and the only way to get answers is to email and wait. Nook verifies listings, keeps them current, and lets you ask questions and get answers instantly.',
  },
  {
    question: 'Can I use Nook if I am a property manager with multiple units?',
    answer:
      'Yes. The owner dashboard supports multiple listings under one account. You manage requests, screening info, and messages in one place.',
  },
  {
    question: 'What happens after I send a request to a landlord?',
    answer:
      'The owner receives your profile and move-in details. They can accept, decline, or ask a follow-up question through Nook. No personal contact info is shared until both sides agree to connect.',
  },
];

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
    <section className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <Badge>Common questions</Badge>
          <h2 className={styles.headline}>Things people ask before signing up</h2>
        </div>
        <div ref={listRef} className={`${styles.list} reveal`}>
          {FAQ_ITEMS.map((item, i) => (
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
