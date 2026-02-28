import { HtmlTag } from "./html-tag";
import { HtmlComment } from "./html-comment";
import { LineNumbers } from "./line-numbers";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Shellbeehaken Ltd",
    url: "https://shellbeehaken.com/",
    period: "June 2025 – Present",
    points: [
      "Developed and contributed to a live project, Kriyakarak, delivering end-to-end functionality.",
      "Designed and implemented multiple backend services and frontend interfaces, enhancing system usability.",
      "Familiar with concepts including clustering, rate limiting, caching, and multi-instance data synchronization.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Redis", "MongoDB"],
  },
  {
    role: "Intern Software Engineer",
    company: "Shellbeehaken Ltd",
    url: "https://shellbeehaken.com/",
    period: "December 2024 – May 2025",
    points: [
      "Built a Snake & Ladders game with React.js, deepening understanding of components and state management.",
      "Built a Twitter clone with Next.js, exploring full-stack development and server-side rendering.",
      "Learned Git & GitHub to manage version control and collaborate on projects smoothly.",
      "Created a dice-based game using JavaScript to apply core programming concepts.",
    ],
    tech: ["React.js", "Next.js", "JavaScript", "Git", "HTML/CSS"],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-24 md:py-32" id="experience">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex">
          <LineNumbers offset={2} />
          <div className="flex-1 pl-4 md:pl-8 space-y-2 leading-6">
            <HtmlComment>{"Experience Section"}</HtmlComment>
            <HtmlTag tag="section" attrs={{ id: "experience" }} />
            <div className="pl-4 md:pl-6 py-6 space-y-6">
              <div>
                <HtmlTag tag="h2" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground pl-4 md:pl-6 py-2">
                  {"Where I've "}
                  <span className="text-primary">{"worked"}</span>
                </h2>
                <HtmlTag tag="h2" closing />
              </div>

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="group">
                    <HtmlTag
                      tag="article"
                      attrs={{ class: "experience-item" }}
                    />
                    <div className="pl-4 md:pl-6 py-4 border-l border-border/40 hover:border-primary/60 transition-colors ml-2">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                        <h3 className="text-base md:text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="text-primary text-sm">
                          {"@ "}
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline underline-offset-4"
                          >
                            {exp.company}
                          </a>
                        </span>
                      </div>
                      <div className="text-xs text-comment mb-3">
                        {exp.period}
                      </div>
                      <ul className="space-y-1.5 mb-4">
                        {exp.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="text-primary mt-0.5 shrink-0">
                              {"–"}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 border border-primary/20 text-primary bg-primary/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <HtmlTag tag="article" closing />
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
