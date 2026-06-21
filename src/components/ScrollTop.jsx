import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);

  }, []);

  return (
    visible && (
      <button
        className="fixed bottom-28 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 z-50"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp size={14} />
      </button>
    )
  );
}