import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import { useThemeContext } from "../context/ThemeContext";

const access_key = "hySu_Gg0UrUuviRKQmxfncWo52CSluuCJNF3QqJHuIA";
const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isDark } = useThemeContext();
  console.log(searchResults);

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&page=1&per_page=12&client_id=${access_key}`;

    const timer = setTimeout(() => {
      const fetchData = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        setSearchResults(data.results);
      };
      if (searchQuery.trim()) {
        fetchData(url);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

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
