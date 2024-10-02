import React, { useState } from "react";
import { Movies } from "../Components/Movies";
import { useMovie } from "../hooks/useMovie";
import { useSearch } from "../hooks/useSearch";
import '../Styles/Search.css'

export default function SearchMovies() {
  const [sort, setSort] = useState(false);

  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovie({ search, sort });

  const handleSort = () => {
    setSort(!sort);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              value={search}
              onChange={handleChange}
              type="text"
              placeholder="Avengers, Star Wars, The matrix ..."
            />
            <button type="submit">Search</button>
          </div>
          <div className="filter filter ">
            <label>Filter by date</label>
            <input type="checkbox" onChange={handleSort} />
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {loading && <p>Cargando...</p>}
        <Movies className="movies" movies={movies} />
      </main>
    </div>
  );
}
