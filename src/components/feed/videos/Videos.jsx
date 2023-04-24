import { Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import ListPage from "./ListPage";
const Videos = ({ videos, loaderBottom, loaderTop, pageNumber }) => {
  const { isLoading, data } = useSelector((state) => state.videos);

  useEffect(() => {
    console.log("videos", loaderBottom);
  });
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid
        columnSpacing={{
          md: 2,
          lg: 2,
          xl: 2,
        }}
        sx={{
          maxWidth: {
            sm: "100%",
            xs: "100%",
            md: "100%",
            lg: "calc(100% - 80px)",
          },
          marginTop: {
            xs: "10px",
          },
          marginX: {
            lg: "auto",
          },
          paddingLeft: {
            md: "16px",
          },
          // padding: {
          //   xs: "0px",
          //   sm: "0px",
          //   md: "0px",
          // },
        }}
        container
      >
        {data.map((obj) => (
          <ListPage
            obj={obj}
            loaderTop={loaderTop}
            loaderBottom={loaderBottom}
          />
        ))}
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
    </Box>
  );
};

export default Videos;
