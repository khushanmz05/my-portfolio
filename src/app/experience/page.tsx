"use client";

import Navbar from "../../../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  logo: string;
};

const experience: ExperienceItem[] = [
  {
    role: "Information Technology Assistant",
    company: "Infotech Papers and Services",
    location: "Tete, Mozambique",
    dates: "Aug 2025 — Dec 2025",
    summary:
      "Provided hands-on technical support in a fast-paced technology retail environment, helping customers and staff resolve day-to-day hardware and software issues.",
    highlights: [
      "Troubleshot common hardware and software issues for customers and staff.",
      "Set up devices and provided practical guidance on everyday technology use.",
      "Explained technical solutions clearly to users with different levels of experience.",
      "Built confidence working with real user problems in a customer-facing environment.",
    ],
    logo: "/logos/infotech.jpg",
  },
];

export default function Experience() {
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
              Professional Background
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Experience
            </h1>

            <p className="mt-5 text-base leading-7 text-[#A1A1AA] md:text-lg">
              Practical, hands-on experience supporting users, solving
              technical problems, and applying technical skills outside of
              coursework and personal projects.
            </p>
          </motion.div>

          <div className="relative border-l border-[#2A2A31] pl-8">
            {experience.map((item, i) => (
              <motion.section
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#8B7CF6] bg-[#121214]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CF6]" />
                </span>

                <div className="rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_40px_rgba(0,0,0,0.3)]">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#2A2A31] bg-white">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        width={44}
                        height={44}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-white">
                          {item.role}
                        </h2>

                        <p className="mt-1 text-sm font-medium text-[#D4D4D8]">
                          {item.company} &middot; {item.location}
                        </p>
                      </div>

                      <span className="text-xs uppercase tracking-[0.2em] text-[#8B7CF6]">
                        {item.dates}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-[#A1A1AA] md:text-base">
                    {item.summary}
                  </p>

                  <div className="my-6 h-px bg-[#2A2A31]" />

                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#8B7CF6]">
                    Key Contributions
                  </p>

                  <ul className="space-y-3 text-sm leading-6 text-[#A1A1AA] md:text-base">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B7CF6]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        <footer className="relative mx-auto mt-20 max-w-6xl border-t border-[#2A2A31] py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[#F3F3F5]">
                Let&apos;s build something useful.
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