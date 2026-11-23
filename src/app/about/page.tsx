import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import Image from "next/image";
import { site, socials } from "@/data/site";

const places = [
  {
    name: "Mozambique",
    paragraphs: [
      "I was born and raised here, and it is where I first got curious about computers — less about using them than about why they broke.",
      "It is also where I did my first real IT work: six months as a technician in Tete after my first year at Epitech, covering hardware, Windows, printers, client networks, CCTV and support for people who just needed their machine to work.",
      "Most of that job was diagnosis, often with someone waiting. It taught me to debug under real constraints and to explain a fix in plain language.",
    ],
  },
  {
    name: "Malawi",
    paragraphs: [
      "I moved here for high school and stayed six years, finishing with an IGCSE.",
      "Six years away from home taught me to ask questions early instead of pretending I understood. I still try to work that way.",
    ],
  },
  {
    name: "Barcelona",
    paragraphs: [
      "I moved back to Mozambique after Malawi, then to Barcelona the same year, for Epitech. The first year was C, memory and a lot of debugging; since then I have moved into full-stack development and AI.",
      "I now build products end to end: React and Next.js interfaces, Node and Python APIs, and local models where they make sense. The systems foundation explains what the abstractions hide; the products are where I want to spend my time.",
    ],
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "I came to software through hardware: from IT support in Mozambique to full-stack and AI engineering in Barcelona.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>

      <Container>

        <div className="relative max-w-3xl">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-[20px] border border-line bg-surface sm:w-40">
              <Image
                src="/Image-portrait.jpeg"
                alt="Khushan Kanakrai"
                fill
                priority
                sizes="(min-width: 640px) 160px, 112px"
                className="object-cover"
              />
            </div>

            <div className="sm:pt-2">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Khushan Kanakrai
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted md:text-base">
                Software engineering student at Epitech Barcelona. Portuguese,
                English and French.
              </p>
            </div>
          </header>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-fg-2 md:text-2xl md:leading-10">
            I came to software through hardware. Before I was writing React or
            running local models, I was reinstalling Windows, configuring
            printers and tracing why a client&apos;s network had dropped. That
            background still shapes how I work: start from the failure, not the
            framework.
          </p>

          <div className="mt-14 border-t border-line">
            {places.map((place) => (
              <section
                key={place.name}
                className="border-b border-line py-8 md:grid md:grid-cols-[160px_1fr] md:gap-8"
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  {place.name}
                </h2>

                <div className="mt-3 space-y-3 md:mt-0">
                  {place.paragraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={
                        index === place.paragraphs.length - 1
                          ? "text-base leading-7 text-fg-2"
                          : "text-base leading-7 text-fg-3"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Now</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-fg-3">
              I&apos;m studying at Epitech Barcelona, building Sensai and other
              local-first AI tools. I&apos;m looking for a full-stack or AI
              engineering internship where I can keep shipping.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                See the work
              </ButtonLink>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg-3">
              {socials
                .filter((social) => social.external)
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap underline decoration-line-strong underline-offset-4 transition hover:text-white hover:decoration-accent"
                  >
                    {social.label}
                  </a>
                ))}
              <a
                href={site.cvPath}
                download
                className="tap underline decoration-line-strong underline-offset-4 transition hover:text-white hover:decoration-accent"
              >
                CV
              </a>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
