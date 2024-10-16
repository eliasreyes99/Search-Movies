import { useFav } from "../context/favorite";
export default function FavoriteMovies() {
  const { favorite, removeFav } = useFav();

  const handleRemove = movie => {
    removeFav(movie)
  }

  return (
    <ul className="containermovies">
      {favorite.length > 0 ? (
        favorite.map((movie) => (
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
              onClick={() => handleRemove(movie)}
              style={{background: 'red'}}
            >
              Remove to favorite
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
  return <p>Not find movies favorites</p>;
}