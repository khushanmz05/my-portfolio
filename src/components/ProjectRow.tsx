import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="grid gap-x-6 gap-y-2 border-b border-line py-5 sm:grid-cols-[220px_1fr_auto] sm:items-baseline">
      <p className="text-sm leading-6 text-muted">
        {project.role}
        <span className="block">{project.year}</span>
      </p>

      <div>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {project.caseStudy ? (
            <Link
              href={project.caseStudy}
              className="transition hover:text-accent-text"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-1 text-sm leading-6 text-fg-3">
          {project.tagline}
        </p>

        <p className="mt-1 text-xs leading-5 text-muted">
          {project.stack.join(", ")}
        </p>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm sm:justify-end">
        {project.caseStudy && (
          <Link
            href={project.caseStudy}
            className="font-medium text-accent-text transition hover:text-white"
          >
            Case study
          </Link>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-2 transition hover:text-white"
          >
            Live
          </a>
        )}

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 transition hover:text-white"
          >
            Repository
          </a>
        )}

        {!project.repo && project.repoNote && (
          <span className="text-xs text-muted">{project.repoNote}</span>
        )}
      </div>
    </article>
  );
}
