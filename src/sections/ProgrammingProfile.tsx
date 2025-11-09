import ContentWrapper from "@/wrapper/ContentWrapper";
import ProgrammingTag from "@/components/programming-tag/ProgrammingTag";
import { programmingProfiles } from "@/data/portfolioData";

export default function ProgrammingProfile({
  className,
}: {
  className: string;
}) {
  return (
    <ContentWrapper
      className={`col-start-6 col-span-3 row-start-4 row-span-2 flex flex-col items-center gap-6 ${className}`}
    >
      <h3 className="text-xl font-bold">Programming Profiles</h3>
      <div className="w-full grid grid-cols-1 gap-2 h-full">
        {programmingProfiles.map(({ name, icon: Icon }) => (
          <ProgrammingTag key={name}>
            <Icon /> {name}
          </ProgrammingTag>
        ))}
      </div>
    </ContentWrapper>
  );
}
