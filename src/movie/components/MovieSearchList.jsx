import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

import { getAuthToken } from "../../auth";
import { getMovieByKeyword } from "../helpers";
import { MovieCard } from "./MovieCard";

const MySwal = withReactContent(swAlert)

export const MovieSearchList = ({ keyword, addOrRemoveFromFavs }) => {
    let token = getAuthToken();

    const [movieSearchList, setMovieSearchList] = useState([]);

    useEffect(() => {
        const movies = getMovieByKeyword( keyword );
        movies.then(({ results }) => setMovieSearchList(results))
            .catch((err) => { 
                MySwal.fire({
                icon: 'error',
                title: <p>API error, try it later</p>,
                text: 'Something went wrong!',
                });
            })
        return () => {
        
        };
    }, [keyword]);

    return (
    <>
        { 
        !token ? <Navigate to='/'/>
        : (
            <>
                <h2>You searched: <em>{ keyword }</em></h2>
                { movieSearchList.length === 0 && <h3>It doesn't has results.</h3> }
                <div className="row">
                {
                    movieSearchList.map((movie) =>  (
                        <MovieCard 
                            key={ movie.id }
                            addOrRemoveFromFavs={ addOrRemoveFromFavs }
                            { ...movie }
                        />
                    ))
                    }
                </div>
            </>
            )
        }
    </>
    )
}
