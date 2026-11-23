import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import FlagshipCard from "@/components/FlagshipCard";
import { featuredProjects, primaryLink, projects } from "@/data/projects";
import { site, socials } from "@/data/site";

const strengths = [
  {
    title: "Full-stack",
    body: "React, Next.js, TypeScript and Node.js: responsive interfaces, auth flows, REST APIs and the glue between them.",
  },
  {
    title: "AI engineering",
    body: "Python, FastAPI, Ollama and PyTorch: local models, evaluation and tool use that fails safely.",
  },
  {
    title: "Systems foundation",
    body: "C, C++ and Linux from Epitech: useful for debugging, performance and understanding what the abstractions hide.",
  },
];

const flagship = featuredProjects[0];
const secondaryWork = featuredProjects.slice(1);


export default function Home() {
  return (
    <>

      <Container>

        <section className="relative pb-16 md:pt-8">
          <FadeIn
            data-hero
            className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center"
          >
            <div>
              <p className="flex items-center gap-2 text-sm text-[#8B8B95]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#7FE0C3]" />
                Open to full-stack and AI engineering internships
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                Khushan Kanakrai
              </h1>

              <p className="mt-4 text-base text-[#A1A1AA]">
                Software engineering student at Epitech Barcelona. Based in
                Spain, EU passport.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D4D4D8] md:text-xl">
                I build products end to end: React and Next.js interfaces, Node
                and Python APIs, and local models where they make sense, with a
                C/C++ and Linux foundation underneath.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full bg-[#8B7CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(139,124,246,0.35)] transition hover:bg-[#9A8CFF]"
                >
                  View selected work
                </Link>

                <a
                  href={site.cvPath}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] px-6 py-3 text-sm font-medium text-[#F3F3F5] transition hover:border-[#8B7CF6]/40 hover:bg-[#1D1D22]"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#8B8B95]">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="transition hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:max-w-[380px] lg:justify-self-end">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-[#2A2A31] bg-[#18181B]">
                <Image
                  src="/Image.jpeg"
                  alt="Khushan Kanakrai"
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[#8B8B95]">
                Barcelona. Currently building Sensai, a local-first AI
                assistant, and looking for a team to build with.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="relative border-t border-[#2A2A31] py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {strengths.map((strength) => (
              <div key={strength.title}>
                <h2 className="text-base font-semibold text-white">
                  {strength.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
                  {strength.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="relative scroll-mt-24 pb-8 pt-12"
        >
          <div className="flex flex-col gap-4 border-t border-[#2A2A31] pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Selected work
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-[#A1A1AA]">
                {projects.length} projects across full-stack, AI, systems and
                security. Sensai is the one I would walk you through first.
              </p>
            </div>

            <Link
              href="/projects"
              className="text-sm font-medium text-[#A99CFF] transition hover:text-white"
            >
              All projects
            </Link>
          </div>

          {flagship && (
            <div className="mt-8">
              <FlagshipCard project={flagship} />
            </div>
          )}

          <div className="mt-10 border-t border-[#2A2A31]">
            {secondaryWork.map((project) => {
              const link = primaryLink(project);
              const rowClass =
                "group grid gap-3 border-b border-[#2A2A31] py-6 sm:grid-cols-[220px_1fr_auto] sm:items-baseline";
              const content = (
                <>
                  <p className="text-sm leading-6 text-[#8B8B95]">
                    {project.role}
                    <span className="block text-[#8B8B95]">{project.year}</span>
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-white transition group-hover:text-[#A99CFF]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#A1A1AA]">
                      {project.tagline}
                    </p>
                  </div>

                  {link && (
                    <span className="text-sm font-medium text-[#A1A1AA] transition group-hover:text-white">
                      {link.label}
                    </span>
                  )}
                </>
              );

              if (!link)
                return (
                  <div key={project.slug} className={rowClass}>
                    {content}
                  </div>
                );

              return link.external ? (
                <a
                  key={project.slug}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  {content}
                </a>
              ) : (
                <Link key={project.slug} href={link.href} className={rowClass}>
                  {content}
                </Link>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
}
