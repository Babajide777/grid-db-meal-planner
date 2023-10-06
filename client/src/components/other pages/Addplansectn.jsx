import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
  styled
} from "@mui/material"
import { Days, Meals } from "../assets/data"
import Addplanbtn from "./Addplanbtn"
import Addplanmealbtn from "./Addplanmealbtn"

import React from "react"

const Sectionstyle = styled("section")(({ theme }) => ({
  margin: "0 auto",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "unset",
    padding: "40px 0",
    paddingLeft: "80px"
  }
}))
const Divstyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "50%"
  }
}))
const Daystyle = styled("div")(({ theme }) => ({
  border: "1px solid rgba(214, 214, 214, 1)",
  borderRadius: "7px",
  padding: "40px",
  [theme.breakpoints.up("md")]: {
    padding: "20px 10px",
    width: "90%"
  }
}))

const Addplansectn = () => {
  return (
    <Sectionstyle>
      <Divstyle>
        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Title</FormLabel>
          <TextField
            defaultValue="Enter title"
            sx={{ width: { xs: "100%", md: "90%" }, borderRadius: "7px" }}
          ></TextField>
        </FormControl>

        <Box sx={{ paddingTop: "30px" }}>
          <Typography component="p" sx={{ color: "rgba(48, 48, 48, 1)" }}>
            Days
          </Typography>
          <Daystyle>
            {Days.map((item, i) => (
              <Addplanbtn key={i} {...item} />
            ))}
          </Daystyle>
        </Box>

        <Box sx={{ paddingTop: "30px" }}>
          <Typography component="p" sx={{ color: "rgba(48, 48, 48, 1)" }}>
            Meals
          </Typography>
          <Daystyle>
            {Meals.map((item, i) => (
              <Addplanmealbtn key={i} {...item} />
            ))}
          </Daystyle>
        </Box>
      </Divstyle>

      <Divstyle>
        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Calories</FormLabel>
          <TextField
            defaultValue="0"
            sx={{ width: { xs: "100%", md: "90%" } }}
          ></TextField>
        </FormControl>

        <Box sx={{ display: { md: "flex" }, width: { md: "93%" } }}>
          {" "}
          <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
            <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Fat</FormLabel>
            <TextField
              defaultValue="0"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: "rgba(177, 177, 177, 1)",
                      fontWeight: "400",
                      display: { xs: "none", md: "flex", alignItems: "center" }
                    }}
                  >
                    G
                  </InputAdornment>
                )
              }}
              sx={{ width: { xs: "100%", md: "90%" } }}
            ></TextField>
          </FormControl>
          <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
            <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Cabs</FormLabel>
            <TextField
              defaultValue="0"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: "rgba(177, 177, 177, 1)",
                      fontWeight: "400",
                      display: { xs: "none", md: "flex", alignItems: "center" }
                    }}
                  >
                    G
                  </InputAdornment>
                )
              }}
              sx={{ width: { xs: "100%", md: "90%" } }}
            ></TextField>
          </FormControl>
          <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
            <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Protein</FormLabel>
            <TextField
              defaultValue="0"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: "rgba(177, 177, 177, 1)",
                      fontWeight: "400",
                      display: { xs: "none", md: "flex", alignItems: "center" }
                    }}
                  >
                    G
                  </InputAdornment>
                )
              }}
              sx={{ width: { xs: "100%", md: "90%" } }}
            ></TextField>
          </FormControl>
        </Box>
        <FormControl
          sx={{
            width: "100%",
            paddingTop: "30px",
            display: { xs: "none", md: "flex", flexDirection: "column" }
          }}
        >
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Tags</FormLabel>
          <TextField
            placeholder="Enter tags"
            sx={{ width: { xs: "100%", md: "90%" } }}
          ></TextField>
        </FormControl>
        <FormControl
          sx={{
            width: "100%",
            paddingTop: "30px",
            display: { xs: "none", md: "flex", flexDirection: "column" }
          }}
        >
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>
            Exclude ingredients
          </FormLabel>
          <TextField
            placeholder="Enter ingredients"
            sx={{ width: { xs: "100%", md: "90%" } }}
          ></TextField>
        </FormControl>
        <Box sx={{ display: { md: "flex", justifyContent: "center" } }}>
          <Button
            sx={{
              backgroundColor: "rgba(127, 197, 32, 1)",
              width: { xs: "100%", md: "60%" },
              margin: "30px 0",
              padding: "20px 0",
              borderRadius: "7px"
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                textTransform: "capitalize"
              }}
            >
              Create Plan
            </Typography>
          </Button>
        </Box>
      </Divstyle>
    </Sectionstyle>
  )
}

export default Addplansectn
