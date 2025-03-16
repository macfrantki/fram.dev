import { SERVICE_CATEGORIES } from '@/services/services/categories';
import { ServiceContent } from './ServiceContent';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

// Force static generation for this route
export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((category) => ({
    slug: category.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const category = SERVICE_CATEGORIES.find((cat) => cat.id === params.slug);

  if (!category) {
    return {
      title: 'Services | FRAM.DEV',
      description: 'Explore our web development services',
    };
  }

  return {
    title: `${category.name} | FRAM.DEV`,
    description: `Explore our ${category.name.toLowerCase()} services and solutions`,
    alternates: {
      canonical: `https://fram.dev/services/${params.slug}`,
    },
    openGraph: {
      title: `${category.name} | FRAM.DEV`,
      description: `Explore our ${category.name.toLowerCase()} services and solutions`,
      url: `https://fram.dev/services/${params.slug}`,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const category = SERVICE_CATEGORIES.find((cat) => cat.id === params.slug);

  return (
    <>
      {category && (
        <JsonLd
          type="service"
          data={{
            name: category.name,
            description: `Explore our ${category.name.toLowerCase()} services and solutions`,
            provider: {
              name: 'FRAM.DEV',
              url: 'https://fram.dev',
            },
            url: `https://fram.dev/services/${params.slug}`,
          }}
        />
      )}
      <ServiceContent slug={params.slug} />
    </>
  );
}
