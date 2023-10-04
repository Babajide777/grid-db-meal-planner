import React from "react"
import SideNav from "./SideNav"
import { Box } from "@mui/material"
import Header from "./Header"

export const Layout = ({ children }) => {
  return (
    <>
      <SideNav />
      <Box>
        <Header />
        {children}
      </Box>
    </>
  )
}
