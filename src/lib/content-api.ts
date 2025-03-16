import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { cache } from 'react';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { z } from 'zod';

// Define content paths
const CONTENT_PATH = path.join(process.cwd(), 'content');
const PROJECTS_PATH = path.join(CONTENT_PATH, 'projects');
const SERVICES_PATH = path.join(CONTENT_PATH, 'services');
const ABOUT_PATH = path.join(CONTENT_PATH, 'about');

// Schema validation for project frontmatter
export const ProjectFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  category: z.string(),
  client: z.string().optional(),
  technologies: z.array(z.string()),
  tags: z.array(z.string()),
  coverImage: z.string(),
  demoUrl: z.string().url().optional(),
  sourceUrl: z.string().url().optional(),
  featured: z.boolean().optional().default(false),
});

export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>;

// Schema for service frontmatter
export const ServiceFrontmatterSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  category: z.string(),
});

export type ServiceFrontmatter = z.infer<typeof ServiceFrontmatterSchema>;

// Schema for about frontmatter
export const AboutFrontmatterSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
});

export type AboutFrontmatter = z.infer<typeof AboutFrontmatterSchema>;

// Helper to extract table of contents from content
export function extractTableOfContents(content: string) {
  const headingLines = content.split('\n').filter(line => 
    line.match(/^#{2,3}\s+.+$/)
  );
  
  return headingLines.map(line => {
    const level = line.match(/^(#{2,3})\s+/)![1].length;
    const text = line.replace(/^#{2,3}\s+/, '');
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    return {
      level,
      text,
      slug,
    };
  });
}

// Generic function to read directory content with validation
async function getDirectoryContent<T>(
  directoryPath: string, 
  schema: z.ZodType<T>
): Promise<Array<{ slug: string; frontmatter: T }>> {
  try {
    const files = await fs.readdir(directoryPath);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));
    
    const content = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const filePath = path.join(directoryPath, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        try {
          const validatedData = schema.parse(data);
          return {
            slug,
            frontmatter: validatedData,
          };
        } catch (error) {
          console.error(`Validation error in ${file}:`, error);
          return null;
        }
      })
    );
    
    return content.filter(Boolean) as Array<{ slug: string; frontmatter: T }>;
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
    return [];
  }
}

// Get all projects with cached results
export const getAllProjects = cache(async () => {
  const projects = await getDirectoryContent(
    PROJECTS_PATH,
    ProjectFrontmatterSchema
  );
  
  // Sort by date descending
  return projects.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
});

// Get featured projects
export const getFeaturedProjects = cache(async () => {
  const projects = await getAllProjects();
  const featured = projects.filter(project => project.frontmatter.featured);
  
  // If no featured projects, return first 3
  if (featured.length === 0) {
    return projects.slice(0, 3);
  }
  
  return featured;
});

// Get project slugs
export const getProjectSlugs = cache(async () => {
  try {
    const files = await fs.readdir(PROJECTS_PATH);
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error getting project slugs:', error);
    return [];
  }
});

// Get project data by slug with improved MDX processing
export const getProjectBySlug = cache(async (slug: string) => {
  try {
    const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(source);
    
    // Validate frontmatter
    let frontmatter;
    try {
      frontmatter = ProjectFrontmatterSchema.parse(data);
    } catch (error) {
      console.error(`Validation error in ${slug}.mdx:`, error);
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }
    
    // Calculate reading time
    const readingTimeResult = readingTime(content);
    
    // Process MDX content with enhanced plugins
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          rehypeCodeTitles,
          [rehypePrism, { showLineNumbers: true }],
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    });
    
    // Extract table of contents
    const tableOfContents = extractTableOfContents(content);
    
    return {
      slug,
      frontmatter,
      content: mdxSource,
      readingTime: readingTimeResult,
      tableOfContents,
    };
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);
    throw error;
  }
});

// Get all services
export const getAllServices = cache(async () => {
  return getDirectoryContent(SERVICES_PATH, ServiceFrontmatterSchema);
});

// Get service by slug
export const getServiceBySlug = cache(async (slug: string) => {
  try {
    const filePath = path.join(SERVICES_PATH, `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(source);
    
    // Validate frontmatter
    const frontmatter = ServiceFrontmatterSchema.parse(data);
    
    // Process MDX content with enhanced plugins
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    });
    
    return {
      slug,
      frontmatter,
      content: mdxSource,
    };
  } catch (error) {
    console.error(`Error fetching service ${slug}:`, error);
    throw error;
  }
});

// Get about content
export const getAboutContent = cache(async () => {
  try {
    const filePath = path.join(ABOUT_PATH, 'about.mdx');
    const source = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(source);
    
    // Validate frontmatter
    const frontmatter = AboutFrontmatterSchema.parse(data);
    
    // Process MDX content with enhanced plugins
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    });
    
    return {
      frontmatter,
      content: mdxSource,
    };
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}); 