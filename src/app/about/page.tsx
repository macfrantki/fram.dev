import { Metadata } from 'next';
import { getAboutContent } from '@/lib/about';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutContent();

  if (!aboutData) {
    return {
      title: 'About | FRAM.DEV',
      description: 'Learn more about FRAM.DEV and our web development services',
      alternates: {
        canonical: 'https://fram.dev/about',
      },
      openGraph: {
        title: 'About FRAM.DEV',
        description: 'Learn more about FRAM.DEV and our web development services',
        url: 'https://fram.dev/about',
      },
    };
  }

  return {
    title: `${aboutData.frontmatter.title} | FRAM.DEV`,
    description: aboutData.frontmatter.excerpt,
    alternates: {
      canonical: 'https://fram.dev/about',
    },
    openGraph: {
      title: aboutData.frontmatter.title,
      description: aboutData.frontmatter.excerpt,
      url: 'https://fram.dev/about',
      type: 'website',
    },
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutContent();

  if (!aboutData) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">About Us</h1>
        <p>Information about our company is currently unavailable. Please check back later.</p>
      </div>
    );
  }

  return (
    <>
      <JsonLd
        type="organization"
        data={{
          name: 'FRAM.DEV',
          url: 'https://fram.dev',
          logo: 'https://fram.dev/images/logo.svg',
          description: aboutData.frontmatter.excerpt,
          sameAs: ['https://twitter.com/framdev', 'https://github.com/framdev'],
        }}
      />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
            <div className="prose prose-lg dark:prose-invert max-w-none">{aboutData.content}</div>
          </div>
        </div>
      </main>
    </>
  );
}
