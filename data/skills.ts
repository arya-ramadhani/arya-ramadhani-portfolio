import {
  Globe,
  Cpu,
  Brain,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface Specialization {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type TechCategory =
  | "Full Stack Development"
  | "Database & Backend"
  | "IoT & Embedded Systems"
  | "AI & Computer Vision"
  | "Tools & Development";

export interface TechSkill {
  name: string;
  category: TechCategory;
  role: string;
  proficiency: "Expert" | "Advanced" | "Proficient";
  brandColor: string;
  glowColor: string;
  description: string;
  badge?: string;
}

export const techSkillsCatalog: TechSkill[] = [
  // ── 1. Full Stack Development ──
  {
    name: "TypeScript",
    category: "Full Stack Development",
    role: "Type System & Core Architecture",
    proficiency: "Advanced",
    brandColor: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.35)",
    description: "Strict typing, robust enterprise architecture, and scalable full-stack codebases.",
    badge: "Core Stack",
  },
  {
    name: "JavaScript",
    category: "Full Stack Development",
    role: "Modern ES6+ & Web Logic",
    proficiency: "Advanced",
    brandColor: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.3)",
    description: "Modern asynchronous web engineering, DOM manipulation, and dynamic client experiences.",
  },
  {
    name: "React",
    category: "Full Stack Development",
    role: "Declarative UI Engineering",
    proficiency: "Advanced",
    brandColor: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.35)",
    description: "Component-driven design systems, custom hooks, and high-performance interactive interfaces.",
    badge: "Specialized",
  },
  {
    name: "Next.js",
    category: "Full Stack Development",
    role: "Production React Framework",
    proficiency: "Advanced",
    brandColor: "#FFFFFF",
    glowColor: "rgba(255, 255, 255, 0.25)",
    description: "App Router, SSR, Server Components, API routes, and optimal SEO-driven applications.",
    badge: "Featured",
  },
  {
    name: "Laravel",
    category: "Full Stack Development",
    role: "Enterprise PHP Ecosystem",
    proficiency: "Advanced",
    brandColor: "#FF2D20",
    glowColor: "rgba(255, 45, 32, 0.35)",
    description: "RESTful architectures, Eloquent ORM, authentication, and secure back-office web platforms.",
    badge: "Primary Backend",
  },
  {
    name: "PHP",
    category: "Full Stack Development",
    role: "Server-side Web Scripting",
    proficiency: "Advanced",
    brandColor: "#777BB4",
    glowColor: "rgba(119, 123, 180, 0.35)",
    description: "Modern PHP 8+ object-oriented backend programming, microservices, and server logic.",
  },
  {
    name: "Node.js",
    category: "Full Stack Development",
    role: "Asynchronous JavaScript Runtime",
    proficiency: "Advanced",
    brandColor: "#5FA04E",
    glowColor: "rgba(95, 160, 78, 0.35)",
    description: "Event-driven backend services, CLI automations, and scalable realtime middleware.",
  },
  {
    name: "HTML5",
    category: "Full Stack Development",
    role: "Semantic Structure & Web Standards",
    proficiency: "Advanced",
    brandColor: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.35)",
    description: "Semantic web accessibility (a11y), SEO optimization, and clean document layouts.",
  },
  {
    name: "CSS3",
    category: "Full Stack Development",
    role: "Advanced Layouts & Fluid Styling",
    proficiency: "Advanced",
    brandColor: "#1572B6",
    glowColor: "rgba(21, 114, 182, 0.35)",
    description: "Responsive layouts, Flexbox, Grid, custom properties, and smooth keyframe animations.",
  },
  {
    name: "Tailwind CSS",
    category: "Full Stack Development",
    role: "Utility-First Design Engine",
    proficiency: "Advanced",
    brandColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.35)",
    description: "Ultra-fast custom UI prototyping, atomic tokens, and dark-mode design systems.",
    badge: "Favorite",
  },
  {
    name: "Bootstrap",
    category: "Full Stack Development",
    role: "Responsive Framework & Rapid UI",
    proficiency: "Advanced",
    brandColor: "#7952B3",
    glowColor: "rgba(121, 82, 179, 0.35)",
    description: "Modular grid systems, production components, and cross-browser styling.",
  },

  // ── 2. Database & Backend ──
  {
    name: "MySQL",
    category: "Database & Backend",
    role: "Relational Database Management",
    proficiency: "Advanced",
    brandColor: "#00758F",
    glowColor: "rgba(0, 117, 143, 0.35)",
    description: "Complex schema normalization, indexing, query optimization, and transactions.",
    badge: "Production",
  },
  {
    name: "PostgreSQL",
    category: "Database & Backend",
    role: "Advanced Object-Relational DB",
    proficiency: "Advanced",
    brandColor: "#336791",
    glowColor: "rgba(51, 103, 145, 0.35)",
    description: "High-reliability relational data stores, JSONB querying, and enterprise data modeling.",
  },
  {
    name: "MongoDB",
    category: "Database & Backend",
    role: "NoSQL Document Database",
    proficiency: "Proficient",
    brandColor: "#47A248",
    glowColor: "rgba(71, 162, 72, 0.35)",
    description: "Flexible document-based storage, high-throughput pipelines, and aggregation queries.",
  },
  {
    name: "REST API",
    category: "Database & Backend",
    role: "API Architecture & Protocols",
    proficiency: "Advanced",
    brandColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    description: "Idempotent RESTful APIs, JWT/OAuth authentication, and webhook integration.",
    badge: "Architecture",
  },

  // ── 3. IoT & Embedded Systems ──
  {
    name: "ESP32",
    category: "IoT & Embedded Systems",
    role: "Dual-Core WiFi/BLE SoC",
    proficiency: "Advanced",
    brandColor: "#E7352C",
    glowColor: "rgba(231, 53, 44, 0.35)",
    description: "Embedded C/C++, MQTT telemetry, WiFi/Bluetooth networking, and hardware automation.",
    badge: "Hardware",
  },
  {
    name: "Arduino",
    category: "IoT & Embedded Systems",
    role: "Microcontroller Prototyping",
    proficiency: "Advanced",
    brandColor: "#00979C",
    glowColor: "rgba(0, 151, 156, 0.35)",
    description: "Sensors interfacing, PWM motor drivers, ADC data acquisition, and embedded systems.",
  },
  {
    name: "Blynk",
    category: "IoT & Embedded Systems",
    role: "IoT Cloud & Telemetry Platform",
    proficiency: "Advanced",
    brandColor: "#24C48E",
    glowColor: "rgba(36, 196, 142, 0.35)",
    description: "Remote hardware monitoring, real-time widget dashboards, and mobile cloud control.",
  },

  // ── 4. AI & Computer Vision ──
  {
    name: "Python",
    category: "AI & Computer Vision",
    role: "Data Science & Scripting",
    proficiency: "Advanced",
    brandColor: "#3776AB",
    glowColor: "rgba(55, 118, 171, 0.35)",
    description: "Scientific computing, computer vision pipelines, automation, and model serving.",
    badge: "Core Language",
  },
  {
    name: "OpenCV",
    category: "AI & Computer Vision",
    role: "Real-time Computer Vision",
    proficiency: "Advanced",
    brandColor: "#EA4335",
    glowColor: "rgba(234, 67, 53, 0.35)",
    description: "Image processing, contour analysis, real-time object tracking, and OCR feature extraction.",
  },
  {
    name: "TensorFlow",
    category: "AI & Computer Vision",
    role: "Deep Learning & Neural Networks",
    proficiency: "Proficient",
    brandColor: "#FF6F00",
    glowColor: "rgba(255, 111, 0, 0.35)",
    description: "Neural network architectures, model training, computer vision inference, and evaluation.",
  },

  // ── 5. Tools & Development ──
  {
    name: "Git",
    category: "Tools & Development",
    role: "Distributed Version Control",
    proficiency: "Advanced",
    brandColor: "#F05032",
    glowColor: "rgba(240, 80, 50, 0.35)",
    description: "Branching workflows, interactive rebasing, merge conflict resolution, and git hygiene.",
  },
  {
    name: "GitHub",
    category: "Tools & Development",
    role: "Collaboration & CI/CD",
    proficiency: "Advanced",
    brandColor: "#F0F6FC",
    glowColor: "rgba(240, 246, 252, 0.3)",
    description: "Pull request reviews, GitHub Actions, repository management, and open-source contributions.",
    badge: "DevOps",
  },
  {
    name: "VS Code",
    category: "Tools & Development",
    role: "Development Environment",
    proficiency: "Advanced",
    brandColor: "#007ACC",
    glowColor: "rgba(0, 122, 204, 0.35)",
    description: "Advanced debugging, linting/formatting toolchains, and multi-language workspaces.",
  },
  {
    name: "Figma",
    category: "Tools & Development",
    role: "UI/UX & Design Systems",
    proficiency: "Advanced",
    brandColor: "#F24E1E",
    glowColor: "rgba(242, 78, 30, 0.35)",
    description: "Interactive wireframing, high-fidelity prototypes, design token systems, and user flows.",
  },
  {
    name: "Postman",
    category: "Tools & Development",
    role: "API Testing & Documentation",
    proficiency: "Advanced",
    brandColor: "#FF6C37",
    glowColor: "rgba(255, 108, 55, 0.35)",
    description: "Automated API test suites, environment variables, mock servers, and schema validations.",
  },
  {
    name: "Docker",
    category: "Tools & Development",
    role: "Containerization & Environment Parity",
    proficiency: "Proficient",
    brandColor: "#2496ED",
    glowColor: "rgba(36, 150, 237, 0.35)",
    description: "Dockerfiles, multi-container orchestration with Docker Compose, and reproducible environments.",
  },
];

export const specializations: Specialization[] = [
  {
    number: "01",
    title: "Web & Mobile Development",
    description:
      "Building responsive web applications and mobile solutions with modern frameworks and best practices.",
    icon: Globe,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "PHP",
      "Laravel",
      "Node.js",
      "REST API",
    ],
  },
  {
    number: "02",
    title: "IoT & Embedded Systems",
    description:
      "Developing embedded systems and IoT solutions for real-world automation and monitoring.",
    icon: Cpu,
    technologies: [
      "ESP32",
      "Arduino",
      "Blynk",
      "Sensors",
      "Servo",
      "Embedded Systems",
      "IoT Communication",
    ],
  },
  {
    number: "03",
    title: "AI & Computer Vision",
    description:
      "Implementing intelligent systems with image processing, OCR, and recognition capabilities.",
    icon: Brain,
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "OCR",
      "Tesseract",
      "Computer Vision",
      "Image Processing",
    ],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Crafting user-centered interfaces with focus on usability, aesthetics, and design systems.",
    icon: Palette,
    technologies: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flow",
      "UI Design",
      "UX Design",
      "Design System",
    ],
  },
];

export const supportingSkills: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "REST API", "PHP"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Dev Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Figma"],
  },
];
