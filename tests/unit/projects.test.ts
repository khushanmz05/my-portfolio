import {
  projects,
  featuredProjects,
  categories,
  getProject,
  primaryLink,
} from "@/data/projects";

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

test("dashboard has no live link", () => {
  expect(getProject("dashboard")!.live).toBeUndefined();
});

test("primaryLink prefers case study", () => {
  expect(primaryLink(getProject("sensai")!)).toEqual({
    href: "/projects/sensai",
    label: "Case study",
    external: false,
  });
});

test("primaryLink falls back to live", () => {
  expect(primaryLink(getProject("livedrop")!)?.label).toBe("Live site");
});

test("primaryLink falls back to repo", () => {
  expect(primaryLink(getProject("mypgp")!)).toEqual({
    href: "https://github.com/khushanmz05/MyPGP",
    label: "Repository",
    external: true,
  });
});

test("primaryLink is null with nothing to link", () => {
  expect(primaryLink(getProject("arcade")!)).toBeNull();
});

test("wolf3d uses its screenshot", () => {
  expect(getProject("wolf3d")!.image).toBe("/wolf3db.jpg");
});
