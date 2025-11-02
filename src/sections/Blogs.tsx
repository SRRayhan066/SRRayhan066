import ContentWrapper from "@/wrapper/ContentWrapper";
import { getMediumPosts, type MediumPost } from "@/lib/medium";

export default async function Blogs() {
  const username = "shafikulrahman66";
  const limit = 6;
  const posts: MediumPost[] = await getMediumPosts(username, {
    limit,
    revalidateSeconds: 60 * 30,
  });

  return (
    <ContentWrapper className="col-start-5 col-span-4 row-start-1 row-span-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Blogs</h1>
    </ContentWrapper>
  );
}
