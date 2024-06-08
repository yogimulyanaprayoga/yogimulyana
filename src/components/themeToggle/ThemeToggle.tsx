"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;
  return (
    <button onClick={toggleTheme}>
      {resolvedTheme === "light" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
