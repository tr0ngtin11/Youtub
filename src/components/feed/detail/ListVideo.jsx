import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import CardDeTail from "./CardDeTail";
import { fetchVideos } from "../../../reducer/video/videoActions";
import { List } from "react-virtualized";
import TT from "../videos/TT";
const ListVideo = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const { data } = useSelector((state) => state.videos);
  const [displayedData, setDisplayedData] = useState(data || []);
  const fetchData = () => {
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    setDisplayedData((prev) => [...prev, ...data]);
  }, [data]);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [pageNumber, dispatch]);

  const rowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        {data.map((item, index) => {
          return <CardDeTail key={index} item={item} />;
        })}
      </div>
    );
  };
  return (
    <Box
      sx={{
        paddingLeft: {
          xs: "0px",
          sm: "0px",
          md: "40px",
          lg: "40px",
          xl: "40px",
        },
        paddingRight: {
          xs: "0px",
          sm: "0px",
          md: "40px",
          lg: "40px",
          xl: "40px",
        },
      }}
    >
      <TT />
    </Box>
  );
};

export default ListVideo;
