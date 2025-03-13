'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useServiceData } from './data/services';

// Stats data
const statsData = [
  { value: '5+', label: 'Years combined experience' },
  { value: '25+', label: 'Completed projects and counting' },
  { value: '98%', label: 'Client satisfaction rate' },
];

const Stats = ({ className = '' }) => (
  <div className={`flex justify-center ${className}`}>
    <div className="flex flex-col space-y-8 sm:space-x-12 md:space-x-16 lg:flex-row lg:space-x-24 lg:space-y-0">
      {statsData.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
          <p className="text-sm md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Services() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('web-design');
  const { categories, getServicesByCategory } = useServiceData();

  const selectedServices = getServicesByCategory(selectedCategoryId);
  const selectedCategory = categories.find((cat) => cat.id === selectedCategoryId);

  const handlePrevCategory = () => {
    const currentIndex = categories.findIndex((cat) => cat.id === selectedCategoryId);
    const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setSelectedCategoryId(categories[prevIndex].id);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.findIndex((cat) => cat.id === selectedCategoryId);
    const nextIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    setSelectedCategoryId(categories[nextIndex].id);
  };

  return (
    <section className="relative w-screen overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-primary/5 shadow-2xl lg:min-h-[150vh]">
      <div className="relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1 }}
          className="mx-auto rounded-b-lg px-4 py-12 lg:mt-0 lg:px-8 lg:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 1, delay: 0.4 }}
              className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary lg:text-xl lg:font-bold"
            >
              ABOUT US
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 1, delay: 0.6 }}
              className="mb-10 font-grotesk text-3xl font-bold md:text-4xl"
            >
              Small Team. <span className="text-primary">Big Impact.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 0.8, delay: 1.2 }}
              className="mb-10"
            >
              <Stats className="justify-start" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 1, delay: 0.8 }}
              className="mx-auto text-lg leading-relaxed md:w-2/3"
            >
              We&apos;re a boutique development studio that combines the agility of a startup with
              the expertise of seasoned professionals. Our approach blends technical innovation with
              practical business solutions, creating digital products that help our clients stand
              out in increasingly competitive markets.
            </motion.p>
          </motion.div>

          {/* Services Section */}
          <div className="mt-10 flex flex-col gap-16 lg:mt-20">
            {/* Mobile Services View */}
            <div className="md:hidden">
              <div className="relative">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrevCategory}
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
                    onClick={handleNextCategory}
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
                    {selectedServices.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="group relative overflow-hidden rounded-lg border border-primary/20 p-6 duration-300"
                      >
                        <div className="relative z-10">
                          <h4 className="mb-3 font-grotesk text-xl text-primary duration-300">
                            {service.name}
                          </h4>
                          <div className="mb-4 h-[1px] w-full origin-left scale-x-0 transform bg-primary/20 transition-transform duration-1000 group-hover:scale-x-100"></div>
                          <p className="text-base leading-relaxed text-gray-700">
                            {service.description}
                          </p>
                        </div>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Desktop Services View */}
            <div className="mx-auto hidden w-fit rounded-b-xl border border-primary/40 bg-gradient-to-tl from-primary/15 via-primary/10 to-primary/5 p-10 py-20 shadow-xl duration-300 hover:shadow-2xl md:block">
              <div className="mb-10 flex justify-center gap-16">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategoryId(category.id)}
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
                  {selectedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="group relative cursor-default"
                    >
                      <div className="relative h-[10rem] rounded-b-lg border border-transparent p-6 hover:border-primary/40">
                        <h4 className="mb-1 font-grotesk text-xl text-primary">{service.name}</h4>
                        <div className="mb-4 h-[2px] w-full origin-left scale-x-0 transform bg-primary/20 transition-transform duration-1000 group-hover:scale-x-100"></div>
                        <p className="text-lg leading-relaxed">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
