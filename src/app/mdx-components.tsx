import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-4 text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-3 text-2xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-2 text-xl font-semibold">{children}</h3>,
    p: ({ children }) => <p className="mb-4 text-gray-600 dark:text-gray-300">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 list-inside list-disc space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 list-inside list-decimal space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-gray-600 dark:text-gray-300">{children}</li>,
    ...components,
  };
}
