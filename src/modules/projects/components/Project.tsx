import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import ProjectCard from "./ProjectCard";
import { sortByDate } from "@/lib/mdx.client";

export default async function Project() {
  const files = await getAllFilesFrontmatter("projects");
  const projects = sortByDate(files);

  return (
    <section>
      <ul className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
