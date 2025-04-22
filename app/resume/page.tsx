"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl w-full mx-auto bg-[#F4FDFC]  bg-opacity-10 rounded-2xl shadow-md p-8 md:p-12 flex flex-col gap-6 print:shadow-none print:bg-white print:dark:bg-white">
          
          {/* Top row with Print Button */}
          <div className="flex justify-end print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center px-4 py-2 font-inter font-semibold text-black text-sm rounded-lg hover:text-[#00BFA5] transition"
            >
              {/* Font Awesome Download Icon */}
              <FontAwesomeIcon icon={faDownload} className="mr-2 fa-dark hover:text-[#00BFA5]" />
              Download
            </button>
          </div>

          {/* Content layout: 3 columns */}
          <div className="flex flex-col md:flex-row gap-6 ">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 space-y-4 print:text-black order-2 md:order-1">
              <div>
                <h2 className="text-sm font-semibold text-[#00BFA5] ">emefo.dev</h2>
                <p className="font-inter text-sm">Lagos, Nigeria</p>
                <h2 className=" font-semibold text-sm text-[#00BFA5]">hello@emefo.dev</h2>
              </div>
              <div>
                <h2 className="font-bold text-[#00BFA5] uppercase">Core Technologies:</h2>
                <ul className="list-disc text-sm text-gray-600 ml-4 font-inter">
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Typescript</li>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>GraphQL</li>
                  <li>CSS-in-JS</li>

                </ul>

                <h2 className="font-bold text-[#00BFA5] uppercase mt-5">Others:</h2>
                <ul className="list-disc text-sm text-gray-600 ml-4 font-inter">
                  <li>Software Testing</li>
                  <li>Design Systems</li>
                  <li>Performance Optimization</li>
                  <li>End-to-End (E2E) Testing</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Search Engine Optimization</li>
                  <li>Progressive Enhancement</li>
                  <li>Accessibility Auditing</li>
                  <li>Build Automation</li>
                  <li>Responsive Web Design</li>
                  <li>UX Design/Strategy</li>
                  <li>API Design and Management</li>
                  <li>Code Splitting & Lazy Loading</li>
                  <li>State Management</li>
                

                </ul>
              </div>
            </aside>

            {/* Center Section */}
            <section className="w-full md:w-2/4 space-y-8 print:text-black order-1 md:order-2">
              <div>
                <h1 className="text-6xl text-[#00BFA5]   font-bold">Emefo <br /> Henry</h1>
                <h2 className="text-black text-2xl font-inter py-2 lg:py-0 pt-4 lg:pt-2">
                  Expert Fullstack Developer.
                </h2>
                <br />
                <p className="text-gray-500 font-inter py-0 lg:py-0">
                An innovative engineer dedicated to crafting high-performance, accessible web experiences. I design scalable, and user-centric products, mastering any tech stack along the way.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold border-b border-neutral-300 dark:border-neutral-600 pb-2 mb-4">
                  Experience
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#00BFA5] ">Simply Asoebi</h3>
                    <p className="text-sm text-black font-inter">Senior Fullstack Developer – 2024 to Present</p>
                    <p className="text-neutral-500 font-inter pb-2">
                    Shaping the future of Asoebi and Wedding planning – building and advocating for inclusive and thoughtful experiences for over three million couples in London and across the globe.</p>
                    
                    <ul className="list-disc text-m text-gray-600 ml-4 font-inter" >
                      <li className="py-2">
                      Spearheading the redesign and development of a modern, responsive e-commerce platform tailored for wedding fashion and retail services, improving load times and user engagement by 40%.
                      </li>
                      <li className="py-2">
                      Implemented scalable front-end architecture using Next.js and Tailwind CSS, ensuring optimal performance and accessibility across devices.
                      </li>
                      <li className="py-2">
                      Integrated secure payment gateways, inventory management, and customer experience features that enhanced shopping convenience and trust.
                      </li>
                      <li className="py-2">
                      Collaborating closely with the design and marketing teams to maintain visual consistency and SEO best practices across all digital touchpoints.
                      </li>
                      <li className="py-2">
                      Building a seamless admin interface for vendor onboarding and product management, streamlining operations for over 1,000 active vendors.
                      </li>
                      <li className="py-2">
                      Engineering a dynamic vendor dashboard enabling real-time order tracking, analytics, and inventory updates, boosting merchant satisfaction and platform trust.
                      </li>
                      <li className="py-2">
                      Developing mobile-first interfaces with accessibility and progressive enhancement in mind, ensuring compliance with WCAG standards.
                      </li>
                      <li className="py-2">
                      Working closely with UI/UX designers to translate Figma prototypes into pixel-perfect interfaces with smooth animations and transitions via Framer Motion.
                      </li>
                      <li className="py-2">
                      Implemented API integrations for third-party logistics and SMS/WhatsApp order notifications to streamline post-purchase communication.
                      </li>
                      <li className="py-2">
                      Led the transition from a monolithic structure to a modular component system, improving maintainability and speeding up development cycles.
                      </li>           
                    </ul>

                    <h3 className="text-lg font-semibold text-[#00BFA5] mt-5 ">Pincher</h3>
                    <p className="text-sm text-black font-inter">Principal Fullstack Engineer – 2022 to 2024</p>
                    <p className="text-neutral-500 font-inter pb-2">
                    I designed and developed the frontend infrastructure, design and functionality for Pincher&apos;s new JavaScript-centric app powered by React. </p>
                    <ul className="list-disc text-m text-gray-600 ml-4 font-inter" >
                      <li className="py-2">
                      Improved shopper satisfaction with real-time cart updates, personalized product suggestions, and one-click checkout — reducing drop-offs and boosting conversion rates. </li>

                      <li className="py-2">
                      Reduced page load times by over 50% through image optimization, code-splitting, and efficient data fetching strategies — delivering a smooth and frustration-free shopping journey.
                        </li> 
                        <li className="py-2">
                        Designed and built a fully responsive, scalable eCommerce platform from the ground up, focusing on performance, mobile UX, and conversion optimization.
                        </li> 
                        <li className="py-2">
                        Implemented dynamic product pages, real-time cart updates, and a secure checkout system using modern full-stack technologies.
                        </li> 
                        <li className="py-2">
                        Integrated secure payment gateways (e.g., Stripe or Paystack) to support seamless and trustworthy transactions.
                        </li> 
                        <li className="py-2">
                        Architected a modular component library for consistent UI patterns and faster page load times using Tailwind CSS and reusable React components.
                        </li> 
                        <li className="py-2">
                        Developed custom filtering, sorting, and search functionalities to enhance product discoverability and user engagement.
                        </li> 
                        <li className="py-2">
                        Set up a robust CMS-like product management system enabling admins to upload, update, and remove products effortlessly.
                        </li> 
                        <li className="py-2">
                        Leveraged server-side rendering and image optimization to improve SEO and load speeds for product-heavy pages.
                        </li> 
                        <li className="py-2">
                        Added real-time inventory syncing and alerts to maintain stock accuracy and improve user trust during peak shopping periods.
                        </li>
                        <li className="py-2">
                        Enhanced site performance with lazy loading, code-splitting, and build optimizations — ensuring sub-2s load times on core pages.
                        </li>

                      </ul>


                      <h3 className="text-lg font-semibold text-[#00BFA5] mt-5 ">Medix Frontiers</h3>
                    <p className="text-sm text-black font-inter">Lead Web Developer – 2021 to 2022</p>
                    <p className="text-neutral-500 font-inter pb-2">
                    I Engineered the frontend design, infrastructure, and interactive features for Medix Frontiers, a platform tailored for medical students yearning for seamless user experience.
                     </p>
                      <ul className="list-disc text-m text-gray-600 ml-4 font-inter" >
                      <li className="py-2">
                      Implemented a user-friendly interface that streamlined access to medical resources, event updates, and group discussions, fostering better engagement within the student community.
                      </li>
                      <li className="py-2">
                      Optimized the website for responsive design, ensuring accessibility and usability across all devices, including desktops, tablets, and smartphones.
                        </li> 
                        <li className="py-2">
                        Improved website load time by 60%, using performance optimization techniques like image compression, lazy loading, and code splitting to enhance user experience.
                        </li> 
                        <li className="py-2">
                        Engineered seamless registration and login flows, enhancing user experience and streamlining onboarding for new members.
                        </li> 
                        <li className="py-2">
                        Established a secure platform with robust data protection measures, prioritizing user privacy and compliance with medical data standards.
                        </li> 
                        <li className="py-2">
                        Led the design and integration of intuitive content management tools, empowering administrators to easily update resources and announcements.
                        </li> 
                        <li className="py-2">
                        Spearheaded the implementation of a mobile-first design, ensuring the platform is accessible and fully functional across all devices.
                        </li> 
                        <li className="py-2">
                        Collaborated with stakeholders to continuously improve user experience based on feedback, making iterative enhancements to the platform’s features and interface.
                        </li> 
                        
                      </ul>

                     
                  </div>
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-[#00BFA5] mt-10">Projects</h1>
                  <p className="font-inter text-m text-gray-600 pt-2">
                  Links to some of my work can be found on <a  className="text-[#00BFA5] font-semibold" href="/work">emefo.dev/work</a> and details can be provided upon request via a scheduled demo call.
                  </p>
                </div>
              </div>


            </section>

            {/* Right Sidebar */}
            <aside className="w-full md:w-1/4 space-y-4 print:text-black order-3 md:order-3">
              <div>
                <h2 className="font-bold text-[#00BFA5] uppercase mt-5">Tools</h2>
                <ul className="list-disc text-sm text-gray-600 ml-4 font-inter">
                  <li>VS Code</li>
                  <li>Git</li>
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                </ul>
              </div>
             
            </aside>
          </div>
        </div>
      </main>

     
    </div>
  );
}
