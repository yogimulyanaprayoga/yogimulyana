import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import UnstyledLink from "../links/UnstyledLink";
import clsx from "clsx";

const Card = ({ isProject, isStack, children }: any) => {
  const titleCard = isProject ? "Project" : isStack ? "Stack" : "Blog";
  const linkHref = isProject ? "/projects" : isStack ? "/stack" : "/blog";
  return (
    <div className="max-w-3xl mx-auto mt-8 dark:bg-[#3c8b89] dark:bg-opacity-5 p-4 rounded-md bg-[#3c8b89] bg-opacity-5 cursor-pointer overflow-hidden">
      <div className="flex items-end justify-between">
        <h4 className="text-xl md:text-2xl mb-2 dark:text-white">
          {titleCard}
        </h4>
        <div className="mr-1.5 mt-2 text-center p-2 md:p-0">
          <UnstyledLink
            href={linkHref}
            className={clsx(
              "inline-flex items-center gap-x-1",
              "text-sm text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white"
            )}
          >
            Full {titleCard}
            <HiMiniArrowLongRight />
          </UnstyledLink>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
