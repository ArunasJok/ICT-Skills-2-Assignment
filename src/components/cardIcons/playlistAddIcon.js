import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistIcon from "@material-ui/icons/PlaylistAdd";



const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylists = (e) => {
    e.preventDefault();
    context.addToPlaylists(movie);    
  };
  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylists}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlaylistAddIcon;