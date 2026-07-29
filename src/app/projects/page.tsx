"use client";

import Navbar from "../../../components/Navbar";
import { motion } from "framer-motion";

type Project = {
  title: string;
  role: string;
  description: string;
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Zappy",
    role: "GUI Developer · Team of 4",
    description:
      "A network-driven game where AI clients compete to survive and grow on a shared map. Built the real-time GUI in C++ with SFML, rendering live game state received from the C server over a custom TCP protocol.",
    stack: ["C", "C++", "SFML", "TCP/IP", "Networking"],
    link: "https://github.com/khushanmz05/Zappy.git",
  },
  {
    title: "Raytracer",
    role: "C++ / 3D Rendering",
    description:
      "A ray tracing engine that generates realistic images by simulating the inverse path of light. Parses a scene description file and renders primitives, materials, shadows, and reflections using an object-oriented design.",
    stack: ["C++", "OOP", "Design Patterns", "3D Rendering"],
    link: "https://github.com/yourusername/raytracer",
  },
  {
    title: "Top-Down Shooter",
    role: "C++ / Game Development",
    description:
      "A fast-paced 2D top-down shooter built with SFML, featuring player movement, enemy waves, combat logic, and real-time rendering.",
    stack: ["C++", "SFML", "Game Logic", "Rendering"],
    link: "https://github.com/yourusername/top-down-shooter",
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
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,124,246,0.3), transparent 70%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
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
              A focused set of projects spanning networking, 3D rendering,
              game development, and systems programming in C and C++,
              alongside practical full-stack web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group flex flex-col rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_40px_rgba(0,0,0,0.3)] transition hover:border-[#8B7CF6]/40 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
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

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#2A2A31] px-3 py-1 text-xs text-[#D4D4D8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}