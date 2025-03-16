import { ReactNode } from 'react';

/**
 * Common button props
 */
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'contact';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  withArrow?: boolean;
  roundedBottom?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  animateOnHover?: boolean;
}

/**
 * Navigation link type
 */
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

/**
 * Hero section props
 */
export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showLogo?: boolean;
}

/**
 * Logo component props
 */
export interface LogoProps {
  className?: string;
  color?: string;
}

/**
 * Image component props
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  aspectRatio?: string;
}

/**
 * Section component props
 */
export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
} 