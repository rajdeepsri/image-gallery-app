import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import useDebounce from "../hooks/useDebounce";
import useSearchPics from "../hooks/useFetchPics";
import { useThemeContext } from "../context/ThemeContext";
import { useState } from "react";

const Home = () => {
  const { isDark } = useThemeContext();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const images = useSearchPics(debouncedSearchQuery);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <Navbar />
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardList images={images} />
    </main>
  );
};

export default Home;

//
