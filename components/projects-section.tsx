import { HtmlTag } from "./html-tag";
import { HtmlComment } from "./html-comment";
import { LineNumbers } from "./line-numbers";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Twitter Clone",
    period: "Feb 2025 – Mar 2025",
    description:
      "A full-stack social media application with posting, likes, retweets, replies, follow system, and real-time notifications. Secure authentication via Auth.js (JWT & OAuth) with RESTful APIs.",
    tech: ["Next.js", "MongoDB", "WebSockets", "Auth.js", "TypeScript"],
    github: "https://github.com/SRRayhan066/Twitter-Clone",
    live: "",
  },
  {
    title: "Eco-Sync",
    period: "Apr 2024 – May 2024",
    description:
      "A full-stack web application for DNCC's waste management system. Features task assignment, role management, and billing workflows with a responsive, user-friendly interface.",
    tech: ["React.js", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/SRRayhan066/DNCC-Waste-Management",
    live: "",
  },
  {
    title: "SUST Football Tournament",
    period: "Mar 2024 – Apr 2024",
    description:
      "A web application to manage match schedules, player profiles, manager information, and tournament data. Includes JWT-based authentication and middleware for route protection.",
    tech: ["React.js", "Node.js", "MySQL", "JWT"],
    github:
      "https://github.com/SRRayhan066/SUST-Football-Tournament-Management-System-Application",
    live: "",
  },
  {
    title: "Link's Adventure: A Lone Warrior",
    period: "Apr 2022 – May 2022",
    description:
      "A 2D action game where the player saves the princess by defeating enemies and collecting keys. Implements movement mechanics, combat action logic, and custom game graphics.",
    tech: ["Java", "LibGDX"],
    github: "https://github.com/SRRayhan066/LINK-S-ADVENTURE-A-LONE-WARRIOR-",
    live: "",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 md:py-32" id="projects">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex">
          <LineNumbers />
          <div className="flex-1 pl-4 md:pl-8 space-y-2 leading-6">
            <HtmlComment>{"Projects Section"}</HtmlComment>
            <HtmlTag tag="section" attrs={{ id: "projects" }} />
            <div className="pl-4 md:pl-6 py-6 space-y-6">
              <div>
                <HtmlTag tag="h2" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground pl-4 md:pl-6 py-2">
                  {"Things I've "}
                  <span className="text-primary">{"built"}</span>
                </h2>
                <HtmlTag tag="h2" closing />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="group border border-border/40 hover:border-primary/40 bg-card/50 transition-all duration-300"
                  >
                    <div className="p-5 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <HtmlTag
                            tag="div"
                            attrs={{ class: "project" }}
                            className="text-[10px]"
                          />
                          <h3 className="text-base font-semibold text-foreground pl-2 pt-1 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[11px] text-comment pl-2">
                            {project.period}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 pt-1">
                          {project.github && (
                            <a
                              href={project.github}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label={`View ${project.title} live`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pl-2 pt-1">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[11px] text-comment">
                            {t}
                          </span>
                        ))}
                      </div>
                      <HtmlTag tag="div" closing className="text-[10px]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <HtmlTag tag="section" closing />
          </div>
        </div>
      </div>
    </section>
  );
}
