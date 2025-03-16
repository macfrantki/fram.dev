'use client';

import { cn } from '@/utils/cn';

interface ChipProps {
  label: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function Chip({ label, color = 'default', size = 'md', className, onClick }: ChipProps) {
  const colorStyles = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-gray-700/10 text-gray-700',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-amber-100 text-amber-800',
    info: 'bg-blue-100 text-blue-800',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };

  // If onClick is provided, render as a button for accessibility
  if (onClick) {
    return (
      <button
        type="button"
        className={cn(
          'inline-flex items-center rounded-full border-none font-medium',
          colorStyles[color],
          sizeStyles[size],
          'cursor-pointer hover:opacity-80',
          className
        )}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        }}
      >
        {label}
      </button>
    );
  }

  // Otherwise, render as a span (non-interactive)
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        colorStyles[color],
        sizeStyles[size],
        className
      )}
    >
      {label}
    </span>
  );
}
