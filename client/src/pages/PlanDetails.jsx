import React from "react"
import PlanDetailSubnav from "../components/other pages/PlanDetailSubnav"
import PlanDetailMain from "../components/other pages/PlanDetailMain"
import PlanDetailDesktop from "../components/other pages/PlanDetailDesktop"

import { Box } from "@mui/material"

const PlanDetails = () => {
  return (
    <Box component="main">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "rgba(244, 244, 244, 1)"
        }}
      >
        <PlanDetailSubnav />
      </Box>
      <PlanDetailMain />
      <PlanDetailDesktop />
    </Box>
  )
}

export default PlanDetails
