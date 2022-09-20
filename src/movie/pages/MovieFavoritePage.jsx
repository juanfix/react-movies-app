import { MovieFavoriteList } from "../components"

export const MovieFavoritePage = () => {
  const favsInLocal = localStorage.getItem('favs');
  return (
    <MovieFavoriteList favsInLocal={ favsInLocal } />
  )
}
