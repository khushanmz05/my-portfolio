import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";
import SiteFooter from "@/components/SiteFooter";
import SkipLink from "@/components/SkipLink";
import MotionProvider from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  title: {
    default: "Khushan Kanakrai | Software Engineering Portfolio",
    template: "%s | Khushan Kanakrai",
  },
  description:
    "Portfolio of Khushan Kanakrai, a Software Engineering student focused on full-stack development and AI engineering — React, Next.js, Node.js, Python and local models.",
  keywords: [
    "Khushan Kanakrai",
    "full-stack developer",
    "AI engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "software engineering internship",
    "Epitech Barcelona",
    "portfolio",
  ],
  authors: [{ name: "Khushan Kanakrai" }],
  creator: "Khushan Kanakrai",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Khushan Kanakrai | Software Engineering Portfolio",
    description:
      "Full-stack and AI projects from a Software Engineering student at Epitech Barcelona.",
    siteName: "Khushan Kanakrai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushan Kanakrai | Software Engineering Portfolio",
    description:
      "Full-stack and AI projects from a Software Engineering student at Epitech Barcelona.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#121214",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>

      <body className="font-satoshi antialiased">
        <MotionProvider>
        <SkipLink />
        <Navbar />
        <div className="relative min-h-screen overflow-x-clip">
          <PageBackground />
          <main id="main" tabIndex={-1} className="relative pb-20 pt-32 outline-none">
            {children}
          </main>
          <SiteFooter />
        </div>
        </MotionProvider>
      </body>
    </html>
  );
}
