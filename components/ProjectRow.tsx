import Link from "next/link";
import type { Project } from "../src/data/projects";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="grid gap-x-6 gap-y-2 border-b border-[#2A2A31] py-5 sm:grid-cols-[220px_1fr_auto] sm:items-baseline">
      <p className="text-sm leading-6 text-[#8B8B95]">
        {project.role}
        <span className="block">{project.year}</span>
      </p>

      <div>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {project.caseStudy ? (
            <Link
              href={project.caseStudy}
              className="transition hover:text-[#A99CFF]"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#A1A1AA]">
          {project.tagline}
        </p>

        <p className="mt-1 text-xs leading-5 text-[#8B8B95]">
          {project.stack.join(", ")}
        </p>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm sm:justify-end">
        {project.caseStudy && (
          <Link
            href={project.caseStudy}
            className="font-medium text-[#A99CFF] transition hover:text-white"
          >
            Case study
          </Link>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4D4D8] transition hover:text-white"
          >
            Live
          </a>
        )}

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] transition hover:text-white"
          >
            Repository
          </a>
        )}

        {!project.repo && project.repoNote && (
          <span className="text-xs text-[#8B8B95]">{project.repoNote}</span>
        )}
      </div>
    </article>
  );
}
