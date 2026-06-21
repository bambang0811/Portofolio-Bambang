import profile from "../assets/profile.JPG";
import { useState } from "react";
import {
  FaHome,
  FaBriefcase,
  FaCode,
  FaTools,
  FaGraduationCap,
  FaAward,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button - Visible on Mobile */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-6 left-6 z-50 bg-orange-500 text-white w-12 h-12 rounded-lg shadow-xl flex items-center justify-center"
      >
        {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay - Mobile */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-72 bg-[#050B1F] text-white flex-col justify-between px-5 py-6 z-40 border-r border-white/10 shadow-2xl shadow-black/20 transition-transform duration-300 lg:translate-x-0 ${
        mobileOpen ? "translate-x-0 flex" : "hidden lg:flex -translate-x-full lg:translate-x-0"
      }`}>
      <div className="text-center">
        <div className="relative mx-auto inline-flex rounded-full p-1 bg-gradient-to-br from-orange-500 to-orange-300 shadow-[0_0_0_10px_rgba(255,165,0,0.12)]">
          <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-[#050B1F]"
          />
        </div>

       <div className="flex flex-col items-center">
  <h1 className="text-lg sm:text-2xl font-bold mt-4 leading-tight text-white text-center">
    BAMBANG
    <br />
    <span className="text-white">PAMUNGKAS</span>
  </h1>
</div>

        <p className="text-gray-400 mt-2 leading-5 text-xs sm:text-xs">
          Web Developer
          <br />
          IT Support
        </p>

        <div className="mx-auto mt-4 h-0.5 w-14 rounded-full bg-orange-500" />

      </div>

      <nav className="mt-6 space-y-1 text-xs sm:text-sm">
        <a href="#about" onClick={closeMobileMenu} className="flex items-center gap-3 rounded-2xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-orange-500">
          <FaHome className="text-sm" />
          TENTANG SAYA
        </a>
        <a href="#experience" onClick={closeMobileMenu} className="flex items-center gap-3 rounded-2xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-orange-500">
          <FaBriefcase className="text-base" />
          PENGALAMAN
        </a>
        <a href="#projects" onClick={closeMobileMenu} className="flex items-center gap-3 rounded-2xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-orange-500">
          <FaCode className="text-base" />
          PROYEK
        </a>
        <a href="#skills" onClick={closeMobileMenu} className="flex items-center gap-3 rounded-2xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-orange-500">
          <FaTools className="text-base" />
          KETERAMPILAN
        </a>
        <a href="#education" onClick={closeMobileMenu} className="flex items-center gap-3 rounded-2xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-orange-500">
          <FaGraduationCap className="text-base" />
          PENDIDIKAN
        </a>
        <a href="#certificates" onClick={closeMobileMenu} className="flex items-center gap-3 rounded-2xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-orange-500">
          <FaAward className="text-base" />
          SERTIFIKASI
        </a>
        <a href="#contact" onClick={closeMobileMenu} className="flex items-center gap-3 rounded-2xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-orange-500">
          <FaEnvelope className="text-base" />
          KONTAK
        </a>
      </nav>
    </aside>
    </>
  );
}