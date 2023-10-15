import React from "react"
import AddIcon from "@mui/icons-material/Add"
import { lists } from "../assets/data"
import { Box, Button, Divider, Typography } from "@mui/material"
import Items from "./Items"

const Planlistmain = () => {
  return (
    <Box
      sx={{
        display: {
          md: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        },
        marginTop: "20px",
        width: { md: "90%" },
        paddingTop: { md: "30px" },
        paddingBottom: { md: "100px" },
        backgroundColor: {
          md: "rgba(255, 255, 255, 1)"
        },
        borderRadius: { md: "13px" }
      }}
    >
      {lists.map((item, i) => (
        <Items key={i} {...item} />
      ))}
      <Box
        sx={{
          position: "sticky",
          bottom: "40px",
          display: { xs: "flex", md: "none", justifyContent: "center" }
        }}
      >
        <Button
          sx={{
            backgroundColor: "rgba(134, 197, 47, 1)",
            borderRadius: "7px",
            width: "85%",
            padding: "20px 0"
          }}
        >
          <AddIcon sx={{ color: "rgba(255, 255, 255, 1)", fontSize: "30px" }} />
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 1)",
              textTransform: "capitalize",
              fontSize: "20px"
            }}
          >
            Add plan
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Planlistmain
