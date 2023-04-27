import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../reducer/video/videoActions";
import { ChangeData } from "../../reducer/video/videoSlice";
import Recommend from "../recommendation/Recommend";
import SideBar from "./SideBar";
import Videos from "./videos/Videos";

const Feed = () => {
  const dispatch = useDispatch();
  const { data, page } = useSelector((state) => state.videos);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [arraySkeleton, setArraySkeleton] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const loaderBottom = useRef();
  const loaderTop = useRef();
  const [isIntersectingTop, setIsIntersectingTop] = useState(false);
  const [isIntersectingBottom, setIsIntersectingBottom] = useState(false);
  //Bottom
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
        console.log("intersecting Bottom", entries);
        // setIsIntersectingBottom(true);
        setPageNumber((prev) => prev + 1);
      } else {
        console.log("intersecting Bottom", entries);
        // setIsIntersectingBottom(false);
        const NewArray = displayedVideos.map((item, index) => {
          // if (index === displayedVideos.length - 2) {
          console.log("item", item);
          // }
          return item;
        });
        console.log("NewArray", NewArray);
        // setDisplayedVideos(NewArray);
        // dispatch(ChangeData(NewArray));
      }
    }, options);
    if (loaderBottom.current) {
      observer.observe(loaderBottom.current);
    }
  }, []);
  //Top

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
        console.log("intersecting Top", entries);
        // setIsIntersectingTop(true);
        setPageNumber((prev) => prev - 1);
      } else {
        console.log("intersecting Top", entries);
        // setIsIntersectingTop(false);
        const NewArray = displayedVideos.map((item, index) => {
          // if (index === displayedVideos.length - 2) {
          console.log("item", item);
          // }
          return item;
        });
        console.log("NewArray", NewArray);
        // setDisplayedVideos(NewArray);
        // dispatch(ChangeData(NewArray));
      }
    }, options);
    if (loaderTop.current) {
      observer.observe(loaderTop.current);
    }
  }, []);

  useEffect(() => {
    if (isIntersectingTop && isIntersectingBottom) {
      const pageToke = data[pageNumber - 1]?.prevPageToken;
      console.log("pageToke", pageToke);
      // dispatch(fetchVideosTop(pageToke));
    }
  }, [isIntersectingBottom, isIntersectingTop]);

  useEffect(() => {
    dispatch(fetchVideos(pageNumber, data.slice(-1).pop()?.nextPageToken));
    console.log("data", pageNumber);
  }, [pageNumber, dispatch]);
  // useEffect(() => {
  //   const newVideos = (data.length > 0 && data.slice(-1).pop()?.items) || [];
  //   if (displayedVideos.length <= 25) {
  //     setDisplayedVideos((prev) => [...prev, ...newVideos]);
  //   } else {
  //     const undefinedArray = displayedVideos.map((item, index) => undefined);
  //     setDisplayedVideos(() => [...undefinedArray, ...newVideos]);
  //   }
  // }, [data, dispatch]);

  useEffect(() => {
    dispatch(ChangeData(pageNumber));
  }, [pageNumber]);

  return (
    <Grid
      columns={{
        xs: 16,
        sm: 16,
        md: 16,
        lg: 24,
        xl: 16,
      }}
      container
      spacing={1}
    >
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
      <Grid item xs={16} sm={16} md={16} lg={23} xl={15}>
        <Box
          sx={{
            maxWidth: {
              sm: "100%",
              xs: "100%",
              md: "100%",
              lg: "calc(100% - 80px)",
            },
            marginTop: {
              lg: "20px",
            },
            marginX: "auto",
            height: "40px",
            position: "sticky",
            zIndex: 1,
            backgroundColor: "#fff",
            pb: 1,
            top: {
              sm: "0",
            },
          }}
        >
          <Recommend quantity={8} />
        </Box>
        <Videos
          loaderBottom={loaderBottom}
          loaderTop={loaderTop}
          pageNumber={pageNumber}
        />
      </Grid>
    </Grid>
  );
};

export default Feed;
