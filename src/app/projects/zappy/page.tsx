"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../../../components/Navbar";

const techStack = ["C++", "SFML", "TCP/IP", "Networking", "GUI", "Team Project"];

export default function ZappyCaseStudy() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#121214] px-6 pb-24 pt-32 text-[#F3F3F5] md:px-10 lg:px-16">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,124,246,0.3), transparent 70%)",
          }}
        />

        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        <article className="relative mx-auto max-w-6xl">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA] transition hover:text-[#A99CFF]"
            >
              <span aria-hidden="true">←</span>
              Back to projects
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-12 max-w-3xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8B7CF6]">
              Network Game · Team of 4
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Zappy
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#D4D4D8] md:text-xl">
              A network-driven game where AI clients compete to survive and
              evolve on a shared map. I built the real-time graphical client in
              C++ with SFML.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#2A2A31] bg-[#18181B] px-3 py-1 text-xs text-[#D4D4D8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://github.com/khushanmz05/Zappy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#8B7CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(139,124,246,0.35)] transition hover:bg-[#9A8CFF]"
              >
                View Repository
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] px-6 py-3 text-sm font-medium text-[#F3F3F5] transition hover:border-[#8B7CF6]/40 hover:bg-[#1D1D22]"
              >
                All Projects
              </Link>
            </div>
          </motion.header>

          {/* Screenshot */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-16 overflow-hidden rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_20px_60px_rgba(0,0,0,0.3)]"
          >
            <Image
              src="/zappy/zappy1.png"
              alt="Zappy graphical client showing the map, resources, players, inventory, and player information"
              width={1280}
              height={720}
              priority
              className="aspect-video w-full rounded-[14px] object-cover"
            />
          </motion.section>

          {/* Details */}
          <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_40px_rgba(0,0,0,0.3)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#8B7CF6]">
                The project
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white">
                A shared world driven by a network server
              </h2>

              <p className="mt-4 leading-7 text-[#A1A1AA]">
                Zappy is a multiplayer network game in which teams of AI
                clients compete on a resource-filled map. The server maintains
                the game state, while the graphical client presents that
                changing state visually in real time.
              </p>

              <p className="mt-4 leading-7 text-[#A1A1AA]">
                The GUI displays the game map, player entities, resources,
                player levels, team information, orientation, positions, and
                inventory data received through the project protocol.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_40px_rgba(0,0,0,0.3)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#8B7CF6]">
                My contribution
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white">
                GUI development in C++ and SFML
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#A1A1AA] md:text-base">
                <li>
                  • Built the graphical client using C++ and SFML.
                </li>
                <li>
                  • Rendered the map, players, resources, and game entities.
                </li>
                <li>
                  • Displayed live player information, levels, positions,
                  teams, orientation, and inventory.
                </li>
                <li>
                  • Interpreted server-provided game data to keep the interface
                  synchronized with the shared world state.
                </li>
              </ul>
            </motion.div>
          </section>

          {/* Technical learning */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-6 rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_40px_rgba(0,0,0,0.3)]"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#8B7CF6]">
              Technical focus
            </p>

            <div className="mt-5 grid gap-6 md:grid-cols-3">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Real-time rendering
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                  Designed a visual interface that presents a changing map and
                  entity state clearly during gameplay.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  State synchronization
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                  Turned server-provided information into a consistent,
                  understandable visual representation.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Team development
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                  Collaborated within a four-person project while working on a
                  client that integrated with the wider game architecture.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
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
        </article>
      </main>
    </>
  );
}