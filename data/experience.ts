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
      "Membangun Sistem Manajemen Aset dan Inventaris berbasis web untuk mendigitalkan dan menata pengelolaan aset secara terstruktur dan terintegrasi.",
    responsibilities: [
      "Menganalisis kebutuhan pengguna dan sistem sebagai dasar dalam menentukan fitur, alur, dan kebutuhan aplikasi.",
      "Merancang UI/UX dan user flow menggunakan Figma berdasarkan hasil analisis kebutuhan sebelum tahap implementasi.",
      "Mengembangkan aplikasi menggunakan Laravel, MySQL, Bootstrap, CSS, dan JavaScript, dengan fitur CRUD, autentikasi pengguna, dan pelaporan.",
      "Mengelola lingkungan pengembangan menggunakan Laragon, termasuk konfigurasi aplikasi dan database selama proses pengembangan dan pengujian.",
      "Melakukan konfigurasi IP dan jaringan lokal (LAN) agar aplikasi dapat diakses dan diuji melalui beberapa komputer dalam jaringan yang sama.",
      "Melakukan testing dan troubleshooting untuk memastikan fitur dan aplikasi berjalan sesuai kebutuhan.",
      "Melakukan presentasi progres secara berkala kepada pihak terkait, menerima masukan, dan melakukan penyesuaian berdasarkan hasil evaluasi.",
      "Mendokumentasikan proses dan hasil pengembangan sebagai bagian dari pelaksanaan proyek.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "Figma",
      "LAN Network",
    ],
    image: "/images/experience/bupati-bangka.jpg",
    images: [
      "/images/experience/bupati-bangka-1.png",
      "/images/experience/bupati-bangka-2.png",
      "/images/experience/bupati-bangka-3.png",
      "/images/experience/bupati-bangka-4.png",
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
      "Melakukan pemasangan fisik, mounting, instalasi kabel, penyambungan daya, serta konfigurasi awal perangkat sesuai kebutuhan instalasi.",
      "Melakukan pengujian fungsional dan troubleshooting untuk memastikan perangkat dan sistem pendukung beroperasi dengan baik setelah instalasi.",
      "Memberikan edukasi dan pendampingan kepada pihak sekolah mengenai pengoperasian IFP, termasuk penggunaan fitur utama untuk mendukung kegiatan pembelajaran.",
      "Berkoordinasi dengan perwakilan sekolah dalam proses instalasi, pengujian, edukasi pengguna, dan serah terima perangkat.",
      "Berhasil menyelesaikan instalasi 76 unit IFP di berbagai sekolah di Kabupaten Bangka serta mendokumentasikan hasil instalasi untuk kebutuhan pelaporan proyek.",
      "Bekerja secara kolaboratif dalam tim teknis beranggotakan dua orang, mencakup instalasi, konfigurasi, pengujian, troubleshooting, edukasi pengguna, dan serah terima perangkat.",
    ],
    technologies: [
      "Interactive Flat Panel",
      "Hardware Mounting",
      "Network Setup",
      "Troubleshooting",
      "User Education",
    ],
    image: "/images/experience/hisense-install.jpg",
    images: [
      "/images/experience/hisense-install-1.png",
      "/images/experience/hisense-install-2.png",
      "/images/experience/hisense-install-3.png",
      "/images/experience/hisense-install-4.png",
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
      'Berkontribusi sebagai anggota tim dalam penelitian dosen mengenai pengembangan edu-game "Lom\'s Ethnic Journey", yang mengintegrasikan budaya lokal Suku Lom dengan materi Matematika dan Fisika.',
    responsibilities: [
      "Merancang dan mengembangkan aset visual menggunakan Blender, meliputi karakter, NPC, environment, dan objek pendukung game.",
      "Berkolaborasi dengan tim dalam proses pengembangan, evaluasi, dan penyempurnaan elemen visual serta aplikasi.",
      "Melakukan pengujian aplikasi untuk mengevaluasi fungsi dan tampilan serta memastikan aplikasi berjalan sesuai kebutuhan.",
      "Memberikan edukasi dan pendampingan penggunaan aplikasi kepada pengguna.",
    ],
    technologies: [
      "Blender",
      "2D Modeling",
      "Game Development",
      "Visual Design",
      "User Interface Design",
      "User Experience Design (UED)",
      "Problem Solving",
      "Teamwork",
    ],
    image: "/images/experience/edugame-research.jpg",
    images: [
      "/images/experience/edugame-research-1.png",
      "/images/experience/edugame-research-2.png",
      "/images/experience/edugame-research-3.png",
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
    technologies: [
      "Event Management",
      "Graphic Design",
      "Documentation",
      "Teamwork",
      "Project Coordination",
      "Community Engagement",
      "Communication",
    ],
    image: "/images/experience/community-engagement.jpg",
    images: [
      "/images/experience/community-engagement-1.png",
      "/images/experience/community-engagement-2.png",
      "/images/experience/community-engagement-3.png",
      "/images/experience/community-engagement-4.png",
      "/images/experience/community-engagement-5.png",
    ],
  },
];
