import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaWhatsapp
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 mt-20">

      <div className="text-center">

        <h1 className="text-3xl font-bold">
          Bambang <span className="text-orange-500">Pamungkas</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Web Developer • IT Support
        </p>

        <div className="flex justify-center gap-6 text-2xl mt-8">

          <FaGithub className="hover:text-orange-500 cursor-pointer"/>

          <FaLinkedin className="hover:text-orange-500 cursor-pointer"/>

          <FaEnvelope className="hover:text-orange-500 cursor-pointer"/>

          <FaWhatsapp className="hover:text-orange-500 cursor-pointer"/>

        </div>

        <p className="text-gray-500 mt-8">
          © 2026 Bambang Pamungkas. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}