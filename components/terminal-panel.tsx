import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalPanelProps {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
  bodyClassName?: string;
}

export function TerminalPanel({
  title,
  children,
  id,
  className,
  bodyClassName,
}: TerminalPanelProps) {
  return (
    <section
      id={id}
      data-reveal
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-panel",
        className,
      )}
    >
      <div className="flex items-center gap-2.5 border-b border-border bg-secondary px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-terminal-red" />
        <span className="size-2.5 rounded-full bg-terminal-yellow" />
        <span className="size-2.5 rounded-full bg-terminal-green" />
        <span className="ml-1.5 truncate font-mono text-xs text-subtle">
          {title}
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col", bodyClassName)}>{children}</div>
    </section>
  );
}
