'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Service } from '@/types/services';

interface ServiceCardProps {
  service: Service;
  variant: 'mobile' | 'desktop';
}

export default function ServiceCard({ service, variant }: ServiceCardProps) {
  const isMobile = variant === 'mobile';

  return (
    <Link href={`/service/${service.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 10 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: isMobile ? undefined : 0.2 }}
        className={`group relative ${
          isMobile
            ? 'overflow-hidden rounded-lg border border-primary/20 p-6 duration-300 hover:border-primary/40'
            : 'cursor-pointer'
        }`}
      >
        <div
          className={
            isMobile
              ? 'relative z-10'
              : 'relative h-[10rem] rounded-b-lg border border-transparent p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg'
          }
        >
          <h4 className="mb-3 font-grotesk text-xl text-primary duration-300 group-hover:text-primary/80">
            {service.name}
          </h4>
          <div className="mb-4 h-[1px] w-full origin-left scale-x-0 transform bg-primary/20 transition-transform duration-1000 group-hover:scale-x-100"></div>
          <p className={`leading-relaxed ${isMobile ? 'text-base text-gray-700' : 'text-lg'}`}>
            {service.description}
          </p>
        </div>
        {isMobile && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        )}
      </motion.div>
    </Link>
  );
} 