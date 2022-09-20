import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

import { getAuthToken } from "../../auth";

import { MovieCard } from "./MovieCard";

const MySwal = withReactContent(swAlert)

export const MovieList = ({ popularMovies, addOrRemoveFromFavs }) => {

  let token = getAuthToken();

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    popularMovies.then(({ results }) => setMovieList(results))
          .catch((err) => { 
            MySwal.fire({
              icon: 'error',
              title: <p>API error, try it later</p>,
              text: 'Something went wrong!',
            });
           })
    return () => {
      
    };
  }, [popularMovies]);

  return (
    <>
    { 
      !token ? <Navigate to='/'/>
      : (
        <div className="row">
           {
            movieList.map((movie) =>  (
                  <MovieCard 
                    key={ movie.id }
                    addOrRemoveFromFavs={ addOrRemoveFromFavs }
                    { ...movie }
                  />
              ))
            }
        </div>
        )
    }
    </>
  )
}
