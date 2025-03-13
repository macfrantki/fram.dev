'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSvelte,
  SiTailwindcss,
  SiAlpinedotjs,
  SiFramer,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGitlab,
  SiBitbucket,
  SiShopify,
  SiWoo,
  SiMagento,
  SiBigcommerce,
  SiOpenai,
  SiHuggingface,
  SiContentful,
  SiSanity,
  SiStrapi,
  SiGraphql,
  SiWordpress,
} from 'react-icons/si';
import { TbBrandStorybook } from 'react-icons/tb';
import { FaRobot, FaLanguage, FaWolfPackBattalion } from 'react-icons/fa';

// Custom icon components for services without official React Icons
const LangChainIcon = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-sm hover:text-primary md:h-10 md:w-10">
    <FaLanguage className="h-6 w-6 md:h-8 md:w-8" />
  </div>
);

const AnthropicIcon = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-sm hover:text-primary md:h-10 md:w-10">
    <FaRobot className="h-6 w-6 md:h-8 md:w-8" />
  </div>
);

const OllamaIcon = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-sm hover:text-primary md:h-10 md:w-10">
    <FaWolfPackBattalion className="h-6 w-6 md:h-8 md:w-8" />
  </div>
);

const HygraphIcon = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-sm hover:text-primary md:h-10 md:w-10">
    <SiGraphql className="h-6 w-6 md:h-8 md:w-8" />
  </div>
);

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  technologies: {
    name: string;
    icon: React.ReactNode;
  }[];
}

// Add icons for category tabs
const categoryIcons = {
  'Front-end': <SiReact className="h-5 w-5 md:h-6 md:w-6" />,
  'Back-end': <SiPython className="h-5 w-5 md:h-6 md:w-6" />,
  'AI & Machine Learning': <FaRobot className="h-5 w-5 md:h-6 md:w-6" />,
  CMS: <SiWordpress className="h-5 w-5 md:h-6 md:w-6" />,
  'Cloud & DevOps': <SiDocker className="h-5 w-5 md:h-6 md:w-6" />,
  'E-Commerce': <SiShopify className="h-5 w-5 md:h-6 md:w-6" />,
};

const techStack: TechCategory[] = [
  {
    title: 'Front-end',
    icon: categoryIcons['Front-end'],
    technologies: [
      { name: 'React', icon: <SiReact className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Svelte', icon: <SiSvelte className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Alpine.js', icon: <SiAlpinedotjs className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Framer Motion', icon: <SiFramer className="h-8 w-8 md:h-10 md:w-10" /> },
    ],
  },
  {
    title: 'Back-end',
    icon: categoryIcons['Back-end'],
    technologies: [
      { name: 'Python', icon: <SiPython className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Django', icon: <SiDjango className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'FastAPI', icon: <SiFastapi className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Redis', icon: <SiRedis className="h-8 w-8 md:h-10 md:w-10" /> },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: categoryIcons['AI & Machine Learning'],
    technologies: [
      { name: 'LangChain', icon: <LangChainIcon /> },
      { name: 'OpenAI API', icon: <SiOpenai className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Anthropic API', icon: <AnthropicIcon /> },
      { name: 'HuggingFace', icon: <SiHuggingface className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Ollama', icon: <OllamaIcon /> },
    ],
  },
  {
    title: 'CMS',
    icon: categoryIcons['CMS'],
    technologies: [
      { name: 'Storyblok', icon: <TbBrandStorybook className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Hygraph', icon: <HygraphIcon /> },
      { name: 'Contentful', icon: <SiContentful className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Sanity', icon: <SiSanity className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Strapi', icon: <SiStrapi className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'WordPress', icon: <SiWordpress className="h-8 w-8 md:h-10 md:w-10" /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: categoryIcons['Cloud & DevOps'],
    technologies: [
      { name: 'Docker', icon: <SiDocker className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'GitLab', icon: <SiGitlab className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Bitbucket', icon: <SiBitbucket className="h-8 w-8 md:h-10 md:w-10" /> },
    ],
  },
  {
    title: 'E-Commerce',
    icon: categoryIcons['E-Commerce'],
    technologies: [
      { name: 'Shopify', icon: <SiShopify className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'WooCommerce', icon: <SiWoo className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'Magento', icon: <SiMagento className="h-8 w-8 md:h-10 md:w-10" /> },
      { name: 'BigCommerce', icon: <SiBigcommerce className="h-8 w-8 md:h-10 md:w-10" /> },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full overflow-hidden rounded-b-xl bg-stone-900 py-12 shadow-2xl duration-300 hover:shadow-3xl sm:rounded-b-2xl md:py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center font-grotesk text-4xl font-bold text-backgroundary sm:mb-12 sm:text-5xl md:mb-16 md:text-6xl lg:text-8xl">
          Our <span className="text-primary">Technologies</span>
        </h2>

        {/* Category Tabs */}
        <div className="mb-8 md:mb-12">
          <div className="mx-auto flex w-fit flex-col gap-2 border-gray-800 pb-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:border-b">
            {techStack.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`group relative flex items-center justify-start gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === index ? 'text-primary' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <span className="text-current">{category.icon}</span>
                <span className="whitespace-nowrap">{category.title}</span>
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[1px] w-2/3 origin-left transform bg-primary/40 transition-transform duration-300 ease-out sm:w-full ${
                    activeTab === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-[0.3]'
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-8 h-[1px] w-full bg-gray-800 sm:hidden"></div>

        {/* Tech Icons for Selected Category */}
        <div className="relative mx-auto min-h-[280px] sm:min-h-[100px]">
          <div className="absolute inset-0">
            <div className="grid grid-cols-2 justify-center gap-6 sm:grid-cols-3 md:flex md:flex-wrap md:gap-14">
              {techStack[activeTab].technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                  className="group flex w-full flex-col items-center justify-start gap-3 md:w-[120px]"
                >
                  <div className="text-gray-600 transition-colors duration-300 group-hover:text-primary">
                    {tech.icon}
                  </div>
                  <span className="text-center text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-300 sm:text-sm">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
