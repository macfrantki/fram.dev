'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Development', href: '#' },
      { name: 'Design', href: '#' },
      { name: 'E-commerce', href: '#' },
      { name: 'Mobile', href: '#' },
      { name: 'Consulting', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-stone-900 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-32">
          {/* Brand Section */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/icon.png"
                  alt="Logo"
                  className="mr-4 h-10 w-10"
                  width={40}
                  height={40}
                />
                <span className="text-3xl font-semibold text-white">
                  fra<span className="text-primary">Ma</span>
                  <span>.dev</span>
                </span>
              </Link>
              <p className="text-sm text-gray-400">
                Creating digital experiences that transform businesses and inspire innovation.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="mailto:contact@frama.com"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-primary"
                >
                  contact@frama.com
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <div className="grid flex-1 grid-cols-2 gap-8 lg:grid-cols-3">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="mb-6 font-grotesk text-sm font-semibold text-gray-400">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 transition-colors duration-300 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 lg:flex-row"
        >
          <p>© 2024 FRAMA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors duration-300 hover:text-primary">
              LinkedIn
            </Link>
            <Link href="#" className="transition-colors duration-300 hover:text-primary">
              Twitter
            </Link>
            <Link href="#" className="transition-colors duration-300 hover:text-primary">
              Instagram
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
