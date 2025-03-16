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
}

/**
 * Optimized image component with image loading animation
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
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className={cn(
        'overflow-hidden', 
        isLoading ? 'animate-pulse bg-gray-200 dark:bg-gray-800' : '',
        fill ? 'relative' : '',
        aspectRatio,
        className
      )}
    >
      <NextImage
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-sm grayscale'
            : 'scale-100 blur-0 grayscale-0',
          imgClassName
        )}
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
} 