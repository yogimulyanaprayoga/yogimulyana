import Breakline from "@/components/BreakLine";
import Introduce from "./Introduce";
import LatestBlog from "./LatestBlog";
import LatestProject from "./LatestProject";

export default function Home() {
  return (
    <section className="flex flex-col max-w-[854px] mx-auto p-4">
      <Introduce />
      <Breakline />
      <LatestBlog />
      <Breakline />
      <LatestProject />
    </section>
  );
}
