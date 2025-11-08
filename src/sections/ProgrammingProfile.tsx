import ContentWrapper from "@/wrapper/ContentWrapper";
import ProgrammingTag from "@/components/programming-tag/ProgrammingTag";
import { programmingProfiles } from "@/data/portfolioData";

export default function ProgrammingProfile() {
  return (
    <ContentWrapper className="col-start-5 col-span-4 row-start-5 row-span-2 flex flex-col items-center gap-4">
      <h3 className="text-xl font-bold">Programming Profiles</h3>
      <div className="w-full flex gap-2">
        {programmingProfiles.map(({ name, icon: Icon }) => (
          <ProgrammingTag key={name}>
            <Icon /> {name}
          </ProgrammingTag>
        ))}
      </div>
    </ContentWrapper>
  );
}
