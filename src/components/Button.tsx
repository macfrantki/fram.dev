import React from 'react';
// Add underscore prefix to indicate it's intentionally unused
import { motion as _motion } from 'framer-motion';
import Link from 'next/link';

// Define the arrow icon as a separate component
const ArrowIcon = ({ className = 'h-4 w-4 sm:h-5 sm:w-5 ' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'contact';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  withArrow?: boolean;
  roundedBottom?: boolean;
  onClick?: () => void;
  animateOnHover?: boolean;
}

export default function Button({
  children,
  className = '',
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  withArrow = false,
  roundedBottom = false,
  onClick,
  animateOnHover = true,
}: ButtonProps) {
  // Base classes that apply to all button variants
  const baseClasses = `
    group relative flex items-center justify-center 
    overflow-hidden transition-all
    font-medium
  `;

  // Size-specific classes
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base sm:text-lg px-5 sm:px-6 py-3',
    lg: 'text-xl sm:text-2xl px-6 sm:px-8 py-4',
  };

  // Variant-specific classes
  const variantClasses = {
    primary: 'border-2 border-primary bg-transparent text-primary hover:text-backgroundary',
    secondary: 'border-2 border-gray-700 bg-transparent text-gray-800 hover:text-backgroundary',
    outline: 'border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100',
    contact: 'border-2 border-primary bg-primary text-white hover:bg-primary/90',
  };

  // Rounding classes
  const roundedClasses = roundedBottom ? 'rounded-b-lg' : 'rounded-lg';

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${roundedClasses}
    ${widthClasses}
    ${className}
  `;

  // Content with optional arrow
  const content = (
    <>
      <span className="relative z-10 mr-2">{children}</span>
      {animateOnHover && variant !== 'outline' && (
        <div className="absolute inset-0 translate-y-full transform bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
      )}
      {withArrow && (
        <ArrowIcon
          className={`${size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} relative z-10 stroke-primary group-hover:stroke-backgroundary`}
        />
      )}
    </>
  );

  // Return either a link or a button
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
