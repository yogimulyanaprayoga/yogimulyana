import Image from "next/image";
import { socialLinks } from "@/common/mocks/SocialLinks";
import UnstyledLink from "@/components/links/UnstyledLink";
import clsx from "clsx";
import { HiMapPin, HiMiniArrowLongRight } from "react-icons/hi2";
import TypeAnimation from "@/components/TypeAnimation";
import SkillList from "@/modules/about/components/SkillList";

export default function Introduce() {
  return (
    <>
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="row-span-3">
            <Image
              className="object-cover rounded-md h-auto w-[293px] md:w-[202px] mx-auto border-2 border-gray-300 dark:border-slate-200/30 transition"
              src="/profile.png"
              alt="Profile"
              priority={true}
              width={293}
              height={202}
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between mt-4 md:mt-0">
              <div className="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 text-sm">
                <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                Hire me.
              </div>
              <div className="inline-flex items-center gap-x-4">
                {socialLinks.map((social) => (
                  <>
                    <UnstyledLink
                      href={social.href}
                      key={social.id}
                      className={clsx(
                        "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      )}
                    >
                      {social.icon}
                    </UnstyledLink>
                  </>
                ))}
              </div>
            </div>
            <div className="row-span-2 col-span-2">
              <div className="mt-4 leading-normal text-2xl md:text-3xl lg:text-4xl font-medium dark:text-white">
                <TypeAnimation
                  sequence={[
                    "Hi, I'm Yogi Mulyana",
                    "Hi, I'm Software Engineer",
                  ]}
                  delay={3000}
                />
              </div>
              <div className="md:max-w-[400px] mt-2">
                <p className="text-sm dark:text-gray-200">
                  I enjoy sharing knowledge about web development through blogs
                  that I write in language that is easier to understand.
                </p>
              </div>
              <ul className="md:flex justify-between mt-2">
                <li className="mr-1.5 mt-4 md:mt-6">
                  <p className="inline-flex items-center gap-x-1 text-sm dark:text-gray-200">
                    <span>
                      <HiMapPin />
                    </span>
                    Riau, Indonesia
                  </p>
                </li>
                <li className="mr-1.5 mt-4 md:mt-6 text-center shadow-md md:shadow-none p-2 md:p-0">
                  <UnstyledLink
                    href="/about"
                    className={clsx(
                      "inline-flex items-center gap-x-1 group",
                      "text-sm text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white"
                    )}
                  >
                    More about me
                    <HiMiniArrowLongRight className="transition-transform duration-300 transform group-hover:translate-x-1" />
                  </UnstyledLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SkillList />
    </>
  );
}
