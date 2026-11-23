import Image from "next/image";
import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm">
      {project.caseStudy && (
        <Link
          href={project.caseStudy}
          className="font-medium text-[#A99CFF] transition hover:text-white"
        >
          Read case study
        </Link>
      )}

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#D4D4D8] transition hover:text-white"
        >
          Live site
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
        <span className="text-xs text-[#8B8B95]" title={project.repoNote}>
          {project.repoNote}
        </span>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#2A2A31] bg-[#18181B] transition duration-300 hover:border-[#8B7CF6]/45">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-[#2A2A31] bg-[#0F0F12]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1280}
            height={720}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectCover kind={project.cover} title={project.title} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <span className="rounded-full border border-[#2A2A31] px-2.5 py-1 font-medium text-[#8B8B95]">
            {project.categories[0]}
          </span>
          <span className="text-[#8B8B95]">
            {project.role} / {project.year}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white transition group-hover:text-[#A99CFF]">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#D4D4D8]">
          {project.tagline}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#A1A1AA]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2A2A31] px-3 py-1 text-xs text-[#D4D4D8]"
            >
              {tag}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
