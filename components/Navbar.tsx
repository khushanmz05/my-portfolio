import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
    </div>
  );
}