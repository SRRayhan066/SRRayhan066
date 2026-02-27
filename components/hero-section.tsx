"use client";

import { HtmlTag } from "./html-tag";
import { HtmlComment } from "./html-comment";
import { LineNumbers } from "./line-numbers";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16" id="hero">
      <div className="mx-auto max-w-5xl w-full px-6">
        <div className="flex">
          <LineNumbers offset={-2} />
          <div className="flex-1 pl-4 md:pl-8 space-y-2 leading-6">
            <HtmlComment>{"S R Rayhan — portfolio/index.html"}</HtmlComment>
            <HtmlTag tag="html" attrs={{ lang: "en" }} />
            <div className="pl-4 md:pl-6">
              <HtmlTag tag="head" />
              <div className="pl-4 md:pl-6 space-y-1">
                <div className="flex items-baseline gap-0">
                  <HtmlTag tag="title" className="inline" inline />
                  <span className="text-foreground text-sm">
                    {"S R Rayhan — Software Engineer"}
                  </span>
                  <HtmlTag tag="title" closing inline className="inline" />
                </div>
                <div className="flex items-baseline gap-0 flex-wrap">
                  <HtmlTag
                    tag="meta"
                    attrs={{
                      name: "description",
                      content:
                        "Associate Software Engineer @ ShellBeeHaken Ltd. Full Stack Developer and Competitive Programmer.",
                    }}
                  />
                </div>
              </div>
              <HtmlTag tag="head" closing />
            </div>
            <div className="pl-4 md:pl-6">
              <HtmlTag tag="body" />
              <div className="pl-4 md:pl-8 py-8 md:py-12 space-y-6">
                <div>
                  <HtmlTag tag="h1" attrs={{ class: "hero-title" }} />
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight pl-4 md:pl-6 py-3">
                    {"Turning Coffee"}
                    <br />
                    {"Into "}
                    <span className="text-primary">{"Code"}</span>
                    <span
                      className={`inline-block w-3 h-8 md:h-12 bg-primary/70 ml-1 align-middle transition-opacity ${
                        cursorVisible ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </h1>
                  <HtmlTag tag="h1" closing />
                </div>
                <div>
                  <HtmlTag tag="p" attrs={{ class: "intro" }} />
                  <p className="text-muted-foreground text-sm md:text-base max-w-4xl pl-4 md:pl-6 py-2 leading-relaxed">
                    {
                      "Associate Software Engineer @ ShellBeeHaken Ltd | Software Engineering @ SUST | Full Stack Developer | Creative Coder | Passionate Learner"
                    }
                  </p>
                  <HtmlTag tag="p" closing />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
