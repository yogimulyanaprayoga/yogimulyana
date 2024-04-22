import Seo from "@/components/Seo";
import Card from "@/components/content/Card";
import AboutCard from "@/components/content/about/AboutCard";
import BlogCard from "@/components/content/blog/BlogCard";
import ExperienceCard from "@/components/content/experience/ExperienceCard";
import ProjectCard from "@/components/content/projects/ProjectCard";
import Layout from "@/components/layout/Layout";
import { sortByDate } from "@/lib/mdx.client";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";

const page = async () => {
  const filesBlog = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(filesBlog);

  const filesProject = await getAllFilesFrontmatter("projects");
  const projects = sortByDate(filesProject);
  return (
    <>
      <main className="py-6 px-4">
        {/* About */}
        <AboutCard />

        {/* Experience */}
        <ExperienceCard />

        {/* Blog */}
        <Card>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </Card>

        {/* Project */}
        <Card isProject={true}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Card>
      </main>
    </>
  );
};

export default page;
