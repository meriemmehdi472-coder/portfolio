import { useRef, useState } from "react";
import "./App.css";
import Cntct from "./components/contact";
import Projets from "./components/projets";
import Skills from "./components/Skills";
import About from "./components/About";
import hero from "./assets/hero.jpg";
import cv from "./assets/cv.jpg";
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

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="w-screen min-h-screen bg-[#0d1a2d] text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-10 py-4 bg-[#0d1a2d] shadow-lg">
        <h1 className="text-2xl font-bold text-pink-400">Mon Portfolio</h1>

        <div className="w-10 h-10 overflow-hidden border border-fuchsia-400 rounded-full">
          <img src={logo} alt="avatar" className="w-full h-full object-cover" />
        </div>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex gap-6 text-lg">
          <button className="text-teal-300 font-semibold hover:text-pink-400 transition" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
          <button className="hover:text-pink-400 transition" onClick={() => scrollToSection(aboutRef)}>About</button>
          <button className="hover:text-pink-400 transition" onClick={() => scrollToSection(skillsRef)}>Skills</button>
          <button className="hover:text-pink-400 transition" onClick={() => scrollToSection(projectsRef)}>Projects</button>
          <button className="hover:text-pink-400 transition" onClick={() => scrollToSection(contactRef)}>Contact</button>
          <button
            className="border border-purple-400 px-4 py-1 rounded hover:bg-purple-500/20 transition"
            onClick={() => window.open(cv, "_blank")}
          >
            Cv
          </button>
        </nav>

        {/* HAMBURGER MOBILE */}
        <div className="lg:hidden relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa fa-bars text-2xl text-teal-300"></i>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 flex flex-col gap-4 bg-[#0d1a2d] p-4 rounded shadow-lg border border-purple-400 w-40">
              <button className="text-left hover:text-pink-400" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
              <button className="text-left hover:text-pink-400" onClick={() => scrollToSection(aboutRef)}>About</button>
              <button className="text-left hover:text-pink-400" onClick={() => scrollToSection(skillsRef)}>Skills</button>
              <button className="text-left hover:text-pink-400" onClick={() => scrollToSection(projectsRef)}>Projects</button>
              <button className="text-left hover:text-pink-400" onClick={() => scrollToSection(contactRef)}>Contact</button>
              <button className="text-left hover:text-pink-400" onClick={() => window.open(cv, "_blank")}>Cv</button>
            </div>
          )}
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-fuchsia-400 ml-2">
          <img src={hero} alt="avatar" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* HERO SECTION */}
      <main
        className="
        flex flex-col lg:flex-row justify-center gap-12 items-center
        px-0 sm:px-4 lg:px-10
        pt-24
        bg-[#0d1a2d]
      "
      >
        <div className="max-w-full lg:max-w-xl text-center lg:text-left">
          <p className="text-3xl sm:text-4xl font-bold text-pink-400">Meriem Mehdi</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4">
            <span className="text-fuchsia-400">Développeuse</span><br />
            <span className="text-emerald-400">Full-Stack</span>
          </h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            Je crée des applications web modernes, performantes et centrées sur l’expérience utilisateur.
            Passionnée par le développement, j’allie esthétique, performance et innovation.
          </p>
        </div>

        <div className="mt-8 lg:mt-0 flex flex-col items-center">
          <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,0,170,0.4)] hover:scale-105 transition duration-300 border border-pink-400">
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
      <div ref={aboutRef} className="px-0 sm:px-4 lg:px-10 mt-20 sm:mt-32 lg:mt-40 scroll-mt-40">
        <About />
      </div>

      {/* SKILLS */}
      <div ref={skillsRef} className="px-0 sm:px-4 lg:px-10 mt-20 sm:mt-32 lg:mt-40 scroll-mt-40">
        <Skills />
      </div>

      {/* PROJECTS */}
      <div ref={projectsRef} className="px-0 sm:px-4 lg:px-10 mt-20 sm:mt-32 lg:mt-40 scroll-mt-40">
        <Projets />
      </div>

      {/* CONTACT */}
      <div ref={contactRef} className="px-0 sm:px-4 lg:px-10 mt-20 sm:mt-32 lg:mt-40 scroll-mt-40 mb-20">
        <Cntct />
      </div>
    </div>
  );
}

export default App;
