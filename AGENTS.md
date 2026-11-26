# AGENTS.md — AI Coding Instructions
> **Arya Ramadhani — Personal Portfolio Website**
> Instruksi wajib untuk AI coding agent (Antigravity, Claude, dsb.)

---

## 1. Prinsip Dasar

- **Baca sebelum tulis.** Selalu baca file yang akan dimodifikasi sebelum membuat perubahan.
- **Minimal footprint.** Hanya ubah apa yang diminta. Jangan refactor kode yang tidak terkait.
- **TypeScript strict.** Semua kode harus type-safe. Tidak boleh menggunakan `any` kecuali ada alasan kuat dan diberi komentar.
- **Tailwind only.** Gunakan class Tailwind untuk semua styling. Jangan tambahkan inline style kecuali untuk nilai dinamis (misalnya `brandColor`).
- **Konsistensi visual.** Gunakan token warna yang sudah ada (`text-text`, `text-text-secondary`, `bg-surface`, `text-accent`, dll.) — jangan hardcode warna baru tanpa diskusi.

---

## 2. Struktur Data (`data/*.ts`)

### 2.1 Aturan Modifikasi Data

```
data/
├── education.ts      → Hanya untuk Education + Organization
├── experience.ts     → Hanya untuk Experience (Work + Leadership)
├── projects.ts       → Hanya untuk Project
├── publications.ts   → Hanya untuk Publication
└── skills.ts         → Hanya untuk TechSkill, Specialization, SkillCategory
```

- **JANGAN** pindahkan interface antar file tanpa memperbarui semua import-nya
- **JANGAN** tambahkan field baru ke interface tanpa update semua tempat yang memakainya
- **SELALU** gunakan path absolut Next.js untuk asset: `/images/...` (bukan `public/images/...`)
- **SELALU** gunakan nama file kebab-case tanpa spasi: `loa-nama-jurnal.pdf`, bukan `LoA File Jurnal.pdf`

### 2.2 URL & Link

```typescript
// ✅ Benar — URL eksternal
url: "https://journal-fip.um.ac.id/..."

// ✅ Benar — file PDF LoA (path dari public/)
url: "/images/publications/loa-nama-jurnal.pdf"

// ❌ Salah — path sistem operasi dengan backslash
url: "public\\images\\publications\\LoA File.pdf"

// ❌ Salah — path relatif tanpa leading slash
url: "images/publications/file.pdf"
```

---

## 3. Komponen React (`components/*.tsx`)

### 3.1 Struktur Komponen Baru

```tsx
"use client"; // hanya jika menggunakan hooks, event handler, atau WebGL

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
// import data di sini

export default function NamaSection() {
  return (
    <section id="nama-section" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... */}
      </div>
    </section>
  );
}
```

### 3.2 Hal yang Dilarang

- ❌ Jangan gunakan `useEffect` untuk data fetching — semua data sudah tersedia di `data/*.ts`
- ❌ Jangan install package baru tanpa konfirmasi user
- ❌ Jangan modifikasi `globals.css` untuk menambah utility class baru — gunakan Tailwind
- ❌ Jangan gunakan `document.getElementById` secara langsung — gunakan React ref
- ❌ Jangan hapus `"use client"` dari komponen yang menggunakan browser API (WebGL, canvas, event)

### 3.3 Animasi (Framer Motion)

```tsx
// ✅ Gunakan pola yang sudah ada
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

---

## 4. API Route (`app/api/`)

- Saat ini hanya ada `app/api/contact/route.ts` untuk form kontak
- Jika perlu API baru, diskusikan terlebih dahulu sebelum membuat
- Semua environment variable diakses via `process.env.VARIABLE_NAME`
- **JANGAN** commit file `.env.local` ke Git

---

## 5. Penambahan Konten

### Tambah Proyek Baru

1. Tambahkan objek ke array `projects` di `data/projects.ts`
2. Sediakan gambar di `public/images/projects/` dengan format `nama-proyek.png`
3. Ikuti interface `Project` yang sudah ada

### Tambah Publikasi Baru

1. Tambahkan objek ke array `publications` di `data/publications.ts`
2. Jika ada file LoA PDF:
   - Simpan di `public/images/publications/`
   - Nama file: `loa-[nama-singkat]-[nama-jurnal].pdf` (kebab-case, lowercase)
   - Set `url: "/images/publications/nama-file.pdf"`
3. Jika jurnal sudah terbit (ada URL online), gunakan URL eksternal langsung

### Tambah Pengalaman Baru

1. Tambahkan objek ke array `experiences` di `data/experience.ts`
2. Ikuti interface `Experience` — field `id` wajib unik (kebab-case)

---

## 6. Testing & Validasi

Sebelum menyatakan task selesai, AI **wajib** memverifikasi:

- [ ] Tidak ada TypeScript error pada file yang dimodifikasi
- [ ] Import path sudah benar dan tidak ada broken import
- [ ] URL/path gambar menggunakan format `/images/...`
- [ ] Nama file aset menggunakan kebab-case tanpa spasi atau karakter khusus
- [ ] Komponen baru sudah di-import dan digunakan di tempat yang tepat

---

## 7. Hal yang Memerlukan Konfirmasi User

AI **harus bertanya dulu** sebelum:

- Menginstall package baru (`npm install ...`)
- Mengubah struktur folder secara signifikan
- Memodifikasi `app/layout.tsx` (metadata global)
- Memodifikasi `globals.css` (token warna/global style)
- Mengubah logika pengiriman email di `/api/contact`
- Menghapus file atau komponen yang sudah ada
- Mengubah interface data yang berdampak ke banyak komponen
