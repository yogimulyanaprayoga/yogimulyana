import Image from "next/image";
import Link from "next/link";
import { HiMapPin, HiMiniArrowLongRight } from "react-icons/hi2";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Slider from "../../slider/Slider";
import UnstyledLink from "@/components/links/UnstyledLink";
import clsx from "clsx";
import CustomLink from "@/components/links/CustomLink";

const AboutCard = () => {
  return (
    <section className="max-w-3xl mx-auto dark:bg-[#3c8b89] dark:bg-opacity-5 p-4 rounded-md bg-[#3c8b89] bg-opacity-5 overflow-hidden">
      <article className="grid gap-2">
        <div className="block md:flex gap-8 ">
          <div className="row-span-3">
            <Image
              className="object-cover rounded-md h-auto w-[293px] md:w-[202px] mx-auto border-2 border-gray-300 dark:border-slate-200/30 transition"
              src="/profile.png"
              alt="Picture of the author"
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
                  I enjoy sharing knowledge about web development through blogs
                  that I write in language that is easier to understand.
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
                    More about me
                    <HiMiniArrowLongRight />
                  </UnstyledLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Slider />
      </article>
    </section>
  );
};

export default AboutCard;

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
