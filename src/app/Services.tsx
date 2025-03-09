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
        title: 'Performance Optimizatio',
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
    <section className="relative w-full overflow-hidden">
      <div className="container relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1 }}
          className="container mx-auto mb-8 max-w-6xl rounded-b-lg bg-gradient-to-br from-primary/10 via-transparent to-primary/5 px-4 py-6 sm:mb-10 md:mb-16 lg:mb-20 lg:mt-10 lg:px-8 lg:py-10"
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
              className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary"
            >
              O nas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 1, delay: 0.6 }}
              className="mb-6 font-grotesk text-2xl font-bold sm:mb-8 sm:text-3xl md:text-4xl"
            >
              Tworzymy Cyfrową <span className="text-primary">Przyszłość</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 1, delay: 0.8 }}
              className="mx-auto text-base leading-relaxed text-gray-700 sm:text-lg md:w-2/3"
            >
              Jesteśmy dwójką pasjonatów z 10-letnim doświadczeniem w tworzeniu aplikacji webowych.
              Znajdujemy przyjemność w projektowaniu i programowaniu rozwiązań, które przynoszą
              realną wartość naszym klientom.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
          <div className="mb-8 flex flex-col items-center justify-between sm:mb-12 sm:flex-row md:mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-center font-grotesk text-3xl font-bold sm:mb-0 sm:text-left sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Nasze <span className="text-primary">Usługi</span>
            </motion.h2>

            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrevService}
                className="rounded-full border border-gray-300 p-2 transition-colors hover:border-primary hover:text-primary"
                aria-label="Previous service"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextService}
                className="rounded-full border border-gray-300 p-2 transition-colors hover:border-primary hover:text-primary"
                aria-label="Next service"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="mb-6 md:mb-0 md:w-1/3">
                  <h3 className="mb-4 text-2xl font-semibold text-primary sm:text-3xl">
                    {services[selectedType].name}
                  </h3>
                  <p className="text-base text-gray-600 sm:text-lg">
                    {services[selectedType].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:w-2/3">
                  {services[selectedType].items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      <h4 className="mb-2 text-lg font-semibold sm:text-xl">{item.title}</h4>
                      <p className="text-sm text-gray-600 sm:text-base">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-2">
            {serviceTypes.map((type, index) => (
              <button
                key={type}
                onClick={() => setSelectedTypeIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === selectedTypeIndex ? 'w-6 bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${services[type].name} services`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
