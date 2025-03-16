'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  index: number;
}

export default function ProjectCard({ 
  slug, 
  title, 
  description, 
  coverImage, 
  technologies, 
  category, 
  featured, 
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <Link href={`/projects/${slug}`} className="group block h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {featured && (
            <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-sm font-medium text-white">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="mb-2 text-xs text-gray-500">{category}</div>
          <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 text-sm text-gray-700 line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 