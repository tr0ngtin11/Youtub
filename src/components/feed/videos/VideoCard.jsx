import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  Avatar,
  useTheme,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const VideoCard = ({ video, idVideo }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.videos);
  const theme = useTheme();
  return (
    <Link to={`/detail/${idVideo}`}>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          src={video.snippet.thumbnails.medium.url}
          sx={{
            borderRadius: {
              lg: "12px",
            },
            height: "204px",
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

                  fontSize: "1rem",
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
};

export default VideoCard;
