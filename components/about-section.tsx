import { HtmlTag } from "./html-tag";
import { HtmlComment } from "./html-comment";
import { LineNumbers } from "./line-numbers";

const skills = [
  "C/C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Nest.js",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

export function AboutSection() {
  return (
    <section className="py-24 md:py-32" id="about">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex">
          <LineNumbers />
          <div className="flex-1 pl-4 md:pl-8 space-y-2 leading-6">
            <HtmlComment>{"About Section"}</HtmlComment>
            <HtmlTag tag="section" attrs={{ id: "about" }} />
            <div className="pl-4 md:pl-6 py-6 space-y-6">
              <div>
                <HtmlTag tag="h2" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground pl-4 md:pl-6 py-2">
                  {"About "}
                  <span className="text-primary">{"me"}</span>
                </h2>
                <HtmlTag tag="h2" closing />
              </div>

              <div>
                <HtmlTag tag="p" attrs={{ class: "bio" }} />
                <div className="pl-4 md:pl-6 py-3 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    {
                      "I'm Rayhan — an Associate Software Engineer at Shellbeehaken Ltd and a BSc Software Engineering student at Shahjalal University of Science and Technology (CGPA: 3.57/4). I build across the full stack: from React frontends to Nest.js backends, game engines to distributed systems."
                    }
                  </p>
                  <p>
                    {
                      "Outside of work, I solve problems — 600+ and counting on Codeforces, Codechef, and Leetcode. I also write technical articles on topics like Bloom Filters and distributed locking. I believe software should be fast, readable, and built to last."
                    }
                  </p>
                </div>
                <HtmlTag tag="p" closing />
              </div>

              <div>
                <HtmlTag tag="ul" attrs={{ class: "skills" }} />
                <div className="pl-4 md:pl-6 py-3">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted-foreground group"
                      >
                        <span className="text-primary text-xs">{">"}</span>
                        <span className="group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <HtmlTag tag="ul" closing />
              </div>
            </div>
            <HtmlTag tag="section" closing />
          </div>
        </div>
      </div>
    </section>
  );
}
