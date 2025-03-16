import React from 'react';
import { BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface ReadingTimeProps {
  minutes: number;
  words: number;
  className?: string;
}

export default function ReadingTime({ minutes, words, className }: ReadingTimeProps) {
  // Round to nearest minute, minimum 1
  const readingTime = Math.max(1, Math.round(minutes));

  return (
    <div
      className={cn('flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400', className)}
    >
      <div className="flex items-center">
        <ClockIcon className="mr-1 h-4 w-4" />
        <span>{readingTime} min read</span>
      </div>
      <div className="flex items-center">
        <BookOpenIcon className="mr-1 h-4 w-4" />
        <span>{words.toLocaleString()} words</span>
      </div>
    </div>
  );
}
