import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SerieList from "../serieList";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function SerieListPageTemplate({ tvs, name, action }) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  

  const genreId = Number(genreFilter);

  let displayedSeries = tvs
    .filter((s) => {
      return s.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    ;

  const handleChange = (type, value) => {
    if (type === "name") setTitleFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={name} />
      </Grid>
      <Grid item container spacing={5}>
        <SerieList action={action} tvs={displayedSeries} />
      </Grid>
    </Grid>    
    </>    
  );
}
export default SerieListPageTemplate;