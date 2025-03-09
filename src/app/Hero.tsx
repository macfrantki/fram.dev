import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <>
      <div className="container relative mx-auto max-w-6xl px-4">
        <motion.div className="container relative z-10 mx-auto flex h-[80vh] flex-col justify-center px-4 sm:block lg:min-h-screen lg:pt-20">
          <motion.div className="w-full lg:mt-20">
            {' '}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.2 }}
              className="pointer-events-none text-left text-5xl font-bold leading-tight md:text-6xl lg:text-8xl xl:text-[10rem]"
            >
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', duration: 1, delay: 0.4 }}
                className="block"
              >
                Przekształć
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', duration: 1, delay: 0.6 }}
                className="block text-primary"
              >
                Przyszłość
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', duration: 1, delay: 0.8 }}
                className="block"
              >
                Cyfrową
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', duration: 0.8, delay: 1 }}
              className="mt-8 flex justify-start md:mt-12"
            >
              <Button
                variant="primary"
                className="hidden lg:flex"
                size="lg"
                withArrow
                roundedBottom
              >
                Rozpocznij Transformację
              </Button>
              <Button
                variant="primary"
                className="mt-6 block lg:hidden"
                size="md"
                withArrow
                roundedBottom
              >
                Rozpocznij Transformację
              </Button>
            </motion.div>
            {/* Stats section for desktop */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
