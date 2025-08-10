import { useEffect, useState } from "react";

const THEMES = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "neon", label: "Neon" },
] as const;

type Theme = typeof THEMES[number]["value"];

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("dd-theme") as Theme) || "dark";
    applyTheme(saved);
    setTheme(saved);
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    root.classList.remove("dark", "theme-light", "theme-neon");
    if (t === "dark") {
      root.classList.add("dark");
    } else if (t === "light") {
      root.classList.add("theme-light");
    } else if (t === "neon") {
      root.classList.add("dark", "theme-neon");
    }
    localStorage.setItem("dd-theme", t);
  };

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="hidden sm:inline text-muted-foreground">Theme</span>
      <select
        aria-label="Theme switcher"
        value={theme}
        onChange={(e) => { const t = e.target.value as Theme; setTheme(t); applyTheme(t); }}
        className="bg-muted text-foreground border border-border rounded-md px-2 py-1 hover-lift"
      >
        {THEMES.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    </label>
  );
};

export default ThemeToggle;
