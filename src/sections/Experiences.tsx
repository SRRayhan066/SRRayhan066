import ExperienceCard from "@/components/experience-card/ExperienceCard";
import { experiences } from "@/data/portfolioData";
import ContentWrapper from "@/wrapper/ContentWrapper";

export default function Experiences() {
  return (
    <ContentWrapper className="col-start-1 col-span-3 row-start-6 row-span-5 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Experiences</h1>
      <div className="w-full h-full flex flex-col justify-center">
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
