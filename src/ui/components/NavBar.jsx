import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        sessionStorage.clear();
        navigate('/', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Movie App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => {
                            return `nav-link ${ isActive ? "active" : "" }`
                        }} 
                        to="/movielist"
                    >
                        List
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => {
                            return `nav-link ${ isActive ? "active" : "" }`
                        }} 
                        to="/favoritelist"
                    >
                        Favorites
                    </NavLink>
                    
                </div>
                <a className='nav-link text-success align-items-center'>
                    Favorite movies: { JSON.parse(localStorage.getItem('favs')).length }
                </a>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <SearchBar />
                <ul className="navbar-nav ml-auto">
                    <button 
                        className='nav-item nav-link btn'
                        onClick={ onLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}