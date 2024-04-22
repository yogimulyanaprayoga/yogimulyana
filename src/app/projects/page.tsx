// import ProjectCard from "@/components/content/projects/ProjectCard";
// import ProjectCard from "@/components/cards/ProjectCard";
import { sortByDate } from "@/lib/mdx.client";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { InferGetStaticPropsType } from "next";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import CloudinaryImg from "@/components/images/CloudinaryImage";
import ProjectCard from "@/components/content/projects/ProjectCard";

export default async function ProjectPage() {
  const files = await getAllFilesFrontmatter("projects");

  const projects = sortByDate(files);

  return (
    <div>
      <main>
        <section>
          <div className="layout min-h-main py-12">
            <h1 className="text-3xl md:text-5xl dark:text-white">Project</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Showcase of my works on frontend development.
            </p>

            <ul className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
