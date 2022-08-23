import React from "react";
import { useParams } from "react-router-dom";
import SimilarMovies from "../components/similarMovies";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const SimilarPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getSimilarMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <SimilarMovies movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default SimilarPage;