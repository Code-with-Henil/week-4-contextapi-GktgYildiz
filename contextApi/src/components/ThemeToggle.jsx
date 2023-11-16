import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 ${
        currentTheme === "dark"
          ? "bg-gray-600 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {currentTheme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
