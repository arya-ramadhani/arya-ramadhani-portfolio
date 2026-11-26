# TODO.md — Task Management
> **Arya Ramadhani — Personal Portfolio Website**
> Legend: ✅ Done · 🔄 In Progress · ⏳ Planned · ❌ Blocked

---

## 🏁 Core Features (MVP)

| # | Task | Status | Prioritas | Catatan |
|---|------|--------|-----------|---------|
| 1 | Setup proyek Next.js + TypeScript + Tailwind | ✅ Done | P0 | |
| 2 | Dark/light mode theme system | ✅ Done | P0 | ThemeProvider.tsx |
| 3 | Smooth scroll (Lenis) | ✅ Done | P0 | |
| 4 | Custom cursor animasi | ✅ Done | P1 | |
| 5 | Navbar dengan scroll spy | ✅ Done | P0 | |
| 6 | Hero section (avatar + typing + CTA) | ✅ Done | P0 | |
| 7 | About section + interactive terminal | ✅ Done | P1 | |
| 8 | Skills section + TechSphere 3D | ✅ Done | P1 | |
| 9 | Experience timeline | ✅ Done | P0 | |
| 10 | Projects gallery + ProjectCard + filter | ✅ Done | P0 | |
| 11 | Publications section | ✅ Done | P0 | |
| 12 | Education section + organisasi | ✅ Done | P0 | |
| 13 | Dev Activity / GitHub visualization | ✅ Done | P2 | |
| 14 | Contact form + nodemailer API | ✅ Done | P0 | |
| 15 | Footer | ✅ Done | P1 | |
| 16 | Responsive mobile (≥320px) | ✅ Done | P0 | |
| 17 | Particle field background | ✅ Done | P2 | |

---

## 📄 Data & Konten

| # | Task | Status | Prioritas | Catatan |
|---|------|--------|-----------|---------|
| 18 | Pisahkan `publications.ts` dari `education.ts` | ✅ Done | P1 | Selesai Nov 2026 |
| 19 | Rename file PDF LoA ke format kebab-case | ✅ Done | P1 | `loa-yolov12n-smart-waste-bin-*.pdf` |
| 20 | URL LoA PDF diperbaiki ke path `/images/publications/...` | ✅ Done | P1 | |
| 21 | Tambah foto `ketua-himpunan.jpg` di organizations | ✅ Done | P2 | |
| 22 | Lengkapi semua foto proyek | ✅ Done | P2 | |
| 23 | Tambah foto semua pengalaman kerja | ✅ Done | P2 | |
| 24 | Update data jika ada publikasi/proyek baru | ⏳ Planned | P1 | Ongoing |

---

## 🎨 Visual & UX Polish

| # | Task | Status | Prioritas | Catatan |
|---|------|--------|-----------|---------|
| 25 | Animasi scroll reveal (SectionReveal) | ✅ Done | P1 | |
| 26 | Magnetic button effect | ✅ Done | P2 | |
| 27 | Animasi hover kartu proyek | ✅ Done | P1 | |
| 28 | Slideshow gambar di ProjectCard | ✅ Done | P1 | |
| 29 | Modal/portal detail organization di Education | ✅ Done | P1 | |
| 30 | Transition halus antar section | ✅ Done | P2 | |

---

## 🔧 Teknis & Kualitas Kode

| # | Task | Status | Prioritas | Catatan |
|---|------|--------|-----------|---------|
| 31 | Type safety end-to-end di semua `data/*.ts` | ✅ Done | P1 | |
| 32 | Tidak ada `any` type yang tidak disengaja | ⏳ Planned | P2 | Perlu audit |
| 33 | ESLint zero warnings di semua file | ⏳ Planned | P2 | |
| 34 | Image optimization (`next/image` untuk semua gambar) | ⏳ Planned | P1 | |
| 35 | Lazy load komponen berat (Three.js, ProjectCard) | ⏳ Planned | P1 | |
| 36 | Error boundary untuk komponen 3D | ⏳ Planned | P2 | |
| 37 | Tambahkan `loading="lazy"` atau skeleton di galeri | ⏳ Planned | P2 | |

---

## 🚀 SEO & Performance

| # | Task | Status | Prioritas | Catatan |
|---|------|--------|-----------|---------|
| 38 | Meta title + description di `layout.tsx` | ✅ Done | P0 | |
| 39 | Open Graph image (og:image) | ⏳ Planned | P1 | |
| 40 | `robots.txt` dan `sitemap.xml` | ⏳ Planned | P2 | |
| 41 | Lighthouse score ≥ 90 (Performance, SEO, A11y) | ⏳ Planned | P1 | Belum diukur |
| 42 | Favicon + manifest icon | ✅ Done | P0 | `icon.jpg` |

---

## 🌐 Deployment

| # | Task | Status | Prioritas | Catatan |
|---|------|--------|-----------|---------|
| 43 | Deploy ke Vercel | ⏳ Planned | P0 | |
| 44 | Setup environment variables di Vercel | ⏳ Planned | P0 | EMAIL_USER, EMAIL_PASS |
| 45 | Test contact form di production | ⏳ Planned | P0 | |
| 46 | Custom domain (opsional) | ⏳ Planned | P2 | |

---

## 📌 Kriteria Penyelesaian Fitur

Sebuah fitur dianggap **selesai** jika:
1. ✅ Fungsional di desktop dan mobile (min. 375px)
2. ✅ Tidak ada TypeScript error (`tsc --noEmit`)
3. ✅ Tidak ada ESLint error
4. ✅ Tampil baik di dark mode dan light mode
5. ✅ Data sudah benar dan terupdate di file `data/*.ts`
6. ✅ Tidak ada broken link atau gambar 404
