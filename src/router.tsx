import HomePage from './pages/HomePage.tsx';
import FilmPage from './pages/FilmPage.tsx';
import FilmsPage from './pages/FilmsPage.tsx';
import NewReleasesPage from './pages/NewReleasesPage.tsx';
import FavouritesPage from './pages/FavouritesPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <HomePage/>,
      },
      {
        path: 'films',
        element: <FilmsPage/>
      },
      {
        path: 'films/:filmId',
        element: <FilmPage/>
      },
      {
        path: 'new-releases',
        element: <NewReleasesPage/>
      },
      {
        path: 'favourites',
        element: <FavouritesPage/>
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
])
