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
    <div>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
      <Card
        sx={{
          mb: 2,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          width: "55%",
          display: "flex",
          marginLeft: "-52px",
        }}
      >
        <CardMedia
          component="img"
          src="https://i.ytimg.com/vi/cEX4TRjfQWE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPh3XDXAfG_uVHoCpJLyccBeOjdg"
          sx={{
            borderRadius: "12px",
            height: "120px",
            "&:hover": {
              borderRadius: "0 0 12px 12px",
            },
          }}
        />
      </Card>
    </div>
  );
};

export default ListVideo;
