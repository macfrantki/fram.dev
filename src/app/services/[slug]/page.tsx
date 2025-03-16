import { SERVICE_CATEGORIES } from '@/services/services/categories';
import { ServiceContent } from './ServiceContent';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import fs from 'fs/promises';
import path from 'path';

// Force static generation for this route
export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  try {
    // Get all service MDX files
    const servicesPath = path.join(process.cwd(), 'content', 'services');
    const files = await fs.readdir(servicesPath);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    // Extract slugs from filenames
    const serviceParams = mdxFiles.map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));

    // Add category slugs as well
    const categoryParams = SERVICE_CATEGORIES.map((category) => ({
      slug: category.id,
    }));

    // Combine both sets of slugs and remove duplicates
    const allParams = [...serviceParams, ...categoryParams];
    const slugMap = new Map();
    allParams.forEach((param) => {
      slugMap.set(param.slug, param);
    });

    return Array.from(slugMap.values());
  } catch (error) {
    console.error('Error generating static params for services:', error);
    // Fallback to just categories if there's an error
    return SERVICE_CATEGORIES.map((category) => ({
      slug: category.id,
    }));
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const category = SERVICE_CATEGORIES.find((cat) => cat.id === params.slug);

  if (category) {
    // This is a category page
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
  } else {
    try {
      // Try to get individual service metadata
      const { getServiceBySlug } = await import('@/lib/content-api');
      const service = await getServiceBySlug(params.slug);

      if (!service) {
        // Fallback if service not found
        return {
          title: 'Services | FRAM.DEV',
          description: 'Explore our web development services',
        };
      }

      // Return metadata for individual service
      return {
        title: `${service.frontmatter.title} | FRAM.DEV`,
        description: service.frontmatter.excerpt,
        alternates: {
          canonical: `https://fram.dev/services/${params.slug}`,
        },
        openGraph: {
          title: `${service.frontmatter.title} | FRAM.DEV`,
          description: service.frontmatter.excerpt,
          url: `https://fram.dev/services/${params.slug}`,
          type: 'website',
        },
      };
    } catch (error) {
      // Fallback if there's an error
      console.error(`Error generating metadata for service ${params.slug}:`, error);
      return {
        title: 'Services | FRAM.DEV',
        description: 'Explore our web development services',
      };
    }
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const category = SERVICE_CATEGORIES.find((cat) => cat.id === params.slug);

  if (category) {
    // This is a category page
    return (
      <>
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
        <ServiceContent slug={params.slug} />
      </>
    );
  } else {
    // Try to get individual service data
    try {
      const { getServiceBySlug } = await import('@/lib/content-api');
      const service = await getServiceBySlug(params.slug);

      if (!service) {
        return <ServiceContent slug={params.slug} />;
      }

      return (
        <>
          <JsonLd
            type="service"
            data={{
              name: service.frontmatter.title,
              description: service.frontmatter.excerpt,
              provider: {
                name: 'FRAM.DEV',
                url: 'https://fram.dev',
              },
              url: `https://fram.dev/services/${params.slug}`,
            }}
          />
          <ServiceContent slug={params.slug} />
        </>
      );
    } catch (error) {
      console.error(`Error in service page for ${params.slug}:`, error);
      return <ServiceContent slug={params.slug} />;
    }
  }
}
