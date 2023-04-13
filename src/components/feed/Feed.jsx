import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "./SideBar";
import Recommend from "../recommendation/Recommend";
import Videos from "./videos/Videos";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../reducer/video/videoActions";
import { setListVideo } from "../../reducer/video/videoSlice";
const Feed = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videos);
  const theme = useTheme();
  const [endIndex_state, setEndIndex_state] = useState(0);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 20;
  const loader = useRef();

  useEffect(() => {
    // Options is an object of configuration used to establish the values of Intersectionoberver
    // Viewport is used as root
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(entries[0]);
        setPageNumber((prev) => prev + 1);
        dispatch(fetchVideos());
      }
    }, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    //cleanup function
    // return () => {
    //   if (loader.current) {
    //     observer.unobserve(loader.current);
    //   }
    // };
  }, []);

  useEffect(() => {
    console.log(videos);
    dispatch(fetchVideos());
  }, [endIndex_state]);
  useEffect(() => {
    const startIndex = (pageNumber - 1) * limit;
    const endIndex = pageNumber * limit;
    const newVideos = videos.slice(startIndex, endIndex);

    if (videos.length > 0) {
      if (endIndex > videos.length) {
        setEndIndex_state(endIndex);
      }
    }

    console.log(pageNumber);
    console.log(startIndex);
    console.log(endIndex);
    setDisplayedVideos((prevVideos) => [...prevVideos, ...newVideos]);
  }, [pageNumber, videos]);

  return (
    <Grid columns={16} container spacing={1}>
      <Grid
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
        item
        lg={1}
        xl={1}
      >
        <SideBar />
      </Grid>
      <Grid item xs={16} sm={16} md={16} lg={15} xl={15}>
        <Box
          sx={{
            maxWidth: {
              sm: "100%",
              xs: "100%",
              md: "100%",
              lg: "calc(100% - 80px)",
              sm: "calc(100% - 80px)",
            },

            marginX: "auto",
            height: "fit-content",
            position: "fixed",
            zIndex: 1,
            backgroundColor: "#fff",
            height: "fit-content",
            pb: 1,
          }}
        >
          <Recommend quantity={8} />
        </Box>
        <Videos videos={displayedVideos} loader={loader} />
      </Grid>
    </Grid>
  );
};

export default Feed;
