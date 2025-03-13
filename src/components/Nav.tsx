'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const BurgerIcon = () => (
  <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const LogoSvg = () => (
  <svg
    className="size-10 lg:size-14"
    viewBox="0 0 7 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.31211 0.00373221L6.92067 0.00146078L6.98545 0.00128365L6.98548 0.493784C6.98521 0.834179 6.98107 1.14153 6.82858 1.45541C6.81424 1.48508 6.79905 1.51432 6.783 1.54311C6.76695 1.5719 6.75007 1.6002 6.73236 1.628C6.71465 1.65581 6.69614 1.68307 6.67684 1.70979C6.65754 1.73651 6.63747 1.76264 6.61665 1.78819C6.59581 1.81373 6.57424 1.83864 6.55195 1.86291C6.52966 1.88719 6.50667 1.9108 6.48299 1.93373C6.45931 1.95667 6.43498 1.9789 6.41001 2.0004C6.38503 2.02191 6.35944 2.04267 6.33325 2.06268C5.89855 2.39953 5.56218 2.39536 5.04521 2.39524L4.34441 2.39498C4.11061 2.39498 3.87781 2.39858 3.65415 2.47585L3.58257 2.50462C3.877 2.21481 4.16398 1.91699 4.45573 1.62439C4.83667 1.24228 5.22142 0.928183 5.29812 0.355912C5.31383 0.23875 5.31228 0.121647 5.31211 0.00373221Z"
      fill="#EC003F"
    />
    <path
      d="M0.00506108 2.39837L0.00314345 1.82189C0.00273044 1.67721 -0.00257963 1.53032 0.0114185 1.3862C0.0402997 1.08883 0.167374 0.784632 0.36559 0.559969C0.652824 0.234399 1.01232 0.0365818 1.44831 0.00836433C1.65797 -0.00867236 1.87747 0.00562056 2.08832 0.00544356L3.3322 0.00522231C3.32871 0.192375 3.32754 0.379543 3.32868 0.566725C3.32912 0.698136 3.33425 0.831775 3.32192 0.962684C3.29112 1.28988 3.14487 1.60092 2.93428 1.85052C2.9261 1.86011 2.9178 1.8696 2.9094 1.87898C2.90099 1.88836 2.89247 1.89764 2.88383 1.90681C2.87521 1.916 2.86647 1.92507 2.85762 1.93403C2.84877 1.94299 2.83981 1.95185 2.83075 1.96061C2.82168 1.96936 2.81251 1.978 2.80324 1.98652C2.79397 1.99506 2.78459 2.00348 2.77511 2.01178C2.76564 2.02008 2.75607 2.02826 2.74639 2.03634C2.73671 2.04441 2.72694 2.05236 2.71708 2.0602C2.70722 2.06804 2.69726 2.07575 2.6872 2.08334C2.67715 2.09094 2.66701 2.09841 2.65678 2.10577C2.64654 2.11312 2.63622 2.12035 2.62582 2.12745C2.61542 2.13455 2.60492 2.14153 2.59434 2.14838C2.58377 2.15522 2.57312 2.16194 2.56238 2.16853C2.55164 2.17513 2.54082 2.18159 2.52993 2.18792C2.51904 2.19425 2.50808 2.20044 2.49704 2.20651C2.48599 2.21258 2.47487 2.21851 2.46368 2.22431C2.4525 2.23011 2.44125 2.23577 2.42994 2.24129C2.41861 2.24682 2.40722 2.25221 2.39577 2.25746C2.38432 2.26271 2.3728 2.26782 2.36123 2.2728C2.34965 2.27777 2.33802 2.28261 2.32633 2.2873C2.31464 2.292 2.30289 2.29655 2.29108 2.30096C2.27927 2.30536 2.26743 2.30963 2.25553 2.31376C2.24362 2.31788 2.23166 2.32186 2.21965 2.32569C2.20766 2.32953 2.19562 2.33322 2.18353 2.33676C2.17144 2.34031 2.1593 2.34371 2.14713 2.34696C2.13495 2.35021 2.12274 2.35331 2.1105 2.35627C2.09826 2.35923 2.08598 2.36204 2.07365 2.36469C2.06134 2.36736 2.049 2.36987 2.03663 2.37223C2.02425 2.37459 2.01185 2.3768 1.99942 2.37887C1.98699 2.38093 1.97454 2.38285 1.96207 2.38462C1.94959 2.38638 1.93709 2.38799 1.92457 2.38944C1.91206 2.39091 1.89954 2.39222 1.88699 2.39338C1.26045 2.41011 0.6312 2.37497 0.00506108 2.39837Z"
      fill="#EC003F"
    />
    <path
      d="M3.67277 5.22373C3.65953 5.05372 3.66751 4.87748 3.66706 4.70686C3.66659 4.53669 3.65819 4.36175 3.6738 4.19227C3.7001 3.90679 3.81732 3.61626 4.00255 3.39716C4.30789 3.03601 4.70631 2.84255 5.17334 2.80356C5.39582 2.78949 5.62322 2.79827 5.84618 2.79869L6.98055 2.8001C6.98634 2.97558 6.98165 3.15285 6.98151 3.32847C6.98142 3.46625 6.9862 3.60685 6.97423 3.74424C6.97234 3.76671 6.96999 3.78912 6.96718 3.81148C6.96435 3.83386 6.96108 3.85616 6.95735 3.87839C6.95362 3.90063 6.94942 3.92278 6.94477 3.94484C6.94012 3.9669 6.93502 3.98885 6.92947 4.0107C6.92392 4.03255 6.91791 4.05428 6.91146 4.07589C6.90501 4.09749 6.89812 4.11895 6.89078 4.14027C6.88345 4.16159 6.87567 4.18275 6.86746 4.20376C6.85926 4.22475 6.85063 4.24557 6.84156 4.26621C6.83249 4.28685 6.823 4.3073 6.81309 4.32756C6.80318 4.3478 6.79286 4.36784 6.78212 4.38766C6.77138 4.40749 6.76024 4.42708 6.74869 4.44644C6.73715 4.46582 6.72521 4.48494 6.71288 4.50381C6.70055 4.52268 6.68783 4.54129 6.67472 4.55964C6.66162 4.57799 6.64815 4.59606 6.6343 4.61385C6.62046 4.63164 6.60625 4.64913 6.59167 4.66634C6.5771 4.68355 6.56218 4.70045 6.54692 4.71704C6.53836 4.7265 6.52967 4.73586 6.52087 4.74511C6.51207 4.75435 6.50315 4.76349 6.49412 4.77252C6.48509 4.78154 6.47595 4.79045 6.46669 4.79924C6.45744 4.80805 6.44808 4.81673 6.43862 4.82529C6.42915 4.83385 6.41958 4.84229 6.40989 4.85062C6.40021 4.85895 6.39044 4.86715 6.38055 4.87522C6.37067 4.88331 6.36069 4.89126 6.35061 4.89909C6.34052 4.90693 6.33034 4.91463 6.32008 4.9222C6.3098 4.92979 6.29943 4.93723 6.28897 4.94455C6.2785 4.95188 6.26796 4.95906 6.25733 4.96612C6.24669 4.97318 6.23596 4.9801 6.22514 4.98688C6.21434 4.99367 6.20344 5.00032 6.19246 5.00684C6.18148 5.01336 6.17042 5.01974 6.15928 5.02599C6.14815 5.03222 6.13694 5.03832 6.12565 5.04428C6.11436 5.05025 6.103 5.05607 6.09156 5.06174C6.08013 5.06742 6.06862 5.07295 6.05705 5.07835C6.04548 5.08374 6.03384 5.08899 6.02213 5.09409C6.01043 5.09918 5.99867 5.10413 5.98685 5.10894C5.97502 5.11375 5.96314 5.11841 5.9512 5.12293C5.93925 5.12744 5.92725 5.1318 5.91519 5.13601C5.90315 5.14022 5.89105 5.14428 5.87889 5.14819C5.86674 5.1521 5.85454 5.15585 5.8423 5.15946C5.83004 5.16307 5.81775 5.16652 5.80542 5.16982C5.79309 5.17312 5.78072 5.17627 5.76831 5.17926C5.7559 5.18225 5.74345 5.18508 5.73097 5.18775C5.71849 5.19044 5.70597 5.19297 5.69344 5.19534C5.68089 5.1977 5.66831 5.1999 5.6557 5.20196C5.64311 5.20402 5.63049 5.20591 5.61784 5.20765C5.60519 5.20939 5.59253 5.21098 5.57984 5.2124C5.56716 5.21383 5.55445 5.21509 5.54173 5.21619C5.52901 5.2173 5.51628 5.21825 5.50354 5.21904C5.49079 5.21983 5.47804 5.22046 5.46529 5.22093C5.24641 5.23662 4.98878 5.22408 4.7662 5.22442C4.40219 5.225 4.03663 5.2327 3.67277 5.22373Z"
      fill="#EC003F"
    />
    <path
      d="M3.31515 5.21652C3.10318 5.23173 2.88744 5.224 2.67494 5.22376L1.661 5.22215C1.19707 5.22047 0.802529 5.10598 0.46951 4.76752C0.197321 4.49092 0.0359226 4.1458 0.00580227 3.75899C-0.00369697 3.63711 0.00130334 3.51248 0.0014066 3.3902L0.00341245 2.81085C0.292343 2.80836 0.582631 2.80409 0.871428 2.81358C1.06783 2.82002 1.24702 2.85725 1.43138 2.92428C1.95037 3.11295 2.21829 3.45057 2.58623 3.8357C2.8305 4.0914 3.07909 4.34287 3.32102 4.60082C3.32058 4.70257 3.33535 5.15585 3.31515 5.21652Z"
      fill="#EC003F"
    />
    <path
      d="M0.0247282 8.04406C0.0192558 8.04058 0.0187102 8.04133 0.0159076 8.03537C0.00145222 8.00465 0.0073669 7.08403 0.0154944 6.98793C0.0197425 6.94089 0.0263359 6.89418 0.0352747 6.84779C0.0442232 6.80141 0.0554728 6.75559 0.0690235 6.71033C0.0738714 6.69342 0.0790197 6.6766 0.0844675 6.65987C0.0899153 6.64313 0.0956531 6.62651 0.101681 6.60998C0.107719 6.59345 0.114042 6.57704 0.12065 6.56073C0.127258 6.54443 0.134156 6.52824 0.141345 6.51218C0.148523 6.49612 0.155987 6.48019 0.163736 6.46438C0.171475 6.44859 0.179494 6.43294 0.187794 6.41742C0.196093 6.4019 0.204663 6.38654 0.213504 6.37132C0.222344 6.35611 0.23145 6.34106 0.240821 6.32617C0.250193 6.31129 0.25982 6.29656 0.269703 6.28201C0.279595 6.26746 0.289743 6.25308 0.300147 6.23889C0.310541 6.2247 0.321186 6.2107 0.332082 6.19687C0.342968 6.18305 0.3541 6.16944 0.365477 6.15601C0.376845 6.14259 0.388448 6.12937 0.400288 6.11635C0.412127 6.10334 0.424193 6.09054 0.436485 6.07795C0.448777 6.06537 0.46129 6.053 0.474025 6.04084C0.486749 6.0287 0.499686 6.01678 0.512833 6.00509C0.751022 5.7891 1.05998 5.64282 1.3806 5.60879C1.5348 5.59242 1.69139 5.59677 1.84624 5.59702L2.46382 5.59767C2.65617 5.59773 2.84593 5.60056 3.03382 5.55181C3.15826 5.51953 3.27037 5.46512 3.38227 5.40334L3.39237 5.40703C3.2513 5.59893 3.07561 5.77752 2.9107 5.94898C2.66651 6.20311 2.41871 6.45366 2.1673 6.70063C1.96653 6.90114 1.75173 7.10305 1.59483 7.34067C1.45854 7.54712 1.3593 7.79625 1.33946 8.044L0.0247282 8.04406Z"
      fill="#EC003F"
    />
    <path
      d="M6.99135 8.04946L5.71072 8.04633C5.48402 8.04628 5.18135 8.06594 4.96515 8.0248C4.70857 7.97596 4.45358 7.863 4.253 7.6943C4.24278 7.68578 4.23267 7.67712 4.22266 7.66834C4.21266 7.65956 4.20277 7.65066 4.19298 7.64163C4.1832 7.63261 4.17353 7.62347 4.16397 7.61421C4.15441 7.60494 4.14496 7.59556 4.13563 7.58606C4.12631 7.57656 4.11711 7.56695 4.10802 7.55723C4.09893 7.5475 4.08997 7.53766 4.08111 7.52771C4.07227 7.51777 4.06356 7.50771 4.05496 7.49755C4.04637 7.48738 4.0379 7.47711 4.02956 7.46673C4.02122 7.45636 4.01301 7.44589 4.00493 7.43531C3.99686 7.42473 3.98891 7.41405 3.98109 7.40328C3.97327 7.39251 3.96559 7.38164 3.95805 7.37068C3.9505 7.35971 3.94309 7.34866 3.93582 7.3375C3.92855 7.32635 3.92141 7.31511 3.91442 7.30379C3.90743 7.29247 3.90058 7.28106 3.89386 7.26956C3.88715 7.25807 3.88059 7.24649 3.87417 7.23483C3.86774 7.22317 3.86146 7.21144 3.85533 7.19963C3.84919 7.18781 3.84321 7.17592 3.83736 7.16397C3.83152 7.152 3.82583 7.13997 3.8203 7.12787C3.81476 7.11577 3.80937 7.10359 3.80413 7.09135C3.79889 7.07912 3.7938 7.06682 3.78887 7.05446C3.78394 7.0421 3.77916 7.02968 3.77453 7.0172C3.76991 7.00471 3.76544 6.99217 3.76112 6.97959C3.7568 6.96699 3.75264 6.95434 3.74864 6.94165C3.74464 6.92896 3.74079 6.91622 3.73711 6.90343C3.73342 6.89064 3.72989 6.8778 3.72653 6.86493C3.72316 6.85205 3.71995 6.83913 3.7169 6.82617C3.71385 6.81322 3.71096 6.80023 3.70824 6.7872C3.70552 6.77417 3.70295 6.76111 3.70056 6.74802C3.69815 6.73492 3.6959 6.7218 3.69383 6.70865C3.69175 6.6955 3.68984 6.68233 3.68809 6.66914C3.68634 6.65595 3.68475 6.64274 3.68333 6.6295C3.6819 6.61626 3.68064 6.60301 3.67955 6.58975C3.67126 6.48722 3.66318 5.62811 3.67642 5.60264C3.67859 5.59846 3.68251 5.59547 3.68557 5.59189C3.92807 5.59174 4.17057 5.59296 4.41306 5.59554C4.69085 5.59835 4.9514 5.65369 5.19666 5.78848C5.4643 5.93558 5.66473 6.14949 5.87714 6.36308C6.03102 6.51673 6.18357 6.6717 6.33477 6.82798C6.5522 7.0513 6.77573 7.2688 6.99402 7.49137C6.99479 7.56237 7.00865 8.02325 6.99135 8.04946Z"
      fill="#EC003F"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to show navbar on mobile after scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Only add scroll listener for mobile views
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    if (mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
              <LogoSvg />
              <span
                className={`ml-2 font-semibold text-gray-900 transition-all duration-700 sm:ml-4 md:ml-6 ${
                  scrolled
                    ? 'text-xl sm:text-2xl md:ml-2 md:text-3xl'
                    : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                }`}
              >
                FRA<span className="text-primary">M.DEV</span>
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
              <LogoSvg />
              <span className="ml-2 text-2xl font-semibold text-gray-900">
                FRA<span className="text-primary">M.DEV</span>
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
                    <LogoSvg />
                    <span className="ml-2 text-2xl font-semibold text-gray-900">
                      FRA<span className="text-primary">M.DEV</span>
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
