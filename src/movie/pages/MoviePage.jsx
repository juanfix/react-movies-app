import { MovieList } from "../components"
import { getPopularMovies } from "../helpers"

export const MoviePage = () => {
  const popularMovies = getPopularMovies();
  return (
    <MovieList popularMovies={ popularMovies } />
  )
}
