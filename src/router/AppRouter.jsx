import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';

import { addOrRemoveFromFavs } from "../movie/helpers";
import { LoginPage } from '../auth/pages';
import { MovieDetail, MovieFavoritePage, MoviePage, MovieSearchPage } from '../movie/pages';
import { Navbar, Footer } from '../ui/components';

export const AppRouter = () => {

  return (
    <>
      <Navbar />
        <div className='container mt-3'>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/movielist" element={<MoviePage />} />
              <Route path="/moviedetail/:id" element={<MovieDetail />} />
              <Route path="/moviesearchlist" element={<MovieSearchPage />} />
              <Route path="/favoritelist" element={<MovieFavoritePage />} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}