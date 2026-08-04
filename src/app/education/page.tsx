"use client";

import Navbar from "../../../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

type EducationItem = {
  school: string;
  url: string;
  years: string;
  degree: string;
  description: string;
  logo: string;
};

const education: EducationItem[] = [
  {
    school: "Epitech Barcelona",
    url: "https://www.epitech.eu",
    years: "2024 — 2029",
    degree: "Bachelor + Master, Software Engineering",
    description:
      "Focused on low-level programming, systems design, algorithms, and building real-world projects from scratch, including networked applications, 3D rendering, and game architecture in C and C++.",
    logo: "/logos/epitech.png",
  },
  {
    school: "Central High International School, Malawi",
    url: "https://www.centralhighmw.com",
    years: "2018 — 2024",
    degree: "IGCSE Certificate",
    description:
      "Completed high school with an IGCSE Certificate, building a strong academic foundation ahead of university-level software engineering studies.",
    logo: "/logos/chis.jpg",
  },
];

export default function Education() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#121214] px-6 pb-24 pt-32 text-[#F3F3F5] md:px-10 lg:px-16">
        {/* Top violet glow */}
<div
  className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
  style={{
    background:
      "radial-gradient(circle, rgba(139,124,246,0.38), transparent 70%)",
  }}
/>

{/* Lower-right violet glow */}
<div
  className="pointer-events-none absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full opacity-10 blur-3xl"
  style={{
    background:
      "radial-gradient(circle, rgba(139,124,246,0.45), transparent 70%)",
  }}
/>

{/* Faint technical grid */}
<div
  className="pointer-events-none absolute inset-0 opacity-[0.035]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(169,156,255,0.22) 1px, transparent 1px),
      linear-gradient(90deg, rgba(169,156,255,0.22) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
    maskImage:
      "linear-gradient(to bottom, black 0%, transparent 78%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, transparent 78%)",
  }}
/>

{/* Subtle grain texture */}
<div
  className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
  style={{
    backgroundImage:
      "url('https://grainy-gradients.vercel.app/noise.svg')",
  }}
/>

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-2xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8B7CF6]">
              Background
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Education
            </h1>
            <p className="mt-5 text-base leading-7 text-[#A1A1AA] md:text-lg">
              My academic path from secondary school to pursuing a software engineering
              degree focused on systems programming and full-stack development.
            </p>
          </motion.div>

          <div className="relative border-l border-[#2A2A31] pl-8">
            {education.map((item, i) => (
              <motion.section
                key={item.school}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#8B7CF6] bg-[#121214]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CF6]" />
                </span>

                <div className="rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_40px_rgba(0,0,0,0.3)]">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#2A2A31] bg-white">
                      <Image
                        src={item.logo}
                        alt={`${item.school} logo`}
                        width={44}
                        height={44}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="text-xl font-semibold text-white">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-[#A99CFF]"
                        >
                          {item.school}
                        </a>
                      </h2>
                      <span className="text-xs uppercase leading-relaxed tracking-[0.2em] text-[#8B7CF6]">
                        {item.years}
                      </span>
                    </div>
                  </div>

                  <p className="mb-3 text-sm font-medium text-[#D4D4D8]">
                    {item.degree}
                  </p>

                  <p className="text-sm leading-6 text-[#A1A1AA] md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
        <footer className="relative mx-auto mt-20 max-w-6xl border-t border-[#2A2A31] py-8">
  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-sm font-medium text-[#F3F3F5]">
        Interested in working together?
      </p>
      <p className="mt-1 text-sm text-[#A1A1AA]">
        I&apos;m currently open to software engineering internships.
      </p>
    </div>

    <div className="flex flex-wrap gap-4 text-sm">
      <a
        href="mailto:khushan.kanakrai5@gmail.com"
        className="text-[#D4D4D8] transition hover:text-[#A99CFF]"
      >
        Email
      </a>

      <a
        href="https://github.com/khushanmz05"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D4D4D8] transition hover:text-[#A99CFF]"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/khushan-kanakrai-170060310/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D4D4D8] transition hover:text-[#A99CFF]"
      >
        LinkedIn
      </a>

      <a
        href="/Khushan_Kanakrai_CV_ATS.pdf"
        download
        className="text-[#D4D4D8] transition hover:text-[#A99CFF]"
      >
        Download CV
      </a>
    </div>
  </div>

  <p className="mt-8 text-xs text-[#5A5957]">
    © {new Date().getFullYear()} Khushan Kanakrai
  </p>
</footer>
      </main>
    </>
  );
}