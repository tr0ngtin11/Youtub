import { Box } from "@mui/material";
import React from "react";

const ButtonRecommended = ({ name }) => {
  const buttonRec =
    (name == "Tất cả") == true ? (
      <Box
        sx={{
          textAlign: "center",
          fontSize: "0.9rem",
          py: 0.8,
          backgroundColor: "#0f0f0f",
          color: "#DDDDDD",
          borderRadius: "6px",
        }}
      >
        {name}
      </Box>
    ) : (
      <Box
        sx={{
          textAlign: "center",
          fontSize: "0.9rem",
          py: 0.8,
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          color: "#000",
          borderRadius: "8px",
        }}
      >
        {name}
      </Box>
    );

  return buttonRec;
};

export default ButtonRecommended;
