"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import ProjectRow from "@/components/ProjectRow";
import FlagshipCard from "@/components/FlagshipCard";
import {
  categories,
  featuredProjects,
  projects,
  type ProjectCategory,
} from "@/data/projects";

type Filter = ProjectCategory | "All";

const flagship = featuredProjects[0];
const alsoFeatured = featuredProjects.slice(1);

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const regularProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [],
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? regularProjects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter, regularProjects],
  );

  const visible = filter === "All" && !showAll ? filtered.slice(0, 8) : filtered;

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#121214] px-6 pb-20 pt-32 text-[#F3F3F5] md:px-10 lg:px-16">
        <PageBackground />

        <div className="relative mx-auto max-w-6xl">
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

          <div
            className="mt-12 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by discipline"
          >
            {categories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setFilter(category);
                    setShowAll(false);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-[#8B7CF6] bg-[#8B7CF6] text-white"
                      : "border-[#2A2A31] bg-[#18181B] text-[#A1A1AA] hover:border-[#8B7CF6]/40 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {filter === "All" ? (
            <>
              <section aria-labelledby="flagship-project" className="mt-14">
                <div>
                  <h2
                    id="flagship-project"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Flagship
                  </h2>
                  <p className="mt-2 text-sm text-[#A1A1AA]">
                    The project that best shows how I work.
                  </p>
                </div>

                {flagship && (
                  <div className="mt-6">
                    <FlagshipCard project={flagship} />
                  </div>
                )}
              </section>

              <section aria-labelledby="also-featured" className="mt-16">
                <h2
                  id="also-featured"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Also featured
                </h2>
                <p className="mt-2 text-sm text-[#A1A1AA]">
                  Three more across AI, full-stack and product work.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {alsoFeatured.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </section>

              <section aria-labelledby="more-projects" className="mt-16">
                <div>
                  <h2
                    id="more-projects"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    More projects
                  </h2>
                  <p className="mt-2 text-sm text-[#A1A1AA]">
                    Smaller builds, coursework and experiments across the stack.
                  </p>
                </div>

                <div className="mt-6 border-t border-[#2A2A31]">
                  {visible.map((project) => (
                    <ProjectRow key={project.slug} project={project} />
                  ))}
                </div>

                {!showAll && regularProjects.length > visible.length && (
                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setShowAll(true)}
                      className="rounded-full border border-[#2A2A31] bg-[#18181B] px-6 py-3 text-sm font-medium text-[#F3F3F5] transition hover:border-[#8B7CF6]/40 hover:bg-[#1D1D22]"
                    >
                      Show {regularProjects.length - visible.length} more{" "}
                      {regularProjects.length - visible.length === 1
                        ? "project"
                        : "projects"}
                    </button>
                  </div>
                )}
              </section>
            </>
          ) : (
            <section aria-labelledby="filtered-projects" className="mt-14">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2
                    id="filtered-projects"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    {filter}
                  </h2>
                  <p className="mt-2 text-sm text-[#A1A1AA]">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "project" : "projects"} in this
                    discipline.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFilter("All")}
                  className="text-sm font-medium text-[#A99CFF] transition hover:text-white"
                >
                  Clear filter
                </button>
              </div>

              <div className="mt-6 border-t border-[#2A2A31]">
                {filtered.map((project) => (
                  <ProjectRow key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
