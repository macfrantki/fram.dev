import { motion } from 'framer-motion';
// import { BackgroundCircles } from '@/components/BackgroundCircles';
import Image from 'next/image';
import Button from '@/components/Button';

// Prefix with underscore since it's not used directly (but used in the commit we're rebasing)
const _ArrowIcon = () => (
  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// Stats data that can be reused in both mobile and desktop views
const statsData = [
  { value: '10+', label: 'Lat doświadczenia' },
  { value: '50+', label: 'Ukończonych projektów' },
  { value: '100%', label: 'Zadowolonych klientów' },
];

// Stats component that can be used in both mobile and desktop views
const Stats = ({ className = '' }) => (
  <div className={`flex justify-center ${className}`}>
    <div className="flex space-x-8 sm:space-x-12 md:space-x-16">
      {statsData.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
          <p className="text-sm text-gray-600 md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Hero() {
  return (
    <div className="container relative mx-auto max-w-6xl px-4">
      {/* Mobile version - Only visible on small screens */}
      <div className="relative flex min-h-[100vh] flex-col sm:hidden">
        {/* <BackgroundCircles /> */}

        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[280px]"
          >
            <Image
              src="/icon.png"
              alt="fraMa Logo"
              width={200}
              height={200}
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <h1 className="text-5xl font-bold leading-tight">
              <span className="block">Przekształć</span>
              <span className="block text-primary">Przyszłość</span>
              <span className="block">Cyfrową</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mx-auto mt-6 max-w-md text-lg text-gray-600"
            >
              Tworzymy nowoczesne strony internetowe i aplikacje, które pomogą Twojej firmie
              rozwinąć skrzydła w cyfrowym świecie.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-10 w-full"
          >
            <Button variant="primary" size="lg" fullWidth withArrow>
              Rozpocznij Transformację
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mb-20 mt-12" // Increased bottom margin for more space
        >
          <Stats />
        </motion.div>
      </div>

      {/* Desktop version - Hidden on small screens */}
      <motion.div className="container relative mx-auto flex hidden min-h-screen flex-col justify-center px-4 pt-20 sm:block">
        {/* <BackgroundCircles /> */}
        <motion.div className="mt-20 w-full">
          {' '}
          {/* Added margin top to prevent navbar overlap */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 0.2 }}
            className="text-left text-5xl font-bold leading-tight md:text-6xl lg:text-8xl xl:text-[10rem]"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 1 }}
            className="mt-8 flex justify-start md:mt-12"
          >
            <Button variant="primary" size="lg" withArrow roundedBottom>
              Rozpocznij Transformację
            </Button>
          </motion.div>
          {/* Stats section for desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 1.2 }}
            className="mt-16 md:mt-20"
          >
            <Stats className="justify-start" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
