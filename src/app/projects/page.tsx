"use client";

import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  role: string;
  description: string;
  stack: string[];
  image?: string;
  link?: string;
  repo?: string;
  caseStudy?: boolean;
};

const projects: Project[] = [
  {
    title: "Zappy",
    role: "GUI Developer · Team of 4",
    description:
      "A network-driven game where AI clients compete to survive and grow on a shared map. Built the real-time GUI in C++ with SFML, rendering live game state received from the C server over a custom TCP protocol.",
    stack: ["C", "C++", "SFML", "TCP/IP", "Networking"],
    image: "/zappy/zappy1.png",
    link: "/projects/zappy",
    repo: "https://github.com/khushanmz05/Zappy.git",
    caseStudy: true,
  },
  {
    title: "Raytracer",
    role: "C++ / 3D Rendering · Team Project",
    description:
      "A ray tracing engine that generates realistic images by simulating the inverse path of light. I worked on the scene parser, converting scene-description files into structured data for the rendering pipeline.",
    stack: ["C++", "Scene Parsing", "OOP", "3D Rendering"],
    image: "/raytracer/images.jpg",
    link: "/projects/raytracer",
    repo: "https://github.com/khushanmz05/Raytracer.git",
    caseStudy: true,
},
  {
    title: "Run & Gun",
    role: "Python / Game Development",
    description:
      "A fast-paced 2D top-down shooter built with Python and Pygame, featuring player movement, enemy waves, combat logic, collision handling, and real-time rendering.",
    stack: ["Python", "Pygame", "Game Logic", "Collision Detection"],
    image: "/topdownshooter/topdownshooter.png",
    link: "https://github.com/khushanmz05/Free-project",
  },
  {
    title: "Maze Parser & Solver",
    role: "C / Systems Programming",
    description:
      "A maze parsing engine built around a state machine, handling malformed input, tunnels, and adjacency mapping, then solved with BFS. Verified memory safety with Valgrind.",
    stack: ["C", "State Machines", "BFS", "Valgrind"],
    link: "https://github.com/yourusername/maze-parser",
  },
  {
    title: "Portfolio / Todo App",
    role: "Full-Stack Web Development",
    description:
      "A personal portfolio and a task management app built to practice modern full-stack workflows end to end.",
    stack: ["Next.js", "React", "Node.js"],
    link: "https://github.com/yourusername/portfolio",
  },
];

export default function Projects() {
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

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-2xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8B7CF6]">
              Selected Work
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Projects
            </h1>

            <p className="mt-5 text-base leading-7 text-[#A1A1AA] md:text-lg">
              A focused set of projects spanning networking, 3D rendering, game
              development, and systems programming in C and C++, alongside
              practical full-stack web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group flex flex-col rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_40px_rgba(0,0,0,0.3)] transition hover:border-[#8B7CF6]/40 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {project.image && (
                  <div className="relative mb-6 overflow-hidden rounded-[16px] border border-[#2A2A31] bg-[#121214]">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={1280}
                      height={720}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[#8B7CF6]/0 transition duration-500 group-hover:bg-[#8B7CF6]/10" />

                  </div>
                )}

                <div className="mb-6 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <h2 className="text-2xl font-semibold text-white transition group-hover:text-[#A99CFF]">
                    {project.title}
                  </h2>

                  <span className="text-xs uppercase leading-relaxed tracking-[0.2em] text-[#8B7CF6]">
                    {project.role}
                  </span>
                </div>

                <p className="mb-6 max-w-2xl text-sm leading-6 text-[#A1A1AA] md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#2A2A31] px-3 py-1 text-xs text-[#D4D4D8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.caseStudy && project.link && (
                    <Link
                      href={project.link}
                      className="rounded-full bg-[#8B7CF6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#9A8CFF]"
                    >
                      View Case Study →
                    </Link>
                  )}

                  {(project.repo || project.link) && (
                    <a
                      href={project.repo || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#34343C] px-4 py-2 text-sm font-medium text-[#D4D4D8] transition hover:border-[#8B7CF6] hover:text-white"
                    >
                      View Repository ↗
                    </a>
                  )}
                </div>
              </motion.article>
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
                href="mailto:YOUR_EMAIL@example.com"
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