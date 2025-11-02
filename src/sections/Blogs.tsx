import ContentWrapper from "@/wrapper/ContentWrapper";
import { getMediumPosts, type MediumPost } from "@/lib/medium";

export default async function Blogs() {
  const posts: MediumPost[] = await getMediumPosts();
  return (
    <ContentWrapper className="col-start-5 col-span-4 row-start-1 row-span-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Blogs</h1>
    </ContentWrapper>
  );
}
