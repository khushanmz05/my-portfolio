import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushan Kanakrai | Software Engineering Portfolio",
  description:
    "Portfolio of Khushan Kanakrai, a Software Engineering student focused on C, C++, systems programming, networking, rendering, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>

      <body className="font-satoshi antialiased">{children}</body>
    </html>
  );
}