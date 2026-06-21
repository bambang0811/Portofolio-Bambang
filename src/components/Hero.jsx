import heroImg from "../assets/hero.png";

export default function Hero({ darkMode, onOpenContact }) {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16" data-aos="fade-up">
      <div className={`w-full rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-4 sm:p-6 lg:p-10 shadow-xl ${darkMode ? "bg-slate-950 shadow-slate-900/40" : "bg-white"}`}>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-500 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Tentang Saya
            </span>

            <h1 className={`mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
              BAMBANG <span className="text-black">PAMUNGKAS,S.Kom.</span>
            </h1>

            <p className={`mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              Web Developer & IT Support
            </p>

            <p className={`mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 text-justify ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Lulusan S1 Teknik Informatika dengan pengalaman di bidang pengembangan web, CRM, digital marketing, serta instalasi dan troubleshooting jaringan komputer. Terbiasa menangani kegiatan live streaming dan event dengan setup audio-visual. Selalu bersemangat belajar teknologi baru dan memberikan solusi terbaik.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <a href="/cv-bambang-pamungkas.pdf" download className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition duration-200 no-underline w-full sm:w-auto">
                Download CV
              </a>
              <button onClick={onOpenContact} className={`inline-flex items-center justify-center rounded-2xl border px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold duration-200 w-full sm:w-auto ${darkMode ? "border-slate-700 text-slate-100 hover:bg-slate-800" : "border-slate-200 text-slate-950 hover:bg-slate-100"}`}>
                Hubungi Saya
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img src={heroImg} alt="hero" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain" />
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="px-2 sm:px-4 py-3 sm:py-4 text-center">
            <div className="text-orange-500 text-xl sm:text-2xl mb-2 sm:mb-3">🎓</div>
            <p className={`text-xs uppercase tracking-[0.25em] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Pendidikan</p>
            <p className={`mt-2 sm:mt-3 font-semibold text-xs sm:text-sm ${darkMode ? "text-slate-100" : "text-slate-950"}`}>S1 Teknik Informatika</p>
            <p className={`text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Universitas Teknologi Bandung</p>
          </div>

          <div className={`relative px-2 sm:px-4 py-3 sm:py-4 text-center ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
            <div className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px ${darkMode ? "bg-slate-700" : "bg-slate-200"}`} />
            <div className="text-orange-500 text-xl sm:text-2xl mb-2 sm:mb-3">💼</div>
            <p className={`text-xs uppercase tracking-[0.25em] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Pengalaman</p>
            <p className={`mt-2 sm:mt-3 font-semibold text-xs sm:text-sm ${darkMode ? "text-slate-100" : "text-slate-950"}`}>2+ Tahun</p>
            <p className={`text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Berbagai bidang</p>
          </div>

          <div className={`relative px-2 sm:px-4 py-3 sm:py-4 text-center ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
            <div className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px ${darkMode ? "bg-slate-700" : "bg-slate-200"}`} />
            <div className="text-orange-500 text-xl sm:text-2xl mb-2 sm:mb-3">⚙️</div>
            <p className={`text-xs uppercase tracking-[0.25em] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Fokus</p>
            <p className={`mt-2 sm:mt-3 font-semibold text-xs sm:text-sm ${darkMode ? "text-slate-100" : "text-slate-950"}`}>Web Development</p>
            <p className={`text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>IT Support</p>
          </div>

          <div className={`relative px-2 sm:px-4 py-3 sm:py-4 text-center ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
            <div className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px ${darkMode ? "bg-slate-700" : "bg-slate-200"}`} />
            <div className="text-orange-500 text-xl sm:text-2xl mb-2 sm:mb-3">📍</div>
            <p className={`text-xs uppercase tracking-[0.25em] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Lokasi</p>
            <p className={`mt-2 sm:mt-3 font-semibold text-xs sm:text-sm ${darkMode ? "text-slate-100" : "text-slate-950"}`}>Bandung, Jawa Barat</p>
            <p className={`text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
