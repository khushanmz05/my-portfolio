import { render, screen } from "@testing-library/react";
import ButtonLink from "@/components/ButtonLink";

test("external link opens in a new tab safely", () => {
  render(<ButtonLink href="https://example.com" external>Go</ButtonLink>);
  const link = screen.getByRole("link", { name: "Go" });
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

test("download link carries the download attribute", () => {
  render(<ButtonLink href="/cv.pdf" download>CV</ButtonLink>);
  expect(screen.getByRole("link", { name: "CV" })).toHaveAttribute("download");
});

test("primary uses the strong accent and no glow", () => {
  render(<ButtonLink href="/projects">Work</ButtonLink>);
  const cls = screen.getByRole("link", { name: "Work" }).className;
  expect(cls).toContain("bg-accent-strong");
  expect(cls).not.toContain("shadow-");
});

test("secondary uses the surface style", () => {
  render(<ButtonLink href="/projects" variant="secondary">All</ButtonLink>);
  const cls = screen.getByRole("link", { name: "All" }).className;
  expect(cls).toContain("bg-surface");
  expect(cls).not.toContain("bg-accent-strong");
});

test("internal link has no target", () => {
  render(<ButtonLink href="/about">About</ButtonLink>);
  expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("target");
});
