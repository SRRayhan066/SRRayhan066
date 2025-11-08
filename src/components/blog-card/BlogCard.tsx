import Image from "next/image";
import { formatDate } from "@/utils/DateUtils";

export default function BlogCard({
  title,
  link,
  pubDate,
  image,
}: {
  title: string;
  link: string;
  pubDate: string | undefined;
  image: string | undefined | null;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-2 gradient-card p-2 rounded-xl cursor-pointer"
    >
      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-4 border-neutral-500">
        <Image src={image!} alt="blog-image" fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between w-full">
        <h3 className="font-semibold text-md">{title}</h3>
        <p className="text-sm ml-auto">{formatDate(pubDate!)}</p>
      </div>
    </a>
  );
}
