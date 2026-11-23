import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
};

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className="w-full px-6 md:px-10 lg:px-16">
      <div className={`mx-auto w-full max-w-6xl ${className}`.trim()}>
        {children}
      </div>
    </Tag>
  );
}
