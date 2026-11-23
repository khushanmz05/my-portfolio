import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getProject, projects } from "@/data/projects";

test("every case study belongs to a project that links to it", () => {
  for (const cs of caseStudies) {
    expect(getProject(cs.slug)?.caseStudy).toBe(`/projects/${cs.slug}`);
  }
});

test("every project with a case study has its content", () => {
  for (const p of projects.filter((p) => p.caseStudy)) {
    expect(getCaseStudy(p.slug)).toBeDefined();
  }
});

test("unknown slug has no case study", () => {
  expect(getCaseStudy("does-not-exist")).toBeUndefined();
});
