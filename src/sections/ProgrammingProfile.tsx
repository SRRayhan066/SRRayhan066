import ContentWrapper from "@/wrapper/ContentWrapper";
import { SiCodeforces } from "react-icons/si";
import ProgrammingTag from "@/components/programming-tag/ProgrammingTag";
import { programmingProfiles } from "@/data/portfolioData";

export default function ProgrammingProfile() {
  return (
    <ContentWrapper className="col-start-5 col-span-2 row-start-1 row-span-5 flex flex-col items-center gap-4">
      <h3 className="text-xl">Programming Profiles</h3>
      <div className="w-3/4 h-full flex flex-col justify-center gap-2">
        {programmingProfiles.map(({ name, icon: Icon }) => (
          <ProgrammingTag key={name}>
            <Icon /> {name}
          </ProgrammingTag>
        ))}
      </div>
    </ContentWrapper>
  );
}
