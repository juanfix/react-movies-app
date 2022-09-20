import { MovieFavoriteList } from "../components"

export const MovieFavoritePage = ({ favorites, addOrRemoveFromFavs }) => {

  return (
    <MovieFavoriteList favorites={ favorites } addOrRemoveFromFavs={ addOrRemoveFromFavs } />
  )
}
