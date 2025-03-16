import { getAllServices } from '@/lib/content-api';
import { Service } from '@/types/services';

export async function getServices(): Promise<Service[]> {
  const services = await getAllServices();
  return services.map((service) => ({
    id: service.slug,
    name: service.frontmatter.title,
    description: service.frontmatter.excerpt,
    category: service.frontmatter.category,
    slug: service.slug,
  }));
}
