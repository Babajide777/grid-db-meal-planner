import { Box } from "@mui/material"
import { Details } from "../assets/data"
import React from "react"
import DesktopWeeks from "./DesktopWeeks"

const Diets = () => {
  return (
    <Box>
      {Details.map((item, i) => (
        <DesktopWeeks key={i} {...item} />
      ))}
    </Box>
  )
}

export default Diets
