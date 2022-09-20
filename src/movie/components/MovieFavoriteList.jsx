import { Navigate } from "react-router-dom";

import { getAuthToken } from "../../auth";

import { MovieCard } from "./MovieCard";

export const MovieFavoriteList = ({ favorites, addOrRemoveFromFavs }) => {
    let token = getAuthToken();

    return (
        <>
        { 
        !token ? <Navigate to='/'/>
        : (
            <>
                <h2>Favorites list</h2>
                <div className="row">
                {
                    favorites.map((movie) =>  (
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
