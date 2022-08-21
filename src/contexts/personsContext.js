import React, { useState } from "react";

export const PersonsContext = React.createContext(null);

const PersonsContextProvider = (props) => {
  const [favourites2, setFavourites2] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );
  const [playlists2, setPlaylists2] = useState([]);
 

  const addToFavourites2 = (person) => {
    if (!favourites2.includes(person.id)) {
      let newFavourites2 = [...favourites2, person.id];
      setFavourites2(newFavourites2);
    }
  };

  const addToPlaylists2 = (person) => {
    if (!playlists2.includes(person.id)) {
      let newPlaylists2 = [...playlists2, person.id];
      setPlaylists2(newPlaylists2);
    }
  }; 

  const addReview = (person, review) => {
    setMyReviews( {...myReviews, [person.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavourites2 = (person) => {
    setFavourites2(favourites2.filter((mId) => mId !== person.id));
  };

  return (
    <PersonsContext.Provider
      value={{
        favourites2,
        addToFavourites2,
        removeFromFavourites2,
        addReview,
        addToPlaylists2,        
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;