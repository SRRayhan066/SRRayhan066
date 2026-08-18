import { CommandLine } from "./command-line";
import { TechTag } from "./tech-tag";
import { TerminalPanel } from "./terminal-panel";

const stack = [
  {
    group: "lang",
    items: ["C/C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    group: "ai/llm",
    items: ["RAG pipelines", "Embeddings", "Vector search"],
  },
  {
    group: "frameworks",
    items: [
      "React.js",
      "Next.js",
      "Nest.js",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    group: "data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Qdrant", "pgvector"],
  },
  {
    group: "tools",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Confluence"],
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
          <div
            key={section.group}
            className="flex flex-col gap-2 sm:flex-row sm:gap-3"
          >
            <span className="shrink-0 pt-1 font-mono text-[11.5px] tracking-[0.09em] uppercase text-subtle sm:w-26">
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
