import { useRef, useState } from "react";
import "./App.css";
import Cntct from "./components/contact";
import Projets from "./components/projets";
import Skills from "./components/Skills";
import About from "./components/About";
import hero from "./assets/hero.jpg";
import cv from "./assets/cv.pdf";
import logo from "./assets/logo.png";
import lnkdn from "./assets/lnkdn.png";
import githb from "./assets/git.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const linkedin = "https://www.linkedin.com/in/meriem-mhd/";
  const git = "https://github.com/meriemmhd";

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Tableau des sections typé pour TypeScript
  const sections: [string, React.RefObject<HTMLDivElement>][] = [
    ["About", aboutRef],
    ["Skills", skillsRef],
    ["Projects", projectsRef],
    ["Contact", contactRef],
  ];

  return (
    <div className="w-screen min-h-screen bg-[#0d1a2d] text-[#f3efe7]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-10 py-4 bg-[#0d1a2d] shadow-md border-b border-[#2a2f36]">
        <h1 className="text-2xl font-bold text-[#48ba9d]">Mon Portfolio</h1>

        <div className="w-10 h-10 overflow-hidden border border-[#48ba9d] rounded-full">
          <img src={logo} alt="avatar" className="w-full h-full object-cover" />
        </div>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex gap-6 text-lg">
          <button
            className="text-[#48ba9d] font-semibold hover:text-[#e8d6a4] transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </button>

          {sections.map(([label, ref]) => (
            <button
              key={label}
              className="hover:text-[#48ba9d] transition"
              onClick={() => scrollToSection(ref)}
            >
              {label}
            </button>
          ))}

          <button
            className="border border-[#48ba9d] px-4 py-1 rounded hover:bg-[#48ba9d] hover:text-[#0d1a2d] transition"
            onClick={() => window.open(cv, "_blank")}
          >
            Cv
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div className="lg:hidden relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa fa-bars text-2xl text-[#48ba9d]"></i>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 flex flex-col gap-4 bg-[#0d1a2d] p-4 rounded shadow-lg w-40 border border-[#2a2f36]">
              <button
                className="text-left hover:text-[#48ba9d]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </button>
              {sections.map(([label, ref]) => (
                <button
                  key={label}
                  className="text-left hover:text-[#48ba9d]"
                  onClick={() => scrollToSection(ref)}
                >
                  {label}
                </button>
              ))}
              <button
                className="text-left hover:text-[#48ba9d]"
                onClick={() => window.open(cv, "_blank")}
              >
                Cv
              </button>
            </div>
          )}
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#48ba9d] ml-2">
          <img src={hero} alt="avatar" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex flex-col lg:flex-row justify-center gap-12 items-center px-0 sm:px-4 lg:px-10 pt-24">
        <div className="max-w-full lg:max-w-xl text-center lg:text-left">
          <p className="text-3xl sm:text-4xl font-bold text-[#e8d6a4]">Meriem Mehdi</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4">
            <span className="text-[#48ba9d]">
              Développeuse <br /> Full-Stack
            </span>
          </h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            Je conçois des applications web modernes et performantes de bout en bout.
            En tant que développeuse full-stack, j’assure des solutions robustes, élégantes
            et optimisées pour une expérience utilisateur haut de gamme.
          </p>
        </div>

        <div className="mt-8 lg:mt-0 flex flex-col items-center">
          <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(212,181,116,0.4)] hover:scale-105 transition duration-300 border border-[#48ba9d]">
            <img
              src={hero}
              alt="portrait"
              className="w-64 sm:w-72 md:w-80 lg:w-[330px] h-auto object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
            <img
              src={lnkdn}
              alt="LinkedIn"
              className="w-10 h-10 cursor-pointer hover:scale-110 transition"
              onClick={() => window.open(linkedin, "_blank")}
            />
            <img
              src={githb}
              alt="GitHub"
              className="w-10 h-10 cursor-pointer hover:scale-110 transition"
              onClick={() => window.open(git, "_blank")}
            />
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <div ref={aboutRef} className="px-0 sm:px-4 lg:px-10 mt-32 scroll-mt-40 flex flex-col items-center text-center">
  <About />
</div>

      {/* SKILLS */}
     <div ref={skillsRef} className="px-0 sm:px-4 lg:px-10 mt-32 scroll-mt-40 flex flex-col items-center text-center">
  <Skills />
</div>

      {/* PROJECTS */}
     <div ref={projectsRef} className="px-0 sm:px-4 lg:px-10 mt-32 scroll-mt-40 flex flex-col items-center text-center">
  <Projets />
</div>

      {/* CONTACT */}
      <div ref={contactRef} className="px-0 sm:px-4 lg:px-10 mt-32 scroll-mt-40 mb-20">
        <Cntct />
      </div>
    </div>
  );
}

export default App;
