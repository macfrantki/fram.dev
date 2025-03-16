'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'default';
  onClick?: () => void;
}

export function Chip({
  children,
  className,
  size = 'md',
  color = 'default',
  onClick,
}: ChipProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const colorClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600',
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };

  // If onClick is provided, render a button for better accessibility
  if (onClick) {
    return (
      <button
        type="button"
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium',
          'border border-transparent transition-colors',
          sizeClasses[size],
          colorClasses[color],
          'cursor-pointer hover:brightness-95',
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  // Otherwise, render a span
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        'border border-transparent transition-colors',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  );
}
