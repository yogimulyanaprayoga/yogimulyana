import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import PageHeading from "@/components/PageHeading";
import Project from "@/modules/projects";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: "Software Engineer portfolio ideas",
  keywords:
    "portfolio yogi mulyana prayoga, project yogi mulyana, yogimulyana, projects",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

export default function ProjectPage() {
  const PAGE_TITLE = "Projects";
  const PAGE_DESCRIPTION = "Showcase of my works on frontend development.";

  return (
    <div
      data-aos="fade-left"
      className="h-screen flex flex-col max-w-[854px] mx-auto p-4"
    >
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Project />
    </div>
  );
}
