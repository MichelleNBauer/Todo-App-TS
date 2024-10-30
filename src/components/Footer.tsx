import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Footer: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error("Button must be used within a ThemeContextProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <footer>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>You are currently in {theme} mode</p>
    </footer>
  );
};
