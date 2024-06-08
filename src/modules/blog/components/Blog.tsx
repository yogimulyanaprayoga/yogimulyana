import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import BlogCard from "./BlogCard";
import { sortByDate } from "@/lib/mdx.client";

export default async function Blog() {
  const files = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(files);

  return (
    <section>
      <ul className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
