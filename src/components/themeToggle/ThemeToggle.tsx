"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <button onClick={toggle}>
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
