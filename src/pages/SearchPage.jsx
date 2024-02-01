import { useState } from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import { useThemeContext } from "../context/ThemeContext";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isDark } = useThemeContext();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <h2 className="text-center pt-5 sm:pt-10 text-neutral-800 font-medium text-xl dark:bg-neutral-900 dark:text-neutral-200">
        Search Results for {searchQuery}
      </h2>
      {searchResults.length > 0 ? (
        <CardList images={searchResults} />
      ) : (
        <div className="text-center mt-48 text-neutral-500 text-sm">
          Nothing to show here...
        </div>
      )}
    </main>
  );
};
export default SearchPage;
