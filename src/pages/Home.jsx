import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import useDebounce from "../hooks/useDebounce";
import useSearchPics from "../hooks/useFetchPics";
import { useThemeContext } from "../context/ThemeContext";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const images = useSearchPics(debouncedSearchQuery);
  const { isDark } = useThemeContext();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <Navbar />
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardList images={images} debouncedSearchQuery={debouncedSearchQuery} />
    </main>
  );
};

export default Home;

//
