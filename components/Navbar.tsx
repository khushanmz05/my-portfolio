"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
  ];

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 px-4">
      <nav className="flex items-center gap-2 rounded-full border border-[#2A2A31] bg-[#18181B]/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-[#8B7CF6] text-white"
                  : "text-[#D4D4D8] hover:bg-[#222228] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}