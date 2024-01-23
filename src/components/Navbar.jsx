import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import day from "../assets/day.png";
import night from "../assets/night.png";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const { isDark, toggleDark } = useThemeContext();

  return (
    <nav className="flex items-center h-16 justify-between px-4 sm:px-8 md:px-20 shadow-sm w-full bg-neutral-50 dark:bg-neutral-900 dark:border-b-[1px] dark:border-neutral-700">
      <h1 className="font-medium font-Satisfy text-2xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
        Image Gallery
      </h1>
      <div className="flex items-center gap-4">
        {location.pathname === "/searchResults" && (
          <div className="flex gap-1 p-1.5 sm:p-2 w-[12rem] sm:w-[18rem] rounded-md items-center bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-50">
            <IoIosSearch className="text-neutral-500 dark:text-neutral-400 text-xl" />
            <input
              type="text"
              className="text-[0.8rem] bg-transparent outline-none border-none w-full text-neutral-900 font-semibold dark:text-neutral-300 placeholder:text-neutral-500 placeholder:dark:text-neutral-400"
              placeholder="Search Images Here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
        <img
          src={isDark ? day : night}
          alt={isDark ? "day" : "night"}
          onClick={toggleDark}
          className="w-8 cursor-pointer"
        />
      </div>
    </nav>
  );
};
export default Navbar;
