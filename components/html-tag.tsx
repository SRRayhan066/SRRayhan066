"use client"

import { cn } from "@/lib/utils"

interface HtmlTagProps {
  tag: string
  attrs?: Record<string, string>
  closing?: boolean
  selfClosing?: boolean
  className?: string
  inline?: boolean
}

export function HtmlTag({
  tag,
  attrs,
  closing = false,
  selfClosing = false,
  className,
  inline = false,
}: HtmlTagProps) {
  const Wrapper = inline ? "span" : "div"

  return (
    <Wrapper
      className={cn(
        "font-mono select-none text-tag opacity-50 transition-opacity duration-300",
        "hover:opacity-90",
        inline ? "inline" : "block",
        className
      )}
      aria-hidden="true"
    >
      <span className="text-muted-foreground">{"<"}</span>
      {closing && <span className="text-muted-foreground">{"/"}</span>}
      <span className="text-keyword">{tag}</span>
      {attrs &&
        Object.entries(attrs).map(([key, value]) => (
          <span key={key}>
            {" "}
            <span className="text-foreground/60">{key}</span>
            <span className="text-muted-foreground">{"="}</span>
            <span className="text-string">{`"${value}"`}</span>
          </span>
        ))}
      {selfClosing && <span className="text-muted-foreground">{" /"}</span>}
      <span className="text-muted-foreground">{">"}</span>
    </Wrapper>
  )
}
