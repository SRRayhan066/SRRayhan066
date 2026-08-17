import { CommandLine } from "./command-line";
import { TerminalPanel } from "./terminal-panel";

export function HeroSection() {
  return (
    <TerminalPanel
      id="about"
      title="rayhan@sust: ~/intro"
      className="lg:col-span-8"
      bodyClassName="gap-5 px-6 pt-8 pb-7 sm:px-7"
    >
      <CommandLine>{"whoami"}</CommandLine>

      <h1 className="text-[38px] leading-[1.03] font-bold tracking-[-0.035em] text-balance sm:text-5xl lg:text-[60px]">
        {"I build software that"}
        <br />
        {"stays fast under load."}
      </h1>

      <p className="max-w-[60ch] text-[16.5px] leading-relaxed text-pretty text-muted-foreground">
        {
          "Associate Software Engineer at ShellBeeHaken Ltd and a BSc Software Engineering student at SUST. I work across the stack — React and Next.js on the front, Nest.js, Node and Redis behind it — and I spend my off hours on competitive programming."
        }
      </p>

      <div className="mt-auto flex flex-wrap gap-2.5 pt-2 font-mono text-[13px]">
        <a
          href="mailto:shafikulrahman66@gmail.com"
          className="rounded-md bg-primary px-4 py-2.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"get in touch"}
        </a>
        <a
          href="#projects"
          className="rounded-md border border-border px-4 py-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
        >
          {"see the work"}
        </a>
      </div>
    </TerminalPanel>
  );
}
