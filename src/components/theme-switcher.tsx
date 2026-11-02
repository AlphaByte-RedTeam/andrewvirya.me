"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import InteractiveMotion from "@/components/interactive-motion";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
  };

  return (
    <InteractiveMotion>
      <Button
        variant="outline"
        size="icon"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        aria-pressed={theme === "dark"}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </InteractiveMotion>
  );
}
