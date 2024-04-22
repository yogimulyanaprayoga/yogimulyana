import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { getTags, sortByDate } from "@/lib/mdx.client";
import BlogCard from "@/components/content/blog/BlogCard";
import { BlogFrontmatter } from "@/types/frontmatters";
import { useEffect, useState } from "react";
import Accent from "@/components/Accent";

export default async function BlogPage() {
  const files = await getAllFilesFrontmatter("blog");

  const posts = sortByDate(files);

  //#region  //*=========== Search ===========
  // const [search, setSearch] = useState<string>("");
  // const [filteredPosts, setFilteredPosts] = useState<Array<BlogFrontmatter>>(
  //   () => [...posts]
  // );

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // };
  // const clearSearch = () => setSearch("");

  //#region  //*=========== Post Language Splitter ===========
  // const englishPosts = filteredPosts.filter((p) => !p.slug.startsWith("id-"));
  // const bahasaPosts = filteredPosts.filter((p) => p.slug.startsWith("id-"));
  // const currentPosts = bahasaPosts;
  //#endregion  //*======== Post Language Splitter ===========

  // const toggleTag = (tag: string) => {
  // If tag is already there, then remove
  // if (search.includes(tag)) {
  //   setSearch((s) =>
  //     s
  //       .split(" ")
  //       .filter((t) => t !== tag)
  //       ?.join(" ")
  //   );
  // } else {
  // append tag
  //     setSearch((s) => (s !== "" ? `${s.trim()} ${tag}` : tag));
  //   }
  // };

  // const filteredTags = getTags(currentPosts);

  // const checkTagged = (tag: string) => {
  //   return (
  //     filteredTags.includes(tag) &&
  //     search.toLowerCase().split(" ").includes(tag)
  //   );
  // };

  return (
    <main>
      <div className="layout min-h-main py-12">
        <h1 className="text-3xl md:text-5xl dark:text-white">Blog</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Thoughts, mental models, and tutorials about front-end development.
        </p>

        <ul className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </ul>
      </div>
    </main>
  );
}
