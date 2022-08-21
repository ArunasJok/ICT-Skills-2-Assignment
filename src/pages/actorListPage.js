import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getPersons} from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const ActorListPage = (props) => {  
  const {  data, error, isLoading, isError }  = useQuery('discover', getPersons)

  if (isLoading) {
    return <Spinner />
  }
  
  if (isError) {    
    return <h1>{error.message}</h1>    
  }
    
  const persons = data.results;

  // These three lines are redundant; we will replace them later.
  const favourites = persons.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
 

  return (
    <PageTemplate
      title="Popular actors"
      persons={persons}
      action={(person) => {
        return <AddToFavouritesIcon person={person} />
      }}
    />    
  );
};

export default ActorListPage;