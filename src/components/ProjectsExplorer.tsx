"use client";

import { useMemo, useState } from "react";
import { buttonStyles } from "@/components/ButtonLink";
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
const regularProjects = projects.filter((project) => !project.featured);

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? regularProjects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  const visible = filter === "All" && !showAll ? filtered.slice(0, 8) : filtered;

  return (
    <>

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
                  ? "border-accent-strong bg-accent-strong text-white"
                  : "border-line bg-surface text-fg-3 hover:border-accent/40 hover:text-white"
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
              <p className="mt-2 text-sm text-fg-3">
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
            <p className="mt-2 text-sm text-fg-3">
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
              <p className="mt-2 text-sm text-fg-3">
                Smaller builds, coursework and experiments across the stack.
              </p>
            </div>

            <div className="mt-6 border-t border-line">
              {visible.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </div>

            {!showAll && regularProjects.length > visible.length && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className={buttonStyles.secondary}
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
              <p className="mt-2 text-sm text-fg-3">
                {filtered.length}{" "}
                {filtered.length === 1 ? "project" : "projects"} in this
                discipline.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFilter("All")}
              className="text-sm font-medium text-accent-text transition hover:text-white"
            >
              Clear filter
            </button>
          </div>

          <div className="mt-6 border-t border-line">
            {filtered.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
