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
      "Developed and contributed to a live project, Kriyakarak, delivering end-to-end functionality.",
      "Designed and implemented multiple backend services and frontend interfaces, enhancing system usability.",
      "Worked with clustering, rate limiting, caching and multi-instance data synchronization.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Redis", "MongoDB"],
  },
  {
    role: "Intern Software Engineer",
    company: "ShellBeeHaken Ltd",
    url: "https://shellbeehaken.com/",
    period: "Dec 2024 — May 2025",
    current: false,
    points: [
      "Built a Snake & Ladders game with React.js, deepening understanding of components and state management.",
      "Built a Twitter clone with Next.js, exploring full-stack development and server-side rendering.",
      "Learned Git & GitHub to manage version control and collaborate smoothly.",
      "Created a dice-based game using JavaScript to apply core programming concepts.",
    ],
    tech: ["React.js", "Next.js", "JavaScript", "Git", "HTML/CSS"],
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
