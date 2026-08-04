"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../../../components/Navbar";

const techStack = [
  "C++",
  "Ray Tracing",
  "Scene Parsing",
  "OOP",
  "Design Patterns",
  "3D Rendering",
];

export default function RaytracerCaseStudy() {
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

        {/* Quiet grid for screenshot-focused page */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
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

        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        <article className="relative mx-auto max-w-6xl">
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

          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-12 max-w-3xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8B7CF6]">
              3D Rendering · Team Project
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Raytracer
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#D4D4D8] md:text-xl">
              A C++ ray-tracing engine that generates rendered scenes by
              simulating how light interacts with objects, materials, shadows,
              and reflections.
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
                href="https://github.com/khushanmz05/Raytracer.git"
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

          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-16 overflow-hidden rounded-[24px] border border-[#2A2A31] bg-[#18181B] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.4),0_20px_60px_rgba(0,0,0,0.3)]"
          >
            <Image
              src="/raytracer/images (1).jpg"
              alt="A rendered Raytracer scene with reflective and transparent objects"
              width={1280}
              height={720}
              priority
              className="aspect-video w-full rounded-[14px] object-cover"
            />
          </motion.section>

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
                Rendering 3D scenes from a text-based description
              </h2>

              <p className="mt-4 leading-7 text-[#A1A1AA]">
                Raytracer is a rendering engine written in C++. It receives a
                scene description, creates the objects and materials defined in
                that scene, and renders an image by tracing rays from the
                camera through each pixel.
              </p>

              <p className="mt-4 leading-7 text-[#A1A1AA]">
                The project supports geometric primitives, materials, lighting,
                shadows, and reflections. The codebase uses an object-oriented
                design to keep scene components modular and extensible.
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
                Scene-file parser
              </h2>

              <p className="mt-4 leading-7 text-[#A1A1AA]">
                I worked on the parser responsible for reading the scene
                description file and converting its contents into structured
                data the ray-tracing engine could use.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#A1A1AA] md:text-base">
                <li>
                  • Read and interpreted scene-description data from input
                  files.
                </li>
                <li>
                  • Converted parsed values into structured scene information.
                </li>
                <li>
                  • Helped connect file-based configuration with the rendering
                  pipeline.
                </li>
                <li>
                  • Collaborated within a team codebase using Git workflows.
                </li>
              </ul>
            </motion.div>
          </section>

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
                  Parsing and validation
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                  Turned a scene-description format into reliable structured
                  data for the rest of the application.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Object-oriented design
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                  Worked within a modular C++ architecture for representing
                  scene objects, materials, and rendering behaviour.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Team development
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                  Built one component of a larger rendering system while
                  coordinating with teammates and integrating shared code.
                </p>
              </div>
            </div>
          </motion.section>

          <footer className="mt-20 border-t border-[#2A2A31] py-8">
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
        </article>
      </main>
    </>
  );
}