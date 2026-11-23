import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import PageBackground from "../../../components/PageBackground";
import SiteFooter from "../../../components/SiteFooter";

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

export default function About() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#121214] px-6 pb-20 pt-32 text-[#F3F3F5] md:px-10 lg:px-16">
        <PageBackground />

        <div className="relative mx-auto max-w-3xl">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-[20px] border border-[#2A2A31] bg-[#18181B] sm:w-40">
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
              <p className="mt-3 max-w-md text-sm leading-6 text-[#8B8B95] md:text-base">
                Software engineering student at Epitech Barcelona. Portuguese,
                English and French.
              </p>
            </div>
          </header>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-[#D4D4D8] md:text-2xl md:leading-10">
            I came to software through hardware. Before I was writing React or
            running local models, I was reinstalling Windows, configuring
            printers and tracing why a client&apos;s network had dropped. That
            background still shapes how I work: start from the failure, not the
            framework.
          </p>

          <div className="mt-14 border-t border-[#2A2A31]">
            {places.map((place) => (
              <section
                key={place.name}
                className="border-b border-[#2A2A31] py-8 md:grid md:grid-cols-[160px_1fr] md:gap-8"
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
                          ? "text-base leading-7 text-[#D4D4D8]"
                          : "text-base leading-7 text-[#A1A1AA]"
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
            <p className="mt-3 max-w-xl text-base leading-7 text-[#A1A1AA]">
              I&apos;m studying at Epitech Barcelona, building Sensai and other
              local-first AI tools. I&apos;m looking for a full-stack or AI
              engineering internship where I can keep shipping.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:khushan.kanakrai5@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[#8B7CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(139,124,246,0.35)] transition hover:bg-[#9A8CFF]"
              >
                Email me
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B] px-6 py-3 text-sm font-medium text-[#F3F3F5] transition hover:border-[#8B7CF6]/40 hover:bg-[#1D1D22]"
              >
                See the work
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#A1A1AA]">
              <a
                href="https://github.com/khushanmz05"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#3A3A42] underline-offset-4 transition hover:text-white hover:decoration-[#8B7CF6]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/khushan-kanakrai-170060310/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#3A3A42] underline-offset-4 transition hover:text-white hover:decoration-[#8B7CF6]"
              >
                LinkedIn
              </a>
              <a
                href="/Khushan_Kanakrai_CV.pdf"
                download
                className="underline decoration-[#3A3A42] underline-offset-4 transition hover:text-white hover:decoration-[#8B7CF6]"
              >
                CV
              </a>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
