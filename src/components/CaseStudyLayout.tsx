"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import { metricsSentence, type Project } from "@/data/projects";

export type CaseStudySection = {
  label: string;
  title: string;
  body?: string;
  bullets?: string[];
  wide?: boolean;
};

export type CaseStudyFocus = {
  title: string;
  body: string;
};

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
            className="inline-flex items-center text-sm font-medium text-[#A1A1AA] transition hover:text-[#A99CFF]"
          >
            Back to projects
          </Link>

          <header className="mt-12 max-w-3xl">
            <p className="text-sm text-[#8B8B95]">{label}</p>

            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#D4D4D8] md:text-xl">
              {summary}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#8B8B95]">
                {metricsSentence(project.metrics)}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#2A2A31] bg-[#18181B] px-3 py-1 text-xs text-[#D4D4D8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#8B7CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(139,124,246,0.35)] transition hover:bg-[#9A8CFF]"
                >
                  View live site
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#8B7CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(139,124,246,0.35)] transition hover:bg-[#9A8CFF]"
                >
                  View repository
                </a>
              )}

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] px-6 py-3 text-sm font-medium text-[#F3F3F5] transition hover:border-[#8B7CF6]/40 hover:bg-[#1D1D22]"
              >
                All projects
              </Link>
            </div>

            {!project.repo && project.repoNote && (
              <p className="mt-4 text-xs text-[#8B8B95]">{project.repoNote}</p>
            )}
          </header>

          <section className="mt-16 overflow-hidden rounded-[20px] border border-[#2A2A31] bg-[#18181B] p-2">
            <div
              className={
                project.image
                  ? "relative aspect-[16/9] overflow-hidden rounded-[14px] bg-[#0F0F12]"
                  : "relative h-[340px] overflow-hidden rounded-[14px] bg-[#0F0F12] sm:h-[380px]"
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
                <ProjectCover kind={project.cover} title={project.title} />
              )}
            </div>
          </section>

          <section className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className={`border-t border-[#2A2A31] pt-6 ${
                  section.wide ? "lg:col-span-2" : ""
                }`}
              >
                <p className="text-sm text-[#8B8B95]">{section.label}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {section.title}
                </h2>

                {section.body && (
                  <p className="mt-4 leading-7 text-[#A1A1AA]">{section.body}</p>
                )}

                {section.bullets && (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[#A1A1AA] md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B7CF6]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          <section className="mt-16 border-t border-[#2A2A31] pt-8">
            <p className="text-sm text-[#8B8B95]">Technical focus</p>

            <div className="mt-5 grid gap-8 md:grid-cols-3">
              {focus.map((item) => (
                <div key={item.title}>
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
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
