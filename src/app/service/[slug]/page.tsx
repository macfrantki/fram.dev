import { getMdxContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllServices } from '@/lib/mdx';
import ServiceContent from './ServiceContent';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const content = await getMdxContent(params.slug);

  if (!content) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${content.frontmatter.title} | fram.dev`,
    description: content.frontmatter.excerpt,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const content = await getMdxContent(params.slug);

  if (!content) {
    notFound();
  }

  return <ServiceContent content={content.content} />;
}
