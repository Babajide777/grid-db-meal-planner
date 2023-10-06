import { Button, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import React from "react"

const Addplanbtn = ({ meal }) => {
  return (
    <Button
      sx={{
        backgroundColor: "rgba(127, 197, 32, 1)",
        marginRight: { xs: "15px", md: "10px" },
        marginBottom: { xs: "10px", md: "5px" },
        padding: "10px 15px",
        borderRadius: "7px"
      }}
    >
      <Typography
        component="body2"
        sx={{
          color: "rgba(255, 255, 255, 1)",
          textTransform: "capitalize",
          fontWeight: "400",
          fontSize: "12px"
        }}
      >
        {meal}
      </Typography>
      <CloseIcon
        sx={{
          color: "rgba(255, 255, 255, 1)",
          fontSize: "15px",
          marginLeft: "10px"
        }}
      />
    </Button>
  )
}

export default Addplanbtn
