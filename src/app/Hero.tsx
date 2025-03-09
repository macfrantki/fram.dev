import { motion } from "framer-motion";
import { BackgroundCircles } from "./components/BackgroundCircles";

const ArrowIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export default function Hero() {
  return (
    <div className="container relative mx-auto max-w-6xl">
      {" "}
      <motion.div className="container relative mx-auto flex min-h-screen flex-col items-start justify-center px-4">
        <BackgroundCircles />
        <motion.div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="text-6xl font-bold leading-tight md:text-8xl lg:text-[10rem]"
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.4 }}
              className="block"
            >
              Przekształć
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
              className="block text-primary"
            >
              Przyszłość
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.8 }}
              className="block"
            >
              Cyfrową
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 1 }}
            className="mt-12 md:mt-16"
          >
            <button className="group relative -mt-10 flex items-center overflow-hidden rounded-b-lg border-2 border-primary bg-transparent px-8 py-4 text-xl font-semibold text-primary transition-all hover:text-white">
              <span className="relative z-10">Rozpocznij Transformację</span>
              <div className="absolute inset-0 translate-y-full transform bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
              <ArrowIcon />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
