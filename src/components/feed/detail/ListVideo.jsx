import VideoCard from "../videos/VideoCard";
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
const ListVideo = () => {
  return (
    <Box
      sx={{
        paddingRight: "40px",
        paddingLeft: "40px",
      }}
    >
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "10px",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
            sx={{
              borderRadius: "12px",
              height: "104px",
              width: "180px",
            }}
          />
          <CardContent
            sx={{
              paddingTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontFamily: "YouTube Sans, Roboto, sans-serif",
                fontWeight: "550",
                fontSize: "16px",
                lineHeight: "1.2rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingTop: "2px",
              }}
            >
              Anh Say Rồi - Mai Tiến Dũng live at #souloftheforestAnh Say Rồi -
              Mai Tiến Dũng live at #souloftheforestAnh Say Rồi - Mai Tiến Dũng
              live at #souloftheforest
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  color: "#606060",
                  fontSize: "0.8rem",
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
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ListVideo;
