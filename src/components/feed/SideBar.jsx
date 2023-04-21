import { Stack } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ButtonIcon from "./ButtonIcon";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { useTranslation } from "react-i18next";
const SideBar = () => {
  const { t } = useTranslation(["home"]);
  return (
    <Stack
      direction="column"
      position="fixed"
      sx={{
        paddingLeft: "19px",
        mt: 1.2,
      }}
    >
      <ButtonIcon
        name={t("home:trangchu")}
        icon={
          <HomeIcon
            sx={{
              color: "#000",
              fontSize: "1.3rem",
            }}
          />
        }
      />
      <ButtonIcon
        name="Shorts"
        icon={
          <AutoAwesomeMotionIcon
            sx={{
              fontSize: "1.3rem",
            }}
          />
        }
      />
      <ButtonIcon
        name={t("home:kenhdangky")}
        icon={
          <SubscriptionsIcon
            sx={{
              fontSize: "1.3rem",
            }}
          />
        }
      />
      <ButtonIcon
        name={t("home:thuvien")}
        icon={
          <VideoLibraryIcon
            sx={{
              fontSize: "1.3rem",
            }}
          />
        }
      />
    </Stack>
  );
};

export default SideBar;
