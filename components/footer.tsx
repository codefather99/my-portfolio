"use client";

import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="w-full lg:h-screen h-auto lg:my-0 my-0 py-15 flex flex-col items-center justify-center bg-[#0A192F] px-6 text-center lg:snap-start">
    <div className="w-4/5 max-w-4xl flex flex-row justify-evenly  gap-12">
      {/* Social Icons (Replace with actual icons) */}
      <div className="flex flex-col lg:gap-6 gap-3 mt-4 text-left">
        <h2 className="text-md text-gray-400">SAY HELLO</h2>
        <a href="#contact" className="text-[#64FFDA] hover:text-white font-inter transition-colors duration-300">
          Mail
        </a>
        <a href="https://wa.me/2348077532601" className="text-[#64FFDA] hover:text-white font-inter transition-colors duration-300">
          Whatsapp
        </a>
      
      </div>

      <div className="flex flex-col lg:gap-6 gap-3 mt-8 font-inter text-sm text-left">
      <a href="/work" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          My Work
        </a>
        <a href="/shelf" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          My Shelf
        </a>
        <a href="/resume" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          My Resume
        </a>
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
        
        <a href="#" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          TW
        </a>
        <a href="https://github.com/codefather99" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
          GH
        </a>
        <a href="#" className="text-[#64FFDA] hover:text-white transition-colors duration-300">
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
