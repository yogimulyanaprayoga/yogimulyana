import MarqueeElement from "@/components/MarqueeELement";
import SkillCard from "./SkillCard";
import { STACKS } from "@/constant/stacks";

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS
  ).sort(() => Math.random() - 0.5);

  const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
  return (
    <section className="space-y-6">
      <div className="flex flex-col space-y-1 overflow-x-hidden">
        <MarqueeElement direction="left">
          {slider.map(([name, icon], index) => (
            <SkillCard key={index} name={name} icon={icon} />
          ))}
        </MarqueeElement>
      </div>
    </section>
  );
}
