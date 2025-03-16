import { getServices } from '@/services/services/services';
import { SERVICE_CATEGORIES } from '@/services/services/categories';
import { notFound } from 'next/navigation';
import ServiceMDX from './ServiceMDX';
import { Suspense } from 'react';

export async function ServiceContent({ slug }: { slug: string }) {
  const category = SERVICE_CATEGORIES.find((cat) => cat.id === slug);
  if (!category) {
    notFound();
  }

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
            <h2 className="mb-4 text-2xl font-semibold text-primary">{service.name}</h2>
            <div className="text-gray-600 dark:text-gray-300">
              <Suspense fallback={<p>{service.description}</p>}>
                <ServiceMDX slug={service.slug} />
              </Suspense>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
