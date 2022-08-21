import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";

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

function ActorListPageTemplate({ persons, name, action }) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  

  const genreId = Number(genreFilter);

  let displayedPersons = persons
    .filter((m) => {
      return m.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
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
        <ActorList action={action} persons={displayedPersons} />
      </Grid>
    </Grid>    
    </>    
  );
}
export default ActorListPageTemplate;