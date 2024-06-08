import SectionHeading from "@/components/SectionHeading";
import SectionSubHeading from "@/components/SectionSubHeading";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { sortByDate } from "@/lib/mdx.client";
import LatestProjectCard from "./LatestProjectCard";
import { BiArchive } from "react-icons/bi";

export default async function LatestBlog() {
  const filesProject = await getAllFilesFrontmatter("projects");
  const projects = sortByDate(filesProject);
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading
          title={"Latest Project"}
          icon={<BiArchive className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            Latest projects from my projects
          </p>
        </SectionSubHeading>
        {projects.map((project) => (
          <LatestProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
