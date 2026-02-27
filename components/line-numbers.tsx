"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface LineNumbersProps {
  offset?: number;
  className?: string;
}

export function LineNumbers({ offset = 0, className }: LineNumbersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(20);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const contentSibling = el.nextElementSibling as HTMLElement | null;
    if (!contentSibling) return;

    const updateCount = () => {
      el.style.display = "none";
      const height = contentSibling.getBoundingClientRect().height;
      el.style.display = "";

      const lines = Math.ceil(height / 24);
      setCount(lines + offset);
    };

    updateCount();

    const observer = new ResizeObserver(updateCount);
    observer.observe(document.documentElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "hidden md:flex flex-col items-end pr-4 md:pr-6 text-line-number text-xs select-none border-r border-border/30 leading-6 shrink-0",
        className,
      )}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="h-6 flex items-center before:[content:counter(line)] [counter-increment:line]"
        />
      ))}
    </div>
  );
}
