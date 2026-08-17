"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-7.5 min-w-20 items-center justify-center gap-1.5 rounded-md border border-border bg-card px-2.5 font-mono text-[12.5px] text-muted-foreground transition-colors hover:border-primary hover:text-primary",
        className,
      )}
      aria-label="Toggle color theme"
    >
      {/* Rendered blank until mounted so the icon never contradicts the stored theme */}
      {mounted && (
        <>
          {isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
          <span>{isDark ? "light" : "dark"}</span>
        </>
      )}
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
