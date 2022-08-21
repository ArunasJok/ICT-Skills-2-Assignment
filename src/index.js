import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import PersonsContextProvider from "./contexts/personsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorListPage from "./pages/actorListPage"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <PersonsContextProvider>
        <MoviesContextProvider>
        <Routes>
          <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
          <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
          <Route path="/movies/:id" element={<MoviePage/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
          <Route path="/persons" element={<ActorListPage/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        </Routes>
        </MoviesContextProvider>
        </PersonsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));