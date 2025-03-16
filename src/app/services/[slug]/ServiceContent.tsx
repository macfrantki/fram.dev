import { getServices } from '@/app/data/services/services';
import { SERVICE_CATEGORIES } from '@/app/data/services/categories';
import { notFound } from 'next/navigation';
import ServiceMDX from './ServiceMDX';
import { Suspense } from 'react';

export async function ServiceContent({ slug }: { slug: string }) {
  const category = SERVICE_CATEGORIES.find(cat => cat.id === slug);
  if (!category) {
    notFound();
  }

  const allServices = await getServices();
  const services = allServices.filter(s => s.category === slug);

  return (
    <article className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">{service.name}</h2>
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