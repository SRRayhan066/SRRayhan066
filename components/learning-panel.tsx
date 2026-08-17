import { CommandLine } from "./command-line";
import { TerminalPanel } from "./terminal-panel";

const topics = [
  "Distributed locking",
  "Rate limiting & caching",
  "Redis clustering",
  "Multi-instance sync",
  "System design",
];

export function LearningPanel() {
  return (
    <TerminalPanel
      title="learning.log"
      className="lg:col-span-3"
      bodyClassName="gap-3.5 p-5"
    >
      <CommandLine>{"tail -f learning.log"}</CommandLine>

      <ul className="flex flex-col gap-2.5 font-mono text-[13px] text-muted-foreground">
        {topics.map((topic) => (
          <li key={topic} className="flex gap-2">
            <span className="text-cool">{"→"}</span>
            {topic}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-1.5 pt-2 font-mono text-[11.5px] text-subtle">
        <span className="size-1.5 animate-blink bg-primary" />
        {"watching"}
      </div>
    </TerminalPanel>
  );
}
