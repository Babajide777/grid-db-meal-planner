import {
  AppBar,
  Badge,
  Box,
  InputAdornment,
  InputBase,
  Toolbar,
  styled,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Appstyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "85%",
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  border: "2px solid rgba(173, 173, 173, 1)",
  borderRadius: "30px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 30px",
  marginLeft: "50px",
  gap: "20px",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 5,
  },
}));

const Header = () => {
  return (
    <Appstyle>
      <StyledToolbar>
        <Search>
          <InputBase
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgba(173, 173, 173, 1)" }} />
              </InputAdornment>
            }
            placeholder="Search"
          />
        </Search>
        <Icons>
          <StyledBadge badgeContent={1} color="error">
            <MailIcon sx={{ color: "rgba(133, 197, 45, 1)" }} />
          </StyledBadge>
          <StyledBadge badgeContent={2} color="error">
            <Notifications sx={{ color: "rgba(133, 197, 45, 1)" }} />
          </StyledBadge>
        </Icons>
      </StyledToolbar>
    </Appstyle>
  );
};

export default Header;
