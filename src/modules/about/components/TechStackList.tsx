import SectionHeading from "@/components/SectionHeading";
import SectionSubHeading from "@/components/SectionSubHeading";
import { skillMocks } from "@/common/mocks/Skills";
import { HiSquare3Stack3D } from "react-icons/hi2";

export default function TechStack() {
  return (
    <>
      <SectionHeading
        title={"Tech Stack"}
        icon={<HiSquare3Stack3D className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">
          The technology stack I use to build a portfolio website
        </p>
      </SectionSubHeading>
      <p className="text-sm dark:text-gray-200">
        In developing my web portfolio I use NextJS, TypeScript, Prisma and
        TailwindCSS technologies. with this technology I aim to create a dynamic
        cross-platform user experience. Although this is my primary tool, my
        skillset continues to expand, not just limited to this tool alone,
        ensuring adaptability and innovation across all my projects.
      </p>
      <figure className="mt-4">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {skillMocks.map((skill) => (
            <>
              <div>{skill.icon}</div>
            </>
          ))}
        </div>
      </figure>
    </>
  );
}
