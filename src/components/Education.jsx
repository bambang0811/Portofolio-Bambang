import { FaGraduationCap } from "react-icons/fa";

export default function Education({ darkMode }) {
  return (
    <section
          id="education"
  className={`px-10 lg:px-20 py-20 ${darkMode ? "bg-slate-950" : ""}`}
  data-aos="fade-up"
    >
      <h1 className={`text-5xl font-bold mb-16 ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
        Education
      </h1>

      <div className={`rounded-3xl shadow p-10 ${darkMode ? "bg-slate-900 shadow-slate-900/40" : "bg-white"}`}>

        <div className="flex items-center gap-5">

          <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center">
            <FaGraduationCap className="text-orange-500 text-3xl"/>
          </div>

          <div>

            <h2 className={`text-3xl font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
              Universitas Teknologi Bandung
            </h2>

            <h4 className="text-orange-500 mt-2">
              S1 Teknik Informatika
            </h4>

            <p className={`mt-3 ${darkMode ? "text-slate-300" : "text-gray-500"}`}>
              2021 - 2025 | IPK 3.25
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}