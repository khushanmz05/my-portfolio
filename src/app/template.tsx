import type { ReactNode } from "react";

/** Re-mounts on every navigation, so each page plays a short enter animation. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <div data-page className="page-enter">
      {children}
    </div>
  );
}
