"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer" className="w-full lg:h-screen h-auto lg:my-0 my-0 py-15 flex flex-col items-center justify-center bg-[#0A192F] px-6 text-center lg:snap-start">
    <div className="w-4/5 max-w-4xl flex flex-row justify-evenly   gap-12">
      {/* Social Icons (Replace with actual icons) */}
      <div className="flex flex-col text-left">
          <h2 className="text-md text-gray-400">SAY HELLO</h2>
          <div className=" flex flex-col lg:gap-5 font-inter text-sm mt-2  gap-3 ">
          <a href="#contact" className="text-[#64FFDA] hover:text-white  transition-colors duration-300">
            Mail
          </a>
          <a href="https://wa.me/2348077532601" className="text-[#64FFDA] hover:text-white  transition-colors duration-300">
            Whatsapp
          </a>
          <a href="https://wa.me/2348077532601" className="text-[#64FFDA] hover:text-white  transition-colors duration-300">
            Telegram
          </a>
          </div>
        </div>

      <div className="flex flex-col lg:gap-6 gap-3 mt-8 font-inter text-sm text-left">
      <Link href="/work" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          My Work
        </Link>
        <Link href="/shelf" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          My Shelf
        </Link>
        <Link href="/resume" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          My Resume
        </Link>
      </div>
</div>

{/* Divider Line */}
<div className="w-4/5 max-w-4xl border-t border-[#64FFDA] lg:my-6 mt-10"></div>

<div className="mt-5 flex flex-row justify-between w-4/5 max-w-4xl">
 {/* Footer Text */}
 <div>
 <p className="text-[#64FFDA] lg:text-md text-sm">&copy; Emefo Henry { new Date().getFullYear()} </p>
 </div>
 

 <div className="flex flex-row lg:gap-6 gap-3 text-sm lg:text-md">
        
        <a href="https://x.com/emirofanambra" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          X
        </a>
        <a href="https://github.com/codefather99" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          GH
        </a>
        <a href="https://www.linkedin.com/in/emefo-henry-4202a0349/" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          LN
        </a>
        <a href="https:www.youtube.com/@EmefoHenry" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          YT
        </a>
      </div>
</div>
</section>
  );
}
