export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  longDescription?: string;
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
    longDescription:
      "Membangun Sistem Manajemen Aset dan Inventaris berbasis web selama program magang di Kantor Bupati Kabupaten Bangka. Sistem dirancang untuk membantu pengelolaan aset dan pemantauan inventaris secara lebih terstruktur dan efisien.",
    technologies: [
      "Figma",
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
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
    prototype:
      "https://www.figma.com/file/Gp66mrNXKzckp9EL8arT1q/Prototype-Stok-Kita",
    featured: true,
  },
  {
    id: "iot-ai-sistem-pemilah-sampah",
    title: "Sistem Pemilah Sampah Otomatis Berbasis IoT & AI",
    category: "IoT & AI",
    categories: ["IoT", "AI"],
    longDescription:
      "Mengembangkan prototipe sistem pemilah sampah otomatis berbasis Internet of Things (IoT) yang terintegrasi dengan model klasifikasi berbasis AI untuk mengidentifikasi sampah organik, anorganik, dan B3 secara real-time.",
    technologies: [
      "Next.js",
      "AI",
      "Roboflow",
      "Computer Vision",
      "Image Processing",
      "Raspberry Pi",
      "ESP32",
      "Sensors",
      "Servo",
      "C/C++",
    ],
    image: "/images/projects/pemilah-sampah.png",
    images: [
      "/images/projects/pemilah-sampah-1.png",
      "/images/projects/pemilah-sampah-2.png",
      "/images/projects/pemilah-sampah-3.png",
      "/images/projects/pemilah-sampah-4.png",
      "/images/projects/pemilah-sampah-5.png",
      "/images/projects/pemilah-sampah-6.png",
    ],
    slides: [
      "Presentasi dan Foto Tim",
      "Prototype Sistem",
      "Website Halaman Klasifikasi",
      "Website Halaman Monitoring",
      "Box Panel",
      "Wiring Box Panel",
    ],
    featured: true,
  },
  {
    id: "iot-clothesline",
    title: "Smart Clothesline Berbasis IoT & Blynk Cloud",
    category: "IoT",
    categories: ["IoT", "Embedded Systems"],
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
    category: "Design Game",
    categories: ["Game", "Research"],
    longDescription:
      "Lom’s Ethnic Journey merupakan edu-game yang dikembangkan dalam penelitian dosen di Politeknik Manufaktur Negeri Bangka Belitung sebagai media pembelajaran interaktif yang mengintegrasikan budaya lokal Suku Lom dengan materi Matematika dan Fisika.",
    technologies: [
      "Blender",
      "2D Asset Design",
      "Game Development",
      "Visual Design",
    ],
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
    longDescription:
      "Merancang konsep dan prototipe UI/UX EcoClean, aplikasi digital yang mendukung pengelolaan sampah melalui fitur jual beli barang, komunitas, investasi, dan layanan pendukung. Berfokus pada perancangan pengalaman pengguna yang intuitif, terstruktur, dan mudah digunakan.",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
      "Design System",
    ],
    image: "/images/projects/uiux-ecoclean.png",
    images: [
      "/images/projects/uiux-ecoclean-1.png",
      "/images/projects/uiux-ecoclean-2.png",
      "/images/projects/uiux-ecoclean-3.png",
    ],
    slides: ["Video Demo Prototipe", "Design System", "User Flow & Wireframe"],
    prototype:
      "https://www.figma.com/design/oBGlMWBGUvTNdKef9HTvoi/UI-UX?node-id=1669-162202&p=f&t=GhYL9q4HvnlnTzzo-0",
    featured: true,
  },
  {
    id: "agri-track-platform",
    title: "AgriTrack – Sistem Manajemen Pertanian",
    category: "Web",
    categories: ["Web"],
    longDescription:
      "Membangun platform AgriTrack berbasis web untuk digitalisasi tata kelola pertanian. Menyediakan fitur manajemen data lahan, pelacakan proses penanaman hingga panen, serta informasi prakiraan cuaca berbasis API pihak ketiga untuk mendukung keputusan agrikultur yang presisi.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "CSS", "API"],
    image: "/images/projects/agri-track.png",
    images: [
      "/images/projects/agri-track-1.png",
      "/images/projects/agri-track-2.png",
      "/images/projects/agri-track-3.png",
      "/images/projects/agri-track-4.png",
      "/images/projects/agri-track-5.png",
      "/images/projects/agri-track-6.png",
      "/images/projects/agri-track-7.png",
    ],
    slides: [
      "Halaman Login",
      "Halaman Beranda",
      "Halaman Data Lahan",
      "Halaman Penanaman",
      "Halaman Data Panen",
      "Halaman Info Cuaca",
      "Halaman Tentang",
    ],
    github: "https://github.com/arya-ramadhani/agritrack-platform",
    featured: true,
  },
  {
    id: "attendance-ocr-system",
    title: "Sistem Rekapitulasi Absensi Berbasis OCR",
    category: "Web, AI & Computer Vision",
    categories: ["AI & Computer Vision", "Web"],
    longDescription:
      "Membangun sistem rekapitulasi absensi otomatis berbasis OCR untuk mengekstrak data kehadiran dari dokumen menggunakan Python, OpenCV, dan Tesseract OCR. Sistem ini menerapkan preprocessing citra untuk meningkatkan akurasi ekstraksi, kemudian menyimpan hasilnya ke database MySQL melalui backend Laravel.",
    technologies: ["Laravel", "Tesseract OCR", "Python", "OpenCV", "MySQL"],
    image: "/images/projects/sistem-rekapitulasi-absensi.png",
    images: [
      "/images/projects/sistem-rekapitulasi-absensi-1.png",
    ],
    slides: ["Halaman Login"],
    github: "https://github.com/arya-ramadhani/sistem-rekapitulasi-absensi",
    featured: true,
  },
   {
    id: "manajemen-wisata",
    title: "WisataKite – Sistem Manajemen Wisata",
    category: "Web",
    categories: ["Web"],
    longDescription:
      "Membangun website WisataKite sebagai platform untuk menjelajahi berbagai destinasi wisata dan melakukan pemesanan wisata secara online. Website ini menyediakan informasi destinasi wisata untuk membantu pengguna menemukan tempat wisata yang menarik serta memudahkan proses pemesanan.",
    technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
    image: "/images/projects/wisatakite.png",
    images: [
      "/images/projects/wisatakite-1.png",
    ],
    slides: ["Halaman Home"],
    github: "https://github.com/arya-ramadhani/wisatakite-platform",
    featured: true,
  },
];
