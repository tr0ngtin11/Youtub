import { Box, Grid, Skeleton, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
const Videos = ({ videos, loader }) => {
  const { isLoading } = useSelector((state) => state.videos);
  return (
    <Grid
      columnSpacing={{
        lg: 2,
      }}
      sx={{
        maxWidth: {
          sm: "100%",
          xs: "100%",
          md: "100%",
          lg: "calc(100% - 80px)",
          sm: "calc(100% - 80px)",
        },
        marginTop: {
          xs: "10px",
          lg: "70px",
        },
        marginX: {
          lg: "auto",
        },
        // padding: {
        //   xs: "0px",
        //   sm: "0px",
        //   md: "0px",
        // },
      }}
      container
    >
      {videos.map((video, index) => (
        <Grid
          sx={{
            paddingTop: "0px",
          }}
          item
          xs={12}
          sm={12}
          md={3}
          lg={4}
          key={video.id.concat(index)}
        >
          <VideoCard
            key={video.id}
            video={video}
            idVideo={video.snippet.resourceId.videoId}
          />
        </Grid>
      ))}
      <div ref={loader}></div>
      {isLoading && (
        <>
          <Skeleton
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
              ml: "20px",
            }}
            animation="wave"
            variant="rect"
            width="30%"
            height={250}
          />
          <Skeleton
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
              ml: "20px",
            }}
            animation="wave"
            variant="rect"
            width="30%"
            height={250}
          />
          <Skeleton
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
              ml: "20px",
            }}
            animation="wave"
            variant="rect"
            width="30%"
            height={250}
          />

          <Skeleton
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            animation="wave"
            variant="rect"
            width="100%"
            height={250}
          />
        </>
      )}
    </Grid>
  );
};

export default Videos;
