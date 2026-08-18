import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "articles", href: "#articles" },
  { label: "contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="mb-5.5 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-baseline gap-2.5 font-mono">
        <span className="text-[15px] text-primary">{"~/"}</span>
        <a
          href="#about"
          className="text-[15px] font-semibold tracking-tight transition-colors hover:text-primary"
        >
          {"s-r-rayhan"}
        </a>
        <span className="hidden text-[13px] text-subtle sm:inline">
          {"— associate software engineer"}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1.5 font-mono text-[12.5px] md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md border border-border px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />

        {/* Mobile navigation */}
        <div className="md:hidden">
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}
