import { METADATA } from "@/constant/metadata";
import About from "@/modules/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `A short story of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const AboutPage = () => {
  return (
    <div data-aos="fade-left">
      <About />
    </div>
  );
};

export default AboutPage;
