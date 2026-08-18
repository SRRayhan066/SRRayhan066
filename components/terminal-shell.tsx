"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { TerminalPanel } from "./terminal-panel";
import { ScrollArea } from "./ui/scroll-area";

const commands: Record<string, string> = {
  help: "available: whoami, skills, experience, projects, certs, articles, contact, theme, clear",
  whoami:
    "S R Rayhan — Associate Software Engineer @ ShellBeeHaken Ltd. BSc Software Engineering, SUST.",
  skills:
    "ai/llm: RAG pipelines · embeddings · vector search — languages: C/C++ · Java · JS/TS — frameworks: React · Next.js · Nest.js · Node · Tailwind · REST · WebSockets — databases: MongoDB · PostgreSQL · MySQL · Redis · Qdrant · pgvector — tools: Git · GitHub · Bitbucket · Jira · Confluence",
  experience:
    "Associate SWE @ ShellBeeHaken (Jun 2025 →) building AI voice agents on RAG pipelines · Intern SWE @ ShellBeeHaken (Dec 2024 – May 2025)",
  projects:
    "bloom-filter · twitter-clone · eco-sync · sust-football-tournament · links-adventure",
  certs: "AWS AI Practitioner Challenge — Udacity, Apr 2026",
  articles:
    "bloom-filters · distributed-locking · set-of-x — all on medium.com/@shafikulrahman66",
  contact:
    "shafikulrahman66@gmail.com · github.com/SRRayhan066 · linkedin.com/in/s-r-rayhan066",
};

const HISTORY_LIMIT = 12;

interface HistoryLine {
  type: "in" | "out";
  value: string;
}

const initialHistory: HistoryLine[] = [
  {
    type: "out",
    value: "S R Rayhan — interactive shell. Type 'help' for commands.",
  },
];

export function TerminalShell() {
  const { resolvedTheme, setTheme } = useTheme();
  const [history, setHistory] = useState(initialHistory);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  // Keep the newest output in view without scrolling the page itself. The
  // scrollable node is ScrollArea's viewport, not the root we hold a ref to.
  useEffect(() => {
    const viewport = historyRef.current?.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]',
    );
    if (viewport) viewport.scrollTop = viewport.scrollHeight;
  }, [history]);

  const append = (command: string, output: string) => {
    setHistory((lines) => [
      ...lines.slice(-HISTORY_LIMIT),
      { type: "in", value: command },
      { type: "out", value: output },
    ]);
  };

  const runCommand = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = inputRef.current;
    if (!input) return;

    const raw = input.value.trim();
    input.value = "";
    if (!raw) return;

    const command = raw.toLowerCase();
    if (command === "clear") {
      setHistory([]);
      return;
    }
    if (command === "theme") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
      append(raw, "theme switched.");
      return;
    }

    append(raw, commands[command] ?? `command not found: ${raw} — try 'help'`);
  };

  return (
    <TerminalPanel
      title="bash — try it"
      className="bg-muted lg:col-span-6"
      bodyClassName="min-h-60 cursor-text gap-2 py-4 pl-4.5 font-mono text-[13px] leading-[1.65]"
    >
      {/* Clicking anywhere in the panel body hands focus to the prompt */}
      <div
        className="flex flex-1 flex-col gap-2"
        onClick={() => inputRef.current?.focus()}
      >
        {/* ScrollArea, not overflow-auto: it hides the native scrollbar and draws
            the thumb as a div, so no engine can add stepper arrows to it.
            data-lenis-prevent keeps the wheel here instead of scrolling the page. */}
        <ScrollArea
          ref={historyRef}
          type="auto"
          data-lenis-prevent
          className="max-h-64 flex-1"
        >
          <div className="flex flex-col gap-2 pr-4.5">
            {history.map((line, i) =>
              line.type === "in" ? (
                <div key={i} className="flex gap-2">
                  <span className="text-primary">{"$"}</span>
                  <span>{line.value}</span>
                </div>
              ) : (
                <div key={i} className="pl-4 text-pretty text-muted-foreground">
                  {line.value}
                </div>
              ),
            )}
          </div>
        </ScrollArea>

        <form onSubmit={runCommand} className="flex items-center gap-2 pr-4.5">
          <span className="text-primary">{"$"}</span>
          <label htmlFor="shell-input" className="sr-only">
            {"Shell command"}
          </label>
          <input
            id="shell-input"
            ref={inputRef}
            placeholder="type help"
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent font-mono text-[13px] text-foreground outline-none placeholder:text-subtle"
          />
        </form>
      </div>
    </TerminalPanel>
  );
}
