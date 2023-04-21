import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const ButtonRecommended = ({ name }) => {
  const { t } = useTranslation(["home"]);
  const buttonRec =
    (name === "Tất cả") === true ? (
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
        {t(
          `home:${name
            .toLowerCase()
            .replace(/\s/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")}`
        )}
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
        {t(
          `home:${name
            .toLowerCase()
            .replace(/\s/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")}`
        )}
      </Box>
    );

  return buttonRec;
};

export default ButtonRecommended;
