import { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/content-api';
import path from 'path';
import fs from 'fs/promises';

// Define Project type locally since it's not exported from @/types
interface Project {
  slug: string;
}

// Configure this route for static export
export const dynamic = 'force-static';

// Helper to get all projects
async function getAllProjects(): Promise<Project[]> {
  try {
    const projectsDir = path.join(process.cwd(), 'content/projects');
    const files = await fs.readdir(projectsDir);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    return mdxFiles.map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
  } catch (error) {
    console.error('Error getting projects for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fram.dev';
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Get dynamic service pages
  const services = await getAllServices();
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Get dynamic project pages
  const projects = await getAllProjects();
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combine all pages
  return [...staticPages, ...servicePages, ...projectPages];
}
