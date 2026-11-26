# ARCHITECTURE.md — Technical Architecture
> **Arya Ramadhani — Personal Portfolio Website**
> Stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

---

## 1. Tech Stack

| Layer | Teknologi | Versi | Fungsi |
|-------|-----------|-------|--------|
| **Framework** | Next.js | 16.3.6 | App Router, SSR, Static Export |
| **UI Library** | React | 19.2.8 | Component-based UI |
| **Bahasa** | TypeScript | ^5 | Type safety end-to-end |
| **Styling** | Tailwind CSS | ^4 | Utility-first styling |
| **Animasi** | Framer Motion | ^13.4.1 | Scroll & transition animations |
| **3D / WebGL** | Three.js + R3F | ^0.186 | Tech sphere & avatar 3D |
| **Icons** | Lucide React | ^1.47.0 | Icon library |
| **Scroll** | Lenis | ^1.3.26 | Smooth scrolling |
| **Email** | Nodemailer | ^10.0.12 | Contact form backend |
| **Linting** | ESLint | ^9 | Code quality |

---

## 2. Struktur Folder

```
arya-portfolio/
├── app/                        # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # POST endpoint kirim email
│   ├── globals.css             # CSS global + Tailwind directives
│   ├── layout.tsx              # Root layout (font, metadata, providers)
│   └── page.tsx                # Halaman utama (single-page)
│
├── components/                 # Semua React components
│   ├── Hero.tsx                # Hero section (avatar, typing, CTA)
│   ├── About.tsx               # About + interactive terminal
│   ├── Skills.tsx              # Skill catalog + filter
│   ├── Experience.tsx          # Timeline pengalaman kerja & organisasi
│   ├── Projects.tsx            # Gallery proyek
│   ├── ProjectCard.tsx         # Kartu proyek individual + slideshow
│   ├── Publications.tsx        # Daftar publikasi & LoA
│   ├── Education.tsx           # Pendidikan + organisasi kemahasiswaan
│   ├── DevActivity.tsx         # GitHub activity visualization
│   ├── Contact.tsx             # Form kontak
│   ├── Navbar.tsx              # Navigation bar + scroll spy
│   ├── Footer.tsx              # Footer + links
│   ├── TechSphere3D.tsx        # Three.js tech sphere
│   ├── TechIcons.tsx           # Ikon teknologi individual
│   ├── AvatarScene.tsx         # Three.js avatar interaktif
│   ├── HeroAvatar.tsx          # Wrapper avatar di hero
│   ├── CustomCursor.tsx        # Custom cursor animasi
│   ├── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   ├── SectionReveal.tsx       # Scroll-triggered reveal animation
│   ├── SectionDivider.tsx      # Pembatas antar section
│   ├── ParticleField.tsx       # Particle background canvas
│   ├── MagneticButton.tsx      # Button dengan efek magnet
│   ├── InteractiveTerminal.tsx # Terminal simulasi di About
│   ├── ThemeProvider.tsx       # Dark/light mode context
│   ├── ThemeToggle.tsx         # Toggle dark/light mode
│   └── TypingAnimation.tsx     # Efek typing teks
│
├── data/                       # Data statis (tidak ada DB)
│   ├── education.ts            # Data pendidikan & organisasi
│   ├── experience.ts           # Data pengalaman kerja & leadership
│   ├── projects.ts             # Data proyek portfolio
│   ├── publications.ts         # Data publikasi ilmiah & LoA
│   └── skills.ts               # Data skill, spesialisasi, tech catalog
│
├── public/                     # Static assets (tidak diproses Next.js)
│   └── images/
│       ├── experience/         # Foto pengalaman kerja
│       ├── organizations/      # Foto organisasi kemahasiswaan
│       ├── projects/           # Screenshot & video proyek
│       └── publications/       # PDF LoA publikasi
│           ├── loa-yolov12n-smart-waste-bin-j-intech.pdf
│           └── loa-yolov12n-smart-waste-bin-semantik.pdf
│
├── PRD.md                      # Product Requirements Document
├── ARCHITECTURE.md             # Dokumen ini
├── TODO.md                     # Task management
├── AGENTS.md                   # Instruksi untuk AI coding agent
├── WORKFLOW.md                 # Development workflow rules
├── SKILL.md                    # Reusable prompt library
├── package.json
├── next.config.ts
├── tailwind.config (via postcss.config.mjs)
└── tsconfig.json
```

---

## 3. Arsitektur Aplikasi

```
┌─────────────────────────────────────────────────┐
│                   Browser (Client)               │
│                                                 │
│  ┌─────────┐  ┌─────────────────────────────┐  │
│  │ Navbar  │  │      page.tsx (SPA Layout)   │  │
│  │ (fixed) │  │                             │  │
│  └─────────┘  │  Hero → About → Skills →    │  │
│               │  Experience → Projects →    │  │
│               │  Publications → Education → │  │
│               │  DevActivity → Contact      │  │
│               └─────────────────────────────┘  │
└─────────────────────────────────────────────────┘
              │
              │ POST /api/contact
              ▼
┌─────────────────────────────┐
│   Next.js API Route (Edge)  │
│   app/api/contact/route.ts  │
│                             │
│   Nodemailer → SMTP Server  │
└─────────────────────────────┘
```

### Pola Rendering

| Section | Strategi | Alasan |
|---------|----------|--------|
| Semua halaman utama | **SSG (Static)** | Konten statis dari `data/*.ts` |
| `/api/contact` | **Serverless Function** | Butuh akses SMTP di server |
| Animasi 3D | **Client Component** | WebGL hanya berjalan di browser |
| Semua component | **RSC by default** | Minimal JavaScript dikirim ke client |

---

## 4. Data Layer

Tidak menggunakan database. Semua data di-maintain sebagai TypeScript module:

```typescript
// Contoh alur data
data/publications.ts
  └── export const publications: Publication[]
        └── import di components/Publications.tsx
              └── render ke DOM
```

**Keuntungan:**
- Zero latency (tidak ada network request untuk data)
- Type-safe sepenuhnya
- Mudah diedit dan di-review via Git

---

## 5. Hubungan Antarfitur

```
page.tsx
├── ThemeProvider          → Context dark/light mode
├── SmoothScroll (Lenis)   → Smooth scroll global
├── CustomCursor           → Cursor custom global
├── Navbar                 → Scroll spy ke semua section ID
│
├── Hero
│   ├── AvatarScene / HeroAvatar  (Three.js)
│   ├── ParticleField             (Canvas)
│   └── TypingAnimation
│
├── About
│   └── InteractiveTerminal
│
├── Skills
│   ├── TechSphere3D       (Three.js)
│   └── TechIcons          ← data/skills.ts (techSkillsCatalog)
│
├── Experience             ← data/experience.ts
├── Projects               ← data/projects.ts
│   └── ProjectCard
│
├── Publications           ← data/publications.ts
├── Education              ← data/education.ts
├── DevActivity
├── Contact                → /api/contact → Nodemailer
└── Footer
```

---

## 6. Konvensi Penamaan

| Tipe | Konvensi | Contoh |
|------|----------|--------|
| Component | PascalCase | `ProjectCard.tsx` |
| Data file | camelCase | `publications.ts` |
| Interface | PascalCase | `Publication`, `Project` |
| Variable data | camelCase | `publications`, `experiences` |
| ID proyek | kebab-case | `"iot-ai-sistem-pemilah-sampah"` |
| File gambar | kebab-case | `loa-yolov12n-smart-waste-bin-j-intech.pdf` |
| CSS class | Tailwind utility | `text-text`, `bg-accent/10` |

---

## 7. Environment Variables

```env
# .env.local (tidak di-commit ke Git)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=arya_destination@email.com
```
