import { FaPaperPlane, FaLock, FaArrowRight } from 'react-icons/fa';

export default function CollaborationBanner({ darkMode, onOpenContact }) {
  return (
    <div className="px-4 lg:px-20 py-6">
      <div className={`w-full rounded-[16px] p-6 md:p-8 flex items-center justify-between gap-4 ${darkMode ? 'bg-slate-800 border border-slate-800' : 'bg-[#fff3ee] border border-transparent'} shadow-sm`}> 
        <div className="flex items-center gap-5">
          <div className={`h-20 w-20 rounded-full flex items-center justify-center ${darkMode ? 'bg-orange-500 text-white shadow-lg' : 'bg-orange-500 text-white shadow-lg'}`}>
            <FaPaperPlane className="h-8 w-8" />
          </div>

          <div className="max-w-2xl">
            <h3 className={`text-lg md:text-2xl font-extrabold leading-snug ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>Mari Berkolaborasi!</h3>
            <p className={`text-sm md:text-base mt-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Saya terbuka untuk peluang baru, proyek menarik, atau diskusi<br/>seputar pengembangan web dan teknologi.</p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-[8px] font-semibold shadow-lg hover:bg-orange-600 transform transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
            style={{boxShadow: '0 6px 18px rgba(249,115,22,0.18)'}}
          >
            <FaLock className="opacity-95" />
            <span className="whitespace-nowrap">Hubungi Saya</span>
            <FaArrowRight className="opacity-95" />
          </button>
        </div>
      </div>
    </div>
  );
}
