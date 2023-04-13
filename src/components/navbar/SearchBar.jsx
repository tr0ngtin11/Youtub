import { Box, IconButton, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "50%",
      }}
    >
      <Paper
        onSubmit={() => {}}
        sx={{
          borderRadius: "20px",
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          width: "100%",
          display: "flex",
        }}
      >
        <input
          className="search-bar"
          placeholder="Tìm Kiếm"
          value=""
          onChange={() => {}}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            padding: "12px 0",
            fontSize: "16px",
          }}
        />

        <IconButton
          type="submit"
          sx={{
            p: " 0 12px",
            backgroundColor: "#d3d3d3",
            borderRadius: "0 20px 20px 0",
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          disableRipple={true}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <IconButton sx={{}}>
        <KeyboardVoiceIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
