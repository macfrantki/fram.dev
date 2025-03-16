import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Chip } from '@/components/ui/Chip';
import { getProjectData, getProjectSlugs } from '@/utils/mdx';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { frontmatter } = await getProjectData(params.slug);
    
    return {
      title: `${frontmatter.title} | Project`,
      description: frontmatter.description,
    };
  } catch (error) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter, content } = await getProjectData(params.slug);
    
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="mb-4">
            <Link href="/projects" className="text-primary hover:underline mb-6 inline-block">
              ← Back to Projects
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{frontmatter.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {frontmatter.technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
          <div className="flex gap-4 mb-8">
            {frontmatter.demoUrl && (
              <a 
                href={frontmatter.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                View Demo
              </a>
            )}
            {frontmatter.sourceUrl && (
              <a 
                href={frontmatter.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                View Source
              </a>
            )}
          </div>
        </header>
        
        {/* Cover Image */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
          <Image 
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            {/* Render the MDX content */}
            <div className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content.compiledSource }} />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
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
                  <div className="flex flex-wrap gap-2 mt-2">
                    {frontmatter.tags.map((tag) => (
                      <span key={tag} className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
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
    );
  } catch (error) {
    console.error('Error rendering project page:', error);
    notFound();
  }
} 