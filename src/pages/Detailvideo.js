import { Grid } from "@mui/material";
import React from "react";
import DetailVideo from "../components/feed/detail/DetailVideo";
import ListVideo from "../components/feed/detail/ListVideo";
import Recommend from "../components/recommendation/Recommend";

const Detailvideo = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        margin: "auto 0",
        px: 6,
      }}
    >
      <Grid item xs={6} md={6} sm={6} lg={8} xl={7}>
        <DetailVideo />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={4} xl={5}>
        <ListVideo />
      </Grid>
    </Grid>
  );
};

export default Detailvideo;
