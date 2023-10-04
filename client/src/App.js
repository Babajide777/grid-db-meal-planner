import React from "react"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./config/theme"
import { Route, Routes } from "react-router-dom"
import PlanList from "./pages/PlanList"
import AddPlan from "./pages/AddPlan"
import PlanDetails from "./pages/PlanDetails"
import NotFound from "./components/shared/NotFound"
import { Layout } from "./components/shared/Layout"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<PlanList />} />
            <Route path="/add-plan" element={<AddPlan />} />
            <Route path="/plan/detail/:id" element={<PlanDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
