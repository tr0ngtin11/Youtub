import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const Comment = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Avatar
        sx={{
          width: "40px",
          height: "40px",
          marginRight: "16px",
        }}
      >
        K
      </Avatar>

      <Stack direction="column" spacing={0}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "1.5",
              whiteSpace: "nowrap",
            }}
          >
            Teo Van
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              lineHeight: "1.5",
              color: "#606060",
              fontWeight: "400",
            }}
          >
            14 ngày trước
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Comment;
