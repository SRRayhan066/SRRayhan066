import { CommandLine } from "./command-line";
import { TerminalPanel } from "./terminal-panel";

const MEDIUM_URL = "https://medium.com/@shafikulrahman66";

const articles = [
  {
    title: "Speed Up Username Availability Checks Using Bloom Filter",
    url: "https://medium.com/@shafikulrahman66/speed-up-username-availability-checks-using-bloom-filter-309b45f46bac",
    description:
      "Using Bloom filters to optimize high-frequency check operations.",
  },
  {
    title: "Lock It Down: A Practical Guide to Distributed Locking",
    url: "https://medium.com/@shafikulrahman66/lock-it-down-a-practical-guide-to-distributed-locking-80d6ab376564",
    description: "Keeping resources consistent across distributed systems.",
  },
  {
    title: "Find the Set of X Satisfying Mathematical Equations",
    url: "https://medium.com/@shafikulrahman66/find-the-set-of-x-x1-x2-xn-satisfying-the-equation-n-a-x1-a-x2-a-x3-where-all-values-of-set-x-65eddd335f95",
    description: "Solving constraint problems programmatically.",
  },
];

export function ArticlesSection() {
  return (
    <TerminalPanel
      id="articles"
      title="writing/"
      className="lg:col-span-4"
      bodyClassName="gap-4 p-5.5"
    >
      <CommandLine>{"ls writing/"}</CommandLine>

      <div className="flex flex-col gap-3.5">
        {articles.map((article, i) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col gap-1.5 ${
              i < articles.length - 1
                ? "border-b border-dashed border-border pb-3.5"
                : ""
            }`}
          >
            <h3 className="text-[15px] leading-[1.35] font-semibold transition-colors group-hover:text-primary">
              {article.title}
            </h3>
            <span className="text-[13px] leading-normal text-muted-foreground">
              {article.description}
            </span>
          </a>
        ))}
      </div>

      <a
        href={MEDIUM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-1 font-mono text-[12.5px] text-cool transition-colors hover:text-primary"
      >
        {"all posts on Medium →"}
      </a>
    </TerminalPanel>
  );
}
