import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (isDark) => {
    setTheme(isDark ? "dark" : "light");
  };

  return { theme, toggleTheme };
};

export default useTheme;
