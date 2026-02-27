import { HtmlTag } from "./html-tag";
import { HtmlComment } from "./html-comment";
import { LineNumbers } from "./line-numbers";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Speed Up Username Availability Checks Using Bloom Filter",
    url: "https://medium.com/@shafikulrahman66/speed-up-username-availability-checks-using-bloom-filter-309b45f46bac",
    description:
      "Explaining how to use Bloom Filters to optimize high-frequency check operations in web applications.",
  },
  {
    title: "Lock It Down: A Practical Guide to Distributed Locking",
    url: "https://medium.com/@shafikulrahman66/lock-it-down-a-practical-guide-to-distributed-locking-80d6ab376564",
    description:
      "A deep dive into managing resource consistency across distributed systems using locking patterns.",
  },
  {
    title: "Find the Set of X Satifying Mathematical Equations",
    url: "https://medium.com/@shafikulrahman66/find-the-set-of-x-x1-x2-xn-satisfying-the-equation-n-a-x1-a-x2-a-x3-where-all-values-of-set-x-65eddd335f95",
    description:
      "Solving complex mathematical constraints through programmatic logic and optimization.",
  },
];

export function ArticlesSection() {
  return (
    <section className="py-24 md:py-32" id="articles">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex">
          <LineNumbers />
          <div className="flex-1 pl-4 md:pl-8 space-y-2 leading-6">
            <HtmlComment>{"Articles Section"}</HtmlComment>
            <HtmlTag tag="section" attrs={{ id: "articles" }} />
            <div className="pl-4 md:pl-6 py-6 space-y-6">
              <div>
                <HtmlTag tag="h2" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground pl-4 md:pl-6 py-2">
                  {"Turning Thoughts Into "}
                  <span className="text-primary">{"Articles"}</span>
                </h2>
                <HtmlTag tag="h2" closing />
              </div>

              <div className="grid grid-cols-1 gap-6">
                {articles.map((article, i) => (
                  <div
                    key={i}
                    className="group border border-border/40 hover:border-primary/40 bg-card/50 transition-all duration-300"
                  >
                    <div className="p-5 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <HtmlTag tag="article" inline className="text-[10px]" />
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pl-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed pl-2">
                          {article.description}
                        </p>
                        <HtmlTag
                          tag="article"
                          closing
                          inline
                          className="text-[10px] pl-2"
                        />
                      </div>
                      <a
                        href={article.url}
                        className="text-muted-foreground hover:text-primary transition-colors shrink-0 pt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read ${article.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
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
