export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  longDescription?: string;
  role: string;
  technologies: string[];
  image: string;
  images?: string[];
  slides?: string[];
  github?: string;
  liveDemo?: string;
  prototype?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "asset-inventory-management",
    title: "Stokita – Sistem Manajemen Aset & Inventaris",
    category: "Web",
    categories: ["Web", "Enterprise"],
    role: "Full-Stack Developer & UI/UX",
    longDescription:
      "Membangun Sistem Manajemen Aset dan Inventaris berbasis web selama program magang di Kantor Bupati Kabupaten Bangka. Sistem dirancang untuk membantu pengelolaan aset dan pemantauan inventaris secara lebih terstruktur dan efisien.",
    technologies: ["Figma", "Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/images/projects/asset-management.png",
    images: [
      "/images/projects/asset-management-1.png",
      "/images/projects/asset-management-2.png",
      "/images/projects/asset-management-3.png",
      "/images/projects/asset-management-4.png",
      "/images/projects/asset-management-5.png",
      "/images/projects/asset-management-6.png",
    ],
    slides: [
      "Halaman Login",
      "Halaman Dashboard",
      "Halaman Manajemen Aset",
      "Halaman Data Gudang",
      "Halaman Riwayat",
      "Halaman Laporan",
    ],
    github: "https://github.com/NessLM/sistem-informasi-stok-barang",
    prototype: "https://www.figma.com/file/Gp66mrNXKzckp9EL8arT1q/Prototype-Stok-Kita",
    featured: true,
  },
  {
    id: "attendance-ocr-system",
    title: "Sistem Rekapitulasi Presensi Berbasis OCR",
    category: "AI & Computer Vision",
    categories: ["AI & Computer Vision", "Web"],
    role: "AI & Computer Vision Engineer",
    longDescription:
      "Mengotomatiskan entri data presensi absensi harian yang sebelumnya dilakukan manual. Menggunakan algoritma pengolahan citra (image preprocessing, adaptive binarization, contour deskewing) OpenCV untuk membersihkan noise dokumen sebelum diekstrak oleh engine Tesseract OCR ke database Laravel.",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Laravel", "MySQL"],
    image: "/images/projects/attendance-ocr.jpg",
    images: [
      "/images/projects/attendance-ocr.jpg",
      "/images/projects/attendance-ocr-2.jpg",
      "/images/projects/attendance-ocr-3.jpg",
    ],
    slides: [
      "Demo Sistem OCR",
      "Hasil Ekstraksi Data",
      "Output Rekap Digital",
    ],
    featured: true,
  },
  {
    id: "iot-clothesline",
    title: "Smart Clothesline Berbasis IoT & Blynk Cloud",
    category: "IoT",
    categories: ["IoT", "Embedded Systems"],
    role: "IoT Firmware & Hardware Engineer",
    longDescription:
      "Mengembangkan sistem Smart Clothesline berbasis IoT menggunakan ESP32, servo motor, sensor hujan, buzzer, dan aplikasi Blynk. Sistem dirancang untuk membuka dan menutup jemuran secara otomatis berdasarkan jadwal yang ditentukan serta kondisi hujan secara real-time.",
    technologies: ["Blynk", "ESP32", "Sensors", "Servo", "C/C++"],
    image: "/images/projects/jemuran-otomatis.png",
    images: [
      "/images/projects/jemuran-otomatis-1.mp4",
      "/images/projects/jemuran-otomatis-2.png",
      "/images/projects/jemuran-otomatis-3.png",
    ],
    slides: [
      "Video Demo Sistem",
      "Presentasi dengan Dosen",
      "Foto Tim & Prototype",
    ],
    featured: true,
  },
  {
    id: "loms-ethnic-journey",
    title: "Lom's Ethnic Journey (Educational Game)",
    category: "Game",
    categories: ["Game", "Research"],
    role: "Game Research & 2D Asset Artist",
    longDescription:
      "Lom’s Ethnic Journey merupakan edu-game yang dikembangkan dalam penelitian dosen di Politeknik Manufaktur Negeri Bangka Belitung sebagai media pembelajaran interaktif yang mengintegrasikan budaya lokal Suku Lom dengan materi Matematika dan Fisika.",
    technologies: ["Blender", "2D Asset Design", "Game Development", "Visual Design"],
    image: "/images/projects/loms-journey.png",
    images: [
      "/images/projects/loms-journey-1.png",
      "/images/projects/loms-journey-2.png",
      "/images/projects/loms-journey-3.png",
      "/images/projects/loms-journey-4.png",
      "/images/projects/loms-journey-5.png",
    ],
    slides: [
      "Tampilan Awal",
      "Tampilan Tim Pengembang",
      "Desain Aset Gameplay & Mekanisme",
      "Desain Karakter NPC",
      "Desain Karakter Utama",
    ],
    featured: true,
  },
  {
    id: "uiux-competition-gontor",
    title: "EcoClean – UI/UX Mobile App Design",
    category: "UI/UX Design",
    categories: ["UI/UX Design"],
    role: "UI/UX Designer",
    longDescription:
      "Merancang konsep dan prototipe UI/UX EcoClean, aplikasi digital yang mendukung pengelolaan sampah melalui fitur jual beli barang, komunitas, investasi, dan layanan pendukung. Berfokus pada perancangan pengalaman pengguna yang intuitif, terstruktur, dan mudah digunakan.",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping", "Design System"],
    image: "/images/projects/uiux-ecoclean.png",
    images: [
      "/images/projects/uiux-ecoclean-1.png",
      "/images/projects/uiux-ecoclean-2.png",
      "/images/projects/uiux-ecoclean-3.png",
    ],
    slides: [
      "Video Demo Prototipe",
      "Design System",
      "User Flow & Wireframe",
    ],
    prototype:"https://www.figma.com/design/oBGlMWBGUvTNdKef9HTvoi/UI-UX?node-id=1669-162202&p=f&t=GhYL9q4HvnlnTzzo-0",
    featured: true,
  },
];
