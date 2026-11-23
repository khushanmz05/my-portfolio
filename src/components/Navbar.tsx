"use client";

import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!mobileRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !mobileRef.current) return;

      const focusables = Array.from(
        mobileRef.current.querySelectorAll<HTMLElement>("a[href], button"),
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !mobileRef.current.contains(active))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && (active === last || !mobileRef.current.contains(active))) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 sm:top-6">
      {/* Desktop navigation */}
      <nav
        aria-label="Main"
        className="mx-auto hidden w-fit items-center gap-2 rounded-full border border-line bg-surface/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:flex"
      >
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                active
                  ? "bg-accent-strong text-white"
                  : "text-fg-2 hover:bg-surface-2 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile navigation */}
      <div ref={mobileRef} className="relative sm:hidden">
        <div className="flex h-16 items-center justify-between border-b border-line/60 bg-bg/85 px-6 backdrop-blur-md">
          <Link href="/" className="text-base font-semibold tracking-tight text-fg">
            {site.name}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="-mr-2 flex h-12 w-12 items-center justify-center rounded-full text-fg-2 transition-colors hover:text-white"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <m.nav
              id="mobile-navigation"
              aria-label="Main"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-6 top-[4.5rem] max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-[20px] border border-line bg-surface/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
            >
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`mb-1 flex min-h-12 items-center rounded-xl px-4 text-base font-semibold tracking-[-0.01em] transition-colors last:mb-0 ${
                      active
                        ? "bg-accent-strong text-white"
                        : "text-fg-2 hover:bg-surface-2 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </m.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
