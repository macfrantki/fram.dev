import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Chip } from '@/components/ui/Chip';
import { getProjectData, getProjectSlugs, getAllProjects } from '@/utils/mdx';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const project = await getProjectData(params.slug);

    return {
      title: `${project.frontmatter.title} | FRAM.DEV Projects`,
      description: project.frontmatter.description || 'View this project by FRAM.DEV',
      alternates: {
        canonical: `https://fram.dev/projects/${params.slug}`,
      },
      openGraph: {
        title: project.frontmatter.title,
        description: project.frontmatter.description || 'View this project by FRAM.DEV',
        url: `https://fram.dev/projects/${params.slug}`,
        type: 'article',
        images: [
          {
            url: project.frontmatter.coverImage || '/images/project-placeholder.jpg',
            width: 1200,
            height: 630,
            alt: project.frontmatter.title,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: 'Project Not Found | FRAM.DEV',
      description: 'The requested project could not be found',
    };
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const project = await getProjectData(params.slug);
    const { frontmatter, content } = project;

    return (
      <>
        <JsonLd
          type="article"
          data={{
            headline: frontmatter.title,
            description: frontmatter.description || 'View this project by FRAM.DEV',
            image: frontmatter.coverImage || '/images/project-placeholder.jpg',
            datePublished: frontmatter.date,
            author: {
              name: 'FRAM.DEV Team',
            },
            publisher: {
              name: 'FRAM.DEV',
              logo: {
                url: 'https://fram.dev/images/logo.svg',
              },
            },
            url: `https://fram.dev/projects/${params.slug}`,
          }}
        />
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-4">
              <Link href="/projects" className="mb-6 inline-block text-primary hover:underline">
                ← Back to Projects
              </Link>
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{frontmatter.title}</h1>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">{frontmatter.description}</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {frontmatter.technologies.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
            <div className="mb-8 flex gap-4">
              {frontmatter.demoUrl && (
                <a
                  href={frontmatter.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
                >
                  View Demo
                </a>
              )}
              {frontmatter.sourceUrl && (
                <a
                  href={frontmatter.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-gray-200 px-4 py-2 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  View Source
                </a>
              )}
            </div>
          </header>

          {/* Cover Image */}
          <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              width={1200}
              height={675}
              className="h-auto w-full"
            />
          </div>

          {/* Project Details */}
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-3">
              <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>
              {/* Render the MDX content */}
              <div className="prose dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: content.compiledSource }} />
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Client</h4>
                    <p>{frontmatter.client || 'Personal Project'}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Category</h4>
                    <p>{frontmatter.category}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Completed</h4>
                    <p>{new Date(frontmatter.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 dark:text-gray-300">Tags</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}
