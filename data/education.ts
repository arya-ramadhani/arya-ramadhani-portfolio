export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
  organizations: Organization[];
}

export interface Organization {
  role: string;
  name: string;
  period?: string;
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
  organizations: [
    {
      role: "Sekretaris Wilayah",
      name: "Perhimpunan Mahasiswa Informatika dan Komputer Nasional Wilayah III",
      period: "Des 2025 – Sekarang",
    },
    {
      role: "Ketua Himpunan",
      name: "Himpunan Mahasiswa Jurusan Teknik Elektro dan Informatika",
      period: "Jul 2024 – Jul 2025",
    },
    {
      role: "Anggota",
      name: "Unit Kegiatan Mahasiswa Robotika",
      period: "Sep 2023 – Jul 2024",
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
