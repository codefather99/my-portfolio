// components/AnimatedLogo.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import useSectionObserver from "@/hooks/useSectionObserver";
import Image from "next/image";

// Type for logo mapping
interface AnimatedLogoProps {
  logoMap: Record<string, string>;
}

const sectionIds = ["home", "about", "work", "portfolio", "contact", "footer"];

const AnimatedLogo = ({ logoMap }: AnimatedLogoProps) => {
  const activeSection = useSectionObserver(sectionIds);

  return (
    <div className="fixed top-4 left-4 z-50 w-10 h-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={logoMap[activeSection as keyof typeof logoMap]}
            alt={`${activeSection} icon`}
            width={40}
            height={40}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLogo;
