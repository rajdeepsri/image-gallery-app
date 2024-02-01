import { useEffect, useState } from "react";
const access_key = import.meta.env.VITE_ACCESS_KEY;

const useFetchPics = (searchQuery) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchApi = `https://api.unsplash.com/search/photos?query=${searchQuery}&page=1&per_page=12&client_id=${access_key}`;

    const randomApi = `https://api.unsplash.com/photos?page=1&per_page=12&client_id=${access_key}`;

    const fetchSearchedData = async (searchApi) => {
      const resp = await fetch(searchApi);
      const data = await resp.json();
      setResults(data.results);
    };

    const fetchRandomData = async (randomApi) => {
      const resp = await fetch(randomApi);
      const data = await resp.json();
      setResults(data);
    };

    if (searchQuery?.trim()) {
      fetchSearchedData(searchApi);
    } else {
      fetchRandomData(randomApi);
    }
  }, [searchQuery]);

  return results;
};

export default useFetchPics;
