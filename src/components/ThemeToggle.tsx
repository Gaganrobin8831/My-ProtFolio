import { FiSun, FiMoon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

import type { RootState } from "../store/store";
import { toggleTheme } from "../store/themeSlice";


const ThemeToggle = memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="
        p-2 rounded-full bg-gray-200 dark:bg-gray-700
        hover:scale-110
        flex items-center justify-center
        will-change-transform
      "
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
      aria-label="Toggle theme"
    >
      <div
        className="transition-transform duration-500"
        style={{
          transform: theme === "dark" ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        {theme === "light" ? (
          <FiMoon className="text-xl text-white" />
        ) : (
          <FiSun className="text-xl text-yellow-300" />
        )}
      </div>
    </button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

export default ThemeToggle;
