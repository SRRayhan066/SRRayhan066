import { Download } from "lucide-react";
import { TerminalPanel } from "./terminal-panel";

// TODO: replace with the hosted resume URL (Google Drive link or /resume.pdf in public/).
const RESUME_URL = "#";

export function ResumePanel() {
  return (
    <TerminalPanel
      title="resume.pdf"
      bodyClassName="flex-row flex-wrap items-center justify-between gap-3.5 px-5.5 py-4.5"
    >
      <div className="flex flex-col gap-0.5 font-mono">
        <span className="text-[13px] text-muted-foreground">
          {"rayhan_resume.pdf"}
        </span>
        <span className="text-[11.5px] text-subtle">
          {"updated Aug 2026 · 1 page"}
        </span>
      </div>

      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-md border border-primary px-4 py-2.5 font-mono text-[13px] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {"wget resume"}
        <Download className="size-3.5" />
      </a>
    </TerminalPanel>
  );
}
