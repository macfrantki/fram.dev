import { useState, useEffect } from 'react';
import { getServiceBySlug } from '@/lib/content-api';

export function useMdxContent(slug: string) {
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setIsLoading(true);
        const result = await getServiceBySlug(slug);
        setContent(result?.content ?? null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch MDX content'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, [slug]);

  return { content, isLoading, error };
}
