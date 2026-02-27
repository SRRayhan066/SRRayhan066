import { HtmlTag } from "./html-tag"

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-comment">
            <HtmlTag tag="footer" inline className="text-[10px]" />
            <span>{"Built with semantic markup and a love for clean code."}</span>
            <HtmlTag tag="footer" closing inline className="text-[10px]" />
          </div>
          <div className="text-xs text-comment">
            {"// "}{new Date().getFullYear()}{" | All rights reserved"}
          </div>
        </div>
        <div className="mt-6 text-center">
          <HtmlTag tag="html" closing className="text-xs" />
        </div>
      </div>
    </footer>
  )
}
