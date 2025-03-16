'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Logo from '@/components/icons/Logo';
import { companyName } from '@/config/navigation';
import { fadeIn, fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';
import { useInViewAnimation } from '@/hooks/useAnimation';

export default function Hero() {
  const { controls: mobileControls, ref: mobileRef } = useInViewAnimation();
  const { controls: desktopControls, ref: desktopRef } = useInViewAnimation();

  return (
    <>
      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Mobile Logo and Company Name - hidden on desktop */}
        <motion.div
          ref={mobileRef}
          className="mt-6 flex flex-col items-center justify-center lg:hidden"
          variants={fadeInUp}
          initial="hidden"
          animate={mobileControls}
        >
          <Logo className="size-24 sm:size-32" />
          <motion.h2 variants={fadeIn} className="mt-4 text-center text-4xl font-bold sm:text-5xl">
            {companyName.first}
            <span className="text-primary">{companyName.last}</span>
          </motion.h2>
        </motion.div>

        <motion.div className="container relative z-10 mx-auto mt-10 flex h-fit flex-col px-4 pb-8 sm:block lg:mt-0 lg:min-h-screen lg:justify-center lg:pb-0 lg:pt-20">
          <motion.div className="w-full lg:mt-20">
            {' '}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate={desktopControls}
              ref={desktopRef}
              className="pointer-events-none text-center text-4xl font-bold leading-none tracking-tight sm:text-left md:text-5xl lg:text-7xl xl:text-8xl"
            >
              <motion.span variants={slideInLeft} className="block">
                CODE THAT WORKS
              </motion.span>
              <motion.span variants={slideInRight} className="block text-primary">
                DESIGN THAT SELLS
              </motion.span>
              <motion.span variants={slideInLeft} className="block">
                RESULTS THAT LAST
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={desktopControls}
              className="mt-6 text-center text-base text-gray-900 sm:text-left md:max-w-2xl md:text-lg lg:text-xl"
            >
              Custom-built websites and software solutions that convert visitors into customers. No
              templates. Just powerful digital experiences that drive business growth.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={desktopControls}
              className="mt-8 flex justify-center gap-4 md:mt-12 md:justify-start"
            >
              <Button
                variant="primary"
                className="hidden lg:flex"
                size="lg"
                withArrow
                roundedBottom
              >
                GET FREE CONSULTATION
              </Button>
              <Button variant="secondary" className="hidden lg:flex" size="lg" roundedBottom>
                VIEW OUR WORK
              </Button>
              <div className="flex flex-col gap-4 lg:hidden">
                <Button
                  variant="primary"
                  className="mt-6 block lg:hidden"
                  size="md"
                  withArrow
                  roundedBottom
                >
                  GET FREE CONSULTATION
                </Button>
                <Button variant="secondary" className="block lg:hidden" size="md" roundedBottom>
                  VIEW OUR WORK
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
