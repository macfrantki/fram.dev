import { getServices } from '@/services/services/services';
import { SERVICE_CATEGORIES } from '@/services/services/categories';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/content-api';
import Link from 'next/link';

export async function ServiceContent({ slug }: { slug: string }) {
  // Check if this is a category page
  const category = SERVICE_CATEGORIES.find((cat) => cat.id === slug);

  if (category) {
    // This is a category page, display all services in this category
    const allServices = await getServices();
    const services = allServices.filter((s) => s.category === slug);

    return (
      <article className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">{category.name}</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <Link href={`/services/${service.slug}`}>
                <h2 className="mb-4 text-2xl font-semibold text-primary hover:underline">
                  {service.name}
                </h2>
              </Link>
              <div className="text-gray-600 dark:text-gray-300">
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  } else {
    // This is an individual service page
    try {
      const service = await getServiceBySlug(slug);

      if (!service) {
        notFound();
      }

      const serviceCategory = SERVICE_CATEGORIES.find(
        (cat) => cat.id === service.frontmatter.category
      );

      return (
        <article className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 text-sm">
              <Link
                href={`/services/${service.frontmatter.category}`}
                className="text-primary hover:underline"
              >
                {serviceCategory?.name || service.frontmatter.category}
              </Link>
            </div>
            <h1 className="mb-4 text-4xl font-bold">{service.frontmatter.title}</h1>
            <div className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              {service.frontmatter.excerpt}
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">{service.content}</div>
          </div>
        </article>
      );
    } catch (error) {
      console.error(`Error loading service ${slug}:`, error);
      notFound();
    }
  }
}
