import { FaTools, FaGraduationCap, FaLaptopCode, FaLaptop } from "react-icons/fa";

export default function SkillsEducation({ darkMode }) {
  return (
    <section
      id="skills"
      className={`px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 ${darkMode ? "bg-slate-950" : "bg-[#F8FAFC]"}`}
      data-aos="fade-up"
    >
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow ${darkMode ? "bg-slate-900 shadow-slate-900/40" : "bg-white shadow-slate-200"}`}>
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className={`inline-flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-3xl ${darkMode ? "bg-slate-800" : "bg-orange-100"}`}>
              <FaTools className={`text-xl sm:text-2xl ${darkMode ? "text-orange-400" : "text-orange-500"}`} />
            </div>
            <div>
              <p className={`text-xs uppercase tracking-[0.4em] font-semibold ${darkMode ? "text-orange-400" : "text-orange-500"}`}>
                Keterampilan
              </p>
              <h2 className={`mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
                Teknologi & Tools
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "PHP",
              "Laravel",
              "Bootstrap",
              "MySQL",
              "XAMPP",
              "VS Code",
              "Git",
              "GitHub",
              "UML",
              "Cisco Packet Tracer",
            ].map((item) => (
              <span
                key={item}
                className={`rounded-full px-2 sm:px-3 py-1.5 sm:py-2 text-center ${darkMode ? "bg-slate-800 text-slate-100" : "bg-slate-100 text-slate-950"}`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mb-4 sm:mb-6">
            <p className={`text-xs uppercase tracking-[0.3em] font-semibold mb-3 sm:mb-4 ${darkMode ? "text-orange-400" : "text-orange-500"}`}>
              Software / Program
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
              <div className={`flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm ${darkMode ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <FaLaptopCode className="text-orange-500 flex-shrink-0" />
                <span>Microsoft Office</span>
              </div>
              <div className={`flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm ${darkMode ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <FaLaptop className="text-orange-500 flex-shrink-0" />
                <span>OBS Streamlabs</span>
              </div>
              <div className={`flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm ${darkMode ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-200 bg-slate-50 text-slate-900"}`}>
                <FaLaptopCode className="text-orange-500 flex-shrink-0" />
                <span>Mailchimp</span>
              </div>
            </div>
          </div>

          <div>
            <p className={`text-xs uppercase tracking-[0.3em] font-semibold mb-3 sm:mb-4 ${darkMode ? "text-orange-400" : "text-orange-500"}`}>
              Bahasa
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium ${darkMode ? "bg-slate-800 text-slate-100" : "bg-slate-100 text-slate-950"}`}>Indonesia</span>
              <span className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium ${darkMode ? "bg-slate-800 text-slate-100" : "bg-slate-100 text-slate-950"}`}>English/Basic Conversational</span>
            </div>
          </div>
        </div>

        <div id="education" className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow ${darkMode ? "bg-slate-900 shadow-slate-900/40" : "bg-white shadow-slate-200"}`}>
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className={`inline-flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-3xl ${darkMode ? "bg-slate-800" : "bg-orange-100"}`}>
              <FaGraduationCap className={`text-xl sm:text-2xl ${darkMode ? "text-orange-400" : "text-orange-500"}`} />
            </div>
            <div>
              <p className={`text-xs uppercase tracking-[0.4em] font-semibold ${darkMode ? "text-orange-400" : "text-orange-500"}`}>
                Pendidikan
              </p>
              <h2 className={`mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
                Sarjana Teknik Informatika
              </h2>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm leading-6 sm:leading-7">
            <div>
              <p className={`text-orange-500 font-semibold ${darkMode ? "text-orange-400" : "text-orange-500"}`}>
                Universitas Teknologi Bandung
              </p>
              <p className={`mt-1 sm:mt-2 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                September 2020 - Februari 2025
              </p>
              <p className={`mt-1 sm:mt-2 font-semibold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
                IPK : 3,25 / 4.00
              </p>
            </div>

            <div>
              <p className={`font-semibold mb-2 sm:mb-3 ${darkMode ? "text-slate-100" : "text-slate-950"}`}>Mata Kuliah Relevan</p>
              <p className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                Algoritma dan pemrograman, struktur data, sistem operasi, rekayasa perangkat lunak, basis data terdistribusi, jaringan komputer, organisasi dan arsitektur komputer, OOP, web programming, mobile programming, keamanan informasi dan keamanan jaringan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
