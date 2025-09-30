import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { toggleTheme } from "../../features/theme/themeSlice";

const ThemeToggle = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  const theme = darkMode ? "dark" : "light";

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => dispatch(toggleTheme())}
        className="sr-only"
      />

      <div
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ease-in-out 
          ${darkMode ? "bg-gray-800" : "bg-sky-400"}`}
      >
        <span
          className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full border 
            transition-all duration-300 ease-in-out transform bg-white border-gray-200
            flex items-center 
            ${darkMode ? "translate-x-0" : "translate-x-5"}`}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} className="text-violet-900" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
          )}
        </span>
      </div>

      <span
        className={`ms-3 text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        {theme} mode
      </span>
    </label>
  );
};

export default ThemeToggle;
