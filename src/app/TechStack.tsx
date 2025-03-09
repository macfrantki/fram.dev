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
      { name: "WordPress", icon: <SiWordpress size={40} /> },
      { name: "Webflow", icon: <SiWebflow size={40} /> },
      { name: "Vue JS", icon: <SiVuedotjs size={40} /> },
      { name: "React JS", icon: <SiReact size={40} /> },
      { name: "Python", icon: <SiPython size={40} /> },
      { name: "Node JS", icon: <SiNodedotjs size={40} /> },
      { name: "Laravel", icon: <SiLaravel size={40} /> },
      { name: "Hubspot", icon: <SiHubspot size={40} /> },
    ],
  },
  {
    title: "E-Commerce",
    technologies: [
      { name: "Shopify", icon: <SiShopify size={40} /> },
      { name: "WooCommerce", icon: <SiWoo size={40} /> },
      { name: "Magento", icon: <SiMagento size={40} /> },
      { name: "BigCommerce", icon: <SiBigcommerce size={40} /> },
    ],
  },
  {
    title: "Aplikacje mobilne",
    technologies: [
      { name: "React Native", icon: <FaReact size={40} /> },
      { name: "Swift", icon: <SiSwift size={40} /> },
      { name: "Kotlin", icon: <SiKotlin size={40} /> },
      { name: "Flutter", icon: <SiFlutter size={40} /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="w-full bg-stone-900 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 font-grotesk text-6xl font-bold text-white md:text-8xl"
        >
          Nasze
          <span className="text-primary">Technologie</span>
        </motion.h2>

        <div className="space-y-24">
          {techStack.map((category, _categoryIndex) => (
            <div key={category.title} className="space-y-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-grotesk text-2xl text-gray-500"
              >
                {category.title}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-8"
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
                    className="group flex flex-col items-center gap-4"
                  >
                    <div className="text-gray-600 transition-colors duration-300 group-hover:text-primary">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
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
