import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { ProjectType } from "@/types/frontmatters";
import CloudinaryImg from "@/components/images/CloudinaryImage";
import MDXComponents from "@/components/content/MDXComponents";
import { Metadata } from "next";
// import { title } from "process";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const props = getPost(params);
  if (!props)
    return {
      title: "Not Found",
      description: "This page is not found",
    };
  return {
    title: props.frontmatter.title,
    description: props.frontmatter.description,
    alternates: {
      canonical: `/blog/${props.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/contents/blog"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("src/contents/blog", slug + ".mdx"),
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
    <div className="py-6 px-4">
      <div className="max-w-3xl mx-auto dark:bg-[#3c8b89] dark:bg-opacity-5 p-4 rounded-md bg-[#3c8b89] bg-opacity-5 overflow-hidden">
        <CloudinaryImg
          publicId={`yogimulyana/blog/banner/${props.frontmatter.banner}`}
          alt={`Photo from unsplash: ${props.frontmatter.banner}`}
          width={1200}
          height={(1200 * 2) / 5}
          aspect={{ height: 2, width: 5 }}
        />
        <h1 className="mt-4 dark:text-white">{props.frontmatter.title}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {props.frontmatter.description}
        </p>
        <hr className="mt-4 dark:border-gray-600" />
        <article className="prose mt-4 w-full transition-colors dark:prose-invert">
          <MDXRemote
            source={props.content}
            components={
              {
                ...MDXComponents,
              } as any
            }
          />
        </article>
      </div>
    </div>
  );
}
