"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Usługi", href: "/services" },
  { name: "Kontakt", href: "/contact" },
];

const BurgerIcon = () => (
  <svg
    className="h-6 w-6"
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
);

const CloseIcon = () => (
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
);

export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 25;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 mx-auto max-w-6xl rounded-b transition-all duration-1000 ${
        isScrolled
          ? "mt-0 bg-stone-900/90 text-white backdrop-blur lg:px-10"
          : "mt-7 px-4"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex h-16 justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/icon.png"
              alt="Logo"
              width={40}
              height={40}
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 w-auto" : "h-14 w-auto"
              }`}
            />
            <span
              className={`font-semibold transition-all duration-300 ${
                isScrolled
                  ? "ml-4 text-3xl text-white"
                  : "ml-6 text-5xl text-gray-900"
              }`}
            >
              fra<span className="text-primary">Ma</span>
              <span
                className={`transition-all duration-[2000ms] ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              >
                .dev
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative overflow-hidden px-4 py-2 text-sm font-medium ${
                  link.name === "Kontakt"
                    ? "group rounded-b-lg border border-primary"
                    : isScrolled
                      ? "text-white hover:text-primary"
                      : "text-gray-700 hover:text-primary"
                }`}
              >
                <span
                  className={`relative z-10 ${
                    link.name === "Kontakt" ? "group-hover:text-white" : ""
                  }`}
                >
                  {link.name}
                </span>
                {link.name === "Kontakt" && (
                  <div className="absolute inset-0 translate-y-full transform bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="flex items-center lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] min-h-[100dvh] w-full overflow-y-auto bg-stone-900 lg:hidden"
          >
            {/* Close button */}
            <button
              className="absolute right-6 top-10 p-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CloseIcon />
            </button>

            {/* Logo and Navigation */}
            <div className="flex h-full flex-col items-center justify-center">
              {/* Logo */}
              <Link
                href="/"
                className="absolute left-10 top-10 mb-16 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/icon.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="h-15 w-auto"
                />
                <span className="ml-4 text-4xl font-semibold text-white">
                  fra<span className="text-primary">Ma</span>
                  <span className="text-white">.dev</span>
                </span>
              </Link>

              {/* Navigation Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-start space-y-8"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-2xl font-medium transition-colors duration-300 ${
                        link.name === "Kontakt"
                          ? "text-primary hover:text-primary/80"
                          : "text-white hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
