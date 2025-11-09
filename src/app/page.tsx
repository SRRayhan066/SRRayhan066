import Portfolio from "@/sections/portfolio/PortfolioSection";
import { getMediumPosts, type MediumPost } from "@/lib/medium";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

export default async function Page() {
  const posts: MediumPost[] = await getMediumPosts();
  return (
    <Suspense fallback={<Loader />}>
      <Portfolio blogs={posts} />
    </Suspense>
  );
}
