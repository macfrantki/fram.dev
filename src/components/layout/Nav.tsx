'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Logo from '@/components/icons/Logo';
import BurgerIcon from '@/components/icons/Burger';
import CloseIcon from '@/components/icons/Close';
import { navLinks, companyName } from '@/config/navigation';
import useNavigation from '@/hooks/useNavigation';

export default function Navbar() {
  const { mobileMenuOpen, setMobileMenuOpen, scrolled } = useNavigation();

  return (
    <>
      {/* Desktop navbar - always visible */}
      <motion.nav
        initial={{ x: '150%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`absolute left-0 right-0 top-0 z-50 mx-auto mt-7 hidden max-w-6xl rounded-b bg-backgroundary transition-all duration-1000 lg:block`}
      >
        <div className="mx-4 border-b-2 border-primary/40 px-4 sm:px-6 lg:mx-auto lg:border-none lg:px-0">
          <div className="flex h-14 items-center justify-between sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo />
              <span
                className={`ml-2 font-semibold text-gray-900 transition-all duration-700 sm:ml-4 md:ml-6 ${
                  scrolled
                    ? 'text-xl sm:text-2xl md:ml-2 md:text-3xl'
                    : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                }`}
              >
                {companyName.first}<span className="text-primary">{companyName.last}</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) =>
                link.name === 'Contact' ? (
                  <Button
                    key={link.name}
                    href={link.href}
                    variant="primary"
                    size="sm"
                    withArrow
                    roundedBottom
                  >
                    {link.name}
                  </Button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-sm font-medium uppercase before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile navbar - only visible after scrolling or when menu is open */}
      <motion.nav
        initial={{ y: '-100%' }}
        animate={{ y: scrolled || mobileMenuOpen ? 0 : '-100%' }}
        className={`fixed left-0 right-0 top-0 z-50 border-b border-primary/40 bg-backgroundary/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'shadow-md' : ''} lg:hidden`}
      >
        <div className="mx-4 px-4 py-4 sm:px-6">
          <div className="flex h-6 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo />
              <span className="ml-2 text-2xl font-semibold text-gray-900">
                {companyName.first}<span className="text-primary">{companyName.last}</span>
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="flex items-center justify-center rounded-full text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <CloseIcon /> : <BurgerIcon />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] h-full w-full overflow-y-auto bg-backgroundary lg:hidden"
          >
            <div className="flex min-h-screen flex-col">
              {/* Header with logo and close button */}
              <div className="mx-4 rounded-b border-b border-primary/40 px-4 py-4 shadow-md sm:px-6">
                <div className="flex h-6 items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Logo />
                    <span className="ml-2 text-2xl font-semibold text-gray-900">
                      {companyName.first}<span className="text-primary">{companyName.last}</span>
                    </span>
                  </Link>

                  <button
                    className="flex items-center justify-center rounded-full text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-20 flex flex-grow flex-col items-center justify-start">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center space-y-10"
                >
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group"
                    >
                      {link.name === 'Contact' ? (
                        <Button
                          href={link.href}
                          variant="primary"
                          roundedBottom
                          size="lg"
                          withArrow
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Button>
                      ) : (
                        <>
                          <Link
                            href={link.href}
                            className="relative block px-4 py-2 text-3xl font-bold text-gray-800 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full sm:text-4xl"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 