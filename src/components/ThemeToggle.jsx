import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed z-50 rounded-full cursor-pointer transition-colors duration-300",

        // Default (base)
        "top-4 ",

        // Mobile (max-sm = <640px)
        "max-sm:top-2 max-sm:right-4",

        // Tablet (md = ≥768px)
        "md:top-2 md:right-4",

        // Laptop/Desktop (lg = ≥1024px)
        "lg:top-2 lg:right-2",

        // Large Desktop (xl = ≥1280px)
        "xl:top-2 xl:right-4"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
