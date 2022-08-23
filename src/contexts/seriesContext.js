import React, { useState } from "react";

export const SeriesContext = React.createContext(null);

const SeriesContextProvider = (props) => {
  const [favourites3, setFavourites3] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );
  const [playlists3, setPlaylists3] = useState([]);
 

  const addToFavourites3 = (tv) => {
    if (!favourites3.includes(tv.id)) {
      let newFavourites3 = [...favourites3, tv.id];
      setFavourites3(newFavourites3);
    }
  };

  const addToPlaylists3 = (tv) => {
    if (!playlists3.includes(tv.id)) {
      let newPlaylists3 = [...playlists3, tv.id];
      setPlaylists3(newPlaylists3);
    }
  }; 

  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavourites3 = (tv) => {
    setFavourites3(favourites3.filter((mId) => mId !== tv.id));
  };

  return (
    <SeriesContext.Provider
      value={{
        favourites3,
        addToFavourites3,
        removeFromFavourites3,
        addReview,
        addToPlaylists3,        
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;