"use client";

import { HtmlTag } from "./html-tag";

import { Menu } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
        <a
          href="#"
          className="text-primary text-sm font-bold tracking-tight hover:text-foreground transition-colors"
        >
          {"S R Rayhan"}
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground"
              >
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[240px] bg-background/95 backdrop-blur-md border-l border-border/40 p-6 flex flex-col gap-8"
            >
              <SheetTitle className="text-primary font-bold tracking-tight">
                {"S R Rayhan"}
              </SheetTitle>
              <nav className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2 group"
                  >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {">"}
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
