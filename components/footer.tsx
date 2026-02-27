import { HtmlTag } from "./html-tag";

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-3">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="text-xs text-comment leading-relaxed max-w-sm mx-auto">
            <HtmlTag
              tag="footer"
              inline
              className="text-[10px] inline-flex mr-1"
            />
            <span>
              {"Built with semantic markup and a love for clean code."}
            </span>
            <HtmlTag
              tag="footer"
              closing
              inline
              className="text-[10px] inline-flex ml-1"
            />
          </div>
        </div>
        <div className="mt-3 text-center">
          <HtmlTag tag="html" closing className="text-xs" />
        </div>
      </div>
    </footer>
  );
}
