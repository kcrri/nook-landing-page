import styles from './Button.module.css';
import type { ButtonProps } from '@/types';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  href,
  type = 'button',
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
