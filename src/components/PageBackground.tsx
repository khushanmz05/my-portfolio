export default function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Top violet wash */}
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,124,246,0.38), transparent 70%)",
        }}
      />

      {/* Lower-right wash */}
      <div
        className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,124,246,0.45), transparent 70%)",
        }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(169,156,255,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169,156,255,0.22) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 55%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(169,156,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 65%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
