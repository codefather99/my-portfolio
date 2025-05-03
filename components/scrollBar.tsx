import { motion, AnimatePresence } from "framer-motion";

interface ScrollBarProps {
  activeSection: number;
}

const sections = ["hero", "about", "work", "portfolio", "contact", "footer"];

const sectionImages: Record<number, string> = {
  0: "/images/emefo-logo4.png",
  1: "/images/emefo-logo1.png",
  2: "/images/emefo-logo7.png",
  3: "/images/emefo-logo1.png",
  4: "/images/emefo-logo1.png",
  5: "/images/emefo-logo4.png",
};

export default function ScrollBar({ activeSection }: ScrollBarProps) {
  const isSpecialSectionActive = activeSection === 2 || activeSection === 5; // Work & Footer

  return (
    <>
      {/* Top-left image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeSection}
          src={sectionImages[activeSection]}
          alt={`Image for ${sections[activeSection]}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="lg:fixed relative top-1 left-10  w-20 h-20 object-contain z-[100]
          "
        />
      </AnimatePresence>

      {/* Scrollbar dots */}
      <div className="fixed bottom-10 right-10 flex z-[100] flex-col gap-2">
        {sections.map((id, i) => {
          const isHighlighted = i === activeSection;
          const activeColor = isSpecialSectionActive ? "#64FFDA" : isHighlighted ? "#0A192F" : "transparent";
          const borderColor = isSpecialSectionActive ? "#64FFDA" : "#0A192F";

          return (
            <motion.div
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              initial={{ rotate: 45, scale: 0.8 }}
              animate={{
                rotate: isHighlighted ? 180 : 45,
                scale: isHighlighted ? 1.2 : 0.8,
                backgroundColor: activeColor,
                borderColor: borderColor,
              }}
              transition={{ duration: 0.5 }}
              className="w-2 h-2  border border-[1px] cursor-pointer"
              style={{
                transform: `rotate(${isHighlighted ? 180 : 45}deg)`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}