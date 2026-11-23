import Link from "next/link";

const links = [
  { href: "mailto:khushan.kanakrai5@gmail.com", label: "Email", external: false },
  {
    href: "https://github.com/khushanmz05",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/khushan-kanakrai-170060310/",
    label: "LinkedIn",
    external: true,
  },
  { href: "/Khushan_Kanakrai_CV.pdf", label: "Download CV", external: false },
];

export default function SiteFooter() {
  return (
    <footer className="relative mx-auto mt-24 max-w-6xl border-t border-[#2A2A31] py-10">
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
                {...(link.label === "Download CV" ? { download: true } : {})}
                className="text-[#D4D4D8] transition hover:text-[#A99CFF]"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 text-xs text-[#8B8B95] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Khushan Kanakrai</p>
        <Link href="/" className="transition hover:text-[#A99CFF]">
          Khushan Kanakrai, Software Engineering
        </Link>
      </div>
    </footer>
  );
}
