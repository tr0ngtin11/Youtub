import React, { useEffect } from "react";
import Feed from "../components/feed/Feed";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { getDetailVideo } from "../apis/fetchDetailVideo";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Homepage = () => {
  return (
    <div>
      <Feed />
      {/* <Card
        sx={{
          ml: "50px",
          mt: "50px",
          width: "362px",
          border: "none",
          boxShadow: "none",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/naTMPbg0I4Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6rwJdw3_IG4PjHIDII6z3ZN3vIw"
          sx={{
            borderRadius: "12px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />

        <CardContent
          sx={{
            padding: "12px 0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Avatar
              sx={{
                width: "48px",
              }}
              src="https://api.dicebear.com/6.x/adventurer/svg?seed=Sophie"
            />
            <Box>
              <Typography
                sx={{
                  whiteSpace: "normal",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  // text just 2 rows
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  maxHeight: "4,4rem",

                  fontSize: "1rem",
                  fontWeight: "500",
                }}
                variant="h6"
                component="div"
              >
                Highlights Real Madrid vs Villarreal | Rượt đuổi 5 bàn -
                Vinicius solo cực đỉnh - Siêu phẩm kết liễu
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#606060",
                    fontSize: "0.875rem",
                  }}
                >
                  PedroTech
                </Typography>
                <CheckCircleIcon
                  sx={{
                    width: "14px",
                    height: "14px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#606060",
                    fontSize: "0.875rem",
                    marginRight: "10px",
                  }}
                >
                  93N lượt xem
                </Typography>
                <Typography
                  sx={{
                    color: "#606060",
                    fontSize: "0.875rem",
                  }}
                >
                  20h giờ trước
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            right: "4px",
            bottom: "124px ",
            borderRadius: "4px",
            color: "#fff",
            maxHeight: "1.2rem",
            fontSize: "0.75rem",
            fontWeight: "500",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "2px 4px",
            textAlign: "center",
          }}
        >
          15:12
        </Box>
      </Card> */}
    </div>
  );
};

export default Homepage;
