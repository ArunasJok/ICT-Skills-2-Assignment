import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getActorList} from '../api/tmdb-api';
import PlaylistAddIcon from '../components/cardIcons/playlistAddIcon';

const ActorListPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getActorList)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results; 
 

  return (
    <PageTemplate
      title="Popular Actors"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}      
    />    
  );
};

export default ActorListPage;