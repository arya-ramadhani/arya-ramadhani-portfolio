# PRD — Product Requirements Document
> **Arya Ramadhani — Personal Portfolio Website**
> Version: 1.0 | Last Updated: November 2026

---

## 1. Latar Belakang & Tujuan

Portfolio ini dibangun untuk mempresentasikan identitas profesional Arya Ramadhani — mahasiswa Sarjana Terapan Komputer (Rekayasa Perangkat Lunak) di Politeknik Manufaktur Negeri Bangka Belitung — kepada recruiter, dosen, kolaborator, dan komunitas teknologi.

**Tujuan utama:**
- Menjadi *digital resume* interaktif yang memuat pengalaman, proyek, skill, publikasi, dan organisasi
- Meninggalkan kesan profesional dan teknis yang kuat dalam waktu < 10 detik kunjungan pertama
- Mempermudah recruiter dan klien menemukan, menghubungi, dan mengevaluasi kapabilitas

---

## 2. Masalah yang Diselesaikan

| Masalah | Solusi |
|--------|--------|
| Resume PDF statis tidak bisa menampilkan proyek secara visual | Gallery gambar/video interaktif di setiap kartu proyek |
| Sulit membuktikan kemampuan teknis hanya lewat tulisan | Tech sphere 3D, dev activity graph, dan skill catalog |
| Tidak ada satu tempat yang merangkum semua pencapaian | Satu halaman yang memuat experience, projects, publications, dan education |
| Kontak manual yang tidak efisien | Form kontak terintegrasi dengan nodemailer |

---

## 3. Target Pengguna

| Segmen | Kebutuhan |
|--------|-----------|
| **Recruiter / HRD** | Melihat pengalaman kerja, skill, dan proyek dengan cepat |
| **Dosen / Akademisi** | Melihat publikasi ilmiah dan proyek riset |
| **Klien Freelance** | Menilai portofolio desain dan pengembangan |
| **Komunitas Dev / GitHub** | Mengeksplorasi proyek open-source dan tech stack |
| **Sesama Mahasiswa** | Referensi dan inspirasi portfolio teknis |

---

## 4. Fitur Utama

### 4.1 Hero Section
- Animasi typing nama dan role
- Avatar 3D interaktif (Three.js)
- Particle field background
- CTA ke GitHub, LinkedIn, Resume PDF

### 4.2 About
- Ringkasan profil dan deskripsi diri
- Statistik pencapaian (projects, experience, publications)
- Interactive terminal dengan perintah simulasi

### 4.3 Skills
- Tech sphere 3D (visualisasi skill berputar)
- Skill catalog dengan filter per kategori (Full Stack, IoT, AI, UI/UX)
- Supporting skills grid

### 4.4 Experience
- Timeline pengalaman kerja dan organisasi
- Kartu expandable dengan responsibilities dan teknologi
- Filter berdasarkan tipe (Work / Leadership)

### 4.5 Projects
- Gallery kartu proyek dengan gambar/video slideshow
- Filter per kategori (Web, IoT, AI, UI/UX, Game)
- Link ke GitHub dan Figma prototype
- Modal detail proyek

### 4.6 Publications & Research
- Daftar jurnal, buku, dan LoA (Letter of Acceptance)
- Link langsung ke URL jurnal atau file PDF LoA
- Metadata: SINTA level, nama jurnal, tahun

### 4.7 Education
- Detail institusi, jurusan, dan periode
- Daftar organisasi kemahasiswaan dengan foto

### 4.8 Dev Activity
- Visualisasi aktivitas GitHub (contribution graph)
- Statistik bahasa pemrograman

### 4.9 Contact
- Form kontak dengan validasi (nama, email, pesan)
- Integrasi nodemailer untuk pengiriman email
- Link sosial media

---

## 5. MVP (Minimum Viable Product)

MVP dianggap selesai jika memuat:
- [x] Hero dengan nama, role, dan CTA sosial
- [x] About dengan deskripsi singkat
- [x] Skills catalog minimal 10 skill
- [x] Experience minimal 2 pengalaman
- [x] Projects minimal 4 proyek dengan gambar
- [x] Publications minimal 1 publikasi dengan link
- [x] Education + organisasi
- [x] Contact form berfungsi kirim email
- [x] Responsive mobile & desktop
- [x] Dark/light mode toggle

---

## 6. Batasan Proyek

| Kategori | Batasan |
|----------|---------|
| **Teknologi** | Next.js 16, React 19, TypeScript — tidak menggunakan CMS eksternal |
| **Database** | Tidak ada database server — semua data di-hardcode di `data/*.ts` |
| **Backend** | Hanya API route `/api/contact` untuk pengiriman email via nodemailer |
| **Autentikasi** | Tidak ada — portfolio bersifat publik tanpa login |
| **Skala** | Single-user (personal portfolio), bukan multi-user |
| **Platform** | Web-only (tidak ada versi mobile native) |
| **Hosting** | Vercel (static export + serverless API) |
| **Budget** | Zero-cost — menggunakan layanan gratis (Vercel, Nodemailer SMTP) |
