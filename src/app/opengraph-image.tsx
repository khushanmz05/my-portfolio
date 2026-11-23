import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — Software Engineering Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "#121214",
          color: "#F3F3F5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#8B8B95" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#8B7CF6" }} />
          Software Engineering Portfolio
        </div>
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -3, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 34, color: "#A1A1AA", marginTop: 24, maxWidth: 900 }}>
          Full-stack and AI projects from a Software Engineering student at Epitech Barcelona.
        </div>
      </div>
    ),
    size,
  );
}
