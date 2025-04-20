"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  scrolled: boolean;
  isHome: boolean;
};

export default function Navbar({ scrolled, isHome }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [replacedIndex, setReplacedIndex] = useState<number | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const menuItems = [
    { label: "My Work", path: "/work" },
    { label: "My Shelf", path: "/shelf" },
    { label: "My Resume", path: "/resume" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Sync the replacedIndex with pathname changes
  useEffect(() => {
    if (pathname === "/") {
      setReplacedIndex(null); // Reset to null on Home page
    } else {
      const currentPageIndex = menuItems.findIndex(item => item.path === pathname);
      setReplacedIndex(currentPageIndex); // Update index for other pages
    }
  }, [pathname]);

  return (
    <nav
      className={`${
        isHome ? "fixed" : "relative"
      } top-0 left-0 w-full p-10 flex justify-between items-center transition-all duration-300 z-50 bg-transparent ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          src={ "/images/emefo-logo4.png" }
          alt="Logo"
          width={80}
          height={80}
          className={`transition-all duration-300 ${isHome ? "opacity-0" : "opacity-100"}`}
         
        />
      </Link>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
        className="relative w-10 h-10 z-[200]"
      >
        <span
          className={`block w-full h-0.5 bg-black transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        />
        <span
          className={`block w-full h-0.5 bg-black transition-all duration-300 my-1 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-full h-0.5 bg-black transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-2 right-4 bg-white shadow-lg p-20 pl-10 pr-30 rounded-sm flex flex-col items-left gap-4"
          >
            {menuItems.map(({ label, path }, index) => {
              const isReplaced = replacedIndex === index;
              const href = isReplaced ? "/" : path;
              const displayLabel = isReplaced ? "Home" : label;

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    className="text-sm text-[#0A192F] hover:text-[#64FFDA] transition"
                    onClick={(e) => {
                      e.preventDefault();
                      setReplacedIndex(index);
                      setMenuOpen(false);

                      if (isReplaced) {
                        if (pathname !== "/") {
                          router.push("/"); // Navigate to Home
                        }
                      } else {
                        router.push(path); // Navigate to respective path
                      }
                    }}
                  >
                    {displayLabel}
                  </Link>
                </motion.div>
              );
            })}

            {/* REACH ME Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-2 border-gray-700 pt-4"
            >
              <h4 className="text-sm font-inter font-regular text-gray-400 mb-2">
                REACH ME
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:emefohenry02@gmail.com"
                  className="text-sm text-[#0A192F] hover:text-[#64FFDA] hover:underline transition"
                >
                  hello@emefo.dev
                </a>
                <a
                  href="https://wa.me/2348077532601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0A192F] hover:text-[#64FFDA] transition"
                >
                  w.me/mremefo
                </a>
              </div>
              <div className="flex flex-row justify-between gap-2 mt-10">
                <a href="https://twitter.com/yourhandle" target="_blank" className="text-xs hover:text-[#64FFDA]">
                  TW
                </a>
                <a href="https://github.com/codefather99" target="_blank" className="text-xs hover:text-[#64FFDA]">
                  GH
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-xs hover:text-[#64FFDA]">
                  LN
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
