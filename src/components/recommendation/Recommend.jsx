import React from "react";
import { dataRecommended } from "../../utils/constants";
import { Stack } from "@mui/material";
import ButtonRecommended from "./ButtonRecommended";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Recommend = ({ quantity }) => {
  return (
    <Stack
      direction="row"
      sx={{
        zIndex: "100",
        height: "40px",
        backgroundColor: "#fff",
        overflowX: "hidden",
        maxWidth: {
          md: "calc(100% - 32px)",
          sm: "calc(100% - 20px)",
          xs: "calc(100% - 20px)",
          lg: "calc(100% - 80px)",
          xl: "calc(100% - 80px)",
        },
        marginLeft: {
          lg: "16px",
        },
        margin: {
          xs: "0 auto",
        },
        paddingLeft: {
          sm: "16px",
          xl: "16px",
        },
      }}
    >
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          900: {
            slidesPerView: quantity,
          },
        }}
        spaceBetween={16}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataRecommended.map((item) => (
          <SwiperSlide key={item}>
            <ButtonRecommended name={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default Recommend;
