import { getServiceBySlug } from '@/lib/content-api';

export default async function ServiceMDX({ slug }: { slug: string }) {
  const service = await getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      {service.content}
    </div>
  );
}
