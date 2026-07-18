import styles from './Badge.module.css';
import type { BadgeProps } from '@/types';

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const classes = [styles.badge, styles[variant], className].filter(Boolean).join(' ');
  return <span className={classes}>{children}</span>;
}
