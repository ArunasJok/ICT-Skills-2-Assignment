import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { PersonsContext } from "../../contexts/personsContext";


const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ActorCard({ person, action }) {
  const classes = useStyles();
  const { favourites, addToFavourites } = useContext(PersonsContext);
  //const { playlists, addToPlaylists } = useContext(MoviesContext);

   

  if (favourites.find((id) => id === person.id)) {
    person.favourite = true;
  } else {
    person.favourite = false
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavourites(person);
  };

  

  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        person.favourite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      avatar2={
        person.playlist ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      
      name={
        <Typography variant="h5" component="p">
          {person.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          person.poster_path
            ? `https://image.tmdb.org/t/p/w500/${person.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {person.adult}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {person.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(person)}
        <Link to={`/persons/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}