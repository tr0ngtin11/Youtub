import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const VideoCard = React.forwardRef(({ video, idVideo }, ref) => {
  return (
    <Link ref={ref} to={`/detail/${idVideo}`}>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          src={video.snippet.thumbnails.medium.url}
          sx={{
            position: "relative",
            borderRadius: {
              lg: "12px",
            },
            heigt: {
              xs: "252px",
              lg: "204px",
            },
            "&:hover": {
              borderRadius: {
                lg: "0 0 12px 12px",
              },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "178px",
            right: "4px",
            heigt: "12px",
            padding: "3px 4px",
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.8)",
            fontSize: "0.75rem",
            borderRadius: "4px",
            fontWeight: "500",
          }}
        >
          2:22
        </Box>

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
                width: "42px",
                mr: "12px",
              }}
              src={video.snippet.thumbnails.medium.url}
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
                  lineHeight: "1.4rem",
                  fontSize: "1.05rem",
                  fontWeight: "500",
                }}
                variant="h6"
                component="div"
              >
                {video.snippet.title}
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
      </Card>
    </Link>
  );
});

export default VideoCard;
