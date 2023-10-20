import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Items = ({ Image, mealplan, editimg, deleteimg }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: { xs: "8px 30px", md: " 15px" },
        width: { md: "40%" },
        borderBottom: { md: 1 },
        borderColor: { md: "rgba(236, 236, 236, 1)" },
      }}
    >
      <Link to={`plan/detail/${mealplan}`}>
        <img src={Image} width={60} alt={mealplan} />
      </Link>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to={`plan/detail/${mealplan}`}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "10px",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: { xs: "18px", md: "14px" },
                color: "rgba(0, 0, 0, 1)",
                fontWeight: "400",
              }}
            >
              {mealplan}
            </Typography>
          </Box>
        </Link>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              paddingRight: { xs: "20px", md: "0" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={editimg} alt="" width={10} height={10} />
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                color: "rgba(149, 149, 149, 1)",
                fontWeight: "400",
                fontSize: "12px",
                paddingLeft: "3px",
                paddingTop: { md: "5px" },
              }}
            >
              Edit
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              width: "2px",
              height: "15px",
              backgroundColor: "rgba(236, 236, 236, 1)",
              border: "none",
              margin: "0 15px",
              display: { xs: "none", md: "block" },
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={deleteimg} alt="" />
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                color: "rgba(149, 149, 149, 1)",
                fontWeight: "400",
                fontSize: "12px",
                paddingLeft: "3px",
                paddingTop: { md: "5px" },
              }}
            >
              Delete
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Items;
