"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SvgPattern from "@/components/svgPattern";
import ScrollBar from "@/components/scrollBar";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

const sections = ["/", "about", "work", "portfolio", "contact", "footer"];


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [replacedIndex, setReplacedIndex] = useState<number | null>(null);

  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setReplacedIndex(null); // Always reset when back on home
    }
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const sectionIndex = sections.findIndex((id) => id === sectionId);
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const menuItems = [
    { label: "My Work", path: "/work" },
    { label: "My Shelf", path: "/portfolio" },
    { label: "My Resume", path: "/resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // or whatever threshold you prefer
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
  
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (res.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="relative w-full h-screen">
     
      <ScrollBar activeSection={activeSection} />
      

     
      {/* Scrollable Wrapper */}
      <main className=" h-screen overflow-y-scroll scroll-quick scroll-smooth snap-y snap-mandatory scrollbar-hide overscroll-none relative z-10">
        {/* Landing Page */}
        
        <section id="/" className="w-full h-screen flex relative snap-start">
          <div className="w-[67%] h-full bg-[#0A192F] flex items-center justify-center">
          <Image
                  src="/svg/shape40.png"
                  alt="pattern"
                  width={40}
                  height={80}
                  className="absolute left-190 bottom-30  w-auto h-auto opacity-80"
                />

                <Image
                  src="/svg/svg5000.png"
                  alt="pattern2"
                  width={50}
                  height={50}
                  className="absolute left-170 bottom-70  w-auto h-auto opacity-80"
                />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-3/4 flex flex-col text-left"
            >
              <h1 className="text-6xl font-space-grotesk font-bold text-[#64FFDA]">
                Fullstack <br /> Developer
              </h1>
            
              <h2 className="text-2xl font-inter text-gray-200 mt-2">
                I build websites for amazing people.
              </h2>
              <div className="flex w-3/4 text-xs font-inter space-x-4 mt-20 text-[#64FFDA]">
                <p className="pr-3">
                Well-versed in seamless UI engineering, design systems & progressive enhancement.
                </p>
                <br />
                <p>
                Recognized expertise building impactful products for clients across several countries.
                </p>
                
              </div>
            </motion.div>
          </div>
          <div className="w-1 h-full bg-[#64FFDA]"></div>
          <div className="w-[33%] h-full bg-[#64FFDA] relative">
          <SvgPattern className="absolute inset-0 w-full h-full z-[1] opacity-50 pointer-events-none" />
          <Image
            src="/svg/shape20.png"
            alt=""
            width={70}
            height={70}
            className="absolute right-60 bottom-40 opacity-100 rotate-60"
          />

          <Image
            src="/svg/shape20.png"
            alt=""
            width={70}
            height={70}
            className="absolute right-55 bottom-70 opacity-100 "
          />
            <Image
              src="/profile-picture.png"
              alt="Hero"
              width={700}
              height={700}
              className="absolute left-[-320px] bottom-30 min-w-[600px] w-auto h-auto"
            />
        
          </div>
        
        </section>

        {/* About Section */}
        <section id="about" className="w-full h-screen flex items-center justify-center bg-white snap-start">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-3/4 text-center"
          >
            <div className="relative flex  h-full">
            <Image
            src="/svg/shape30.png"
            alt=""
            width={40}
            height={80}
            className="absolute right-35 bottom-10 opacity-100 "
          />
            
            <Image
            src="/svg/shape20.png"
            alt=""
            width={70}
            height={70}
            className="absolute right-65 bottom-30 opacity-100 "
          />

<Image
            src="/svg/svg80.png"
            alt=""
            width={70}
            height={70}
            className="absolute left-5 top-10 opacity-100 "
          />
            
            <Image
            src="/svg/shape20.png"
            alt=""
            width={70}
            height={70}
            className="absolute left-45 top-30 opacity-100 rotate-30"
          />

              <div className="absolute bottom-0 left-0 max-w-md text-left">
                
              <h2 className="text-5xl font-bold text-[#0A192F]  ">Design</h2>
            <p className="text-sm mt-4 font-inter text-[#0A192F]">
            I’m not your typical designer meticulously adjusting pixels in Illustrator but make no mistake, I design(~_^). 
            You’ll find me deep in stylesheets, obsessing over font pairings and crafting layouts that just feel right.
             I blend aesthetics with functionality, ensuring every experience is seamless, engaging, and, of course, effortlessly stylish. 
            
            </p>
              </div>

              <div className="absolute top-0 right-0 max-w-md text-left">
              <h2 className="text-5xl font-bold font-space-grotesk text-[#0A192F] ">Development</h2>
            <p className="text-sm mt-4 font-inter text-[#0A192F] ">
            When it comes to building JavaScript applications, I bring the right tools to the table—but I’m not bound by them. I craft fast, resilient solutions that scale effortlessly, always keeping performance sharp and scalability in sight. Innovation and efficiency? Non-negotiable. 
            </p>

              
              </div>
            </div>
           
          </motion.div>
        </section>

        {/* Work Experience */}
        <section id="work" className="w-full h-screen flex  bg-[#0A192F] snap-start">
          <div className="flex h-full ">
            <div className="max-w-[40%] flex flex-col justify-center h-full pl-[7.5rem] py-20 ">
              <h1 className="text-5xl font-bold font-space-grotesk text-[#64FFDA]">Over the <br /> Years,</h1>
              <p className="text-sm mt-4 font-inter text-white max-w-full break-words">
              I’ve designed and developed products for companies and clients worldwide—ranging from sleek marketing sites to complex enterprise solutions—all with a strong focus on speed, elegance, and accessibility in the user experience.<br /> <br />

          Currently, I work at Simply Asoebi as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for couples in London and across the world.
          <br /> <br />
          Before now, I was Principal Frontend Engineer at Pincher, where I built and supervised flexible ecommerce services for multi-channel merchants across several countries.
          <br /><br />
          Prior to Pincher, I was Senior frontend engineering consultant with Medix Frontiers, building JavaScript applications and interfaces for medical orgs and individuals.
          <br /> <br />
          Equipped With over 6 years of experience, including freelancing as a frontend developer—crafting responsive, user-focused web experiences for clients across different industries.        </p>
            </div>
            <div className="w-[60%]">
            <Image
              src="/images/work1.png"
              alt="Hero"
              width={500}
              height={500}
              className="m-auto mt-20"
            />
            </div>
          </div>
        </section>

        {/* Portfolio/Blog */}
        <section id="portfolio" className="w-full h-screen flex justify-center items-center bg-gray-100 snap-start">
  <div className="max-w-6xl h-[80%] w-full flex justify-between items-center px-8 bg-white rounded-md">
    {/* Left Section */}
    <div className="w-1/2 pl-10">
      <h2 className="text-5xl font-bold font-space-grotesk text-[#0A192F]">I build & <br /> design stuff</h2>
      <p className="mt-2 text-[#0A192F] font-inter text-xl">
        Open source projects,<br /> web apps,<br /> and experimentals.
      </p>
      <a
        href="/work"
        className="relative mt-10 inline-block px-15 py-3 border-1 border-[#0A192F] text-[#0A192F] overflow-hidden transition-all duration-300 ease-in-out group"
      >
        <span className="absolute inset-0 w-0 bg-[#0A192F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        <span className="relative z-10 group-hover:text-white">See My Work →</span>
      </a>

    </div>

    {/* Divider Line */}
    <div className="h-full w-[1px] bg-[#0A192F] opacity-50"></div>

    {/* Right Section */}
    <div className="w-1/2 pl-20">
      <h2 className="text-5xl font-bold font-space-grotesk text-[#0A192F]">I write, <br /> sometimes</h2>
      <p className="mt-2 text-[#0A192F] font-inter text-xl">
        About design,<br /> frontend dev,<br /> learning, and life.
      </p>
      <a
        href="/shelf"
        className="relative mt-10 inline-block px-15 py-3 border-1 border-[#0A192F] text-[#0A192F] overflow-hidden transition-all duration-300 ease-in-out group"
      >
        <span className="absolute inset-0 w-0 bg-[#0A192F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        <span className="relative z-10 group-hover:text-white">Read my blog →</span>
      </a>

    </div>
  </div>
</section>


<section id="contact" className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center snap-start">
  <h2 className="text-5xl font-bold text-[#0A192F]">Let's Work Together</h2>
  <p className="mt-4 text-lg text-gray-700 max-w-lg">
  You Have a question, idea, or just want to say hi? I’d love to hear from you.
  </p>

  <form onSubmit={handleSubmit} className="mt-8 w-3/5 max-w-2xl flex flex-col gap-6">
    {/* Name & Email side by side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative w-full">
        <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0A192F]">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="peer w-full bg-transparent border-b-2 border-gray-300 mt-5 py-2 focus:placeholder-transparent focus:outline-none focus:border-[#0A192F]"
        />
      </div>

      <div className="relative w-full">
        <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0A192F]">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="peer w-full bg-transparent border-b-2 border-gray-300 mt-5 py-2 focus:placeholder-transparent focus:outline-none focus:border-[#0A192F]"
        />
      </div>
    </div>

    {/* Message Field */}
    <div className="relative w-full">
      <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0A192F]">
        Message
      </label>
      <textarea
        name="message"
        placeholder="Hey! I think it’s a great time to set up a design system for our products at Company X. When can we chat about it?"
        
        className="peer w-full bg-transparent border-b-2 border-gray-300 min-h-[40px] mt-5 py-2 focus:outline-none focus:placeholder-transparent focus:border-[#0A192F] resize-none"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="relative mx-auto mt-4 inline-block px-25 py-4 border-1 border-[#0A192F] text-[#0A192F] overflow-hidden transition-all duration-300 ease-in-out group"
    >
      <span className="absolute inset-0 w-0 bg-[#0A192F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      <span className="relative z-10 group-hover:text-white">Hit it →</span>
    </button>
  </form>
</section>




        {/* Footer */}
        <section id="footer" className="w-full h-screen flex flex-col items-center justify-center bg-[#0A192F] px-6 text-center snap-start">
      <div className="w-4/5 max-w-4xl flex flex-row justify-evenly  gap-12">
        {/* Social Icons (Replace with actual icons) */}
        <div className="flex flex-col gap-6 mt-4 text-left">
          <h2 className="text-md text-gray-400">SAY HELLO</h2>
          <a href="#contact" className="text-[#64FFDA] hover:text-white font-inter transition-colors duration-300">
            Mail
          </a>
          <a href="https://wa.me/2348077532601" className="text-[#64FFDA] hover:text-white font-inter transition-colors duration-300">
            Whatsapp
          </a>
        
        </div>

        <div className="flex flex-col gap-6 mt-8 font-inter text-left">
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
  <div className="w-4/5 max-w-4xl border-t border-[#64FFDA] my-6"></div>

  <div className="mt-5 flex flex-row justify-between w-4/5 max-w-4xl">
   {/* Footer Text */}
   <div>
   <p className="text-[#64FFDA] text-md">&copy; Emefo Henry { new Date().getFullYear()} </p>
   </div>
   

   <div className="flex flex-row gap-6 ">
          
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

      </main>

      {/* Scroll Indicator (with Shapes as Links) */}
<div className="fixed bottom-10 right-10 flex z-[100] flex-col gap-2">
  {Array.from({ length: 6 }).map((_, i) => (
    <Link
      key={i}
      href={`#${sections[i]}`}  // Link to the respective section
      scroll={true} // Enable smooth scrolling
      passHref
    >
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        animate={{
          rotate: activeSection === i ? 180 : 45, // Rotate when active
          scale: activeSection === i ? 1.2 : 0.8, // Scale when active
          backgroundColor: activeSection === i ? "#0A192F" : "transparent", // Active color
          borderRadius: activeSection === i ? "none" : "50%", // Make shape circular or diamond based on state
          borderColor: activeSection === i ? "#0A192F" : "transparent", // Border color change when active
        }}
        transition={{ duration: 0.5 }}
        className="w-2 h-2 border-1"
        style={{
          transform: `rotate(${activeSection === i ? 180 : 45}deg)`, // Apply diamond rotation on active section
        }}
      />
    </Link>
  ))}
</div>


    </div>
    
  );
}
