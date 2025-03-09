"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export function BackgroundCircles() {
  return (
    <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] overflow-visible">
      <motion.div className="absolute h-[480px] w-[480px] -translate-y-1/4 translate-x-1/4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute inset-0 rounded-full",
              "border-2 bg-gradient-to-br to-transparent",
              `border-primary/[${0.6 - i * 0.2}]`,
              "from-primary/30",
            )}
            animate={{
              rotate: 360,
              scale: [1, 1.05 + i * 0.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,var(--primary-color)/10%,transparent_70%)] mix-blend-screen" />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-color)/30%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-color)/15%,transparent)] blur-[80px]" />
      </div>
    </div>
  );
}
