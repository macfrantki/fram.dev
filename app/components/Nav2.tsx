"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Portfolio",
    href: "/portfolio",
    dropdownItems: [
      { name: "Projekty", href: "/projekty" },
      { name: "Case Studies", href: "/#caseStudies" },
    ],
  },
  {
    name: "Usługi",
    href: "/services",
    dropdownItems: [
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile Apps", href: "/services/mobile" },
      { name: "E-commerce", href: "/services/ecommerce" },
      { name: "Consulting", href: "/services/consulting" },
    ],
  },
  { name: "Kontakt", href: "/contact" },
];

const menuAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Nav2() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(28, 25, 23, 0)", "rgba(28, 25, 23, 0.9)"],
  );

  const navPosition = useTransform(scrollY, [0, 100], [60, 30]);
  const logoScale = useTransform(scrollY, [0, 100], [2, 1]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        style={{
          background: navBackground,
          top: navPosition,
        }}
        className={`fixed z-50 hidden items-center justify-center rounded px-6 py-2 pb-3 transition-all duration-300 lg:left-1/2 lg:flex lg:w-fit lg:-translate-x-1/2 ${
          hasScrolled ? "shadow-lg backdrop-blur-sm" : ""
        }`}
      >
        <motion.div
          style={{ scale: logoScale }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center"
        >
          <Image
            src="/icon.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-14 w-auto transition-all duration-300"
          />
          <span className="ml-6 text-3xl font-semibold text-stone-900">
            fra<span className="text-primary">Ma</span>
            <span className={`transition-all duration-[2000ms]`}>.dev</span>
          </span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 1 : 0 }}
          onClick={() => setIsMenuOpen(true)}
          className={`ml-6 mt-3 rounded-lg p-2 text-white transition-colors hover:bg-white/10 ${
            hasScrolled ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-label="Open menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between rounded-b-lg px-4 py-4 transition-all duration-300 lg:hidden ${
          hasScrolled ? "bg-stone-900/60 shadow-lg backdrop-blur-sm" : ""
        }`}
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center"
        >
          <Image
            src="/icon.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="ml-4 text-3xl font-semibold text-white">
            fra<span className="text-primary">Ma</span>
            <span className="text-white">.dev</span>
          </span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMenuOpen(true)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Open menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </motion.nav>

      {/* Full screen menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? "0%" : "100%" }}
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-start bg-stone-900 pt-32 ${
          isMenuOpen ? "" : "pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-8 top-8 rounded-lg p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Close menu"
        >
          <svg
            className="size-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col gap-8 text-xl lg:flex-row">
            {navLinks.map((link, i) => (
              <motion.div key={link.name} className="text-center">
                <motion.div
                  custom={i}
                  initial="hidden"
                  animate={isMenuOpen ? "visible" : "hidden"}
                  variants={menuAnimation}
                >
                  {link.dropdownItems ? (
                    <div className="space-y-4">
                      <Link
                        href={link.href}
                        className="text-2xl font-medium text-white transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      <div className="flex flex-col gap-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg text-gray-400 transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-2xl font-medium text-white transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
            preserveAspectRatio="none"
          >
            <path d="M1440 120L0 0V120H1440Z" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
