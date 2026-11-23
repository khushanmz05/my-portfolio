import { projects, featuredProjects, categories } from "@/data/projects";

test("slugs are unique", () => {
  expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
});

test("featured resolves to 4 projects, sensai first", () => {
  expect(featuredProjects.map((p) => p.slug)).toEqual([
    "sensai",
    "dashboard",
    "mytorch",
    "livedrop",
  ]);
});

test("every project category is a declared filter", () => {
  for (const p of projects)
    for (const c of p.categories) expect(categories).toContain(c);
});

test("every image path starts with /", () => {
  for (const p of projects)
    if (p.image) expect(p.image.startsWith("/")).toBe(true);
});
