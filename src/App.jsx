import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsEducation from "./components/SkillsEducation";
import Certificates from "./components/Certificates";
import ContactModal from "./components/ContactModal";
import CollaborationBanner from "./components/CollaborationBanner";
// Footer removed per design: footer component not rendered
import ScrollTop from "./components/ScrollTop";
import FloatingWA from "./components/FloatingWA";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (

    <div
      className={`${darkMode ? "dark bg-slate-900 text-slate-100" : "bg-[#F8FAFC] text-slate-950"} duration-300 transition-colors duration-300`}
    >

      {/* Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 bg-orange-500 text-white w-14 h-14 rounded-2xl shadow-xl"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 mt-0">

        <Hero darkMode={darkMode} onOpenContact={() => setContactOpen(true)} />

        <Experience darkMode={darkMode} />

        <Projects darkMode={darkMode} />

        <SkillsEducation darkMode={darkMode} />

        <Certificates darkMode={darkMode} />

        <CollaborationBanner darkMode={darkMode} onOpenContact={() => setContactOpen(true)} />

      </main>

      <ScrollTop />

      <FloatingWA />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} darkMode={darkMode} />

    </div>

  );
}

export default App;