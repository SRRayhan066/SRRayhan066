import { CommandLine } from "./command-line";
import { TerminalPanel } from "./terminal-panel";

export function EducationPanel() {
  return (
    <TerminalPanel
      title="education.md"
      className="flex-1"
      bodyClassName="gap-4 p-5.5"
    >
      <CommandLine>{"cat education.md"}</CommandLine>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold tracking-[-0.015em]">
          {"BSc in Software Engineering"}
        </h3>
        <span className="text-[14.5px] text-muted-foreground">
          {"Shahjalal University of Science and Technology"}
        </span>
        <span className="font-mono text-xs text-subtle">
          {"2020 — 2025 · CGPA 3.57 / 4.00 · Sylhet"}
        </span>
      </div>

      <p className="text-[14.5px] leading-relaxed text-pretty text-muted-foreground">
        {
          "Coursework across data structures, algorithms, databases, operating systems and software architecture — the base under everything I ship."
        }
      </p>
    </TerminalPanel>
  );
}
