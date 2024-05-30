import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yogi Mulyana Prayoga - Software Engineer",
    short_name: "Yogi",
    description:
      "Personal website, portfolio, blog, software engineer, programming tips of Yogi Mulyana Prayoga",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
