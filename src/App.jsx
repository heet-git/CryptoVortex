import React from "react"
import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import Layout from "./common/Layout"
import Explore from "./components/Explore"
import Theme from "./assets/Theme"

const allRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Explore />} />
    </Route>
))

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <RouterProvider router={allRoutes}>
          <Layout/>
        </RouterProvider>
    </ThemeProvider>
  )
}

export default App
