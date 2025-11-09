"use client";

import { useEffect, useState } from "react";
import AboutMe from "@/sections/AboutMe";
import ProgrammingProfile from "@/sections/ProgrammingProfile";
import Experiences from "@/sections/Experiences";
import Skills from "@/sections/Skills";
import Blogs from "@/sections/Blogs";
import Projects from "@/sections/Projects";
import ContactMe from "@/sections/ContactMe";
import Copywrite from "@/sections/Copywrite";
import { MediumPost } from "@/lib/medium";

export default function Portfolio({ blogs }: { blogs: MediumPost[] }) {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const sections = [0, 1, 2, 3, 4, 5, 6, 7];

    sections.forEach((index) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, index]);
      }, index * 150);
    });
  }, []);

  const sectionClass = (index: number) => {
    return `transition-all duration-700 ease-out ${
      visibleSections.includes(index)
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`;
  };

  return (
    <section className="flex flex-col gap-3">
      <section className="grid grid-cols-12 auto-rows-fr gap-3 w-full">
        <AboutMe className={sectionClass(0)} />
        <Projects className={sectionClass(1)} />
        <Blogs blogs={blogs} className={sectionClass(2)} />
        <ProgrammingProfile className={sectionClass(3)} />
        <Skills className={sectionClass(4)} />
        <Experiences className={sectionClass(5)} />
        <ContactMe className={sectionClass(6)} />
      </section>
      <div className={sectionClass(7)}>
        <Copywrite />
      </div>
    </section>
  );
}
