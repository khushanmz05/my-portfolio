"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Helper to check if link is active
  const isActive = (href: string) => pathname === href;

  const baseClasses =
    "px-4 py-2 rounded-md transition-colors duration-200 font-semibold";

  const activeClasses = "bg-blue-700 text-white";
  const inactiveClasses =
    "text-gray-700 hover:bg-blue-100 hover:text-blue-700";

  return (
    <nav className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
      <Link
        href="/"
        className={`${baseClasses} ${
          isActive("/") ? activeClasses : inactiveClasses
        }`}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={`${baseClasses} ${
          isActive("/projects") ? activeClasses : inactiveClasses
        }`}
      >
        Projects
      </Link>
      <Link
        href="/about"
        className={`${baseClasses} ${
          isActive("/about") ? activeClasses : inactiveClasses
        }`}
      >
        About
      </Link>
      <Link
        href="/education"
        className={`${baseClasses} ${
          isActive("/education") ? activeClasses : inactiveClasses
        }`}
      >
        Education
      </Link>
    </nav>
  );
}
