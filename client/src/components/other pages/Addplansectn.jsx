import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Days } from "../assets/data";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

const Sectionstyle = styled("section")(({ theme }) => ({
  margin: "0 auto",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "unset",
    padding: "40px 0",
    paddingLeft: "80px",
  },
}));

const Divstyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

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

        <Box sx={{ margin: "30px 0" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Days</FormLabel>
          <Autocomplete
            multiple
            defaultValue={[Days[0], Days[1]]}
            disablePortal
            ChipProps={{
              deleteIcon: <ClearIcon />,
            }}
            id="combo-box-demo"
            options={Days}
            sx={{
              width: { xs: "100%", md: "90%" },
              color: " rgba(127, 197, 32, 1)",
              fieldset: {
                border: "1px solid rgba(214, 214, 214, 1)",
                borderRadius: "7px",
              },
              "& .MuiOutlinedInput-root": {
                padding: "20px",
              },
              "& .MuiAutocomplete-tag": {
                backgroundColor: "rgba(129, 197, 37, 1)",
                borderRadius: "7px",
              },
              "& .MuiChip-label": {
                color: "rgba(255, 255, 255, 1)",
              },
              "& .MuiChip-deleteIcon": {
                color: "rgba(255, 255, 255, 1)",
              },
            }}
            renderInput={(params) => <TextField {...params} label="" />}
            PaperComponent={(props) => (
              <Paper
                sx={{
                  background: "rgba(129, 197, 37, 1)",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "25px",
                  "&:hover": {
                    border: "1px solid #00FF00",
                    color: "gray",
                    backgroundColor: "white",
                  },
                }}
                {...props}
              />
            )}
          />
        </Box>

        <Typography variant="h6" sx={{ fontWeight: "300" }}>
          Meals
        </Typography>

        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Breakfast</FormLabel>
          <TextField
            placeholder="Enter Breakfast"
            sx={{ width: { xs: "100%", md: "90%" }, borderRadius: "7px" }}
          ></TextField>
        </FormControl>

        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Snack 1</FormLabel>
          <TextField
            placeholder="Enter Snack 1"
            sx={{ width: { xs: "100%", md: "90%" }, borderRadius: "7px" }}
          ></TextField>
        </FormControl>

        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Lunch</FormLabel>
          <TextField
            placeholder="Enter Lunch"
            sx={{ width: { xs: "100%", md: "90%" }, borderRadius: "7px" }}
          ></TextField>
        </FormControl>

        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Snack 2</FormLabel>
          <TextField
            placeholder="Enter Snack 2"
            sx={{ width: { xs: "100%", md: "90%" }, borderRadius: "7px" }}
          ></TextField>
        </FormControl>

        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Dinner</FormLabel>
          <TextField
            placeholder="Enter Dinner"
            sx={{ width: { xs: "100%", md: "90%" }, borderRadius: "7px" }}
          ></TextField>
        </FormControl>
        <FormControl sx={{ width: "100%", paddingTop: "30px" }}>
          <FormLabel sx={{ color: "rgba(48, 48, 48, 1)" }}>Snack 3</FormLabel>
          <TextField
            placeholder="Enter Snack 3"
            sx={{ width: { xs: "100%", md: "90%" }, borderRadius: "7px" }}
          ></TextField>
        </FormControl>
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
                      display: { xs: "none", md: "flex", alignItems: "center" },
                    }}
                  >
                    G
                  </InputAdornment>
                ),
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
                      display: { xs: "none", md: "flex", alignItems: "center" },
                    }}
                  >
                    G
                  </InputAdornment>
                ),
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
                      display: { xs: "none", md: "flex", alignItems: "center" },
                    }}
                  >
                    G
                  </InputAdornment>
                ),
              }}
              sx={{ width: { xs: "100%", md: "90%" } }}
            ></TextField>
          </FormControl>
        </Box>
        <FormControl
          sx={{
            width: "100%",
            paddingTop: "30px",
            display: { xs: "none", md: "flex", flexDirection: "column" },
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
              marginRight: "45px",
              borderRadius: "7px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                textTransform: "capitalize",
              }}
            >
              Create Plan
            </Typography>
          </Button>
        </Box>
      </Divstyle>
    </Sectionstyle>
  );
};

export default Addplansectn;
