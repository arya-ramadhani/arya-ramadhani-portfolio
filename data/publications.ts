export interface Publication {
  title: string;
  type: string;
  description?: string;
  year: string;
  metadata?: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Development of the Edu-Game Media Lom's Ethnic Journey to Enhance Interest in Learning Mathematics and Physics Among Students",
    type: "Journal Article",
    year: "15 Januari 2025",
    metadata: "SINTA 2 · JINOTEP",
    url: "https://journal-fip.um.ac.id/index.php/jinotep/article/view/1325",
  },
  {
    title: "Buku Klasifikasi Sampah Menggunakan YOLO dan IoT",
    type: "Book",
    year: "27 Juli 2026",
    metadata: "ISBN · Idebuku.id",
    url: "https://idebuku.id/store/product/klasifikasi-sampah-menggunakan-yolo-dan-iot/",
  },
  {
    title: "YOLOv12n and IoT-Based Smart Waste Bin on Raspberry Pi",
    type: "Journal Article",
    year: "03 September 2026",
    metadata: "SINTA 4 · J-INTECH",
    url: "/images/publications/loa-yolov12n-smart-waste-bin-j-intech.pdf",
  },
  {
    title: "Sistem Klasifikasi dan Monitoring Sampah secara Real-Time Berbasis Internet of Things (IoT)",
    type: "Journal Article",
    year: "16 Oktober 2026",
    metadata: "SINTA 3 · SEMANTIK",
    url: "/images/publications/loa-yolov12n-sistem-klasifikasi-semantik.pdf",
  },
];
