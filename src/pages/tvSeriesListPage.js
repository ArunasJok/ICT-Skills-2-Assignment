import React from "react";
import PageTemplate from "../components/templateSerieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getSeries} from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const TvSeriesListPage = (props) => {  
  const {  data, error, isLoading, isError }  = useQuery('discover', getSeries)

  if (isLoading) {
    return <Spinner />
  }
  
  if (isError) {    
    return <h1>{error.message}</h1>    
  }
    
  const tvs = data.results;

  // These three lines are redundant; we will replace them later.
  const favourites = tvs.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
 

  return (
    <PageTemplate
      title="Popular TV Shows"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavouritesIcon tv={tv} />
      }}
    />    
  );
};

export default TvSeriesListPage;