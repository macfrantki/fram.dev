import { getMdxContent } from '@/lib/mdx';

export default async function ServiceMDX({ slug }: { slug: string }) {
  const content = await getMdxContent(slug);

  if (!content) {
    return null;
  }

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      {content.content}
    </div>
  );
} 