"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import SvgPattern from "@/components/svgPattern";
import ScrollBar from "@/components/scrollBar";
// import { usePathname} from "next/navigation";


const sections = ["/", "about", "work", "portfolio", "contact", "footer"];


export default function Home() {
  // const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  // const [replacedIndex, setReplacedIndex] = useState<number | null>(null);

  // const pathname = usePathname();

  // const router = useRouter();

  // useEffect(() => {
  //   if (pathname === "/") {
  //     setReplacedIndex(null); // Always reset when back on home
  //   }
  // }, [pathname]);

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

  // const menuItems = [
  //   { label: "My Work", path: "/work" },
  //   { label: "My Shelf", path: "/portfolio" },
  //   { label: "My Resume", path: "/resume" },
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50); // or whatever threshold you prefer
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
    <div className="relative w-full h-screen bg-[#F4FDFC]">
     
      <ScrollBar  activeSection={activeSection} />
     
      {/* Scrollable Wrapper */}
      <main className=" h-screen overflow-x-hidden overflow-y-scroll leading-loose scroll-quick scroll-smooth lg:snap-y lg:snap-mandatory scrollbar-hide overscroll-none relative z-10">
        {/* Landing Page */}
        
        <section id="/" className="w-full lg:h-screen flex md:flex-row flex-col relative lg:snap-start ">
        
          <div className="lg:w-[67%] w-full lg:h-full  bg-[#0A192F] pb-12 pt-20 flex items-center justify-center">
          {/* <Image
                  src="/svg/shape40.png"
                  alt="pattern"
                  width={40}
                  height={80}
                  className="absolute left-190 bottom-30  w-auto h-auto opacity-80"
                /> */}

                {/* <Image
                  src="/svg/svg5000.png"
                  alt="pattern2"
                  width={50}
                  height={50}
                  className="absolute left-170 bottom-70  w-auto h-auto opacity-80"
                /> */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-3/4 flex flex-col text-left md:mt-10 max-w-screen-xl mx-auto"
            >
              <h1 className="lg:text-6xl text-4xl font-space-grotesk font-bold text-[#64FFDA]">
                Fullstack <br /> Developer<span className="text-[#00BFA5]">.</span>
              </h1>
            
              <h2 className="lg:text-2xl text-xl font-inter text-gray-200 mt-2">
                I build websites for amazing people.
              </h2>
              <div className="flex md:w-3/4 w-full h-auto text-xs 2xl:text-lg font-inter space-x-4 mb-10 mt-20 text-[#64FFDA]">
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
          <div className="hidden lg:block lg:w-1 lg:opacity-100 opacity-0 w-full h-full bg-[#64FFDA]"></div>
          <div className="md:w-[33%]  w-full lg:h-full h-[3/4] bg-[#64FFDA] relative pb-10 ">
          {/* <SvgPattern className="absolute inset-0 w-full h-full z-[1] opacity-50 pointer-events-none" /> */}
          <Image
            src="/svg/shape20.webp"
            alt=""
            width={70}
            height={70}
            className="absolute right-60 bottom-40 opacity-100 rotate-60"
          />

          <Image
            src="/svg/shape20.webp"
            alt=""
            width={70}
            height={70}
            className="absolute right-55 bottom-70 opacity-100 "
          />
          <div className="max-w-screen-xl mx-auto">
            <Image
              src="/profile-picture.png"
              alt="Hero"
              width={700}
              height={700}
              className=" mx-auto lg:left-[-70] lg:w-[100vw]   2xl:bottom-50  relative md:absolute md:left-[-320px] lg:bottom-30 md-bottom-50 md:translate-y-0 md:min-w-[600px] md:w-auto h-auto"
            />
        </div>
          </div>
        
        </section>

        {/* About Section */}
        <section id="about" className="w-full lg:h-screen h-auto  flex lg:flex-row lg:space-evenly flex-col lg:items-center lg:justify-center bg-[#F4FDFC] lg:snap-start">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/4 w-full  lg:text-center max-w-screen-xl mx-auto"
          >
            <div className="relative lg:w-full  flex-col justify-center gap-6 py-15 my-5 lg:my-0 px-15 lg:flex-row lg:gap-0 lg:px-0 lg:py-0 flex  ">
            <Image
            src="/svg/shape30.png"
            alt=""
            width={40}
            height={80}
            className="md:absolute right-35 bottom-10 hidden md:block "
          />
            
            <Image
            src="/svg/shape20.webp"
            alt=""
            width={70}
            height={70}
            className="md:absolute right-65 bottom-30 hidden md:block "
          />

<Image
            src="/svg/svg80.png"
            alt=""
            width={70}
            height={70}
            className="md:absolute left-5 top-10 hidden md:block "
          />
            
            <Image
            src="/svg/shape20.webp"
            alt=""
            width={70}
            height={70}
            className="lg:absolute left-45 top-30 hidden lg:block  rotate-30"
          />

              <div className="lg:absolute relative mb-10 lg:mb-0 lg:bottom-0 lg:left-0 max-w-md text-left">
                
              <h2 className="lg:text-5xl text-4xl font-bold text-[#0A192F]  ">Design</h2>
            <p className="lg:text-sm text-xs w-[90%] lg:w-full  lg:mt-4 mt-2 font-inter text-[#0A192F]">
            I’m not your typical designer meticulously adjusting pixels in Illustrator but make no mistake, I design(~_^). 
            You’ll find me deep in stylesheets, obsessing over font pairings and crafting layouts that just feel right.
             I blend aesthetics with functionality, ensuring every experience is seamless, engaging, and, of course, effortlessly stylish. 
            
            </p>
              </div>

              <div className="lg:absolute relative lg:top-0 lg:right-0 max-w-md text-left">
              <h2 className="lg:text-5xl text-4xl font-bold font-space-grotesk text-[#0A192F] ">Development</h2>
            <p className="lg:text-sm text-xs w-[90%] lg:w-full lg:mt-4 mt-2 font-inter text-[#0A192F] ">
            When it comes to building JavaScript applications, I bring the right tools to the table—but I’m not bound by them. I craft fast, resilient solutions that scale effortlessly, always keeping performance sharp and scalability in sight. Innovation and efficiency? Non-negotiable. 
            </p>

              
              </div>
            </div>
           
          </motion.div>
        </section>

        {/* Work Experience */}
        <section id="work" className="w-full lg:h-screen h-auto flex  bg-[#0A192F] lg:snap-start">
          <div className="flex h-full lg:flex-row flex-col max-w-screen-xl mx-auto ">
            <div className="lg:max-w-[50%] flex flex-col  justify-center pl-12 pr-5 lg:pr-0 h-full lg:pl-[7.5rem] lg:py-20 py-5 ">
              <h1 className="lg:text-5xl text-4xl font-bold font-space-grotesk text-[#64FFDA]">Over the <br /> Years,</h1>
              <p className="lg:text-sm text-xs flex-wrap pr-6 lg:pr-0 mt-4 font-inter text-white max-w-full break-words z-[5000]">
              I’ve designed and developed products for companies and clients worldwide—ranging from sleek marketing sites to complex enterprise solutions—all with a strong focus on speed, elegance, and accessibility in the user experience.<br /> <br />

          Currently, I work at Simply Asoebi as a Senior Fullstack Engineer crafting thoughtful and inclusive experiences that adhere to web standards for couples in London and across the world.
          <br /> <br />
          Before now, I was Principal Fullstack Engineer at Pincher, where I built and supervised flexible ecommerce services for multi-channel merchants across several countries.
          <br /><br />
          Prior to Pincher, I was Senior fullstack engineering consultant with Medix Frontiers, building JavaScript applications and interfaces for medical orgs and individuals.
          <br /> <br />
          Equipped With over 6 years of experience, including freelancing as a frontend developer—crafting responsive, user-focused web experiences for clients across different industries.        </p>
            </div>
            <div className="lg:w-[60%]">
            <Image
              src="/images/work1.webp"
              alt="Hero"
              width={500}
              height={500}
              className="m-auto lg:mt-20 p-10 lg:p-0"
            />
            </div>
          </div>
        </section>

        {/* Portfolio/Blog */}
        <section id="portfolio" className="w-full lg:h-screen h-auto mt-10 flex justify-center items-center  bg-[#F4FDFC] lg:snap-start">
  <div className="lg:max-w-6xl lg:h-[80%] lg:w-full flex lg:flex-row flex-col lg:justify-between items-center  px-8 bg-white rounded-md ">
    {/* Left Section */}
    <div className="lg:w-1/2 lg:pl-10 pr-20 lg:pr-0 py-10 lg:py-0">
      <h2 className="lg:text-5xl text-3xl font-bold font-space-grotesk text-[#0A192F]">I build & <br /> design stuff</h2>
      <p className="mt-2 text-[#0A192F] font-inter lg:text-xl text-sm">
        Open source projects,<br /> web apps,<br /> and experimentals.
      </p>
      <Link
        href="/work"
        className="relative lg:mt-10 mt-3 inline-block lg:px-15 px-5 lg:py-3  border-1 border-[#0A192F] text-[#0A192F] overflow-hidden transition-all duration-300 ease-in-out group"
      >
        <span className="absolute inset-0 w-0 bg-[#0A192F] transition-all duration-300 ease-in-out group-hover:w-full group-active:w-full"></span>
        <span className="relative z-10 group-hover:text-white text-sm lg:text-xl group-active:text-white">See My Work →</span>
      </Link>

    </div>

    {/* Divider Line */}
    <div className="hidden lg:block h-full w-[1px] bg-[#0A192F] opacity-50"></div>

    {/* Right Section */}
    <div className="lg:w-1/2  pr-20 lg:pr-0 lg:pl-20 pb-10 lg:pb-0">
      <h2 className="lg:text-5xl text-3xl font-bold font-space-grotesk text-[#0A192F]">I write, <br /> sometimes</h2>
      <p className="mt-2 text-[#0A192F] font-inter lg:text-xl text-sm">
        About design,<br /> fullstack dev,<br /> learning and life.
      </p>
      <Link
        href="/shelf"
        className="relative lg:mt-10 mt-3 inline-block lg:px-15 px-5 lg:py-3  border-1 border-[#0A192F] text-[#0A192F] overflow-hidden transition-all duration-300 ease-in-out group"
      >
        <span className="absolute inset-0 w-0 bg-[#0A192F] transition-all duration-300 ease-in-out group-hover:w-full group-active:w-full"></span>
        <span className="relative z-10 group-hover:text-white text-sm lg:text-xl group-active:text-white">See my shelf →</span>
      </Link>

    </div>
  </div>
</section>


<section id="contact" className="w-full lg:h-screen my-20 lg:my-0 pt-10 lg:pt-0 flex flex-col items-center justify-center bg-[#F4FDFC] px-6 text-center lg:snap-start">
  <h2 className="lg:text-5xl text-3xl font-bold text-[#0A192F]">Let&apos;s Work Together</h2>
  <p className="lg:mt-4 mt-2 lg:text-lg text-sm text-gray-700 lg:max-w-lg px-5">
  You Have a question, idea, or just want to say hi? I&apos;d love to hear from you.
  </p>

  <form onSubmit={handleSubmit} className="mt-8 lg:w-3/5 lg:max-w-2xl flex flex-col gap-6">
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
      className="relative mx-auto mt-4 inline-block px-25 lg:py-4 border-1 border-[#0A192F] text-[#0A192F] overflow-hidden transition-all duration-300 ease-in-out group"
    >
      <span className="absolute inset-0 w-0 bg-[#0A192F] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      <span className="relative z-10 text-sm lg:text-xl group-hover:text-white">Shoot →</span>
    </button>
  </form>
</section>




        {/* Footer */}
        <section id="footer" className="w-full lg:h-screen h-auto my-10 py-15 flex flex-col items-center justify-center bg-[#0A192F] px-6 text-center lg:snap-start">
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
