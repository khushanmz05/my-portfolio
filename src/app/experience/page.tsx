import Container from "@/components/Container";
import Image from "next/image";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  logo: string;
};

const experience: ExperienceItem[] = [
  {
    role: "IT Technician Assistant (Intern)",
    company: "Infotech (Papers & Services)",
    location: "Tete, Mozambique",
    dates: "Jul 2025 — Dec 2025",
    summary:
      "Provided hands-on IT support in a technology retail environment, diagnosing hardware and software issues for clients and staff while configuring systems, networks and devices.",
    highlights: [
      "Diagnosed and resolved hardware and software issues across 10–20 client workstations each week.",
      "Installed and configured Windows, business software, printers and workstation components.",
      "Troubleshot client network connectivity issues and implemented configuration and hardware fixes.",
      "Configured commercial CCTV systems and supported cabling and device connectivity.",
      "Explained technical solutions clearly to clients with different levels of experience.",
    ],
    logo: "/logos/infotech.jpg",
  },
];

export default function Experience() {
  return (
    <>

      <Container>

        <div className="relative max-w-3xl">
          <header className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Experience
            </h1>
            <p className="mt-5 text-base leading-7 text-[#A1A1AA] md:text-lg">
              Six months of IT support in Tete, Mozambique — the job that taught
              me to debug with someone standing over my shoulder.
            </p>
          </header>

          {experience.map((item) => (
            <section
              key={item.company}
              className="mt-14 border-t border-[#2A2A31] pt-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#2A2A31] bg-white">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={44}
                      height={44}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white">
                      {item.role}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#D4D4D8]">
                      {item.company}, {item.location}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-[#8B8B95]">{item.dates}</span>
              </div>

              <p className="mt-6 text-base leading-7 text-[#A1A1AA]">
                {item.summary}
              </p>

              <div className="mt-6 border-t border-[#2A2A31] pt-5">
                <p className="text-sm font-medium text-[#8B8B95]">What I did</p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#A1A1AA] md:text-base">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B7CF6]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
