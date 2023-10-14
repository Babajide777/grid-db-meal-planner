import { Box } from "@mui/material"
import React from "react"
import DesktopFoods from "./DesktopFoods"
import { food } from "../assets/data"

const Multiplefood = () => {
  return (
    <Box>
      {food.map((item, i) => (
        <DesktopFoods key={i} {...item} />
      ))}
    </Box>
  )
}

export default Multiplefood
