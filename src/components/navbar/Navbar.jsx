import { Avatar, Box, IconButton, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import SearchBar from "./SearchBar";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { deepOrange } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import MicIcon from "@mui/icons-material/Mic";
import { Calculate } from "@mui/icons-material";
const Navbar = () => {
  const widthScreen = window.innerWidth;
  return (
    <Link to="/">
      <Box
        sx={{
          position: "sticky",
          backgroundColor: "#fff",
          height: "40px",
          overflowX: "hidden",
          padding: " 0 10px",
          paddingTop: {
            xs: "10px",
          },
          zIndex: "100",
          top: "0",
          maxWidth: {
            sm: "calc(100% - 20px)",
            xs: "calc(100% - 20px)",
            md: "calc(100% - 20px)",
            lg: "calc(100% - 80px)",
            sm: "calc(100% - 80px)",
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
          <Box>
            <img
              style={{
                width: "90px",
                height: "20px",
                padding: "18px 14px 18px 16px",
              }}
              src={logo}
            />
          </Box>
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
              width: "60%",
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
              placeholder="Tìm kiếm"
            />
            <Box
              sx={{
                padding: "0 6px",
              }}
            >
              <img src="https://www.gstatic.com/inputtools/images/tia.png" />
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
              xs: "30%",
              sm: "30%",
              md: "30%",
              lg: "15%",
              xl: "15%",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
    </Link>
  );
};

export default Navbar;
