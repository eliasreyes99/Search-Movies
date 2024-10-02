import { useEffect, useState } from "react";
import "../Styles/Movies.css";
import { useFav } from "../hooks/useFav";
import { useLocation } from "react-router-dom";

// Componentes/ListOfMovies.jsx
function ListOfMovies({ movies }) {
  const location = useLocation()
  const { fav, removeFav } = useFav();
  const isFavPage = location.pathname === "/favorites"
  const status = isFavPage ? 'delete' : 'add';

  const handleFavorite = (movie) => {
    fav(movie);
  };

  const handleDelete = (movie) => {
    removeFav(movie.id);
  };

  return (
    <ul className="containermovies">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img
              src={movie.poster || "poster-por-defecto.jpg"}
              alt={movie.title || "Póster de la película"}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title || "Sin título"}</h3>
            <p className="movie-year">{movie.year || "Año desconocido"}</p>

            {status === "delete" ? (
              <button
                onClick={() => handleDelete(movie)}
                className="delete-favorite"
              >
                Delete from favorite
              </button>
            ) : (
              <button
                onClick={() => handleFavorite(movie)}
                className="favorite-button"
              >
                Add to favorites
              </button>
            )}
          </li>
        ))
      ) : (
        <NotMovies />
      )}
    </ul>
  );
}

function NotMovies() {
  return <p>No se encontraron películas</p>;
}

export default ListOfMovies;

// Componente Movies
export function Movies({ movies, status = "add" }) {  // Estado predeterminado 'add'
  const hasMovies = movies?.length > 0;
  return hasMovies ? (
    <ListOfMovies movies={movies} status={status} />
  ) : (
    <NotMovies />
  );
}
