import Image from "next/image";
import { TerminalPanel } from "./terminal-panel";

export function ProfileCard() {
  return (
    <TerminalPanel title="profile.jpeg" className="lg:col-span-4">
      <div className="relative min-h-75 flex-1 bg-muted">
        <Image
          src="/profile.jpeg"
          alt="S R Rayhan"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover saturate-[.95]"
          priority
        />
      </div>
      <div className="flex justify-between gap-2 border-t border-border px-3.5 py-3 font-mono text-xs text-subtle">
        <span>{"Dhaka, Bangladesh"}</span>
        <span className="text-terminal-green">{"● open to work"}</span>
      </div>
    </TerminalPanel>
  );
}
