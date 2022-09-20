import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import swAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

import { getAuthToken } from "../../auth/helpers";
import { getMovieById } from "../helpers";

const MySwal = withReactContent(swAlert)

export const MovieDetail = () => {
    let token = getAuthToken();

    const { id } = useParams();

    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        const movie = getMovieById( id )
        movie
            .then(( results ) => setMovieDetail(results))
            .catch((err) => { 
            MySwal.fire({
                icon: 'error',
                title: <p>API error, try it later</p>,
                text: 'Something went wrong!',
            });
             })
      return () => {
        setMovieDetail({})
      };
    }, [id]);

    const { 
        genres,
        homepage,
        overview, 
        popularity,
        poster_path, 
        release_date,
        status, 
        title, 
        vote_average, 
        vote_count } = movieDetail;
  
    return (
    <>
        { !token && <Navigate to='/'/> }
        { !movieDetail && <h1>Cargando...</h1> }
        { movieDetail &&
            <>
            <div className="row">
                <div className="col-4">
                <img
                    src={ poster_path   ? `https://image.tmdb.org/t/p/w500${poster_path}` 
                                        : '../assets/img/no-img.png' }
                    alt={ title }
                    className="img-thumbnail"
                />
                </div>
                <div className="col-8">
                <h3>{ title }</h3>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark"> <b>Genres: </b> { genres && genres.map(oneGenre => <div key={ oneGenre.id }>{ oneGenre.name }</div>) } </li>
                    <li className="list-group-item list-group-item-dark"> <b>Status: </b> { status } </li>
                    <li className="list-group-item list-group-item-dark"> <b>Release date: </b> { release_date } </li>
                    <li className="list-group-item list-group-item-dark"> <b>Overview: </b> { overview } </li>
                    <li className="list-group-item list-group-item-dark"> <b>Popularity: </b> { popularity } </li>
                    <li className="list-group-item list-group-item-dark"> <b>Vote average: </b> { vote_average } </li>
                    <li className="list-group-item list-group-item-dark"> <b>Vote count: </b> { vote_count } </li>
                    <li className="list-group-item list-group-item-dark"> <b>Homepage: </b> <a rel="noopener noreferrer" target="_blank" href={ homepage }>{ homepage }</a> </li>
                </ul>
                </div>
            </div>
            </> 
        }   
    </>
    )
}
