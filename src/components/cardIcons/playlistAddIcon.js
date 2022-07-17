import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/PlaylistAdd";

const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };
  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlaylistAddIcon;