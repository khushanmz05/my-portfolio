import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getProject } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);
  if (!project || !caseStudy) notFound();

  return (
    <CaseStudyLayout
      project={project}
      label={caseStudy.label}
      summary={caseStudy.summary}
      sections={caseStudy.sections}
      focus={caseStudy.focus}
    />
  );
}
