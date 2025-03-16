import { cache } from 'react';
import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { Service, ServiceFrontmatter } from '@/types/services';

export const getMdxContent = cache(async (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<ServiceFrontmatter>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error(`Error reading MDX file for slug ${slug}:`, error);
    return null;
  }
});

export const getAllServices = cache(async (): Promise<Service[]> => {
  try {
    const servicesDir = path.join(process.cwd(), 'content', 'services');
    const files = await fs.readdir(servicesDir);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const services = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(servicesDir, file);
        const source = await fs.readFile(filePath, 'utf8');
        const { frontmatter } = await compileMDX<ServiceFrontmatter>({
          source,
          options: {
            parseFrontmatter: true,
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          },
        });

        const slug = file.replace(/\.mdx$/, '');
        return {
          id: slug,
          name: frontmatter.title,
          description: frontmatter.excerpt,
          category: frontmatter.category,
          slug,
        };
      })
    );

    return services;
  } catch (error) {
    console.error('Error reading service files:', error);
    return [];
  }
});
