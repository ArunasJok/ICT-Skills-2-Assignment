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
import { SeriesContext } from "../../contexts/seriesContext";


const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function SerieCard({ tv, action }) {
  const classes = useStyles();
  const { favourites3, addToFavourites3 } = useContext(SeriesContext);
  //const { playlists, addToPlaylists } = useContext(MoviesContext);

   

  if (favourites3.find((id) => id === tv.id)) {
    tv.favourite3 = true;
  } else {
    tv.favourite3 = false
  }

  const handleAddToFavourite3 = (e) => {
    e.preventDefault();
    addToFavourites3(tv);
  };

  

  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        tv.favourite3 ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      avatar2={
        tv.playlist3 ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      
      title={
        <Typography variant="h5" component="p">
          {tv.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>          
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {" Average vote "} {tv.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tv)}
        <Link to={`/tvs/${tv.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}