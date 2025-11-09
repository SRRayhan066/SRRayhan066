import Portfolio from "@/sections/portfolio/PortfolioSection";
import { getMediumPosts, type MediumPost } from "@/lib/medium";
import { Suspense } from "react";

export default async function Page() {
  const posts: MediumPost[] = await getMediumPosts();
  return (
    <Suspense fallback={null}>
      <Portfolio blogs={posts} />
    </Suspense>
  );
}
