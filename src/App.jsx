import React from "react"
import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import Layout from "./common/Layout"
import {Theme, darkTheme} from "./assets/Theme"
import Home from "./components/Home"
import Explore from "./components/Explore"
import News from "./components/News"
import About from "./components/About"


const allRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore/>} />
        <Route path="news" element={<News/>} />
        <Route path="about" element={<About/>} />
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
