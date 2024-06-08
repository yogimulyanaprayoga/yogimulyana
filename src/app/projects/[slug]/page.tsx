import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import CloudinaryImg from "@/components/images/CloudinaryImage";
import Breakline from "@/components/BreakLine";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/contents/projects"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("src/contents/projects", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownFile);

  return {
    frontmatter,
    slug,
    content,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <div data-aos="fade-left" className="py-6 px-4">
      <div className="max-w-[854px] mx-auto dark:bg-white dark:bg-opacity-10 p-4 rounded-md bg-black bg-opacity-5  overflow-hidden">
        <CloudinaryImg
          publicId={`yogimulyana/${props.frontmatter.banner}`}
          alt={props.frontmatter.title}
          width={1440}
          height={792}
        />
        <h1 className="mt-4">{props.frontmatter.title}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {props.frontmatter.description}
        </p>
        <Breakline />
        <article className="mdx projects prose mx-auto w-full transition-colors dark:prose-invert">
          <MDXRemote source={props.content} />
        </article>
      </div>
    </div>
  );
}
