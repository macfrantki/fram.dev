import { cache } from 'react';
import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface AboutFrontmatter {
  title: string;
  excerpt: string;
  date: string;
}

export const getAboutContent = cache(async () => {
  try {
    const filePath = path.join(process.cwd(), 'content', 'about', 'about.mdx');
    const source = await fs.readFile(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<AboutFrontmatter>({
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
    console.error('Error reading About MDX file:', error);
    return null;
  }
});
