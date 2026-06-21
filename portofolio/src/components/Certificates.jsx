export default function Certificates({ darkMode }) {

  const certificates = [
    "Pengembangan Website - Sertifikasi BNSP (Badan Nasional Sertifikasi Profesi) - LSP P2 BBPVP Bandung",
    "Inovasi Terbaik Program Pemagangan Lulusan Perguran Tinggi Batch II - Lapas Kelas IIA Karawang",
    "Peserta Magang Terbaik Program Pemagangan Lulusan Perguran Tinggi Batch II - Lapas Kelas IIA Karawang",
    "Program Pengembangan Web dengan Node.Js dan React - BALAI BESAR PELATIHAN VOKASI DAN PRODUKTIVITAS BANDUNG",
    "Certificate Project Integration Methodology of Excellence (PRIME) - CertNexus",
    "Certificate in Networking Security Associate (CNSA) - CertNexus",
    "Program Studi Independen - PT. Inovasi Lentera Cipta Kreasi",
    "Peningkatan Kapabilitas Peran Serta Masyarakat - Komisi Pemberantasan Korupsi (KPK) Republik Indonesia",
    "Certificate Computer Networking - VMT Software",
    "Thematic Academy (TA) - BPSDMP Kominfo Kota Bandung",
    "Digital Talent Academy (DTA) - BPSDMP Kominfo Kota Bandung",
    "Digital Entrepreneurship Academy (DEA) - BPSDMP Kominfo Kota Bandung",
    "Program Pelatihan Digital Marketing - BPSDMP Kominfo Kota Bandung"
  ];

  return (
    <section
      id="certificates"
      className={`px-6 lg:px-20 py-20 ${darkMode ? "bg-slate-950" : ""}`}
      data-aos="fade-up"
    >

      <div className={`w-full rounded-[1.25rem] p-6 lg:p-8 ${darkMode ? "bg-slate-900 shadow-slate-900/40" : "bg-white shadow-lg"}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`rounded-md p-2 ${darkMode ? "bg-slate-800 text-orange-400" : "bg-orange-50 text-orange-600"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h2 className={`text-2xl lg:text-3xl font-bold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>SERTIFIKASI & PELATIHAN</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg">
              <div className="flex-shrink-0">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${darkMode ? "bg-orange-500 text-white" : "bg-orange-500 text-white"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a2 2 0 00-2 2v3H6a2 2 0 00-2 2v3a2 2 0 002 2h2v3a2 2 0 002 2 2 2 0 002-2v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-2V4a2 2 0 00-2-2z" />
                  </svg>
                </div>
              </div>

              <div className="min-w-0">
                <div className={`font-semibold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>{item}</div>
                <div className={`text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{/* subtitle kept empty to match existing content */}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}