# SKILL.md — Reusable Prompt Library
> **Arya Ramadhani — Personal Portfolio Website**
> Kumpulan instruksi siap pakai untuk task berulang: testing, debugging, refactoring, review, dan optimasi.

---

## 📋 Cara Pakai

Copy salah satu prompt di bawah, tempel ke chat AI, dan sesuaikan bagian yang diapit `[...]`.

---

## 🔍 1. Debugging — Fix Komponen Rusak

```
Komponen [NamaKomponen.tsx] tidak berfungsi seperti yang diharapkan.

Masalah: [deskripsi masalah — apa yang terlihat, apa yang seharusnya terjadi]

Tolong:
1. Baca file components/[NamaKomponen.tsx]
2. Identifikasi penyebab masalah
3. Perbaiki masalah tersebut
4. Pastikan tidak ada TypeScript error setelah perbaikan
5. Jelaskan apa yang salah dan apa yang kamu ubah
```

---

## ➕ 2. Tambah Data Konten Baru

### Tambah Proyek

```
Tolong tambahkan proyek baru ke data/projects.ts dengan data berikut:

- id: "[id-proyek-kebab-case]"
- title: "[Judul Proyek]"
- category: "[Web / IoT / AI / UI/UX Design / Game]"
- categories: ["...", "..."]
- longDescription: "[Deskripsi panjang]"
- technologies: ["Tech1", "Tech2", "..."]
- image: "/images/projects/[nama-file.png]"
- images: ["/images/projects/[nama-file-1.png]", ...]
- slides: ["Label Gambar 1", "Label Gambar 2", ...]
- github: "[URL atau hapus field ini jika tidak ada]"
- liveDemo: "[URL atau hapus field ini jika tidak ada]"
- prototype: "[URL Figma atau hapus field ini jika tidak ada]"
- featured: true

Ikuti struktur interface Project yang sudah ada di file tersebut.
```

### Tambah Publikasi

```
Tolong tambahkan publikasi baru ke data/publications.ts:

- title: "[Judul Publikasi]"
- type: "[Journal Article / Book / Conference Paper]"
- year: "[DD Bulan YYYY]"
- metadata: "[Peringkat SINTA] · [Nama Jurnal/Penerbit]"
- url: "[URL jurnal ATAU /images/publications/nama-file.pdf]"

Jika ada file LoA PDF:
- File PDF sudah ada di: public/images/publications/[nama-file.pdf]
- Gunakan nama file format kebab-case tanpa spasi

Ikuti struktur interface Publication yang sudah ada.
```

---

## 🎨 3. Perbaikan Responsif Mobile

```
Section [NamaSection] terlihat tidak rapi di layar mobile (375px - 640px).

Masalah spesifik: [deskripsi — overflow, teks terpotong, tombol terlalu kecil, dsb.]

Tolong:
1. Baca file components/[NamaSection.tsx]
2. Identifikasi class Tailwind yang menyebabkan masalah
3. Perbaiki responsivitas menggunakan breakpoint Tailwind (sm:, md:, lg:)
4. Jangan ubah tampilan desktop
5. Test secara mental di lebar 375px, 640px, dan 1280px
```

---

## 🔗 4. Fix URL atau Path Aset

```
Terdapat URL/path yang salah di [data/publications.ts / data/projects.ts / data/experience.ts].

Tolong:
1. Baca file tersebut
2. Cari semua URL yang menggunakan format lama (backslash, prefix "public/", nama dengan spasi)
3. Perbaiki ke format yang benar:
   - File lokal: "/images/[folder]/[nama-kebab-case.ext]"
   - URL eksternal: "https://..."
4. Jangan ubah konten lain di file tersebut
```

---

## 🔄 5. Refactor — Pisah Komponen Besar

```
Komponen [NamaKomponen.tsx] sudah terlalu besar (> 300 baris) dan sulit dibaca.

Tolong:
1. Baca file components/[NamaKomponen.tsx]
2. Identifikasi bagian yang dapat dipecah menjadi sub-komponen
3. Buat sub-komponen baru di folder components/ dengan nama yang jelas
4. Import sub-komponen tersebut ke komponen utama
5. Pastikan tidak ada perubahan visual (output harus identik)
6. Jangan ubah logika atau data, hanya struktur kode
```

---

## 🔎 6. Audit TypeScript

```
Tolong audit file [nama-file.ts / nama-file.tsx] untuk memastikan type safety.

Cek:
1. Tidak ada penggunaan `any` tanpa alasan
2. Semua props komponen memiliki type yang eksplisit
3. Semua nilai yang bisa `undefined` atau `null` sudah dihandle
4. Interface dan type sudah konsisten dengan yang dipakai di tempat lain
5. Import type menggunakan `import type` jika memungkinkan

Laporkan semua temuan dan perbaiki yang bisa diperbaiki.
```

---

## ⚡ 7. Optimasi Performa

```
Tolong analisis dan optimalkan performa komponen [NamaKomponen.tsx].

Fokus pada:
1. Gunakan `next/image` alih-alih tag `<img>` biasa untuk semua gambar
2. Tambahkan `loading="lazy"` untuk gambar di bawah fold
3. Gunakan `React.memo` atau `useMemo` jika ada komputasi berat
4. Pastikan animasi Framer Motion menggunakan `viewport={{ once: true }}`
5. Komponen Three.js wajib menggunakan dynamic import dengan `ssr: false`

Jelaskan setiap optimasi yang dilakukan.
```

---

## 🔐 8. Review Keamanan (Contact Form)

```
Tolong review keamanan file app/api/contact/route.ts.

Cek:
1. Input validation — apakah nama, email, dan pesan sudah divalidasi?
2. Email injection — apakah ada sanitasi pada nilai yang masuk ke header email?
3. Rate limiting — apakah ada proteksi terhadap spam/abuse?
4. Environment variable — apakah credential tidak hardcode di kode?
5. Error response — apakah error message tidak mengekspos informasi sensitif?

Laporkan temuan dan berikan rekomendasi perbaikan.
```

---

## 🌙 9. Cek Dark Mode

```
Tolong verifikasi komponen [NamaKomponen.tsx] tampil dengan benar di dark mode.

Cek:
1. Semua teks menggunakan token warna (`text-text`, `text-text-secondary`) bukan hardcode
2. Semua background menggunakan token (`bg-surface`, `bg-background`) bukan hardcode
3. Tidak ada hardcode `text-black` atau `text-white` tanpa kondisi dark:
4. Warna aksen menggunakan `text-accent` / `border-accent`
5. Gambar dan ikon masih terlihat jelas di dark background

Perbaiki jika ada yang hardcode.
```

---

## 📸 10. Checklist Aset Gambar

```
Tolong verifikasi semua path gambar yang digunakan di [data/projects.ts / data/experience.ts / data/education.ts].

Untuk setiap path gambar:
1. Konfirmasi format: harus diawali `/images/` (bukan `public/images/`)
2. Konfirmasi nama file: harus kebab-case tanpa spasi
3. List semua path yang ditemukan

Laporkan mana yang formatnya sudah benar dan mana yang perlu diperbaiki.
```
