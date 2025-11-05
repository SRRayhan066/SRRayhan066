import ContentWrapper from "@/wrapper/ContentWrapper";
import { getMediumPosts, type MediumPost } from "@/lib/medium";
import BlogCard from "@/components/blog-card/BlogCard";

export default async function Blogs() {
  const posts: MediumPost[] = await getMediumPosts();
  return (
    <ContentWrapper className="col-start-8 col-span-5 row-start-1 row-span-5 flex flex-col items-center justify-between">
      <h1 className="text-xl font-bold">Blogs</h1>
      <div className="flex flex-col gap-2">
        {posts.map((post, indx) => {
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
