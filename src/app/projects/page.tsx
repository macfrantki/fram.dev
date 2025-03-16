import { Metadata } from 'next';
import { getAllProjects } from '@/utils/mdx';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
  title: 'Our Projects | fram.dev',
  description: 'Explore our portfolio of projects and case studies',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Explore our portfolio of work across various industries and technologies. Each project
            showcases our ability to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Filters - can be expanded later */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              All
            </button>
            <button
              type="button"
              className="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              Web
            </button>
            <button
              type="button"
              className="rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              coverImage={project.coverImage}
              technologies={project.technologies}
              category={project.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
