import DehazeIcon from "@mui/icons-material/Dehaze";
import LanguageIcon from "@mui/icons-material/Language";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Avatar, Box, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
const Navbar = () => {
  const { i18n, t } = useTranslation(["detail,home"]);
  const [language, setLanguage] = useState("vi");

  const translateLanguage = (e) => {
    e.preventDefault();
    console.log("aaaa");
    if (language === "vi") {
      i18n.changeLanguage("en");
      setLanguage("en");
    } else {
      i18n.changeLanguage("vi");
      setLanguage("vi");
    }
  };

  return (
    <Box
      sx={{
        position: "sticky",
        height: "60px",
        overflowX: "hidden",

        paddingBottom: "4px",
        paddingTop: {
          xs: "10px",
        },
        padding: {
          xs: "0 10px",
          sm: "0 40px",
          md: "0 10px",
          lg: "0 10px",
        },
        zIndex: "100",
        top: "0",
        maxWidth: {
          sm: "calc(100% - 20px)",
          xs: "calc(100% - 20px)",
          md: "calc(100% - 32px)",
          lg: "calc(100% - 80px)",
        },

        margin: "0 auto",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <DehazeIcon />
        </Box>
        <Link to="/">
          <Box>
            <img
              style={{
                width: "90px",
                height: "20px",
                padding: "18px 14px 18px 16px",
              }}
              src={logo}
              alt="logo"
            />
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          // display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRight: "0px",
            borderRadius: "40px 0 0 40px",
            color: "hsl(0, 0%, 6.7%)",
            padding: " 0 4px 0 16px",
            // width: "60%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            width: "56%",
          }}
        >
          <input
            style={{
              border: "none",
              padding: "0",
              width: "100%",
              outline: "none",
              height: "24px",
            }}
            type="text"
            placeholder={t("home:timkiem")}
          />
          <Box
            sx={{
              padding: "0 6px",
            }}
          >
            <img
              src="https://www.gstatic.com/inputtools/images/tia.png"
              alt="a"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "0 40px 40px 0",
            backgroundColor: "#f8f8f8",
            border: "1px solid #d3d3d3",
            padding: "0 10px",
          }}
        >
          <SearchIcon
            sx={{
              width: "24px",
              height: "24px",
              color: "#0f0f0f",
              padding: "8px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <MicIcon
            sx={{
              marginLeft: "10px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "34%",
            sm: "30%",
            md: "30%",
            lg: "20%",
            xl: "15%",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            padding: "0",
            minWidth: "0",
            color: "#0f0f0f",
          }}
          onClick={translateLanguage}
        >
          <LanguageIcon
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
              },
            }}
          />
        </Button>
        <NotificationsNoneIcon />
        <VideoCallIcon />
        <Avatar
          sx={{
            bgcolor: deepOrange[500],
            width: "32px",
            height: "32px",
          }}
        >
          T
        </Avatar>
      </Box>
    </Box>
  );
};

export default Navbar;
