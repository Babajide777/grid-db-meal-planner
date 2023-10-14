import React from "react"
import { Date } from "../assets/data"
import { Box, Divider } from "@mui/material"
import Diets from "./Diets"
import Multiplefood from "./Multiplefood"
import DaysOfTheWeek from "./DaysOfTheWeek"

const PlanDetailDesktop = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(244, 244, 244, 1)",
        display: {
          xs: "none",
          md: "flex",
          flexDirection: "column",
          alignItems: "flex-end"
        },
        width: "100%",
        padding: "20px"
      }}
    >
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "200px",
          width: "90%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "9px",
          padding: "0 30px"
        }}
      >
        <Diets />
        <Divider orientation="vertical" sx={{ height: "150px" }} />
        <Diets />
        <Divider orientation="vertical" sx={{ height: "150px" }} />
        <Diets />
        <Divider orientation="vertical" sx={{ height: "150px" }} />
        <Diets />
        <Divider orientation="vertical" sx={{ height: "150px" }} />
        <Diets />
        <Divider orientation="vertical" sx={{ height: "150px" }} />
        <Diets />
        <Divider orientation="vertical" sx={{ height: "150px" }} />
        <Diets />
      </Box>

      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          alignItems: "center",
          borderRadius: "10px",
          width: "90%",
          height: "60px",
          backgroundColor: "rgba(135, 197, 49, 1)"
        }}
      >
        {Date.map((item, i) => (
          <DaysOfTheWeek key={i} {...item} />
        ))}
      </Box>

      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "20px 0",
          width: "90%"
        }}
      >
        <Multiplefood />
        <Multiplefood />
        <Multiplefood />
        <Multiplefood />
        <Multiplefood />
        <Multiplefood />
        <Multiplefood />
      </Box>
    </Box>
  )
}

export default PlanDetailDesktop
