import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag";
import Accent from "@/components/Accent";
import clsx from "clsx";

const ExperienceCard = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 dark:bg-[#3c8b89] dark:bg-opacity-5 p-4 rounded-md bg-[#3c8b89] bg-opacity-5 cursor-pointer overflow-hidden">
      <h4 className="text-xl md:text-2xl mb-2 dark:text-white">Experience</h4>
      <ul className="group/list p-4">
        {experiences.map((experience) => (
          <>
            <li className="mb-12" key={experience.id}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 dark:lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide dark:text-gray-200 sm:col-span-2">
                  {experience.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3
                    className={clsx(
                      "-mt-1 inline-flex items-baseline font-medium leading-tight group/link",
                      "text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white text-base"
                    )}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{experience.title}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal dark:text-gray-200">
                    {experience.description}
                  </p>
                  <ul className="flex flex-wrap mt-2">
                    {experience.tags.map((tag) => (
                      <>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center text-xs">
                            <Tag
                              tabIndex={-1}
                              className="bg-opacity-80 dark:!bg-opacity-60"
                            >
                              {tag}
                            </Tag>
                          </div>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;

const experiences = [
  {
    id: 1,
    period: "2023 - Present",
    title: "Web Developer GenPI Dumai",
    description:
      "Build and maintain a website that is used to provide information about Dumai City tourism. Work closely with design, branding and media communications teams, to implement and support best practices in web accessibility.",
    tags: ["Javascript", "React", "HTML", "CSS"],
  },
  {
    id: 2,
    period: "2023 - Present",
    title: "Freelancer (Junior Engineer)",
    description:
      "Build, organize, and deliver high-quality websites, design systems, and digital experiences for a variety of projects for clients including wedding invitation websites, organizational websites, and more.",
    tags: ["HTML", "CSS", "Javascript"],
  },
];
