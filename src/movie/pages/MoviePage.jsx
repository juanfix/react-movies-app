import { MovieList } from "../components"
import { getPopularMovies } from "../helpers"

export const MoviePage = ({ addOrRemoveFromFavs }) => {
  const popularMovies = getPopularMovies();
  return (
    <MovieList popularMovies={ popularMovies } addOrRemoveFromFavs={addOrRemoveFromFavs} />
  )
}
