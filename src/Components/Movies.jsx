import { useEffect, useState } from "react";
import "../Styles/Movies.css";
import { useFav } from "../context/favorite";
import { useLocation } from "react-router-dom";

// Componentes/ListOfMovies.jsx
function ListOfMovies({ movies }) {
  const location = useLocation()
  const {addFavorite} = useFav()

  const handleFav = fav => {
    addFavorite(fav)
  } 
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

            
              <button
                className="favorite-button"
                onClick={() => handleFav(movie)}
              >
                Add to favorites
              </button>
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
