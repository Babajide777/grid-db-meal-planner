import React from "react";
import { Box } from "@mui/material";
import Plan from "../components/Plan";

const PlanList = () => {
  return (
    <Box component="main">
      <Box component="section">
        <Plan planName="Jide" lastUpdated="2 minutes" />
      </Box>
    </Box>
  );
};

export default PlanList;
