import { Award } from "lucide-react";
import { CommandLine } from "./command-line";
import { TerminalPanel } from "./terminal-panel";

const certifications = [
  {
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    date: "Apr 2026",
    file: "/AWS_AI_Practitioner_Challenge_Udacity.pdf",
  },
];

export function CertificationsPanel() {
  return (
    <TerminalPanel title="certs/" bodyClassName="gap-4 p-5.5">
      <CommandLine>{"ls certs/"}</CommandLine>

      <div className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-md border border-border bg-muted p-3.5 transition-colors hover:border-primary"
          >
            <Award className="mt-0.5 size-4 shrink-0 text-subtle transition-colors group-hover:text-primary" />
            <span className="flex min-w-0 flex-col gap-1">
              <span className="text-[15px] leading-[1.35] font-semibold transition-colors group-hover:text-primary">
                {cert.title}
              </span>
              <span className="font-mono text-[11.5px] text-subtle">
                {cert.issuer}
                {" · "}
                {cert.date}
              </span>
            </span>
          </a>
        ))}
      </div>
    </TerminalPanel>
  );
}
