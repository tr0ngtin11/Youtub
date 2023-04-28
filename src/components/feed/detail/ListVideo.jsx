import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../../../reducer/video/videoActions";
const ListVideo = () => {
  const dispatch = useDispatch();
  // const [pageNumber, setPageNumber] = useState(0);
  // const fetchData = () => {
  //   setPageNumber((prev) => prev + 1);
  // };

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  // const rowRenderer = ({ key, index, style }) => {
  //   return (
  //     <div key={key} style={style}>
  //       {data.map((item, index) => {
  //         return <CardDeTail key={index} item={item} />;
  //       })}
  //     </div>
  //   );
  // };
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
    ></Box>
  );
};

export default ListVideo;
