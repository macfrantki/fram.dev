"use client";

import { motion } from "framer-motion";
import {
  SiWordpress,
  SiWebflow,
  SiVuedotjs,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiLaravel,
  SiHubspot,
  SiShopify,
  SiWoo,
  SiMagento,
  SiBigcommerce,
  SiKotlin,
  SiFlutter,
  SiSwift,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

interface TechCategory {
  title: string;
  technologies: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const techStack: TechCategory[] = [
  {
    title: "Strony internetowe",
    technologies: [
      {
        name: "WordPress",
        icon: <SiWordpress className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Webflow",
        icon: <SiWebflow className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Vue JS",
        icon: <SiVuedotjs className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "React JS",
        icon: <SiReact className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Python",
        icon: <SiPython className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Node JS",
        icon: <SiNodedotjs className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Laravel",
        icon: <SiLaravel className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Hubspot",
        icon: <SiHubspot className="w-8 h-8 md:w-10 md:h-10" />,
      },
    ],
  },
  {
    title: "E-Commerce",
    technologies: [
      {
        name: "Shopify",
        icon: <SiShopify className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "WooCommerce",
        icon: <SiWoo className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Magento",
        icon: <SiMagento className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "BigCommerce",
        icon: <SiBigcommerce className="w-8 h-8 md:w-10 md:h-10" />,
      },
    ],
  },
  {
    title: "Aplikacje mobilne",
    technologies: [
      {
        name: "React Native",
        icon: <FaReact className="w-8 h-8 md:w-10 md:h-10" />,
      },
      { name: "Swift", icon: <SiSwift className="w-8 h-8 md:w-10 md:h-10" /> },
      {
        name: "Kotlin",
        icon: <SiKotlin className="w-8 h-8 md:w-10 md:h-10" />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="w-8 h-8 md:w-10 md:h-10" />,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="w-full bg-stone-900 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16 font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white text-center sm:text-left"
        >
          Nasze <span className="text-primary">Technologie</span>
        </motion.h2>

        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {techStack.map((category, _categoryIndex) => (
            <div
              key={category.title}
              className="space-y-6 sm:space-y-8 md:space-y-12"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-grotesk text-xl sm:text-2xl text-gray-500 text-center sm:text-left"
              >
                {category.title}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 md:gap-12"
              >
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * techIndex,
                    }}
                    className="group flex flex-col items-center gap-3 md:gap-4"
                  >
                    <div className="text-gray-600 transition-colors duration-300 group-hover:text-primary">
                      {tech.icon}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
