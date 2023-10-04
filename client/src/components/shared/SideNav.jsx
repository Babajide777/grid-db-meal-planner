import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography
} from "@mui/material"
import home from "../assets/images/home.svg"
import React from "react"

const Typomenu = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "300"
}))

const Cookstyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(12, 19, 37, 1)",
  color: "rgba(255, 255, 255, 1)",
  padding: "0 50px",
  height: "150px"
}))

const SideNav = () => {
  return (
    <Box flex={1} component="aside">
      <Box
        position="fixed"
        sx={{
          height: "100vh",
          borderRight: 2,
          borderColor: "rgba(228, 227, 231, 1)"
        }}
      >
        <Cookstyle>
          <Typography variant="h4">cookplan</Typography>
        </Cookstyle>
        <Typomenu
          variant="h6"
          sx={{
            color: "rgba(88, 100, 116, 1)",
            pt: "30px",
            pl: "30px",
            pb: "10px"
          }}
        >
          MENU
        </Typomenu>
        <List
          sx={{
            backgroundColor: "rgba(236, 248, 242, 1)",
            borderRight: 3,
            borderColor: "rgba(129, 197, 36, 1)"
          }}
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "0", pl: "30px" }} href="#home">
              <ListItemIcon sx={{ minWidth: "0" }}>
                <img src={home} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  pl: "20px",
                  color: "rgba(129, 197, 36, 1)",
                  fontWeight: "700"
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default SideNav
