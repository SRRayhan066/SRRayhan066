import ContentWrapper from "@/wrapper/ContentWrapper";
import { type MediumPost } from "@/lib/medium";
import BlogCard from "@/components/blog-card/BlogCard";

export default function Blogs({
  blogs,
  className,
}: {
  blogs: MediumPost[];
  className: string;
}) {
  return (
    <ContentWrapper
      className={`col-start-1 col-span-5 row-start-3 row-span-3 flex flex-col items-center justify-between gap-6 ${className}`}
    >
      <h1 className="text-xl font-bold">Blogs</h1>
      <div className="flex flex-col gap-2  h-full">
        {blogs.map((post, indx) => {
          const { id, title, link, pubDate, image } = post;
          return (
            <BlogCard
              key={`${id}-${indx}`}
              {...{ title, link, pubDate, image }}
            />
          );
        })}
      </div>
    </ContentWrapper>
  );
}
