"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiGit,
  SiLinux,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";

const IconBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2A2A31] bg-[#1D1D22] text-[#8B7CF6]">
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#121214] px-6 text-[#F3F3F5] md:px-10 lg:px-16">
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

        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center py-24">
          <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] text-lg font-semibold text-[#8B7CF6] shadow-[0_1px_2px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.35)]">
                  KK
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/khushanmz05"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-[#2A2A31] p-2 text-[#D4D4D8] transition hover:border-[#8B7CF6]/40 hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54v-2.1c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.63 1.22 3.27.93.1-.72.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.65 0c2.16-1.46 3.1-1.15 3.1-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.52.41.35.77 1.04.77 2.1v3.12c0 .3.2.65.76.54 4.44-1.47 7.65-5.66 7.65-10.6C23.02 5.24 18.27.5 12 .5Z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/khushan-kanakrai-170060310/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-[#2A2A31] p-2 text-[#D4D4D8] transition hover:border-[#8B7CF6]/40 hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.11 20.45H3.56V9h3.55v11.45Z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:khushan.kanakrai5@gmail.com"
                    aria-label="Email"
                    className="rounded-full border border-[#2A2A31] p-2 text-[#D4D4D8] transition hover:border-[#8B7CF6]/40 hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8B7CF6]">
                Software Engineering Student
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                Khushan Kanakrai
              </h1>

              <p className="mt-3 text-sm text-[#A1A1AA]">
                Based in Spain &middot; Open to internships
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#D4D4D8] md:text-xl">
              I&apos;m a Software Engineering student focused on C and C++, with
              hands-on experience in systems programming, networking, rendering,
              debugging, and practical full-stack web development.
            </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
  <a
    href="/projects"
    className="inline-flex items-center justify-center rounded-full bg-[#8B7CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(139,124,246,0.35)] transition hover:bg-[#9A8CFF]"
  >
    View Projects →
  </a>

  <a
    href="/Khushan_Kanakrai_CV_ATS.pdf"
    download
    className="inline-flex items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] px-6 py-3 text-sm font-medium text-[#F3F3F5] transition hover:border-[#8B7CF6]/40 hover:bg-[#1D1D22]"
  >
    Download CV
  </a>
</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="flex items-center"
            >
              <div className="w-full rounded-[28px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_20px_60px_rgba(0,0,0,0.35)]">
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8B7CF6]">
                  Core Strengths
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <IconBadge>
                        <span className="text-sm font-bold">C</span>
                      </IconBadge>

                      <IconBadge>
                        <SiCplusplus size={16} />
                      </IconBadge>

                      <h2 className="text-xl font-semibold text-white">
                        C / C++
                      </h2>
                    </div>

                    <p className="text-sm leading-6 text-[#A1A1AA]">
                      Systems programming, rendering, debugging, memory-focused
                      development, and game-related logic.
                    </p>
                  </div>

                  <div className="h-px bg-[#2A2A31]" />

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <IconBadge>
                        <SiGit size={16} />
                      </IconBadge>

                      <IconBadge>
                        <SiLinux size={16} />
                      </IconBadge>

                      <h2 className="text-xl font-semibold text-white">
                        Problem Solving
                      </h2>
                    </div>

                    <p className="text-sm leading-6 text-[#A1A1AA]">
                      Parsing, state management, low-level reasoning, and
                      structured debugging workflows.
                    </p>
                  </div>

                  <div className="h-px bg-[#2A2A31]" />

                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <IconBadge>
                        <SiReact size={16} />
                      </IconBadge>

                      <IconBadge>
                        <span className="text-xs font-bold">N</span>
                      </IconBadge>

                      <IconBadge>
                        <SiNodedotjs size={16} />
                      </IconBadge>

                      <IconBadge>
                        <SiPython size={16} />
                      </IconBadge>

                      <h2 className="text-xl font-semibold text-white">
                        Web Development
                      </h2>
                    </div>

                    <p className="text-sm leading-6 text-[#A1A1AA]">
                      React, Next.js, Node.js, and Python for practical
                      full-stack applications and portfolio projects.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}