import { Box, Typography } from "@mui/material"
import React from "react"

const DesktopWeeks = ({ color, diet, number }) => {
  return (
    <Box
      className="weeks"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <Box sx={{ paddingRight: "5px" }}>
        <img src={color} alt="" />
      </Box>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Typography
          component="span"
          sx={{
            color: "rgba(0, 0, 0, 1)",
            fontSize: "12px",
            fontWeight: "400"
          }}
        >
          {diet}
        </Typography>
        <Typography
          component="span"
          sx={{
            color: "rgba(177, 177, 177, 1)",
            paddingLeft: "30px",
            fontSize: "10px"
          }}
        >
          {number}
        </Typography>
      </Box>
    </Box>
  )
}

export default DesktopWeeks
