export interface Experience {
  id: string;
  period: string;
  year: string;
  position: string;
  organization: string;
  type: "Work Experience" | "Leadership & Organization";
  badge: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  image?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-bupati-bangka",
    period: "Agustus 2025 – Desember 2025",
    year: "2025",
    position: "Web Developer Intern",
    organization: "Kantor Bupati Bangka",
    type: "Work Experience",
    badge: "Government Enterprise",
    description:
      "Mengembangkan Sistem Manajemen Aset dan Inventaris berbasis web dari awal untuk mendigitalkan dan menata pengelolaan aset daerah secara terstruktur dan terintegrasi.",
    responsibilities: [
      "Menganalisis kebutuhan pengguna & alur kerja operasional untuk memetakan fitur fungsional sistem.",
      "Merancang UI/UX komprehensif dan user flow menggunakan Figma sebelum tahap implementasi.",
      "Mengimplementasikan aplikasi web full-stack dengan Laravel, MySQL, Bootstrap, CSS, dan JavaScript (CRUD, autentikasi multi-user, dan pelaporan cetak).",
      "Mengonfigurasi environment aplikasi, database, IP, dan jaringan LAN agar sistem dapat diakses secara simultan di lingkungan kantor.",
      "Melakukan pengujian menyeluruh, troubleshooting bug, presentasi progres kepada pihak terkait, dan penyusunan dokumentasi teknis.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Figma", "LAN Network"],
    image: "/images/experience/bupati-bangka.jpg",
  },
  {
    id: "exp-hisense",
    period: "Agustus 2025 – November 2025",
    year: "2025",
    position: "Technical Installation Freelance",
    organization: "PT Hisense International Indonesia",
    type: "Work Experience",
    badge: "76 Units Deployed",
    description:
      "Melaksanakan instalasi, perakitan teknis, dan konfigurasi Interactive Flat Panel (IFP) di berbagai sekolah dalam Program Digitalisasi Pembelajaran di Kabupaten Bangka.",
    responsibilities: [
      "Melakukan perakitan fisik, bracket mounting, instalasi kabel daya & display, serta konfigurasi awal sistem IFP.",
      "Troubleshooting kendala hardware dan software pendukung guna menjamin perangkat beroperasi optimal.",
      "Berkoordinasi dengan kepala sekolah dan tim guru, memberikan edukasi teknis pengoperasian perangkat, serta serah terima berita acara.",
      "Berhasil menyelesaikan instalasi 76 unit IFP di berbagai institusi pendidikan serta menyusun laporan dokumentasi proyek.",
    ],
    technologies: ["Interactive Flat Panel", "Hardware Mounting", "Network Setup", "Troubleshooting", "User Education"],
    image: "/images/experience/hisense-install.jpg",
  },
  {
    id: "exp-permikomnas",
    period: "Desember 2025 – Sekarang",
    year: "2025 - Sekarang",
    position: "Sekretaris Wilayah 3",
    organization: "Perhimpunan Mahasiswa Informatika dan Komputer Nasional (PERMIKOMNAS)",
    type: "Leadership & Organization",
    badge: "Regional Committee",
    description:
      "Mengelola tata kelola kesekretariatan, administrasi persuratan, serta koordinasi program kerja nasional dan perguruan tinggi se-Wilayah 3.",
    responsibilities: [
      "Mengelola administrasi kesekretariatan meliputi surat-menyurat resmi, database arsip, dan dokumentasi kegiatan organisasi.",
      "Menyusun dan mengoordinasikan agenda rapat serta forum diskusi strategis pengurus Wilayah 3.",
      "Mendampingi Koordinator Wilayah (KORWIL) dalam perencanaan dan eksekusi program kerja tahunan.",
      "Memfasilitasi komunikasi administratif dan sinergi antar pengurus ormawa informatika di tingkat perguruan tinggi.",
    ],
    technologies: ["Secretarial Governance", "Communication", "Event Management", "Leadership"],
    image: "/images/experience/permikomnas.jpg",
  },
  {
    id: "exp-hmj-tei",
    period: "Juli 2024 – Juli 2025",
    year: "2024 - 2025",
    position: "Ketua Himpunan",
    organization: "Himpunan Mahasiswa Jurusan Teknik Elektro dan Informatika (HMJ TEKTRONIKA POLMAN BABEL)",
    type: "Leadership & Organization",
    badge: "Department President",
    description:
      "Memimpin organisasi himpunan mahasiswa jurusan Teknik Elektro & Informatika dalam arah strategis, pembinaan SDM, serta representasi forum nasional.",
    responsibilities: [
      "Bertanggung jawab penuh atas perumusan visi, tata kelola, dan koordinasi pelaksanaan seluruh program kerja himpunan.",
      "Memimpin rapat evaluasi mingguan, mengarahkan divisi kerja, serta memfasilitasi komunikasi pengurus.",
      "Bertindak sebagai mediator dan pengambil keputusan strategis dalam penyelesaian kendala organisasi.",
      "Mewakili institusi dalam Rapat Kerja Wilayah 5 Forum Komunikasi Himpunan Mahasiswa Elektro Indonesia (FKHMEI) di ITERA, Lampung.",
    ],
    technologies: ["Executive Leadership", "Strategic Planning", "Public Speaking", "Team Governance"],
    image: "/images/experience/hmj-tei.jpg",
  },
];
