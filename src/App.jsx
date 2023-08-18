import React from "react"
import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from "react-router"
import { ThemeProvider } from "@mui/material"
import Layout from "./common/Layout"
//import Navbar from "./common/Navbar"
import Explore from "./components/Explore"
//import Footer from "./common/Footer"
import Theme from "./assets/Theme"

const allRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Explore />} />
    </Route>
))

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <RouterProvider router={allRoutes}/>
    </ThemeProvider>
  )
}

export default App
