import { CommandLine } from "./command-line";
import { TechTag } from "./tech-tag";
import { TerminalPanel } from "./terminal-panel";

const stack = [
  {
    group: "languages",
    items: ["C/C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    group: "frameworks",
    items: ["React.js", "Next.js", "Nest.js", "Node.js", "Tailwind CSS"],
  },
  {
    group: "data & tools",
    items: ["MySQL", "MongoDB", "Redis", "Git", "GitHub"],
  },
];

export function StackPanel() {
  return (
    <TerminalPanel
      title="stack.json"
      className="lg:col-span-5"
      bodyClassName="gap-4 px-5.5 pt-5 pb-5.5"
    >
      <CommandLine>{"cat stack.json"}</CommandLine>

      <div className="flex flex-col gap-3.5">
        {stack.map((section) => (
          <div key={section.group} className="flex flex-col gap-2">
            <span className="font-mono text-[11.5px] tracking-[0.09em] uppercase text-subtle">
              {section.group}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {section.items.map((item) => (
                <TechTag
                  key={item}
                  className="bg-muted px-2.5 py-1 text-[12.5px] text-muted-foreground"
                >
                  {item}
                </TechTag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalPanel>
  );
}
