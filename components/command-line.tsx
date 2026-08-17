import { cn } from "@/lib/utils";

interface CommandLineProps {
  children: string;
  className?: string;
}

export function CommandLine({ children, className }: CommandLineProps) {
  return (
    <div className={cn("font-mono text-[13px] text-subtle", className)}>
      <span className="text-primary">{"$"}</span> {children}
    </div>
  );
}
