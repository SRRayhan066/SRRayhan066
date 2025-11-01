import SkillTag from "@/components/skill-tag/SkillTag";
import { skillSet } from "@/data/portfolioData";
import ContentWrapper from "@/wrapper/ContentWrapper";
import { FaCogs, FaPalette } from "react-icons/fa";
import { FaLaptopCode, FaPlug, FaServer } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <ContentWrapper className="col-start-4 col-span-3 row-start-6 row-span-7 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Technical Skills</h1>
      <div className="w-full flex flex-col gap-5">
        {skillSet.map((set, index) => {
          const { title, skills } = set;
          const { icon: Icon, name } = title;
          return (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold flex items-center gap-1">
                <Icon /> {name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ icon: Icon, name }, idx) => (
                  <SkillTag key={idx}>
                    <Icon /> {name}
                  </SkillTag>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ContentWrapper>
  );
}
