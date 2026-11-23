import type { HTMLAttributes, ReactNode } from "react";

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

/**
 * Entrance rise that never hides content: transform-only, CSS-driven, so it
 * works without JavaScript and is disabled under prefers-reduced-motion.
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  style,
  ...rest
}: FadeInProps) {
  return (
    <div
      {...rest}
      className={`motion-rise ${className}`.trim()}
      style={delay ? { ...style, animationDelay: `${delay}ms` } : style}
    >
      {children}
    </div>
  );
}
