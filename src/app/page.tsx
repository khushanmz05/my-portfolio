"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#121214] text-[#F3F3F5] px-6 md:px-10 lg:px-16">
        {/* Subtle violet glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,124,246,0.35), transparent 70%)",
          }}
        />

        {/* Subtle grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center py-24">
          <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT: Identity + Copy + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              {/* Avatar + social row */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] text-lg font-semibold text-[#8B7CF6] shadow-[0_1px_2px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.35)]">
                  KK
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-[#2A2A31] p-2 text-[#D4D4D8] transition hover:border-[#8B7CF6]/40 hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54v-2.1c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.63 1.22 3.27.93.1-.72.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.65 0c2.16-1.46 3.1-1.15 3.1-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.52.41.35.77 1.04.77 2.1v3.12c0 .3.2.65.76.54 4.44-1.47 7.65-5.66 7.65-10.6C23.02 5.24 18.27.5 12 .5Z" />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-[#2A2A31] p-2 text-[#D4D4D8] transition hover:border-[#8B7CF6]/40 hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.11 20.45H3.56V9h3.55v11.45Z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:youremail@example.com"
                    aria-label="Email"
                    className="rounded-full border border-[#2A2A31] p-2 text-[#D4D4D8] transition hover:border-[#8B7CF6]/40 hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                I&apos;m a Software Engineering student focused primarily on C and C++,
                with hands-on experience in systems programming, debugging,
                memory management, rendering, and game-related development.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#A1A1AA] md:text-lg">
                Alongside that, I also build practical web applications with
                React, Next.js, Node.js, and Python, combining low-level
                problem-solving with modern full-stack development.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#8B7CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(139,124,246,0.35)] transition hover:bg-[#9A8CFF]"
                >
                  View Projects
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] px-6 py-3 text-sm font-medium text-[#F3F3F5] transition hover:border-[#8B7CF6]/40 hover:bg-[#1D1D22]"
                >
                  Contact Me
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-medium text-[#A1A1AA] transition hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            {/* RIGHT: Core Strengths panel */}
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
                    <h2 className="text-xl font-semibold text-white">C / C++</h2>
                    <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                      Systems programming, rendering, debugging, memory-focused
                      development, and game-related logic.
                    </p>
                  </div>

                  <div className="h-px bg-[#2A2A31]" />

                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Problem Solving
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                      Parsing, state management, low-level reasoning, and
                      structured debugging workflows.
                    </p>
                  </div>

                  <div className="h-px bg-[#2A2A31]" />

                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Web Development
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
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