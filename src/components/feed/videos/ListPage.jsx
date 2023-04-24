import { Grid, Skeleton } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";

const ListPage = ({ obj, loaderTop, loaderBottom }) => {
  const renderPage = () => {
    var NewList = obj?.items.map((video, index) => {
      if (video === undefined) {
        return (
          <Grid
            sx={{
              paddingTop: "0px",
            }}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={3}
            key={index}
          >
            <Skeleton
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                mb: "20px",
              }}
              animation="wave"
              variant="rect"
              // width="30%"
              height={250}
            />
          </Grid>
        );
      } else {
        return (
          <Grid
            sx={{
              paddingTop: "0px",
            }}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={3}
            key={video.id.concat(index)}
          >
            <VideoCard
              key={video.id}
              video={video}
              idVideo={video.snippet.resourceId.videoId}
            />
          </Grid>
        );
      }
    });

    return NewList;
  };
  return (
    <>
      <div ref={loaderTop}>a</div>
      {renderPage()}
      <div ref={loaderBottom}>b</div>
    </>
  );
};

export default ListPage;
