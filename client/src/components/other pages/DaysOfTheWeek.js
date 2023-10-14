import { Box, Divider, Typography, styled } from "@mui/material"
import React from "react"

const Dividerstyle = styled(Divider)({
  "&:nth-child(7)": {
    display: "none"
  }
})

const DaysOfTheWeek = ({ day }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 1)"
          // borderRight: 2,
          // paddingRight: "70px"
        }}
      >
        {day}
      </Typography>
      <Dividerstyle
        orientation="vertical"
        sx={{
          width: "2px",
          height: "40px",
          marginLeft: "70px",
          color: "rgba(255, 255, 255, 1)"
        }}
      />
    </Box>
  )
}

export default DaysOfTheWeek
