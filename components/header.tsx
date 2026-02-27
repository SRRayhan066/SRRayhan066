"use client";

import { HtmlTag } from "./html-tag";

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
        <nav className="flex items-center gap-1" aria-label="Main navigation">
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
      </div>
    </header>
  );
}
