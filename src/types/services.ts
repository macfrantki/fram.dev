export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  slug: string;
}

export interface ServiceFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  order: number;
}
