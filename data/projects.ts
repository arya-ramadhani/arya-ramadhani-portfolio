export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  longDescription?: string;
  role: string;
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  featured: boolean;
  metrics?: string;
}

export const projects: Project[] = [
  {
    id: "asset-inventory-management",
    title: "Sistem Manajemen Aset & Inventaris",
    category: "Web",
    categories: ["Web", "Enterprise"],
    role: "Full-Stack Developer & UI/UX",
    description:
      "Aplikasi web terintegrasi untuk mendigitalkan dan mengotomatiskan pengelolaan aset dan inventaris di lingkungan Kantor Bupati Bangka.",
    longDescription:
      "Dikembangkan dari awal meliputi analisis kebutuhan proses bisnis, perancangan UI/UX di Figma, arsitektur database MySQL, serta implementasi framework Laravel. Dilengkapi modul mutasi aset, verifikasi penanggung jawab, pelaporan eksekutif, dan konfigurasi jaringan LAN untuk akses multi-komputer terpadu.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Figma"],
    image: "/images/projects/asset-management.jpg",
    featured: true,
    metrics: "Production Enterprise",
  },
  {
    id: "hisense-digital-learning",
    title: "Program Digitalisasi Pembelajaran (76 Unit IFP)",
    category: "Hardware",
    categories: ["Hardware", "Digital Learning"],
    role: "Technical Installation Lead",
    description:
      "Implementasi dan deployment 76 unit Interactive Flat Panel (IFP) di berbagai sekolah Kabupaten Bangka bersama PT Hisense International Indonesia.",
    longDescription:
      "Melakukan instalasi perangkat keras display interaktif layar sentuh resolusi tinggi, perakitan bracket mounting dinding, instalasi kabel daya & display, setup jaringan, uji fungsi komprehensif, serta pelatihan teknis penggunaan untuk guru dan staf sekolah.",
    technologies: ["Interactive Flat Panel", "Hardware Mounting", "Network Setup", "Troubleshooting"],
    image: "/images/projects/hisense-ifp.jpg",
    featured: true,
    metrics: "76 Units Deployed",
  },
  {
    id: "attendance-ocr-system",
    title: "Sistem Rekapitulasi Presensi Berbasis OCR",
    category: "AI & Computer Vision",
    categories: ["AI & Computer Vision", "Web"],
    role: "AI & Computer Vision Engineer",
    description:
      "Sistem pemindaian cerdas otomatis yang mengekstrak data presensi fisik/kertas menjadi rekaman digital menggunakan Computer Vision & Tesseract OCR.",
    longDescription:
      "Mengotomatiskan entri data presensi absensi harian yang sebelumnya dilakukan manual. Menggunakan algoritma pengolahan citra (image preprocessing, adaptive binarization, contour deskewing) OpenCV untuk membersihkan noise dokumen sebelum diekstrak oleh engine Tesseract OCR ke database Laravel.",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Laravel", "MySQL"],
    image: "/images/projects/attendance-ocr.jpg",
    featured: true,
    metrics: "Automated OCR Pipeline",
  },
  {
    id: "iot-clothesline",
    title: "Jemuran Otomatis Berbasis IoT & Blynk Cloud",
    category: "IoT",
    categories: ["IoT", "Embedded Systems"],
    role: "IoT Firmware & Hardware Engineer",
    description:
      "Sistem jemuran pintar otomatis yang merespons cuaca secara real-time dengan kendali motor servo dan pemantauan jarak jauh via smartphone.",
    longDescription:
      "Memanfaatkan mikrokontroler ESP32/Arduino yang terhubung dengan sensor air hujan dan sensor LDR (cahaya). Ketika terdeteksi hujan atau malam hari, motor servo otomatis menarik jemuran ke tempat teduh. Dilengkapi dashboard telemetri cloud Blynk untuk kontrol manual dan notifikasi status instan.",
    technologies: ["ESP32", "Arduino", "Blynk", "Sensors", "Servo", "C/C++"],
    image: "/images/projects/iot-clothesline.jpg",
    featured: true,
    metrics: "Autonomous Weather Sensing",
  },
  {
    id: "loms-ethnic-journey",
    title: "Lom's Ethnic Journey (Educational Game)",
    category: "Game",
    categories: ["Game", "Research"],
    role: "Game Research & 2D Asset Artist",
    description:
      "Game edukasi interaktif yang memadukan kearifan budaya lokal Suku Lom dengan materi Fisika dan Matematika.",
    longDescription:
      "Proyek penelitian akademik yang merancang media pembelajaran gamifikasi interaktif. Mengangkat narasi tradisi dan kearifan Suku Lom, Bangka Belitung, yang dikombinasikan dengan tantangan teka-teki logika fisika gerak dan perhitungan matematika dasar.",
    technologies: ["Blender", "2D Asset Design", "Game Physics", "Research"],
    image: "/images/projects/loms-journey.jpg",
    featured: true,
    metrics: "Cultural Heritage Research",
  },
  {
    id: "uiux-competition-gontor",
    title: "UI/UX Mobile App Design - Gontor Competition",
    category: "UI/UX Design",
    categories: ["UI/UX Design"],
    role: "Lead UI/UX Designer",
    description:
      "Desain produk antarmuka dan pengalaman pengguna (UI/UX) aplikasi mobile modern pada kompetisi nasional Universitas Darussalam Gontor.",
    longDescription:
      "Mencakup keseluruhan proses Design Thinking: user research, problem statement, pembuatan user persona, user journey map, wireframe low-fidelity, hingga high-fidelity interactive prototype di Figma yang menerapkan design token sistematis dan micro-interactions.",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping", "Design System"],
    image: "/images/projects/uiux-gontor.jpg",
    featured: true,
    metrics: "National Competition Entry",
  },
];

export const projectCategories = [
  "All",
  "Web",
  "Hardware",
  "IoT",
  "AI & Computer Vision",
  "UI/UX Design",
  "Game",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
