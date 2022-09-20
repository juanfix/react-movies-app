import { useEffect } from "react";
import { Link } from "react-router-dom";

let tempMoviesInFavs;

export const MovieCard = ({ 
  id,
  title,
  overview,
  poster_path,
  addOrRemoveFromFavs }) => {

    useEffect(() => {
      const favMovies = localStorage.getItem('favs'); 
      if(favMovies === null)
        tempMoviesInFavs = []
      else
        tempMoviesInFavs = JSON.parse(favMovies);
      return () => {
      };
    }, [tempMoviesInFavs]);
    
  return (
    <div className="col-3">
        <div className="card bg-dark mb-3">
            <img className="card-img-top" src={ poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` 
                                                            : './assets/img/no-img.png' } alt="Card image cap" />
            <button 
              className="favorite-btn"
              onClick={ (e) => addOrRemoveFromFavs(e, tempMoviesInFavs) }
              data-movie-id={ id }>🖤</button>
            <div className="card-body">
                <h5 className="card-title">{ (title.length > 25) ? title.substring(0,25) + '...' : title }</h5>
                <p className="card-text">{ overview.length === 0  ? (<>This movie doesn't has an overview.<br></br><br></br></>) 
                                                                  : overview.substring(0,99) }...</p>
                <Link to={`/moviedetail/${ id }` } className="btn btn-secondary">View detail</Link>
            </div>
        </div>
    </div>
  )
}
