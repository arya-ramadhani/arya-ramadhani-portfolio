import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#800020",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arya Ramadhani | Software Engineer",
  description:
    "Portfolio of Arya Ramadhani — Software Engineer specializing in Web & Mobile Development, IoT, Computer Vision, and UI/UX Design.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "IoT",
    "AI",
    "Computer Vision",
    "UI/UX",
    "Arya Ramadhani",
  ],
  authors: [{ name: "Arya Ramadhani" }],
  creator: "Arya Ramadhani",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Arya Ramadhani | Software Engineer",
    description:
      "Portfolio of Arya Ramadhani — Software Engineer specializing in Web & Mobile Development, IoT, AI & Computer Vision, and UI/UX Design.",
    siteName: "Arya Ramadhani Portfolio",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Arya Ramadhani Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Ramadhani | Software Engineer",
    description:
      "Portfolio of Arya Ramadhani — Software Engineer specializing in Web & Mobile Development, IoT, AI & Computer Vision, and UI/UX Design.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else if(t==='dark'){document.documentElement.classList.add('dark');}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
