import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactModal({ open, onClose, darkMode }) {
  if (!open) return null;

  const email = "bambangp0811@gmail.com";
  const whatsappNumber = "62895627514403"; // +62 895-6275-14403 -> wa.me/62895627514403
  const githubUrl = "https://github.com/bambang0811";
  const linkedinUrl = "https://www.linkedin.com/in/bambang-pamungkas-59a8b3282/";

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className={`relative w-full max-w-3xl mx-4 rounded-2xl p-6 md:p-8 ${darkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"}`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-700">✕</button>

        <h2 className="text-2xl font-bold mb-4">Hubungi Saya</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <a href={`mailto:${email}`} className={`flex items-start gap-4 p-4 rounded-lg ${darkMode ? "hover:bg-slate-800" : "hover:bg-slate-50"}`} target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-3xl text-orange-500 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-slate-500">{email}</p>
            </div>
          </a>

          <a href={`https://wa.me/${whatsappNumber}?text=Halo%20Bambang`} className={`flex items-start gap-4 p-4 rounded-lg ${darkMode ? "hover:bg-slate-800" : "hover:bg-slate-50"}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-3xl text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold">Whatsapp</h3>
              <p className="text-sm text-slate-500">+62 895-6275-14403</p>
            </div>
          </a>

          <a href={githubUrl} className={`flex items-start gap-4 p-4 rounded-lg ${darkMode ? "hover:bg-slate-800" : "hover:bg-slate-50"}`} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl" />
            <div>
              <h3 className="font-semibold">Github</h3>
              <p className="text-sm text-slate-500">github.com/bambang0811</p>
            </div>
          </a>

          <a href={linkedinUrl} className={`flex items-start gap-4 p-4 rounded-lg ${darkMode ? "hover:bg-slate-800" : "hover:bg-slate-50"}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-sm text-slate-500">linkedin.com/in/bambang-pamungkas-59a8b3282</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
