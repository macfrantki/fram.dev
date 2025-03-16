'use client';

import { Service } from '@/types/services';
import { SERVICE_CATEGORIES } from '@/app/data/services/categories';
import ServiceCard from './ServiceCard';

interface DesktopServicesProps {
  selectedServices: Service[];
  selectedCategoryId: string;
  onCategorySelect: (categoryId: string) => void;
}

export default function DesktopServices({
  selectedServices,
  selectedCategoryId,
  onCategorySelect,
}: DesktopServicesProps) {
  return (
    <div className="mx-auto hidden w-fit rounded-b-xl border border-primary/40 bg-gradient-to-tl from-primary/15 via-primary/10 to-primary/5 p-10 py-20 shadow-xl duration-300 hover:shadow-2xl md:block">
      <div className="mb-10 flex justify-center gap-16">
        {SERVICE_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`group relative px-2 text-center font-grotesk text-xl transition-all duration-500 md:text-2xl ${
              selectedCategoryId === category.id ? 'text-primary' : 'hover:text-primary/80'
            }`}
          >
            {category.name}
            <span
              className={`absolute -bottom-2 left-0 right-0 h-[1px] w-full origin-left transform bg-primary/40 transition-transform duration-300 ease-out ${
                selectedCategoryId === category.id
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-[0.3]'
              }`}
            ></span>
          </button>
        ))}
      </div>

      <div className="w-full">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="desktop" />
          ))}
        </div>
      </div>
    </div>
  );
}
