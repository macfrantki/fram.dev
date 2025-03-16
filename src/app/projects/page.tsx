import { Metadata } from 'next';
import ProjectCard from '@/components/projects/ProjectCard';
import { getAllProjects } from '@/lib/content-api';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Projects | FRAM.DEV',
  description: 'Explore our portfolio of web development projects',
  alternates: {
    canonical: 'https://fram.dev/projects',
  },
  openGraph: {
    title: 'Projects | FRAM.DEV',
    description: 'Explore our portfolio of web development projects',
    url: 'https://fram.dev/projects',
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Our Projects</h1>
      <p className="mb-12 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
        Explore our portfolio of web development projects. We&apos;ve worked with a diverse range of
        clients to create custom solutions that meet their specific needs.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.frontmatter.title}
            description={project.frontmatter.description || ''}
            image={project.frontmatter.coverImage}
            technologies={project.frontmatter.technologies}
            category={project.frontmatter.category}
          />
        ))}
      </div>
    </div>
  );
}
