import { Grid } from "@mui/material";
import React from "react";
import DetailVideo from "../components/feed/detail/DetailVideo";
import ListVideo from "../components/feed/detail/ListVideo";
import Recommend from "../components/recommendation/Recommend";

const Detailvideo = () => {
  return (
    <Grid
      container
      sx={{
        margin: "auto 0",
        marginTop: "20px",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        flexWrap: "wrap",
      }}
      columns={24}
    >
      <Grid item xs={24} md={6} sm={6} lg={14} xl={7}>
        <DetailVideo />
      </Grid>
      <Grid item xs={24} md={6} sm={6} lg={10} xl={5}>
        <ListVideo />
      </Grid>
    </Grid>
  );
};

export default Detailvideo;
