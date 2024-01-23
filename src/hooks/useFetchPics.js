import { useEffect, useState } from "react";

const access_key = "hySu_Gg0UrUuviRKQmxfncWo52CSluuCJNF3QqJHuIA";

export default function useFetchPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const url = `https://api.unsplash.com/photos?page=1&per_page=12&client_id=${access_key}`;
    const fetchData = async (url) => {
      const resp = await fetch(url);
      const data = await resp.json();
      setImages(data);
    };

    fetchData(url);
  }, []);

  return images;
}
