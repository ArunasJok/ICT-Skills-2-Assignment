import React from "react";
import Tv from "../serieCard";
import Grid from "@material-ui/core/Grid";

const SerieList = ( {tvs, action }) => {
  let serieCards = tvs.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Tv key={s.id} tv={s} action={action} />
    </Grid>
  ));
  return serieCards;
};

export default SerieList;