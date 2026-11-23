import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { categories, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack products, AI systems and the occasional low-level detour, most of it started as an Epitech brief.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <Container>
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Projects
        </h1>

        <p className="mt-5 text-base leading-7 text-[#A1A1AA] md:text-lg">
          Full-stack products, AI systems and the occasional low-level
          detour. Most of this work started as an Epitech brief; the
          strongest pieces grew into something I kept building after the
          deadline.
        </p>

        <p className="mt-6 text-sm text-[#8B8B95]">
          {projects.length} projects across {categories.length - 1}{" "}
          disciplines since 2024.
        </p>
      </header>

      <ProjectsExplorer />
    </Container>
  );
}
