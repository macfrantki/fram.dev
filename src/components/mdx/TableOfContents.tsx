'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

type TOCItem = {
  level: number;
  text: string;
  slug: string;
};

interface TableOfContentsProps {
  items: TOCItem[];
  activeId?: string;
  className?: string;
}

export default function TableOfContents({
  items,
  className,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Track active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    // Observe all section headings
    items.forEach((item) => {
      const element = document.getElementById(item.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav className={cn('not-prose relative', className)}>
      <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.slug}
            className={cn(
              'transition-colors duration-200',
              item.level === 2 ? 'ml-0' : 'ml-4',
              activeId === item.slug
                ? 'text-primary font-medium'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            )}
          >
            <a
              href={`#${item.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.slug)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="block py-1"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 