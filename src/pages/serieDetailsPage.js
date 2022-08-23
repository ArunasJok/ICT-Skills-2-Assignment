import React from "react";
import { useParams } from "react-router-dom";
import SerieDetails from "../components/serieDetails";
import PageTemplate from "../components/templateSeriePage";
//import useMovie from "../hooks/useMovie";
import { getSerie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const SerieDetailsPage = () => {
  const { id } = useParams();
  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getSerie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <SerieDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Show details</p>
      )}
    </>
  );
};

export default SerieDetailsPage;