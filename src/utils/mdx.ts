import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { ProjectFrontmatter } from '@/types';

export const PROJECTS_PATH = path.join(process.cwd(), 'src/content/projects');

// Get all project slugs
export function getProjectSlugs() {
  try {
    const fileNames = fs.readdirSync(PROJECTS_PATH);
    return fileNames
      .filter((fileName) => /\.mdx$/.test(fileName))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error getting project slugs:', error);
    return [];
  }
}

// Get frontmatter data for a project
export function getProjectFrontmatter(slug: string): ProjectFrontmatter | null {
  try {
    const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data as ProjectFrontmatter;
  } catch (error) {
    console.error(`Error getting frontmatter for slug ${slug}:`, error);
    return null;
  }
}

// Get all projects
export function getAllProjects() {
  try {
    const slugs = getProjectSlugs();
    const projects = slugs
      .map((slug) => {
        const frontmatter = getProjectFrontmatter(slug);
        if (!frontmatter) return null;
        return {
          slug,
          ...frontmatter,
        };
      })
      .filter(Boolean)
      .sort((a, b) => {
        const dateA = new Date(a?.date || 0);
        const dateB = new Date(b?.date || 0);
        return dateB.getTime() - dateA.getTime();
      });
    
    return projects;
  } catch (error) {
    console.error('Error getting all projects:', error);
    return [];
  }
}

// Get featured projects
export function getFeaturedProjects() {
  try {
    const projects = getAllProjects();
    return projects.slice(0, 3); // Return first 3 projects as featured
  } catch (error) {
    console.error('Error getting featured projects:', error);
    return [];
  }
}

// Get project data by slug
export async function getProjectData(slug: string) {
  try {
    const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content);
    
    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content: mdxSource,
    };
  } catch (error) {
    console.error(`Error getting project data for slug ${slug}:`, error);
    throw error;
  }
} 