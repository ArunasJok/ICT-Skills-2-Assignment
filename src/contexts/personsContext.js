import React, { useState } from "react";

export const PersonsContext = React.createContext(null);

const PersonsContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );
  const [playlists, setPlaylists] = useState([]);
 

  const addToFavourites = (person) => {
    if (!favourites.includes(person.id)) {
      let newFavourites = [...favourites, person.id];
      setFavourites(newFavourites);
    }
  };

  const addToPlaylists = (person) => {
    if (!playlists.includes(person.id)) {
      let newPlaylists = [...playlists, person.id];
      setPlaylists(newPlaylists);
    }
  }; 

  const addReview = (person, review) => {
    setMyReviews( {...myReviews, [person.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavourites = (person) => {
    setFavourites(favourites.filter((mId) => mId !== person.id));
  };

  return (
    <PersonsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylists,        
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;