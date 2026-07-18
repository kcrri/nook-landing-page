export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  footnote?: string;
}

export interface AIFeature {
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface OwnerFeature {
  title: string;
  description: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'dark';
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  as?: string;
}

export interface StepCardProps extends Step {
  index: number;
  isActive?: boolean;
}

export interface StatItemProps extends Stat {}

export interface ThreeSceneOptions {
  colorHex: string[];
  shapeCount: number;
}
