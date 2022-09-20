import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { MovieApp } from './MovieApp'

import '../libs/bootstrap/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <MovieApp />
    </BrowserRouter>
  </React.StrictMode>
)
