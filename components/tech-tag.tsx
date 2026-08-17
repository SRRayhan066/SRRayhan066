import { cn } from "@/lib/utils";

interface TechTagProps {
  children: string;
  className?: string;
}

export function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "rounded-sm border border-border px-1.5 py-0.5 font-mono text-[11px] text-subtle",
        className,
      )}
    >
      {children}
    </span>
  );
}
