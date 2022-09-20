import { useNavigate, Navigate } from 'react-router-dom';

import { submitHandler } from "../helpers"

export const SearchBar = () => {

  const navigate = useNavigate();

  return (
    <form onSubmit={ (e) => submitHandler(e, navigate) }>
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" name="keyword" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button className="input-group-text">
                <i className="fa fa-search"></i>
            </button>
        </div>
    </form>
  )
}
