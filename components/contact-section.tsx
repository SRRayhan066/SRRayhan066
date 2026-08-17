import { Github, Linkedin, Mail, SquarePen } from "lucide-react";
import { TerminalPanel } from "./terminal-panel";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SRRayhan066",
    handle: "@SRRayhan066",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/s-r-rayhan066",
    handle: "/in/s-r-rayhan066",
  },
  {
    icon: SquarePen,
    label: "Medium",
    href: "https://medium.com/@shafikulrahman66",
    handle: "@shafikulrahman66",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:shafikulrahman66@gmail.com",
    handle: "shafikulrahman66@gmail.com",
  },
];

export function ContactSection() {
  return (
    <TerminalPanel
      id="contact"
      title="links.txt"
      className="lg:col-span-6"
      bodyClassName="gap-3.5 p-5.5"
    >
      <p className="text-[14.5px] leading-relaxed text-muted-foreground">
        {
          "A new project, a collaboration, or just a chat about code — my inbox is open."
        }
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {socials.map((social) => {
          const isExternal = social.href.startsWith("http");

          return (
            <a
              key={social.label}
              href={social.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-md border border-border bg-muted px-3.5 py-3 transition-colors hover:border-primary"
            >
              <social.icon className="size-4 shrink-0 text-subtle transition-colors group-hover:text-primary" />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-sm font-semibold">{social.label}</span>
                <span className="truncate font-mono text-[11.5px] text-subtle">
                  {social.handle}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </TerminalPanel>
  );
}
