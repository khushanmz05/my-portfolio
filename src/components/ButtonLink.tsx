import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors";

export const buttonStyles = {
  primary: `${base} bg-accent-strong text-white hover:bg-accent-strong-hover`,
  secondary: `${base} border border-line bg-surface text-fg hover:border-accent/40 hover:bg-surface-2`,
};

export default function ButtonLink({
  href,
  variant = "primary",
  external = false,
  download = false,
  children,
  className = "",
}: ButtonLinkProps) {
  const classes = `${buttonStyles[variant]} ${className}`.trim();
  const isInternal = href.startsWith("/") && !download;

  if (isInternal && !external) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}
