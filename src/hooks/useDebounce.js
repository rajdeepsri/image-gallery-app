import { useEffect, useRef, useState } from "react";

const useDebounce = (searchQuery, delay = 500) => {
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(
      () => setDebouncedSearchQuery(searchQuery),
      delay
    );

    return () => clearTimeout(timerRef.current);
  }, [searchQuery, delay]);

  return debouncedSearchQuery;
};

export default useDebounce;
