"use client";
import Footer from "@/components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl w-full mx-auto bg-gray-200 rounded-2xl shadow-md p-8 md:p-12 flex flex-col gap-6 print:shadow-none print:bg-white print:dark:bg-white">
          
          {/* Top row with Print Button */}
          <div className="flex justify-end print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center px-4 py-2 text-black text-sm rounded-lg hover:text-blue-700 transition"
            >
              {/* Font Awesome Download Icon */}
              <FontAwesomeIcon icon={faDownload} className="mr-2 fa-dark" />
              Download
            </button>
          </div>

          {/* Content layout: 3 columns */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 space-y-4 print:text-black">
              <div>
                <h2 className="text-sm font-semibold text-neutral-500 uppercase">Contact</h2>
                <p className="text-neutral-700 dark:text-neutral-300">you@example.com</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-neutral-500 uppercase">Links</h2>
                <ul className="text-blue-500">
                  <li>
                    <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Center Section */}
            <section className="w-full md:w-2/4 space-y-8 print:text-black">
              <div>
                <h1 className="text-6xl text-[#0A192F]   font-bold">Emefo <br /> Henry</h1>
                <p className="text-black font-inter py-2">
                  Full Stack Developer with a passion for building beautiful and performant digital products.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold border-b border-neutral-300 dark:border-neutral-600 pb-2 mb-4">
                  Experience
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Senior Fullstack Developer</h3>
                    <p className="text-sm text-neutral-500">Company Name – 2021 to Present</p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Built user interfaces using React and Next.js. Implemented modern UI/UX principles and optimized performance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Sidebar */}
            <aside className="w-full md:w-1/4 space-y-4 print:text-black">
              <div>
                <h2 className="text-sm font-semibold text-neutral-500 uppercase">Skills</h2>
                <ul className="list-disc ml-4 text-neutral-700 dark:text-neutral-300">
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-neutral-500 uppercase">Tools</h2>
                <p className="text-neutral-700 dark:text-neutral-300">VS Code, Git, Figma</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

     
    </div>
  );
}
