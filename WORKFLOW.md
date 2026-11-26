# WORKFLOW.md — Development Workflow
> **Arya Ramadhani — Personal Portfolio Website**
> Panduan cara kerja pengembangan fitur dan kolaborasi dengan AI.

---

## 1. Alur Pengembangan Fitur

```
1. Identifikasi kebutuhan
        ↓
2. Update TODO.md (tandai "🔄 In Progress")
        ↓
3. Baca file terkait (data, component, style)
        ↓
4. Implementasi perubahan
        ↓
5. Validasi (type check, visual check mobile + desktop)
        ↓
6. Update TODO.md (tandai "✅ Done")
        ↓
7. Commit ke Git dengan pesan yang jelas
```

---

## 2. Kapan AI Boleh Bekerja Sendiri

AI **boleh langsung mengerjakan** tanpa konfirmasi jika:

| Jenis Pekerjaan | Contoh |
|-----------------|--------|
| Update data konten | Tambah publikasi baru di `publications.ts` |
| Perbaikan bug minor | Fix broken import, typo, path salah |
| Perbaikan penamaan file | Rename file aset ke kebab-case |
| Styling perbaikan kecil | Adjust padding/margin, perbaiki responsif |
| Pemisahan/refactor file data | Seperti memisahkan `publications` dari `education.ts` |
| Update komentar/dokumentasi | AGENTS.md, TODO.md, ARCHITECTURE.md |
| Fix TypeScript error | Menambahkan type yang hilang |

---

## 3. Kapan AI Harus Meminta Izin

AI **wajib bertanya dulu** sebelum melakukan:

| Jenis Pekerjaan | Alasan |
|-----------------|--------|
| Install package baru | Bisa mengubah `package.json` dan `node_modules` |
| Ubah arsitektur folder | Bisa merusak import di banyak file |
| Tambah komponen baru dari nol | Memerlukan konfirmasi desain dan data |
| Ubah `globals.css` | Berdampak ke seluruh tampilan aplikasi |
| Ubah `layout.tsx` | Mempengaruhi metadata dan struktur global |
| Hapus file atau komponen | Tidak bisa dibatalkan tanpa Git |
| Ubah interface data utama | Berdampak ke banyak komponen |
| Deploy atau konfigurasi hosting | Aksi permanen di environment production |

---

## 4. Standar Commit Git

```bash
# Format: [tipe]: deskripsi singkat
feat: tambah publikasi YOLOv12n J-INTECH
fix: perbaiki URL path LoA PDF publications
refactor: pisahkan publications.ts dari education.ts
style: perbaiki responsif ProjectCard di mobile
docs: update TODO.md dan ARCHITECTURE.md
chore: rename file PDF LoA ke kebab-case
```

**Tipe commit:**
- `feat` — fitur baru
- `fix` — perbaikan bug
- `refactor` — perubahan kode tanpa fitur/bug
- `style` — perubahan visual/styling
- `docs` — perubahan dokumentasi
- `chore` — task teknis (rename, konfigurasi)

---

## 5. Standar Fitur Selesai (Definition of Done)

Sebuah fitur dinyatakan **selesai** jika memenuhi semua kriteria:

```
✅ Fungsional di Chrome/Firefox terbaru
✅ Responsif di mobile (375px), tablet (768px), desktop (1280px)
✅ Tampil baik di dark mode dan light mode
✅ Tidak ada TypeScript error (tsc --noEmit bersih)
✅ Tidak ada ESLint error/warning
✅ Semua gambar/file aset tersedia di path yang benar
✅ Link/URL dapat dibuka (tidak 404)
✅ TODO.md diupdate ke "✅ Done"
✅ Pesan commit sudah sesuai format
```

---

## 6. Prioritas Pekerjaan

| Prioritas | Deskripsi | Contoh |
|-----------|-----------|--------|
| **P0** | Blocking — harus selesai segera | Halaman tidak bisa dibuka, form error |
| **P1** | High — diselesaikan dalam sesi kerja ini | Fitur inti belum berfungsi |
| **P2** | Medium — dapat ditunda ke sesi berikutnya | Polishing visual, animasi |
| **P3** | Low — opsional/nice to have | Fitur eksperimental, optimasi lanjut |

---

## 7. Manajemen Aset (Gambar & File)

### Penamaan File Aset

```
✅ kebab-case, lowercase, tanpa spasi
loa-yolov12n-smart-waste-bin-j-intech.pdf
bupati-bangka-cover.jpg
asset-management-dashboard.png

❌ Hindari spasi, uppercase, karakter khusus
LoA 110 - File Jurnal.pdf
Bupati_Bangka.JPG
```

### Lokasi Aset

```
public/images/
├── experience/      ← Foto pengalaman kerja
├── organizations/   ← Foto organisasi kemahasiswaan
├── projects/        ← Screenshot & video proyek (.png, .mp4)
└── publications/    ← PDF LoA publikasi
```

### Referensi dari Kode

Selalu gunakan path dari root `public/` tanpa prefix `public`:

```typescript
// ✅ Benar
image: "/images/projects/asset-management.png"
url: "/images/publications/loa-yolov12n-smart-waste-bin-j-intech.pdf"

// ❌ Salah
image: "public/images/projects/asset-management.png"
url: "public\\images\\publications\\LoA File.pdf"
```

---

## 8. Environment & Rahasia

- File `.env.local` **tidak di-commit ke Git** (sudah ada di `.gitignore`)
- Variabel yang dibutuhkan: `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`
- Saat deploy ke Vercel, set environment variable di dashboard Vercel
