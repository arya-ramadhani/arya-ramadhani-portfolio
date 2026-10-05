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
  images?: string[];
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
    images: [
      "/images/experience/bupati-bangka-1.svg",
      "/images/experience/bupati-bangka-2.svg",
      "/images/experience/bupati-bangka-3.svg",
    ],
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
    images: [
      "/images/experience/hisense-install-1.svg",
      "/images/experience/hisense-install-2.svg",
      "/images/experience/hisense-install-3.svg",
    ],
  },
  {
    id: "exp-edugame-research",
    period: "Maret 2024 – Agustus 2024",
    year: "2024",
    position: "Research Team Member / 2D Artist – Educational Game Development",
    organization: "Politeknik Manufaktur Negeri Bangka Belitung",
    type: "Leadership & Organization",
    badge: "Part-time · 6 bulan",
    description:
      "Berkontribusi sebagai anggota tim dalam penelitian dosen mengenai pengembangan edu-game \"Lom's Ethnic Journey\", yang mengintegrasikan budaya lokal Suku Lom dengan materi Matematika dan Fisika.",
    responsibilities: [
      "Merancang dan mengembangkan aset visual menggunakan Blender, meliputi karakter, NPC, environment, dan objek pendukung game.",
      "Berkolaborasi dengan tim dalam proses pengembangan, evaluasi, dan penyempurnaan elemen visual serta aplikasi.",
      "Melakukan pengujian aplikasi untuk mengevaluasi fungsi dan tampilan serta memastikan aplikasi berjalan sesuai kebutuhan.",
      "Memberikan edukasi dan pendampingan penggunaan aplikasi kepada pengguna.",
    ],
    technologies: ["Blender", "2D Modeling", "Game Development", "Visual Design", "User Interface Design", "User Experience Design (UED)", "Problem Solving", "Teamwork"],
    image: "/images/experience/edugame-research.jpg",
    images: [
      "/images/experience/edugame-research-1.svg",
      "/images/experience/edugame-research-2.svg",
      "/images/experience/edugame-research-3.svg",
    ],
  },
  {
    id: "exp-community-engagement",
    period: "Juli 2024",
    year: "2024",
    position: "Research Team Member / Community Engagement Program",
    organization: "Politeknik Manufaktur Negeri Bangka Belitung",
    type: "Leadership & Organization",
    badge: "Part-time · 1 bulan",
    description:
      "Berkontribusi dalam kegiatan Pengabdian kepada Masyarakat yang dilaksanakan melalui penelitian dosen di Desa Tuik, dengan fokus pada inovasi produk gula aren dan penguatan peran kelembagaan untuk mendukung pengembangan ekonomi masyarakat desa.",
    responsibilities: [
      "Berperan sebagai bagian dari panitia kegiatan, khususnya dalam mendukung kebutuhan desain dan dokumentasi kegiatan.",
      "Merancang materi visual kegiatan, termasuk desain label produk gula aren dan sertifikat sebagai bagian dari kebutuhan komunikasi dan identitas kegiatan.",
      "Mendukung pelaksanaan kegiatan pelatihan, diskusi, dan pendampingan masyarakat serta berkoordinasi dengan tim selama kegiatan berlangsung.",
      "Melakukan dokumentasi kegiatan dan membantu memastikan kebutuhan teknis serta visual kegiatan dapat terlaksana dengan baik.",
      "Memperoleh pengalaman dalam penerapan desain grafis, kerja sama tim, koordinasi kegiatan, dan pemanfaatan kreativitas teknologi untuk mendukung pengembangan produk lokal masyarakat.",
    ],
    technologies: ["Event Management", "Graphic Design", "Documentation", "Teamwork", "Project Coordination", "Community Engagement", "Communication"],
    image: "/images/experience/community-engagement.jpg",
    images: [
      "/images/experience/community-engagement-1.svg",
      "/images/experience/community-engagement-2.svg",
      "/images/experience/community-engagement-3.svg",
    ],
  },
];
