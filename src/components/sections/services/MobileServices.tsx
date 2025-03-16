'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types/services';
import { SERVICE_CATEGORIES } from '@/app/data/services/categories';
import ServiceCard from './ServiceCard';

interface MobileServicesProps {
  selectedServices: Service[];
  selectedCategory: (typeof SERVICE_CATEGORIES)[number] | undefined;
  onPrevCategory: () => void;
  onNextCategory: () => void;
}

export default function MobileServices({
  selectedServices,
  selectedCategory,
  onPrevCategory,
  onNextCategory,
}: MobileServicesProps) {
  return (
    <div className="md:hidden">
      <div className="relative">
        <div className="flex items-center justify-between">
          <button
            onClick={onPrevCategory}
            className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h3 className="text-2xl font-bold text-primary">{selectedCategory?.name}</h3>
          <button
            onClick={onNextCategory}
            className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="mt-12 space-y-6">
          <motion.div className="space-y-6">
            {selectedServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="mobile" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 