import Link from "next/link";
import Container from "@/components/Container";
import { site, socials } from "@/data/site";

const links = [
  ...socials.map((s) => ({ ...s, download: false })),
  { label: "Download CV", href: site.cvPath, external: false, download: true },
];

export default function SiteFooter() {
  return (
    <footer className="relative mt-4">
      <Container>
        <div className="border-t border-[#2A2A31] py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-medium text-[#F3F3F5]">
            Let&apos;s build something useful.
          </p>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Based in Spain. Open to full-stack and AI engineering internships.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4D4D8] transition hover:text-[#A99CFF]"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                download={link.download || undefined}
                className="text-[#D4D4D8] transition hover:text-[#A99CFF]"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 text-xs text-[#8B8B95] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <Link href="/" className="transition hover:text-[#A99CFF]">
          Khushan Kanakrai, Software Engineering
        </Link>
      </div>
        </div>
      </Container>
    </footer>
  );
}
