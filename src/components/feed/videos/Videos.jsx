import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import SampleCard from "./SampleCard";
const Videos = ({ videos, pageNumber, loaderBottom, loaderTop }) => {
  const { isLoading, data } = useSelector((state) => state.videos);
  const renderVideo = () => {
    console.log("videos", videos);
    console.log("dataLENGTH", data.length);
    console.log("page", pageNumber);
    let NewList = data.map((ob, index) =>
      ob.items.map((video, index) => {
        if (index === 0) {
          if (video === undefined) {
            return (
              <>
                <SampleCard index={index} />
              </>
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
        } else if (index === ob.items.length - 1) {
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
        } else {
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
        }
      })
    );

    return NewList;
  };

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
        <div ref={loaderTop}></div>
        {renderVideo()}
        <div ref={loaderBottom}></div>
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
