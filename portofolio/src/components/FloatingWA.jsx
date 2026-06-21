import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/62895627514403"
      target="_blank"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-xl text-3xl hover:scale-110 duration-300 z-50"
    >
      <FaWhatsapp />
    </a>
  );
}