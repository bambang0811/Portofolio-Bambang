import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact({ darkMode }) {
  return (
    <section
          id="contact"
  className={`px-10 lg:px-20 py-20 ${darkMode ? "bg-slate-950" : ""}`}
  data-aos="fade-up"
    >
      <h1 className={`text-5xl font-bold mb-16 ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
        Contact Me
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className={`rounded-3xl p-10 shadow ${darkMode ? "bg-slate-950 shadow-slate-950/20" : "bg-white"}`}>

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <FaEnvelope className="text-3xl text-orange-500"/>

              <div>
                <h3 className={`font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>Email</h3>
                <p className={`mt-1 ${darkMode ? "text-slate-300" : "text-gray-500"}`}>
                  bambangp0811@email.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <FaWhatsapp className="text-3xl text-green-500"/>

              <div>
                <h3 className={`font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>Whatsapp</h3>
                <p className={`mt-1 ${darkMode ? "text-slate-300" : "text-gray-500"}`}>
                  +62 895-6275-14403
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <FaGithub className="text-3xl"/>

              <div>
                <h3 className={`font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>Github</h3>
                <p className={`mt-1 ${darkMode ? "text-slate-300" : "text-gray-500"}`}>
                  github.com/username
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <FaLinkedin className="text-3xl text-blue-600"/>

              <div>
                <h3 className={`font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>LinkedIn</h3>
                <p className={`mt-1 ${darkMode ? "text-slate-300" : "text-gray-500"}`}>
                  linkedin.com/in/username
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="bg-orange-500 rounded-3xl p-10 text-white flex items-center">

          <div>

            <h1 className="text-5xl font-bold mb-8">
              Let's Work Together
            </h1>

            <p className="leading-8">
              Saya terbuka untuk peluang kerja, freelance,
              maupun kolaborasi pengembangan website dan
              sistem informasi.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}