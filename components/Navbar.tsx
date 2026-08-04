"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
  ];

  const linkClasses = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 ${
      active
        ? "bg-[#8B7CF6] text-white shadow-[0_4px_14px_rgba(139,124,246,0.3)]"
        : "text-[#B8B8C0] hover:bg-[#222228] hover:text-white"
    }`;

  return (
    <header className="fixed left-1/2 top-6 z-50 -translate-x-1/2 px-4">
      {/* Desktop navigation */}
      <nav className="hidden items-center gap-2 rounded-full border border-[#2A2A31] bg-[#18181B]/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:flex">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(active)}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile navigation */}
      <div className="relative sm:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2A31] bg-[#18181B]/90 text-[#D4D4D8] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:border-[#8B7CF6]/50 hover:text-white active:scale-95"
        >
          {menuOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute right-0 top-16 w-52 rounded-[20px] border border-[#2A2A31] bg-[#18181B]/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
            >
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`mb-1 flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold tracking-[-0.01em] transition last:mb-0 ${
                      active
                        ? "bg-[#8B7CF6] text-white"
                        : "text-[#B8B8C0] hover:bg-[#222228] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}