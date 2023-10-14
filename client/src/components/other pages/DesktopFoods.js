import { Box, Card, Typography } from "@mui/material"
import Union from "../assets/images/Union.png"
import React from "react"

const DesktopFoods = ({ heading, image, name }) => {
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{
        width: "100%",
        minHeight: 100,
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        margin: "10px 0"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0"
        }}
      >
        <Typography component="h4">{heading}</Typography>
        <img src={Union} alt="" width={5} height={15} />
      </Box>
      <Box sx={{ borderRadius: "20px" }}>
        <img src={image} alt="" width="100%" height={50} />
      </Box>
      <Typography
        component="span"
        sx={{ fontSize: "12px", color: "rgba(80, 80, 80, 1)" }}
      >
        {name}
      </Typography>
    </Card>
  )
}

export default DesktopFoods
