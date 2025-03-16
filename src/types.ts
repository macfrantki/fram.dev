export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  client?: string;
  category: string;
  tags: string[];
  coverImage: string;
  technologies: string[];
  featured?: boolean;
  demoUrl?: string;
  sourceUrl?: string;
}
