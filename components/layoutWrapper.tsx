"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll on homepage only (optional — remove if not needed)
  useEffect(() => {
    document.body.style.overflow = isHome ? "hidden" : "auto";
  }, [isHome]);

  return (
    <>
      <Navbar scrolled={scrolled} isHome={isHome} />
      {children}
      {pathname !== "/resume" && pathname !== "/" && <Footer />}
    </>
  );
}
