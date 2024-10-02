import { useEffect, useState, useRef } from "react";
export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const firstSearch = useRef(true)
  useEffect(() => {
    if (firstSearch.current) {
      firstSearch.current = search === ''
      return
    }
    if (search === "") {
      setError("Can't search for empty movies");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("Can't search for numerical movies");
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error }
}