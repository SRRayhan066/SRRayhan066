import { CommandLine } from "./command-line";
import { TechTag } from "./tech-tag";
import { TerminalPanel } from "./terminal-panel";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "ShellBeeHaken Ltd",
    url: "https://shellbeehaken.com/",
    period: "Jun 2025 — present",
    current: true,
    points: [
      "Built an AI voice agent for farmers on RAG pipelines, with context-aware retrieval and response generation in real time.",
      "Designed and implemented backend services for Kriyakarak, a live production system, spanning API development and frontend integration.",
      "Integrated embeddings and vector databases (Qdrant, pgvector) to sharpen semantic search accuracy and response relevance.",
      "Worked with caching, rate limiting and multi-instance synchronization to keep the system fast under load.",
      "Shipped through production deployments, debugging and iterative releases alongside cross-functional teams.",
    ],
    tech: ["Next.js", "Node.js", "RAG", "Qdrant", "Redis", "MongoDB"],
  },
  {
    role: "Intern Software Engineer",
    company: "ShellBeeHaken Ltd",
    url: "https://shellbeehaken.com/",
    period: "Dec 2024 — May 2025",
    current: false,
    points: [
      "Worked on full-stack web development with React.js, Next.js and Node.js in production environments.",
      "Built internal tools and contributed to features running live.",
      "Developed a Twitter-like application with authentication, server-side rendering and real-time updates.",
      "Started out on browser games — Snake & Ladders in React and a dice game in JavaScript — to get the fundamentals down.",
      "Picked up Git workflows, REST API design and agile practices.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "JavaScript", "Git"],
  },
];

export function ExperienceSection() {
  return (
    <TerminalPanel
      id="experience"
      title="git log --author=rayhan"
      className="lg:col-span-7"
      bodyClassName="gap-5 p-5.5"
    >
      <CommandLine>{"git log --oneline"}</CommandLine>

      <div className="flex flex-col gap-5">
        {experiences.map((exp) => (
          <article
            key={exp.period}
            className={`flex flex-col gap-2.5 border-l-2 pl-4 ${
              exp.current ? "border-primary" : "border-border"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-[19px] font-semibold tracking-[-0.015em]">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-subtle">
                {exp.period}
              </span>
            </div>

            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit font-mono text-[13px] text-cool transition-colors hover:text-primary"
            >
              {exp.company}
            </a>

            <ul className="flex flex-col gap-1.5 text-[14.5px] leading-[1.55] text-muted-foreground">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <span className="font-mono text-subtle">{"·"}</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </TerminalPanel>
  );
}
