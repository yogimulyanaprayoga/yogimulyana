// import ProjectCard from "@/components/content/projects/ProjectCard";
// import ProjectCard from "@/components/cards/ProjectCard";
import { sortByDate } from "@/lib/mdx.client";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { Metadata } from "next";
import ProjectCard from "@/components/content/projects/ProjectCard";
import { METADATA } from "@/constant/metadata";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: "Software Engineer portfolio ideas",
  keywords:
    "portfolio yogi mulyana prayoga, project yogi mulyana, yogimulyana, projects",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

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
