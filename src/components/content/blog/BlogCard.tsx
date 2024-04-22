import React from "react";
import Link from "next/link";
import { BlogFrontmatter } from "@/types/frontmatters";
import BannerImg from "@/components/images/BannerImg";
import Tag from "../Tag";
import Accent from "@/components/Accent";
import UnstyledLink from "@/components/links/UnstyledLink";
import clsx from "clsx";
// import BannerImg from "../images/BannerImg";
// import Accent from "../Accent";
// import Tag from "../content/Tag";

type BlogCardProps = {
  post: BlogFrontmatter;
  checkTagged?: (tag: string) => boolean;
} & React.ComponentPropsWithoutRef<"li">;

const ProjectCard = ({
  post,
  className,
  checkTagged,
  onClick,
}: BlogCardProps) => {
  return (
    <div className="grid gap-2">
      <div className="grid space-y-4">
        <ul className="group/list p-4">
          <li className="">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 dark:lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 sm:col-span-2 ">
                <BannerImg
                  noStyle
                  className="rounded border-2 border-gray-300 dark:border-slate-200/30 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  publicId={`yogimulyana/blog/banner/${post.banner}`}
                  alt="Photo taken from unsplash"
                  width={200}
                  height={48}
                />
              </header>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <UnstyledLink
                    href={`/blog/${post.slug}`}
                    className={clsx(
                      "inline-flex items-baseline font-medium leading-tight gap-x-1 group/link",
                      "text-base text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white"
                    )}
                  >
                    {post.title}
                  </UnstyledLink>
                </h3>
                <p className="mt-2 text-sm leading-normal dark:text-gray-200">
                  {post.description}
                </p>
                <ul className="flex flex-wrap mt-2">
                  {post.tags.split(",").map((tag) => (
                    <>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center text-xs">
                          <Tag
                            tabIndex={-1}
                            className="bg-opacity-80 dark:!bg-opacity-60"
                            key={tag}
                          >
                            {checkTagged?.(tag) ? <Accent>{tag}</Accent> : tag}
                          </Tag>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
