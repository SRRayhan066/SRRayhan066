import AboutMe from "@/sections/AboutMe";
import ProgrammingProfile from "@/sections/ProgrammingProfile";
import Experiences from "@/sections/Experiences";
import Skills from "@/sections/Skills";

export default function Page() {
  return (
    <section className="grid grid-cols-12 grid-rows-12 gap-3 h-full w-full">
      <AboutMe />
      <ProgrammingProfile />
      <Experiences />
      <Skills />
    </section>
  );
}
