'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceType {
  name: string;
  description: string;
  items: ServiceItem[];
}

interface Services {
  [key: string]: ServiceType;
}

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
          <p className="text-sm text-gray-600 md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

const services: Services = {
  development: {
    name: 'Development',
    description:
      'Tworzymy zaawansowane rozwiązania webowe wykorzystując najnowsze technologie i najlepsze praktyki programistyczne.',
    items: [
      {
        title: 'Frontend Development',
        description:
          'Nowoczesne i responsywne interfejsy użytkownika z wykorzystaniem React i Next.js',
      },
      {
        title: 'Backend Development',
        description: 'Skalowalne API i architektury serwerowe dostosowane do Twoich potrzeb',
      },
      {
        title: 'Performance Optimization',
        description: 'Optymalizacja wydajności i czasu ładowania aplikacji webowych',
      },
      {
        title: 'Web Apps',
        description:
          'Kompleksowe aplikacje webowe dostosowane do indywidualnych potrzeb biznesowych',
      },
    ],
  },
  design: {
    name: 'Design',
    description:
      'Projektujemy intuicyjne interfejsy, które nie tylko świetnie wyglądają, ale również doskonale działają.',
    items: [
      {
        title: 'UI/UX Design',
        description: 'Estetyczne i funkcjonalne projekty interfejsów użytkownika',
      },

      {
        title: 'Design System',
        description: 'Tworzenie spójnych systemów projektowych i bibliotek komponentów',
      },
      {
        title: 'Prototypowanie',
        description: 'Interaktywne prototypy i testy użyteczności',
      },
    ],
  },
  ecommerce: {
    name: 'E-commerce',
    description:
      'Kompleksowe rozwiązania e-commerce, od małych sklepów po duże platformy sprzedażowe.',
    items: [
      {
        title: 'Sklepy Online',
        description: 'Wydajne i bezpieczne platformy sprzedażowe',
      },
      {
        title: 'Integracje',
        description: 'Połączenie z systemami płatności, ERP i innymi serwisami',
      },
    ],
  },
  mobile: {
    name: 'Mobile',
    description:
      'Tworzymy natywne i hybrydowe aplikacje mobilne, które zapewniają najwyższą jakość użytkowania.',
    items: [
      {
        title: 'Aplikacje Hybrydowe',
        description: 'Wieloplatformowe aplikacje z wykorzystaniem React Native i Flutter',
      },
      {
        title: 'PWA',
        description: 'Progresywne aplikacje webowe działające jak natywne aplikacje mobilne',
      },
      {
        title: 'Natywne Aplikacje',
        description: 'Dedykowane aplikacje dla iOS i Android',
      },
      {
        title: 'Mobile UX',
        description: 'Optymalizacja doświadczeń mobilnych i testowanie użyteczności',
      },
    ],
  },
  consulting: {
    name: 'Consulting',
    description:
      'Oferujemy profesjonalne doradztwo technologiczne i wsparcie w transformacji cyfrowej.',
    items: [
      {
        title: 'Audyty Techniczne',
        description: 'Kompleksowa analiza i optymalizacja istniejących rozwiązań',
      },
      {
        title: 'Strategia Cyfrowa',
        description: 'Planowanie i wdrażanie strategii transformacji cyfrowej',
      },
      {
        title: 'Szkolenia',
        description: 'Warsztaty i szkolenia z zakresu nowych technologii',
      },
      {
        title: 'Wsparcie Techniczne',
        description: 'Długoterminowe wsparcie i rozwój projektów technologicznych',
      },
    ],
  },
};

export default function Services() {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);

  const serviceTypes = Object.keys(services);
  const selectedType = serviceTypes[selectedTypeIndex];

  const handlePrevService = () => {
    setSelectedTypeIndex((prevIndex) =>
      prevIndex === 0 ? serviceTypes.length - 1 : prevIndex - 1
    );
  };

  const handleNextService = () => {
    setSelectedTypeIndex((prevIndex) =>
      prevIndex === serviceTypes.length - 1 ? 0 : prevIndex + 1
    );
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
              className="mx-auto text-lg leading-relaxed text-gray-700 md:w-2/3"
            >
              We're a boutique development studio that combines the agility of a startup with the expertise of seasoned professionals. Our approach blends technical innovation with practical business solutions, creating digital products that help our clients stand out in increasingly competitive markets.
            </motion.p>
          </motion.div>
          {/* <div className="mx-auto mt-10 lg:mt-20 h-[1px] w-full lg:w-1/3 bg-primary/40"></div> */}

          {/* Services Section */}
          <div className="mt-10 flex flex-col gap-16 lg:mt-20">
            {/* Mobile Services View */}
            <div className="md:hidden">
              <div className="relative">
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrevService}
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
                  </motion.button>
                  <motion.h3
                    key={selectedType}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {services[selectedType].name}
                  </motion.h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNextService}
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
                  </motion.button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedType}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 text-center text-lg leading-relaxed text-gray-700"
                  >
                    {services[selectedType].description}
                  </motion.p>
                </AnimatePresence>

                <div className="mt-12 space-y-6">
                  <AnimatePresence mode="wait">
                    {services[selectedType].items.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40"
                      >
                        <div className="relative z-10">
                          <h4 className="mb-3 font-grotesk text-xl text-primary duration-300">
                            {service.title}
                          </h4>
                          <div className="mb-4 h-[1px] w-full origin-left scale-x-0 transform bg-primary/20 transition-transform duration-1000 group-hover:scale-x-100"></div>
                          <p className="text-base leading-relaxed text-gray-700">
                            {service.description}
                          </p>
                        </div>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Desktop Services View */}
            <div className="mx-auto hidden w-fit rounded-b-xl border border-primary/40 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 p-10 py-20 shadow-xl duration-300 hover:shadow-2xl md:block">
              <div className="mb-10 flex justify-center gap-16">
                {Object.keys(services).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedTypeIndex(serviceTypes.indexOf(type))}
                    className={`group relative text-center font-grotesk text-xl transition-all duration-500 md:text-2xl ${
                      selectedType === type ? 'text-primary' : 'hover:text-primary/80'
                    }`}
                  >
                    {services[type].name}
                    <span
                      className={`absolute -bottom-2 left-0 right-0 h-[1px] w-full origin-left transform bg-primary/40 transition-transform duration-300 ease-out ${
                        selectedType === type
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-[0.3]'
                      }`}
                    ></span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed md:text-xl"
                >
                  {services[selectedType].description}
                </motion.p>
              </AnimatePresence>

              <div className="w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedType}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2"
                  >
                    {services[selectedType].items.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative cursor-default"
                      >
                        <div className="relative h-[10rem] rounded-b-lg border border-transparent bg-gradient-to-tl from-primary/20 via-primary/10 to-primary/5 p-6 transition-all duration-500 hover:border-primary/40">
                          <h4 className="mb-1 font-grotesk text-xl text-primary">
                            {service.title}
                          </h4>
                          <div className="mb-4 h-[2px] w-full origin-left scale-x-0 transform bg-primary/20 transition-transform duration-1000 group-hover:scale-x-100"></div>
                          <p className="text-lg leading-relaxed">{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
