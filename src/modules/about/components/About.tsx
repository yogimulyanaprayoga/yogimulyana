import Breakline from "@/components/BreakLine";
import Introduce from "./Introduce";
import TechStackList from "./TechStackList";
import Summary from "./Summary";
import SkillList from "./SkillList";

export default function About() {
  return (
    <section className="flex flex-col max-w-[854px] mx-auto p-4">
      <Introduce />
      <Summary />
      <SkillList />
      <Breakline />
      <TechStackList />
    </section>
  );
}
