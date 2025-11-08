import ExperienceCard from "@/components/experience-card/ExperienceCard";
import { experiences } from "@/data/portfolioData";
import ContentWrapper from "@/wrapper/ContentWrapper";

export default function Experiences() {
  return (
    <ContentWrapper className="col-start-6 col-span-4 row-start-1 row-span-4 flex flex-col items-center justify-between">
      <h1 className="text-xl font-bold">Experiences</h1>
      <div className="w-full flex flex-col">
        {experiences.map((experience, indx) => (
          <ExperienceCard
            key={indx}
            data={experience}
            isLast={experiences.length - 1 === indx}
          />
        ))}
      </div>
    </ContentWrapper>
  );
}
