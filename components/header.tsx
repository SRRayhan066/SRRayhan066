import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

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
          href="#"
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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="size-7.5 border-border bg-card text-muted-foreground"
              >
                <Menu className="size-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-60 flex-col gap-8 border-l border-border bg-card p-6"
            >
              <SheetTitle className="font-mono text-sm font-semibold tracking-tight">
                <span className="text-primary">{"~/"}</span>
                {" s-r-rayhan"}
              </SheetTitle>
              <nav className="mt-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      {"$"}
                    </span>
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
