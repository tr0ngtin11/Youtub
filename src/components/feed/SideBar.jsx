import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ButtonIcon from "./ButtonIcon";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
const SideBar = () => {
  return (
    <Stack
      direction="column"
      position="fixed"
      sx={{
        paddingLeft: "16px",
        mt: 4,
      }}
    >
      <ButtonIcon
        name="Trang Chủ"
        icon={
          <HomeIcon
            sx={{
              color: "#000",
              fontSize: "1.6rem",
            }}
          />
        }
      />
      <ButtonIcon
        name="Shorts"
        icon={
          <AutoAwesomeMotionIcon
            sx={{
              fontSize: "1.6rem",
            }}
          />
        }
      />
      <ButtonIcon
        name="Kênh đăng ký"
        icon={
          <SubscriptionsIcon
            sx={{
              fontSize: "1.6rem",
            }}
          />
        }
      />
      <ButtonIcon
        name="Thư viện"
        icon={
          <VideoLibraryIcon
            sx={{
              fontSize: "1.6rem",
            }}
          />
        }
      />
    </Stack>
  );
};

export default SideBar;
