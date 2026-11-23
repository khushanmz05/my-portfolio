import type { Metadata } from "next";
import Container from "@/components/Container";
import Image from "next/image";

type EducationItem = {
  school: string;
  url: string;
  years: string;
  degree: string;
  description: string;
  logo: string;
};

const education: EducationItem[] = [
  {
    school: "Epitech Barcelona",
    url: "https://www.epitech.eu",
    years: "2024 — 2029",
    degree: "Bachelor + Master, Software Engineering",
    description:
      "Focused on full-stack development, AI engineering, algorithms and software design — building web applications, local AI tooling, data analysis and networked systems from scratch. C and C++ are part of the foundation, alongside JavaScript, TypeScript and Python.",
    logo: "/logos/epitech.png",
  },
  {
    school: "Central High International School, Malawi",
    url: "https://www.centralhighmw.com",
    years: "2018 — 2024",
    degree: "IGCSE Certificate",
    description:
      "Completed high school with an IGCSE Certificate, building a strong academic foundation ahead of university-level software engineering studies.",
    logo: "/logos/chis.jpg",
  },
];

export const metadata: Metadata = {
  title: "Education",
  description:
    "My academic path from secondary school to a software engineering degree focused on full-stack development, AI and systems fundamentals.",
  alternates: { canonical: "/education" },
};

export default function Education() {
  return (
    <>

      <Container>

        <div className="relative max-w-3xl">
          <div className="mb-16 max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Education
            </h1>
            <p className="mt-5 text-base leading-7 text-[#A1A1AA] md:text-lg">
              My academic path from secondary school to a software engineering
              degree focused on full-stack development, AI and systems
              fundamentals.
            </p>
          </div>

          <div className="relative border-l border-[#2A2A31] pl-8">
            {education.map((item) => (
              <section
                key={item.school}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#8B7CF6] bg-[#121214]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CF6]" />
                </span>

                <div className="rounded-[20px] border border-[#2A2A31] bg-[#18181B] p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#2A2A31] bg-white">
                      <Image
                        src={item.logo}
                        alt={`${item.school} logo`}
                        width={44}
                        height={44}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="text-xl font-semibold text-white">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-[#A99CFF]"
                        >
                          {item.school}
                        </a>
                      </h2>
                      <span className="text-sm text-[#8B8B95]">
                        {item.years}
                      </span>
                    </div>
                  </div>

                  <p className="mb-3 text-sm font-medium text-[#D4D4D8]">
                    {item.degree}
                  </p>

                  <p className="text-sm leading-6 text-[#A1A1AA] md:text-base">
                    {item.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
