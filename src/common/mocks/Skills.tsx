import {
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const iconSize = "30";

export const skillMocks = [
  {
    icon: <SiNextdotjs size={iconSize} />,
  },
  {
    icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  },
  {
    icon: <SiPrisma size={iconSize} className="text-teal-500" />,
  },
  {
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
];
