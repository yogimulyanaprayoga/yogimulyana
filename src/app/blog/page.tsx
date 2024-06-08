import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import Blog from "@/modules/blog";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle}`,
  description: "My blogs content about programming and software development",
  keywords: "blog yogi mulyana prayoga, yogi mulyana, yogimulyana",
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`,
  },
};

export default function BlogPage() {
  const PAGE_TITLE = "Blogs";
  const PAGE_DESCRIPTION =
    "Welcome to my blog! I will share tips and tutorials about website development.";

  return (
    <div
      data-aos="fade-left"
      className="h-screen flex flex-col max-w-[854px] mx-auto p-4"
    >
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Blog />
    </div>
  );
}
