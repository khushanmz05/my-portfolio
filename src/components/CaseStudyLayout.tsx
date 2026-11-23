import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import { metricsSentence, type Project } from "@/data/projects";
import type { CaseStudyFocus, CaseStudySection } from "@/data/case-studies";


type CaseStudyLayoutProps = {
  project: Project;
  label: string;
  summary: string;
  sections: CaseStudySection[];
  focus: CaseStudyFocus[];
};

export default function CaseStudyLayout({
  project,
  label,
  summary,
  sections,
  focus,
}: CaseStudyLayoutProps) {
  return (
    <>

      <Container>

        <article className="relative">
          <Link
            href="/projects"
            className="tap inline-flex items-center text-sm font-medium text-fg-3 transition hover:text-accent-text"
          >
            Back to projects
          </Link>

          <header className="mt-12 max-w-3xl">
            <p className="text-sm text-muted">{label}</p>

            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-fg-2 md:text-xl">
              {summary}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                {metricsSentence(project.metrics)}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-fg-2"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {project.live && (
                <ButtonLink href={project.live} external>
                  View live site
                </ButtonLink>
              )}

              {project.repo && (
                <ButtonLink
                  href={project.repo}
                  variant={project.live ? "secondary" : "primary"}
                  external
                >
                  View repository
                </ButtonLink>
              )}

              <ButtonLink href="/projects" variant="secondary">
                All projects
              </ButtonLink>
            </div>

            {!project.repo && project.repoNote && (
              <p className="mt-4 text-xs text-muted">{project.repoNote}</p>
            )}
          </header>

          <section className="mt-16 overflow-hidden rounded-[20px] border border-line bg-surface p-2">
            <div
              className={
                project.image
                  ? "relative aspect-[16/9] overflow-hidden rounded-[14px] bg-inset"
                  : "relative h-[280px] overflow-hidden rounded-[14px] bg-inset sm:h-[340px]"
              }
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1280}
                  height={720}
                  priority
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="mx-auto h-full max-w-xl">
                  <ProjectCover kind={project.cover} title={project.title} />
                </div>
              )}
            </div>
          </section>

          <section className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className={`border-t border-line pt-6 ${
                  section.wide ? "lg:col-span-2" : ""
                }`}
              >
                <p className="text-sm text-muted">{section.label}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {section.title}
                </h2>

                {section.body && (
                  <p className="mt-4 leading-7 text-fg-3">{section.body}</p>
                )}

                {section.bullets && (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-fg-3 md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          <section className="mt-16 border-t border-line pt-8">
            <p className="text-sm text-muted">Technical focus</p>

            <div className="mt-5 grid gap-8 md:grid-cols-3">
              {focus.map((item) => (
                <div key={item.title}>
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-fg-3">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </Container>
    </>
  );
}
