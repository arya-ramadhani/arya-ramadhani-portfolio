export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  locationUrl?: string;
  description?: string;
  organizations: Organization[];
}

export interface Organization {
  role: string;
  name: string;
  period?: string;
  description?: string;
  image?: string;
  images?: string[];
}

export interface Publication {
  title: string;
  type: string;
  description?: string;
  year: string;
  metadata?: string;
  url?: string;
}

export const education: Education = {
  institution: "Politeknik Manufaktur Negeri Bangka Belitung",
  degree: "Sarjana Terapan Komputer (S.Tr.Kom)",
  field: "Rekayasa Perangkat Lunak",
  period: "2023 – Present",
  location: "Sungailiat, Bangka Belitung",
  locationUrl:
    "https://www.google.com/maps/search/Politeknik+Manufaktur+Negeri+Bangka+Belitung",
  organizations: [
    {
      role: "Sekretaris Wilayah",
      name: "Perhimpunan Mahasiswa Informatika dan Komputer Nasional Wilayah III",
      period: "Des 2025 – Sekarang",
      description:
        "Menjalankan fungsi kesekretariatan Wilayah III dengan mengelola administrasi, surat-menyurat, arsip, dan dokumentasi kegiatan organisasi. Mendukung Koordinator Wilayah (KORWIL) dalam perencanaan, koordinasi, dan pelaksanaan program kerja serta memastikan administrasi dan dokumentasi kegiatan berjalan secara terstruktur.",
    },
    {
      role: "Ketua Himpunan",
      name: "Himpunan Mahasiswa Jurusan Teknik Elektro dan Informatika",
      period: "Jul 2024 – Jul 2025",
      description:
        "Menjabat sebagai Ketua Himpunan Mahasiswa Jurusan Teknik Elektro dan Informatika dengan tanggung jawab memimpin organisasi, mengoordinasikan program kerja, serta menjadi penghubung antara mahasiswa, dosen, dan pihak institusi. Mengarahkan pelaksanaan kegiatan akademik dan non-akademik, mendukung pengembangan anggota, serta terlibat dalam pengambilan keputusan dan koordinasi organisasi.",
    },
    {
      role: "Anggota",
      name: "Unit Kegiatan Mahasiswa Robotika",
      period: "Sep 2023 – Jul 2024",
      description:
        "Berperan sebagai anggota UKM Robotika dengan fokus pada pengembangan keterampilan di bidang robotika, elektronika, mikrokontroler, dan pemrograman. Terlibat dalam kegiatan praktik dan pengembangan proyek robotika, serta berkolaborasi dengan anggota tim dalam proses perancangan, implementasi, pengujian, dan pemecahan masalah teknis.",
    },
  ],
};

export const publications: Publication[] = [
  {
    title: "Buku Klasifikasi Sampah Menggunakan YOLO dan IoT",
    type: "Book",
    year: "Jul 27, 2026",
    metadata: "ISBN · Idebuku.id",
    url: "https://idebuku.id/store/product/klasifikasi-sampah-menggunakan-yolo-dan-iot/",
  },
  {
    title:
      "Development of the Edu-Game Media Lom's Ethnic Journey to Enhance Interest in Learning Mathematics and Physics Among Students",
    type: "Journal Article",
    year: "Jan 15, 2025",
    metadata: "SINTA 2 · JINOTEP",
    url: "https://journal-fip.um.ac.id/index.php/jinotep/article/view/1325",
  },
];
