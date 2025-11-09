import AboutMe from "@/sections/AboutMe";
import ProgrammingProfile from "@/sections/ProgrammingProfile";
import Experiences from "@/sections/Experiences";
import Skills from "@/sections/Skills";
import Blogs from "@/sections/Blogs";
import Projects from "@/sections/Projects";
import ContactMe from "@/sections/ContactMe";

export default function Page() {
  return (
    <section className="grid grid-cols-12 grid-rows-12 gap-3 h-full w-full">
      <AboutMe />
      <ProgrammingProfile />
      <Experiences />
      <Skills />
      <Blogs />
      <Projects />
      <ContactMe />
    </section>
  );
}
