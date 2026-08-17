export function Footer() {
  return (
    <footer className="mt-6.5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-subtle">
      <span>
        {"© 2026 S R Rayhan — built with semantic markup and a love for clean code."}
      </span>
      <span className="flex items-center gap-1.5">
        {"exit 0"}
        <span className="inline-block h-3.5 w-1.5 animate-blink bg-subtle" />
      </span>
    </footer>
  );
}
