import { IconButton, Typography } from "@mui/material"

const ButtonIcon = ({ name, icon }) => {
  return (
    <IconButton
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 2,
        width: "calc(100% - 16px)",
        height: "80%",
        borderRadius: "4px",
        "&:hover": {
          backgroundColor: "#C0C0C0",
          opacity: 0.7,
        },
      }}
    >
      {icon}
      <Typography
        sx={{
          fontSize: "0.7rem",
          fontWeight: "500",
          color: "#000",
        }}
      >
        {name}
      </Typography>
    </IconButton>
  )
}

export default ButtonIcon
