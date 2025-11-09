import AboutMe from "@/sections/AboutMe";
import ProgrammingProfile from "@/sections/ProgrammingProfile";
import Experiences from "@/sections/Experiences";
import Skills from "@/sections/Skills";
import Blogs from "@/sections/Blogs";
import Projects from "@/sections/Projects";
import ContactMe from "@/sections/ContactMe";
import Copywrite from "@/sections/Copywrite";

export default function Page() {
  return (
    <section className="flex flex-col gap-3">
      <section className="grid grid-cols-12 auto-rows-fr gap-3 w-full">
        <AboutMe />
        <ProgrammingProfile />
        <Experiences />
        <Skills />
        <Blogs />
        <Projects />
        <ContactMe />
      </section>
      <Copywrite />
    </section>
  );
}
