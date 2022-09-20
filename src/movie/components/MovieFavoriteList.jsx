import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";


import { getAuthToken } from "../../auth";

import { MovieCard } from "./MovieCard";

export const MovieFavoriteList = ({ favsInLocal }) => {
    let token = getAuthToken();

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if(favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal)
            setFavorites(favsArray);
        }
        return () => {
            
        };
    }, [favsInLocal]);

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
                            isFavorite={ true }
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
