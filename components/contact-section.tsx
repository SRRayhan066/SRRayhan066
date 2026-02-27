import { HtmlTag } from "./html-tag";
import { HtmlComment } from "./html-comment";
import { LineNumbers } from "./line-numbers";
import { Github, Linkedin, Mail } from "lucide-react";

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
    icon: Mail,
    label: "Email",
    href: "mailto:shafikulrahman66@gmail.com",
    handle: "shafikulrahman66@gmail.com",
  },
];

export function ContactSection() {
  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex">
          <LineNumbers />
          <div className="flex-1 pl-4 md:pl-8 space-y-2 leading-6">
            <HtmlComment>{"Contact Section"}</HtmlComment>
            <HtmlTag tag="section" attrs={{ id: "contact" }} />
            <div className="pl-4 md:pl-6 py-6 space-y-6">
              <div>
                <HtmlTag tag="h2" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground pl-4 md:pl-6 py-2">
                  {"Get in "}
                  <span className="text-primary">{"touch"}</span>
                </h2>
                <HtmlTag tag="h2" closing />
              </div>

              <div>
                <HtmlTag tag="p" />
                <p className="text-muted-foreground text-sm md:text-base pl-4 md:pl-6 py-2 max-w-lg leading-relaxed">
                  {
                    "Whether it's a new project, a collaboration, or just a chat about code — my inbox is always open. I'll get back to you as soon as I can."
                  }
                </p>
                <HtmlTag tag="p" closing />
              </div>

              <div>
                <HtmlTag tag="nav" attrs={{ class: "social-links" }} />
                <div className="pl-4 md:pl-6 py-3 space-y-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group w-fit"
                      aria-label={social.label}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="text-sm">{social.label}</span>
                      <span className="text-xs text-comment group-hover:text-primary/60 transition-colors">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
                <HtmlTag tag="nav" closing />
              </div>
            </div>
            <HtmlTag tag="section" closing />
          </div>
        </div>
      </div>
    </section>
  );
}
