'use client';

import { useState } from 'react';
import { Service } from '@/types/services';
import { SERVICE_CATEGORIES } from '@/services/services/categories';
import Stats from './services/Stats';
import MobileServices from './services/MobileServices';
import DesktopServices from './services/DesktopServices';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState('web-design');

  const selectedServices = services.filter((s) => s.category === selectedCategoryId);
  const selectedCategory = SERVICE_CATEGORIES.find((cat) => cat.id === selectedCategoryId);

  const handlePrevCategory = () => {
    const currentIndex = SERVICE_CATEGORIES.findIndex((cat) => cat.id === selectedCategoryId);
    const prevIndex = currentIndex === 0 ? SERVICE_CATEGORIES.length - 1 : currentIndex - 1;
    setSelectedCategoryId(SERVICE_CATEGORIES[prevIndex].id);
  };

  const handleNextCategory = () => {
    const currentIndex = SERVICE_CATEGORIES.findIndex((cat) => cat.id === selectedCategoryId);
    const nextIndex = currentIndex === SERVICE_CATEGORIES.length - 1 ? 0 : currentIndex + 1;
    setSelectedCategoryId(SERVICE_CATEGORIES[nextIndex].id);
  };

  return (
    <section className="relative w-screen overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-primary/5 shadow-2xl lg:min-h-[150vh]">
      <div className="relative mx-auto">
        <div className="mx-auto rounded-b-lg px-4 py-12 lg:mt-0 lg:px-8 lg:py-32">
          <div className="flex flex-col items-center text-center">
            <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary lg:text-xl lg:font-bold">
              ABOUT US
            </span>
            <h2 className="mb-10 font-grotesk text-3xl font-bold md:text-4xl">
              Small Team. <span className="text-primary">Big Impact.</span>
            </h2>
            <div className="mb-10">
              <Stats className="justify-start" />
            </div>
            <p className="mx-auto text-lg leading-relaxed md:w-2/3">
              We&apos;re a boutique development studio that combines the agility of a startup with
              the expertise of seasoned professionals. Our approach blends technical innovation with
              practical business solutions, creating digital products that help our clients stand
              out in increasingly competitive markets.
            </p>
          </div>

          {/* Services Section */}
          <div className="mt-10 flex flex-col gap-16 lg:mt-20">
            <MobileServices
              selectedServices={selectedServices}
              selectedCategory={selectedCategory}
              onPrevCategory={handlePrevCategory}
              onNextCategory={handleNextCategory}
            />
            <DesktopServices
              selectedServices={selectedServices}
              selectedCategoryId={selectedCategoryId}
              onCategorySelect={setSelectedCategoryId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
