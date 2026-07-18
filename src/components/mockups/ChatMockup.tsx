import styles from './ChatMockup.module.css';
import type { ChatMessage } from '@/types';

interface ChatMockupProps {
  messages: readonly ChatMessage[];
}

function ChatBubble({ message }: { message: ChatMessage }) {
  return (
    <div className={`${styles.bubble} ${styles[message.role]}`}>
      {message.role === 'assistant' && (
        <div className={styles.assistantLabel}>Nook AI</div>
      )}
      <p className={styles.bubbleText}>{message.content}</p>
    </div>
  );
}

export function ChatMockup({ messages }: ChatMockupProps) {
  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <div className={styles.chatHeaderDot} />
        <span className={styles.chatHeaderTitle}>Ask about 840 Rachel Est</span>
        <div className={styles.chatHeaderBadge}>AI</div>
      </div>
      <div className={styles.chatBody}>
        {messages.map((message, i) => (
          <ChatBubble key={i} message={message} />
        ))}
        <div className={styles.typing}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="Ask anything about this listing..."
          className={styles.chatInputField}
          readOnly
        />
        <button className={styles.chatSendBtn} aria-label="Send">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7L13 1L9 7L13 13L1 7Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
