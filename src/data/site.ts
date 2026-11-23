export const site = {
  name: "Khushan Kanakrai",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khushan-kanakrai.vercel.app",
  email: "khushan.kanakrai5@gmail.com",
  cvPath: "/Khushan_Kanakrai_CV.pdf",
  tagline:
    "Portfolio of Khushan Kanakrai, a Software Engineering student focused on full-stack development and AI engineering — React, Next.js, Node.js, Python and local models.",
} as const;

export type SocialLink = {
  label: "Email" | "GitHub" | "LinkedIn";
  href: string;
  external: boolean;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/khushanmz05", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khushan-kanakrai-170060310/",
    external: true,
  },
  { label: "Email", href: `mailto:${site.email}`, external: false },
];
