import { createContext,  useContext, useState } from "react"
// import { FaCloudMoon, FaCloudSun } from "react-icons/fa"
import { DarkModeSwitch } from "react-toggle-dark-mode"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children}) => {

  const [theme, setTheme] = useState("dark")

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{theme, handleToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`flex items-center text-xl cursor-pointer ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <DarkModeSwitch
        onChange={handleToggleTheme}
        checked={isDarkMode}
        size={24} // You can adjust the size here
        speed={4} // Adjust animation speed (default is 2)
        className="transition-colors duration-300"
      />
    </div>
  );
};