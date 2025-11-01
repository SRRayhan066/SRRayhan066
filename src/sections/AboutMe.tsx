import ContentWrapper from "@/wrapper/ContentWrapper";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import SocialTag from "@/components/social-tag/SocialTag";
import InfoTag from "@/components/info-tag/InfoTag";
import { aboutMe } from "@/data/portfolioData";

export default function AboutMe() {
  const { name, tagLine, growth, infoTags, socialTags } = aboutMe;
  return (
    <ContentWrapper className="col-start-1 col-span-4 row-start-1 row-span-5 flex flex-col justify-center gap-4">
      <div className="flex relative">
        <div className="flex items-center w-full gap-2">
          <div className="w-32 h-32 relative overflow-hidden rounded-3xl shrink-0">
            <Image
              src="/profile.jpg"
              alt="S R Rayhan's Profile Picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 overflow-hidden">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-md">{tagLine}</p>
            <p>{growth.title}</p>
            <p className="overflow-hidden">{growth.progressBar}</p>
          </div>
        </div>
        <div className="absolute right-0 top-0 flex items-center gap-1">
          Resume
          <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-md cursor-pointer">
            <FaDownload className="text-neutral-400" />
          </div>
        </div>
      </div>

      <div className="bg-neutral-800 rounded-lg p-2 flex gap-2 flex-wrap">
        {infoTags.map((tag) => (
          <InfoTag key={tag}>{tag}</InfoTag>
        ))}
      </div>
      <div className="rounded-lg flex gap-2">
        {socialTags.map(({ name, icon: Icon }) => (
          <SocialTag key={name}>
            <Icon /> <p className="text-lg">{name}</p>
          </SocialTag>
        ))}
      </div>
    </ContentWrapper>
  );
}
