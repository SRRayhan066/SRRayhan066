import { cn } from "@/lib/utils"

interface HtmlCommentProps {
  children: string
  className?: string
}

export function HtmlComment({ children, className }: HtmlCommentProps) {
  return (
    <div
      className={cn(
        "font-mono text-comment text-sm select-none opacity-40",
        className
      )}
      aria-hidden="true"
    >
      {"<!-- "}{children}{" -->"}
    </div>
  )
}
