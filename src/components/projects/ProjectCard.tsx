'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Chip } from '@/components/ui/Chip';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
  category,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group">
      <div className="h-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category badge */}
          <div className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium uppercase text-white backdrop-blur-sm">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary dark:text-gray-100">
            {title}
          </h3>
          <p className="mb-6 line-clamp-2 text-gray-600 dark:text-gray-300">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech) => (
              <Chip key={tech} size="sm">
                {tech}
              </Chip>
            ))}
            {technologies.length > 3 && <Chip size="sm">+{technologies.length - 3}</Chip>}
          </div>
        </div>
      </div>
    </Link>
  );
}
