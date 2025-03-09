"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

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
    className="h-7 w-7"
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`absolute left-0 right-0 top-0 z-50 mx-auto mt-2 sm:mt-4 md:mt-7 max-w-6xl rounded-b transition-all duration-1000`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex h-14 sm:h-16 justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/icon.png"
              alt="Logo"
              width={30}
              height={30}
              className={`size-8 sm:size-10 md:size-12 lg:size-14 transition-all duration-300`}
            />
            <span
              className={`ml-2 sm:ml-4 md:ml-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 transition-all duration-300`}
            >
              fra<span className="text-primary">Ma</span>
            </span>
          </Link>

          {/* Desktop Navigation - hidden on small screens */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) =>
              link.name === "Kontakt" ? (
                <Button
                  key={link.name}
                  href={link.href}
                  variant="primary"
                  size="sm"
                  roundedBottom
                >
                  {link.name}
                </Button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium uppercase text-gray-700 hover:text-primary"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Mobile menu button - only visible on small screens */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] min-h-[100dvh] w-full overflow-y-auto bg-gradient-to-b from-white to-gray-50 lg:hidden"
          >
            <div className="flex flex-col min-h-screen">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/icon.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-auto h-auto"
                  />
                  <span className="ml-3 text-2xl font-semibold text-gray-900">
                    fra<span className="text-primary">Ma</span>
                    <span className="text-gray-900">.dev</span>
                  </span>
                </Link>

                <button
                  className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col items-center justify-center flex-grow py-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center space-y-12"
                >
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group"
                    >
                      {link.name === "Kontakt" ? (
                        <Button
                          href={link.href}
                          variant="primary"
                          size="lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Button>
                      ) : (
                        <>
                          <Link
                            href={link.href}
                            className="block text-3xl sm:text-4xl font-bold transition-colors duration-300 text-gray-800 hover:text-primary px-4 py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                          <motion.div
                            className="h-1 bg-primary mt-1 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "0%" }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Footer */}
              <div className="px-6 py-8 border-t border-gray-100">
                <div className="flex flex-col items-center space-y-6">
                  <h3 className="text-lg font-medium text-gray-500">
                    Połącz się z nami
                  </h3>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://facebook.com"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    © 2023 fraMa.dev. Wszystkie prawa zastrzeżone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
