import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../auth/pages';
import { MovieDetail, MovieFavoritePage, MoviePage, MovieSearchPage } from '../movie/pages';
import { Navbar, Footer } from '../ui/components';

export const AppRouter = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
      const favsInLocal = localStorage.getItem('favs');
      if(favsInLocal !== null) {
          const favsArray = JSON.parse(favsInLocal)
          setFavorites(favsArray);
      }
      return () => {
          
      };
  }, []);

  const addOrRemoveFromFavs = (
      e,
      tempMoviesInFavs
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
        setFavorites(tempMoviesInFavs);
        console.log('Movie added');
      } else {
        let moviesLeft = tempMoviesInFavs.filter(
          (oneMovie) => oneMovie.id !== movieData.id
        );
        localStorage.setItem('favs', JSON.stringify(moviesLeft));
        setFavorites(moviesLeft);
        console.log('Movie removed');
      }
    
      return localStorage.getItem('favs');
    };

  return (
    <>
      <Navbar />
        <div className='container mt-3'>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/movielist" element={<MoviePage addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
              <Route path="/moviedetail/:id" element={<MovieDetail />} />
              <Route path="/moviesearchlist" element={<MovieSearchPage addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
              <Route path="/favoritelist" element={<MovieFavoritePage favorites={ favorites } addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}