export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline focus:outline-2 focus:outline-accent-text"
    >
      Skip to content
    </a>
  );
}
