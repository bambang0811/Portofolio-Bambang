export default function Experience({ darkMode }) {
  const experiences = [
    {
      year: "November 2025 - Mei 2026",
      title: "Pengelola Fasilitas Umum",
      company: "Lembaga Pemasyarakatan Kelas IIA Karawang",
      points: [
        "Menginisiasi dan mengembangkan Website Lapas Kelas IIA Karawang serta Sistem Informasi Pengecekan Gaji Pegawai sebagai bagian dari transformasi digital dan peningkatan efisiensi layanan internal",
        "Bertanggung jawab pada seluruh siklus pengembangan sistem, mulai dari analisis kebutuhan, desain, implementasi, hingga pemeliharaan aplikasi",
        "Inovasi yang dikembangkan memperoleh penghargaan sebagai Inovasi Terbaik di lingkungan Lapas Kelas IIA Karawang.",
        "Memberikan dukungan teknis dan melakukan pengelolaan fasilitas operasional berbasis teknologi untuk memastikan kelancaran kegiatan perkantoran.",
        "Terpilih sebagai Peserta Magang Terbaik atas kinerja, kontribusi, dan inovasi yang diberikan selama masa penugasan"
      ]
    },
    {
      year: "Maret 2023 - Mei 2024",
      title: "Customer Relationship Management (CRM)",
      company: "Geoffmax Footwear",
      points: [
        "Menganalisis feedback dan perilaku pelanggan untuk meningkatkan pengalaman pengguna dan menyusun strategi retensi pelanggan",
        "Strategi komunikasi via email marketing, WhatsApp blast, loyalty program.",
        "Berkolaborasi dengan tim marketing dan e-commerce untuk menyelaraskan strategi CRM dengan tujuan bisnis dan promosi produk."
      ]
    },
    {
      year: "Febuari 2024 - Agustus 2024",
      title: "Program Pelatihan Digital",
      company: "BPSDM Kominfo Kota Bandung",
      points: [
        "Mengikuti berbagai program pelatihan digital seperti Thematic Academy (TA), Digital Talent Academy (DTA), dan Digital Entrepreneurship Academy (DEA) dengan fokus pada pengembangan kompetensi teknologi dan bisnis digital, meliputi digital marketing, pemanfaatan Artificial Intelligence (AI), serta strategi pemasaran berbasis digital."
      ]
    },
    {
      year: "Juli 2024",
      title: "Peserta Program Integritas & Kepemimpinan",
      company: "Komisi Pemberantasan Korupsi RI",
      points: [
        "Berpartisipasi dalam program pengembangan karakter dan kepemimpinan dengan fokus pada nilai integritas, antikorupsi, kedisiplinan, serta peningkatan kesadaran kebangsaan dan tanggung jawab sosial."
      ]
    },
    {
      year: "Oktober 2022 - Desember 2023",
      title: "Menteri - Badan Eksekutif Mahasiswa (BEM)",
      company: "Universitas Teknologi Bandung",
      points: [
        "Berperan aktif dalam organisasi kampus selama dua periode, termasuk sebagai Kepala Divisi pada beberapa kegiatan besar seperti UTB Got Talent, Program Pengabdian Masyarakat, dan PKKMB. Bertanggung jawab dalam perencanaan, koordinasi tim, serta pelaksanaan acara skala kampus."
      ]
    }
  ];

  return (
    <section id="experience" className="px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20" data-aos="fade-up">
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 ${darkMode ? "text-slate-100" : "text-slate-950"}`}>Pengalaman</h1>

      <div className={`rounded-2xl sm:rounded-3xl lg:rounded-[2rem] shadow-xl p-4 sm:p-6 md:p-8 lg:p-8 ${darkMode ? "bg-slate-950 shadow-slate-900/40" : "bg-white"}`}>
        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid gap-4 sm:gap-6 lg:grid-cols-[200px_minmax(0,1fr)] items-start">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-orange-500 mt-1" />
                  <div className="h-full w-px bg-orange-100 ml-1" />
                </div>
                <div>
                  <div className="text-orange-500 font-semibold text-xs sm:text-sm">{exp.year}</div>
                  <div className={`mt-1 sm:mt-2 text-base sm:text-lg font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>{exp.title}</div>
                  <div className={`mt-1 text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-gray-500"}`}>{exp.company}</div>
                </div>
              </div>

              <div>
                <ul className={`list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-justify leading-6 sm:leading-7 text-xs sm:text-sm ${darkMode ? "text-slate-300" : "text-gray-600"}`}>
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
