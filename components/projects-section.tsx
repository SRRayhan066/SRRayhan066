import { CommandLine } from "./command-line";
import { TechTag } from "./tech-tag";
import { TerminalPanel } from "./terminal-panel";

const projects = [
  {
    title: "Twitter Clone",
    year: "2025",
    description:
      "Full-stack social app with posts, likes, retweets, follows and real-time notifications. Auth.js with JWT and OAuth over REST APIs.",
    tech: ["Next.js", "MongoDB", "WebSockets", "TypeScript"],
    github: "https://github.com/SRRayhan066/Twitter-Clone",
  },
  {
    title: "Eco-Sync",
    year: "2024",
    description:
      "Waste management platform for DNCC with task assignment, role management and billing workflows.",
    tech: ["React.js", "Node.js", "MySQL"],
    github: "https://github.com/SRRayhan066/DNCC-Waste-Management",
  },
  {
    title: "SUST Football Tournament",
    year: "2024",
    description:
      "Manages match schedules, player profiles and tournament data, with JWT auth and route middleware.",
    tech: ["React.js", "Node.js", "JWT"],
    github:
      "https://github.com/SRRayhan066/SUST-Football-Tournament-Management-System-Application",
  },
  {
    title: "Link's Adventure",
    year: "2022",
    description:
      "2D action game with movement mechanics, combat logic and custom graphics, built on LibGDX.",
    tech: ["Java", "LibGDX"],
    github: "https://github.com/SRRayhan066/LINK-S-ADVENTURE-A-LONE-WARRIOR-",
  },
];

export function ProjectsSection() {
  return (
    <TerminalPanel
      id="projects"
      title="~/projects"
      className="lg:col-span-8"
      bodyClassName="gap-4 p-5.5"
    >
      <CommandLine>{"ls -la ~/projects"}</CommandLine>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-md border border-border bg-muted p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-[16.5px] font-semibold">{project.title}</h3>
              <span className="font-mono text-[11px] text-subtle">
                {project.year}
              </span>
            </div>

            <p className="text-[13.5px] leading-[1.55] text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>
          </a>
        ))}
      </div>
    </TerminalPanel>
  );
}
