"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "./ui/sheet";

interface MobileNavProps {
  links: { label: string; href: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  return (
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
        data-lenis-prevent
        className="flex w-60 flex-col gap-8 border-l border-border bg-card p-6"
      >
        <SheetTitle className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-primary">{"~/"}</span>
          {" s-r-rayhan"}
        </SheetTitle>
        <nav className="mt-2 flex flex-col gap-1">
          {links.map((link) => (
            // Closed on click: the sheet locks body scroll, so the jump
            // can only run once it is dismissed
            <SheetClose asChild key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-2 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {"$"}
                </span>
                {link.label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
