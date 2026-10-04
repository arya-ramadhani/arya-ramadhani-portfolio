# Panduan Menambahkan Foto Dokumentasi Organisasi

Folder ini digunakan untuk menyimpan foto dokumentasi kegiatan/organisasi yang akan tampil pada modal detail di bagian **Formal Education & Leadership**.

## Struktur File yang Direkomendasikan
Simpan gambar dengan format `.jpg`, `.jpeg`, `.png`, atau `.webp` di dalam folder ini:
- `permikomnas.webp` (atau `.jpg`) -> Untuk *Perhimpunan Mahasiswa Informatika dan Komputer Nasional Wilayah III*
- `hmei.webp` (atau `.jpg`) -> Untuk *Himpunan Mahasiswa Jurusan Teknik Elektro dan Informatika*
- `robotika.webp` (atau `.jpg`) -> Untuk *Unit Kegiatan Mahasiswa Robotika*

## Cara Menghubungkan ke Data
Buka file `data/education.ts` dan tambahkan properti `image` pada masing-masing organisasi:

```ts
{
  role: "Sekretaris Wilayah",
  name: "Perhimpunan Mahasiswa Informatika dan Komputer Nasional Wilayah III",
  period: "Des 2025 – Sekarang",
  image: "/images/organizations/permikomnas.webp", // <-- Tambahkan path gambar disini
  description: "...",
}
```

Jika gambar belum dimasukkan atau error, sistem akan otomatis menampilkan blueprint placeholder bergaya teknologi yang profesional dengan rapi tanpa broken image!
