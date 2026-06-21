import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from "react-icons/fa";
import lapasImg from "../assets/lapaskarawang.png";
import eoqImg from "../assets/eoq.png";
import edumon from "../assets/edumon.png";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "Sistem Informasi Lapas Kelas IIA Karawang",
      img: lapasImg,
      link: "https://lapaskarawang.page.gd",
      date: "Maret 2026 - Mei 2026",
      desc: "Mengembangkan Website Lapas Kelas IIA Karawang dari nol sebagai platform informasi resmi instansi dengan fitur CRUD dan integrasi frontend, backend, serta database.",
      tag: "Web Development",
    },
    {
      title: "Admin Dashboard & LMS (PunyaSkill Academy)",
      img: edumon,
      link: "https://github.com/bambang0811/punyaskills.git",
      date: "Oktober 2025 - November 2025",
      desc: "Mengembangkan Learning Management System (LMS) berbasis web dengan autentikasi JWT, manajemen course, quiz, dan integrasi REST API.",
      tag: "Web Development",
    },
    {
      title: "Sistem Persediaan Barang (EOQ Method)",
      img: eoqImg,
      link: "https://github.com/bambang0811/Sistem-Informasi-Persediaan-Barang-Metode-Eoq-.git",
      date: "Maret 2025 - Agustus 2025",
      desc: "Mengembangkan Sistem Informasi Persediaan berbasis web menggunakan metode RAD dengan implementasi EOQ, ROP, dan Safety Stock untuk optimasi pengendalian stok dan pelaporan.",
      tag: "Web Development",
    },
  ];

  return (
    <section
      id="projects"
      className={`px-8 lg:px-20 py-20 ${darkMode ? "bg-slate-950" : "bg-[#F8FAFC]"}`}
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="flex items-center gap-4">
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl ${darkMode ? "bg-slate-900" : "bg-white shadow"}`}>
            <FaProjectDiagram className={`text-xl ${darkMode ? "text-orange-400" : "text-orange-500"}`} />
          </div>
          <div>
            <h1 className={`text-5xl font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
              Proyek
            </h1>
          </div>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600"
        >
          Lihat Semua Proyek →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 border transition-all ${darkMode ? "bg-slate-950 border-slate-800 shadow-slate-900/40 hover:shadow-slate-900/60" : "bg-white border-slate-200 shadow-slate-200/60 hover:shadow-slate-300"}`}
          >
            {/* Image Section - Large & Clear */}
            <div className={`h-40 md:h-36 lg:h-40 overflow-hidden flex items-center justify-center ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}> 
              {project.img ? (
                <img src={project.img} alt={project.title} className="max-w-full max-h-full object-contain object-center transition-transform duration-500 hover:scale-105" />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-6xl">💻</div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-5 lg:p-6 flex flex-col">
              {/* Title */}
              <h2 className={`text-lg md:text-base lg:text-lg font-bold mb-3 leading-snug ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
                {project.title}
              </h2>

              {/* Date */}
              <p className="text-orange-500 font-semibold text-sm md:text-xs lg:text-sm mb-3">
                {project.date}
              </p>

              {/* Description - Compact */}
              <p className={`text-sm leading-5 mb-4 line-clamp-3 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                {project.desc}
              </p>

              {/* Tag */}
              <div className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold w-fit ${darkMode ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-700"}`}>
                <FaGithub className="text-orange-500 text-sm" />
                {project.tag}
              </div>

              {/* Link Button - Optional */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Kunjungi
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
