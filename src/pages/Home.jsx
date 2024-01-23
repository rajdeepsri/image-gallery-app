import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import useFetchPics from "../hooks/useFetchPics";
import { useThemeContext } from "../context/ThemeContext";

const Home = () => {
  const images = useFetchPics();
  const { isDark } = useThemeContext();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <Navbar />
      <Hero />
      <CardList images={images} />
    </main>
  );
};

export default Home;
