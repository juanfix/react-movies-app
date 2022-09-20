export const addOrRemoveFromFavs = (
  e,
  tempMoviesInFavs,
  navigate,
  isFavorite
) => {
  const parent = e.target.parentElement;
  const poster_path = parent.querySelector('img').getAttribute('src');
  const title = parent.querySelector('h5').innerText;
  const overview = parent.querySelector('p').innerText;

  const movieData = {
    id: e.target.dataset['movieId'],
    poster_path,
    title,
    overview,
  };

  let movieIsInArray = tempMoviesInFavs.find(
    (oneMovie) => oneMovie.id === movieData.id
  );

  if (!movieIsInArray) {
    tempMoviesInFavs.push(movieData);
    localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
    console.log('Movie added');
  } else {
    let moviesLeft = tempMoviesInFavs.filter(
      (oneMovie) => oneMovie.id !== movieData.id
    );
    console.log(isFavorite);
    localStorage.setItem('favs', JSON.stringify(moviesLeft));
    if (isFavorite) navigate(0); // Solucion temporal a la eliminacion de favoritos
    console.log('Movie removed');
  }

  return localStorage.getItem('favs');
};
