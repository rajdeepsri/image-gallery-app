import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const isDarkMode = "isDarkMode";

const ThemeProvider = ({ children }) => {
  const localStorageDark = localStorage.getItem(isDarkMode);
  const [isDark, setIsDark] = useState(
    localStorageDark ? JSON.parse(localStorageDark) : false
  );

  const toggleDark = () =>
    setIsDark((prev) => {
      localStorage.setItem(isDarkMode, !prev);
      return !prev;
    });
  const value = { isDark, toggleDark };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;
