import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-7 text-fg-3">
          That page doesn&apos;t exist, or it has moved.
        </p>
        <Link
          href="/projects"
          className="tap mt-8 inline-flex text-sm font-medium text-accent-text transition hover:text-white"
        >
          See all projects
        </Link>
      </div>
    </Container>
  );
}
