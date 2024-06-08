import SectionHeading from "@/components/SectionHeading";
import SectionSubHeading from "@/components/SectionSubHeading";
import { HiOutlineNewspaper } from "react-icons/hi2";
import LatestBlogCard from "./LatestBlogCard";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { sortByDate } from "@/lib/mdx.client";

export default async function LatestBlog() {
  const filesBlog = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(filesBlog);
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading
          title={"Latest Blog"}
          icon={<HiOutlineNewspaper className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">Latest blogs from my blogs</p>
        </SectionSubHeading>
        {posts.map((post) => (
          <LatestBlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
