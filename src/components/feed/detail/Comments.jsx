import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import { deepOrange } from "@mui/material/colors";
import Comment from "./Comment";
const Comments = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          mt: "24px",
          width: "100%",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "1.5",
            marginRight: "20px",
          }}
        >
          196 bình luận
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SortIcon />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Sắp xếp theo
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: "24px",
        }}
      >
        <Avatar
          sx={{
            width: "40px",
            height: "40px",
            marginRight: "16px",
            bgcolor: deepOrange[500],
          }}
        >
          T
        </Avatar>

        <Box
          sx={{
            width: "76%",
          }}
        >
          <input
            placeholder="Viết bình luận..."
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              padding: "8px ",
              width: "100%",
            }}
          />
        </Box>
      </Box>
      {/* <Comment /> */}
    </div>
  );
};

export default Comments;
