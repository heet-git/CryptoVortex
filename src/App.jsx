import React from "react"
import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import Layout from "./common/Layout"
import Theme from "./assets/Theme"
import Home from "./components/Home"
import Explore from "./components/Explore"
const allRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore/>} />
    </Route>
))

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <RouterProvider router={allRoutes}>
          <Layout/>
        </RouterProvider>w
    </ThemeProvider>
  )
}

export default App
