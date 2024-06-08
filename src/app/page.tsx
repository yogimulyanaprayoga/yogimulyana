import { METADATA } from "@/constant/metadata";
import Home from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

const HomePage = () => {
  return (
    <>
      <div data-aos="fade-left">
        <Home />
      </div>
    </>
  );
};

export default HomePage;
