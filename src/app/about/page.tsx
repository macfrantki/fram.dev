import { Metadata } from 'next';
import { getAboutContent } from '@/lib/about';

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutContent();

  if (!aboutData) {
    return {
      title: 'About | FRAM.DEV',
      description: 'Learn more about FRAM.DEV and our web development services',
    };
  }

  return {
    title: `${aboutData.frontmatter.title} | FRAM.DEV`,
    description: aboutData.frontmatter.excerpt,
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
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="prose prose-lg dark:prose-invert max-w-none">{aboutData.content}</div>
        </div>
      </div>
    </main>
  );
}
