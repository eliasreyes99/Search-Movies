import { Movies } from "../Components/Movies";
import results from "../mocks/results.json";

function Home() {
  const movie = results.Search;
  const movies = movie?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}
export default Home;
