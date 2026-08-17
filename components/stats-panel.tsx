import { CommandLine } from "./command-line";
import { TerminalPanel } from "./terminal-panel";

const stats = [
  {
    value: "600+",
    unit: "",
    label: "problems solved",
    detail: "Codeforces · CodeChef · LeetCode",
    highlight: true,
  },
  {
    value: "3.57",
    unit: "/4",
    label: "CGPA",
    detail: "SUST, Software Engineering",
    highlight: false,
  },
  {
    value: "4",
    unit: "",
    label: "shipped projects",
    detail: "full stack & games",
    highlight: false,
  },
];

export function StatsPanel() {
  return (
    <TerminalPanel
      title="stats --all"
      className="lg:col-span-4"
      bodyClassName="gap-4.5 px-5.5 py-5"
    >
      <CommandLine>{"./stats"}</CommandLine>

      <div className="flex flex-col gap-3.5">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              i < stats.length - 1
                ? "flex items-baseline justify-between gap-2.5 border-b border-dashed border-border pb-3"
                : "flex items-baseline justify-between gap-2.5"
            }
          >
            <span
              className={`text-[34px] font-bold tracking-[-0.03em] ${
                stat.highlight ? "text-primary" : "text-foreground"
              }`}
            >
              {stat.value}
              {stat.unit && (
                <span className="text-base text-subtle">{stat.unit}</span>
              )}
            </span>
            <span className="text-right font-mono text-xs text-subtle">
              {stat.label}
              <br />
              {stat.detail}
            </span>
          </div>
        ))}
      </div>
    </TerminalPanel>
  );
}
