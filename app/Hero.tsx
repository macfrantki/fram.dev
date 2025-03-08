"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BackgroundCircles } from "./components/BackgroundCircles";
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

const ArrowIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export default function Hero() {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);

  const services: Services = {
    development: {
      name: "Development",
      description:
        "Tworzymy zaawansowane rozwiązania webowe wykorzystując najnowsze technologie i najlepsze praktyki programistyczne.",
      items: [
        {
          title: "Frontend Development",
          description:
            "Nowoczesne i responsywne interfejsy użytkownika z wykorzystaniem React i Next.js",
        },
        {
          title: "Backend Development",
          description:
            "Skalowalne API i architektury serwerowe dostosowane do Twoich potrzeb",
        },
        {
          title: "Performance Optimization",
          description:
            "Optymalizacja wydajności i czasu ładowania aplikacji webowych",
        },
        {
          title: "Web Apps",
          description:
            "Kompleksowe aplikacje webowe dostosowane do indywidualnych potrzeb biznesowych",
        },
      ],
    },
    design: {
      name: "Design",
      description:
        "Projektujemy intuicyjne interfejsy, które nie tylko świetnie wyglądają, ale również doskonale działają.",
      items: [
        {
          title: "UI/UX Design",
          description:
            "Estetyczne i funkcjonalne projekty interfejsów użytkownika",
        },

        {
          title: "Design System",
          description:
            "Tworzenie spójnych systemów projektowych i bibliotek komponentów",
        },
        {
          title: "Prototypowanie",
          description: "Interaktywne prototypy i testy użyteczności",
        },
      ],
    },
    ecommerce: {
      name: "E-commerce",
      description:
        "Kompleksowe rozwiązania e-commerce, od małych sklepów po duże platformy sprzedażowe.",
      items: [
        {
          title: "Sklepy Online",
          description: "Wydajne i bezpieczne platformy sprzedażowe",
        },
        {
          title: "Integracje",
          description:
            "Połączenie z systemami płatności, ERP i innymi serwisami",
        }
      ],
    },
    mobile: {
      name: "Mobile",
      description:
        "Tworzymy natywne i hybrydowe aplikacje mobilne, które zapewniają najwyższą jakość użytkowania.",
      items: [
        {
          title: "Aplikacje Hybrydowe",
          description:
            "Wieloplatformowe aplikacje z wykorzystaniem React Native i Flutter",
        },
        {
          title: "PWA",
          description:
            "Progresywne aplikacje webowe działające jak natywne aplikacje mobilne",
        },
        {
          title: "Natywne Aplikacje",
          description: "Dedykowane aplikacje dla iOS i Android",
        },
        {
          title: "Mobile UX",
          description:
            "Optymalizacja doświadczeń mobilnych i testowanie użyteczności",
        },
      ],
    },
    consulting: {
      name: "Consulting",
      description:
        "Oferujemy profesjonalne doradztwo technologiczne i wsparcie w transformacji cyfrowej.",
      items: [
        {
          title: "Audyty Techniczne",
          description:
            "Kompleksowa analiza i optymalizacja istniejących rozwiązań",
        },
        {
          title: "Strategia Cyfrowa",
          description:
            "Planowanie i wdrażanie strategii transformacji cyfrowej",
        },
        {
          title: "Szkolenia",
          description: "Warsztaty i szkolenia z zakresu nowych technologii",
        },
        {
          title: "Wsparcie Techniczne",
          description:
            "Długoterminowe wsparcie i rozwój projektów technologicznych",
        },
      ],
    },
  };

  const serviceTypes = Object.keys(services);
  const selectedType = serviceTypes[selectedTypeIndex];

  const handlePrevService = () => {
    setSelectedTypeIndex((prevIndex) =>
      prevIndex === 0 ? serviceTypes.length - 1 : prevIndex - 1,
    );
  };

  const handleNextService = () => {
    setSelectedTypeIndex((prevIndex) =>
      prevIndex === serviceTypes.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="relative min-h-[180vh] w-screen overflow-hidden">
      {/* Background Image with Gradients */}
      {/* <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Hero background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/90 to-black"></div>
        <div className="absolute  inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent"></div>
      </div> */}

      {/* Content Container */}
      <div className="container relative mx-auto max-w-6xl">
        {/* Top Section */}
        <motion.div className="container relative mx-auto flex min-h-screen flex-col items-start justify-center px-4">
          <BackgroundCircles />
          <motion.div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
              className="text-6xl font-bold leading-tight md:text-8xl lg:text-[10rem]"
            >
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 1, delay: 0.4 }}
                className="block"
              >
                Przekształć
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 1, delay: 0.6 }}
                className="text-primary block"
              >
                Przyszłość
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 1, delay: 0.8 }}
                className="block"
              >
                Cyfrową
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 1 }}
              className="mt-12 md:mt-16"
            >
              <button className="border-primary text-primary group relative -mt-10 flex items-center overflow-hidden border-2 bg-transparent px-8 py-4 text-xl rounded-b-lg font-semibold transition-all hover:text-white">
                <span className="relative z-10">Rozpocznij Transformację</span>
                <div className="bg-primary absolute inset-0 translate-y-full transform transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
                <ArrowIcon  />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="from-primary/10 to-primary/5 container mx-auto max-w-6xl rounded-b-lg bg-gradient-to-br via-transparent mb-10 lg:mb-20 px-4 py-6 lg:mt-10 lg:px-8 lg:py-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.4 }}
              className="text-primary mb-2 text-sm font-semibold uppercase tracking-wider"
            >
              O nas
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
              className="font-grotesk mb-8 text-3xl font-bold md:text-4xl"
            >
              Tworzymy Cyfrową <span className="text-primary">Przyszłość</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.8 }}
              className="mx-auto text-lg leading-relaxed text-gray-700 md:w-2/3"
            >
              Jesteśmy dwójką pasjonatów z 10-letnim doświadczeniem w tworzeniu
              aplikacji webowych. Znajdujemy przyjemność w projektowaniu i
              programowaniu rozwiązań, które przynoszą realną wartość naszym
              klientom.
            </motion.p>
          </motion.div>

          {/* Services Section */}
          <div className="mt-32 flex flex-col gap-16 md:flex-row md:gap-32">
            {/* Service Selection (Mobile View) */}
            <div className="md:hidden">
              <div className="flex items-center justify-between">
                <button onClick={handlePrevService}>
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <h3 className="text-xl">{services[selectedType].name}</h3>
                <button onClick={handleNextService}>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-lg leading-relaxed"
                >
                  {services[selectedType].description}
                </motion.p>
              </AnimatePresence>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <AnimatePresence mode="wait">
                  {services[selectedType].items.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative cursor-default pt-6"
                    >
                      <div className="relative border-r border-white/20 p-6 transition-all duration-500">
                        <h4 className="group-hover:text-primary mb-4 text-xl text-white/80 duration-300">
                          {service.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Service Selection (Top Bar) */}
            <div className="w-full">
              <div className="mb-10 flex justify-center gap-12">
                {Object.keys(services).map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      setSelectedTypeIndex(serviceTypes.indexOf(type))
                    }
                    className={`font-grotesk group relative text-center text-xl transition-all duration-500 md:text-2xl ${
                      selectedType === type
                        ? "text-primary"
                        : "hover:text-primary/80"
                    }`}
                  >
                    {services[type].name}
                    <span
                      className={`bg-primary/40 absolute -bottom-2 left-0 right-0 h-[1px] w-full origin-left transform transition-transform duration-300 ease-out ${
                        selectedType === type
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-[0.3]"
                      }`}
                    ></span>
                  </button>
                ))}
              </div>

              {/* Service Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto mb-6 mt-16 max-w-3xl text-center text-lg leading-relaxed md:text-xl"
                >
                  {services[selectedType].description}
                </motion.p>
              </AnimatePresence>

              {/* Services Grid */}
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
                        <div className="hover:border-primary/40 relative border border-white/20 rounded-b-lg p-6 transition-all duration-500">
                          <h4 className="text-primary/80 group-hover:text-primary font-grotesk mb-3 text-xl duration-300">
                            {service.title}
                          </h4>
                          <div className="bg-primary/20 mb-4 h-[1px] w-full origin-left scale-x-0 transform transition-transform duration-1000 group-hover:scale-x-100"></div>
                          <p className="text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-12 text-center">
                <button className="text-primary/80 group relative inline-flex items-center gap-2">
                  <span className="relative text-xl">Dalej</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary transform transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M4 10H16M16 10L10 4M16 10L10 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
