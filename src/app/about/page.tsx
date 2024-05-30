import UnstyledLink from "@/components/links/UnstyledLink";
import Slider from "@/components/slider/Slider";
import { METADATA } from "@/constant/metadata";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import { HiMapPin, HiMiniArrowLongRight } from "react-icons/hi2";
import {
  SiCodeigniter,
  SiGithub,
  SiInstagram,
  SiLaravel,
  SiLinkedin,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `A short story of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const AboutPage = () => {
  return (
    <div className="px-4 py-4">
      <div className="max-w-3xl mx-auto dark:bg-[#3c8b89] dark:bg-opacity-5 p-4 rounded-md bg-[#3c8b89] bg-opacity-5 overflow-hidden">
        <div className="grid gap-2">
          <div className="block md:flex gap-8 ">
            <div className="row-span-3">
              <Image
                className="object-cover rounded-md h-auto w-[293px] md:w-[202px] mx-auto border-2 border-gray-300 dark:border-slate-200/30 transition"
                src="/profile.png"
                alt="Profile"
                priority={true}
                width={202}
                height={202}
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mt-4 md:mt-0">
                <div className="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 text-sm">
                  <span className="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                  Available
                  <span className="hidden sm:inline-block">for work</span>
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
                <h1 className="mt-4 leading-normal text-2xl md:text-3xl lg:text-4xl font-medium dark:text-white">
                  Hi! {"I'm"} Yogi Mulyana!
                </h1>
                <div className="md:max-w-[400px] mt-2">
                  <p className="text-sm dark:text-gray-200">
                    I enjoy sharing knowledge about web development through
                    blogs that I write in language that is easier to understand.
                  </p>
                </div>
                <ul className="md:flex justify-between mt-2">
                  <li className="mr-1.5 mt-4 md:mt-10">
                    <p className="inline-flex items-center gap-x-1 text-sm dark:text-gray-200">
                      <span>
                        <HiMapPin />
                      </span>
                      Riau, Indonesia
                    </p>
                  </li>
                  <li className="mr-1.5 mt-4 md:mt-10 text-center shadow-md md:shadow-none p-2 md:p-0">
                    <UnstyledLink
                      href="/about"
                      className={clsx(
                        "inline-flex items-center gap-x-1",
                        "text-sm text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white"
                      )}
                    >
                      Resume
                      <HiMiniArrowLongRight />
                    </UnstyledLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="mb-2">
            <hr className="border-dotted mt-4 mb-6" />
            <p className="text-sm dark:text-gray-200">
              {"I am"} dedicated to creating the user experience and interface
              of the projects I have created. My interest lies in web
              development, both front-end and back-end, where I sharpen my
              skills to improve my abilities in the web development process. In
              my work, I try to maximize the performance I have so that the
              projects I create can operate with smooth and intuitive
              functionality.
            </p>
          </section>
        </div>
        <Slider />
      </div>

      {/* Stack */}
      <div className="max-w-3xl mx-auto dark:bg-[#3c8b89] dark:bg-opacity-5 p-4 rounded-md bg-[#3c8b89] bg-opacity-5 overflow-hidden">
        <h4 className="text-xl md:text-2xl mb-2 dark:text-white">Stack</h4>
        <p className="text-sm dark:text-gray-200">
          In web development I use technologies such as ReactJS, NextJS,
          Laravel, CodeIgniter, Prisma, and TailwindCSS to create a project that
          the client wants. with this technology I intend to create a dynamic
          cross-platform user experience. Although this is my primary tool, my
          skillset continues to grow, not just limited to this tool alone,
          ensuring adaptability and innovation in all my projects.
        </p>
        <figure className="mt-4">
          <div className="flex flex-wrap gap-2 md:gap-4 text-3xl text-gray-700 dark:text-gray-200">
            <div>
              <SiNextdotjs />
            </div>
            <div>
              <SiReact />
            </div>
            <div>
              <SiPrisma />
            </div>
            <div>
              <SiTypescript />
            </div>
            <div>
              <SiLaravel />
            </div>
            <div>
              <SiCodeigniter />
            </div>
            <div>
              <SiTailwindcss />
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default AboutPage;

const socialLinks = [
  {
    id: 1,
    href: "https://www.instagram.com/yogi_mlyna/",
    icon: <SiInstagram />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/yogi-mulyana-prayoga-160775226/",
    icon: <SiLinkedin />,
  },
  {
    id: 3,
    href: "https://github.com/Gie2lah",
    icon: <SiGithub />,
  },
];
