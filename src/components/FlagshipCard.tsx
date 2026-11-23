import Image from "next/image";
import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import { metricsSentence, type Project } from "@/data/projects";

type FlagshipCardProps = {
  project: Project;
};

export default function FlagshipCard({ project }: FlagshipCardProps) {
  const caseStudy = project.caseStudy ?? "/projects";

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-line bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[340px] border-b border-line bg-inset p-6 sm:min-h-[420px] lg:border-b-0 lg:border-r">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          ) : (
            <ProjectCover kind={project.cover} title={project.title} />
          )}
        </div>

        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="text-sm leading-6 text-muted">
            {project.role}
            <span className="block">{project.year}</span>
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-fg-2">
            {project.tagline}
          </p>

          <p className="mt-4 leading-7 text-fg-3">
            {project.description}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <p className="mt-5 text-sm leading-6 text-muted">
              {metricsSentence(project.metrics)}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link
              href={caseStudy}
              className="font-medium text-accent-text transition hover:text-white"
            >
              Read the case study
            </Link>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-2 underline decoration-line-strong underline-offset-4 transition hover:decoration-accent hover:text-white"
              >
                Live site
              </a>
            )}

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-3 underline decoration-line-strong underline-offset-4 transition hover:decoration-accent hover:text-white"
              >
                Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
