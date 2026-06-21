import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import {
  SiMysql,
  SiExpress,
} from "react-icons/si";

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className={`px-10 lg:px-20 py-20 ${darkMode ? "bg-slate-950" : ""}`}>

      <h1 className={`text-5xl font-bold mb-16 ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
        Skills
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Frontend */}
        <div className={`rounded-3xl p-10 shadow ${darkMode ? "bg-slate-900 shadow-slate-900/40" : "bg-white"}`}>
          <h2 className="text-3xl font-bold mb-8 text-orange-500">
            Frontend
          </h2>

          <div className="grid grid-cols-3 gap-8 text-center text-5xl">

            <div>
              <FaHtml5 className="mx-auto text-orange-500" />
              <p className="text-sm mt-3">HTML</p>
            </div>

            <div>
              <FaCss3Alt className="mx-auto text-blue-500" />
              <p className="text-sm mt-3">CSS</p>
            </div>

            <div>
              <FaJs className="mx-auto text-yellow-400" />
              <p className="text-sm mt-3">JavaScript</p>
            </div>

            <div>
              <FaReact className="mx-auto text-cyan-500" />
              <p className="text-sm mt-3">React</p>
            </div>

            <div>
              <FaBootstrap className="mx-auto text-purple-600" />
              <p className="text-sm mt-3">Bootstrap</p>
            </div>

          </div>
        </div>

        {/* Backend */}
        <div className={`rounded-3xl p-10 shadow ${darkMode ? "bg-slate-900 shadow-slate-900/40" : "bg-white"}`}>
          <h2 className="text-3xl font-bold mb-8 text-orange-500">
            Backend
          </h2>

          <div className="grid grid-cols-3 gap-8 text-center text-5xl">

            <div>
              <FaNodeJs className="mx-auto text-green-600" />
              <p className="text-sm mt-3">Node JS</p>
            </div>

            <div>
              <SiExpress className="mx-auto" />
              <p className="text-sm mt-3">Express</p>
            </div>

            <div>
              <FaPhp className="mx-auto text-indigo-600" />
              <p className="text-sm mt-3">PHP</p>
            </div>

            <div>
              <SiMysql className="mx-auto text-blue-700" />
              <p className="text-sm mt-3">MySQL</p>
            </div>

          </div>
        </div>

        {/* Tools */}
       <div className={`rounded-3xl p-10 shadow ${darkMode ? "bg-slate-900 shadow-slate-900/40" : "bg-white"}`}>
  <h2 className="text-3xl font-bold mb-8 text-orange-500">
    Tools
  </h2>

  <div className="grid grid-cols-3 gap-8 text-center text-5xl">

    <div>
      <FaCode className="mx-auto text-blue-500" />
      <p className="text-sm mt-3">VS Code</p>
    </div>

    <div>
      <FaDatabase className="mx-auto text-orange-500" />
      <p className="text-sm mt-3">XAMPP</p>
    </div>

    <div>
      <FaGitAlt className="mx-auto text-orange-600" />
      <p className="text-sm mt-3">Git</p>
    </div>

    <div>
      <FaGithub className="mx-auto" />
      <p className="text-sm mt-3">Github</p>
    </div>

    <div>
      <FaTools className="mx-auto text-cyan-500" />
      <p className="text-sm mt-3">Canva</p>
    </div>

  </div>
</div>

       

        </div>


    </section>
  );
}