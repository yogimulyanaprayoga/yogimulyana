import React from "react";
import Link from "next/link";
import { ProjectFrontmatter } from "@/types/frontmatters";
import BannerImg from "@/components/images/BannerImg";
import TechIcons, { TechListType } from "@/components/TechIcons";
import clsx from "clsx";

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<"li">;

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div className="grid gap-2">
      <div className="grid space-y-4">
        <ul className="group/list p-4">
          <li className="">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 dark:lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 sm:col-span-2">
                <BannerImg
                  noStyle
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  publicId={`yogimulyana/${project.banner}`}
                  alt={project.title}
                  width={200}
                  height={48}
                />
              </header>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <Link
                    href={`/projects/${project.slug}`}
                    className={clsx(
                      "inline-flex items-baseline font-medium leading-tight gap-x-1 group/link",
                      "text-base text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white"
                    )}
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-normal dark:text-gray-200">
                  {project.description}
                </p>
                <div className="mt-2">
                  <TechIcons
                    techs={project.techs.split(",") as Array<TechListType>}
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
