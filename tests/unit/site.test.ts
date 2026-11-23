import { site, socials } from "@/data/site";

test("socials are GitHub, LinkedIn, Email in order", () => {
  expect(socials.map((s) => s.label)).toEqual(["GitHub", "LinkedIn", "Email"]);
});

test("email social uses the site email", () => {
  expect(socials.find((s) => s.label === "Email")?.href).toBe(
    `mailto:${site.email}`,
  );
});

test("external is true exactly for http links", () => {
  for (const s of socials) expect(s.external).toBe(s.href.startsWith("http"));
});
