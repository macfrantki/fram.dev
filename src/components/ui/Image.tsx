'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/utils/cn';

interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

/**
 * Optimized image component with image loading animation and enhanced accessibility
 */
export default function Image({
  alt,
  src,
  className,
  imgClassName,
  fill = false,
  width,
  height,
  aspectRatio,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Force alt text for accessibility
  if (!alt || alt === '') {
    console.warn('Image component requires an alt text for accessibility');
    alt = 'Visual content'; // Fallback alt text
  }

  return (
    <div
      className={cn(
        'overflow-hidden',
        isLoading ? 'animate-pulse bg-gray-200 dark:bg-gray-800' : '',
        fill ? 'relative' : '',
        aspectRatio,
        className
      )}
      aria-hidden={alt === 'Visual content' ? true : undefined}
    >
      <NextImage
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0',
          imgClassName
        )}
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
