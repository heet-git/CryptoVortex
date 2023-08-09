import React from "react"
import Navbar from "./common/Navbar"
import { ThemeProvider } from "@mui/material"
import Explore from "./components/Explore"
import Theme from "./assets/Theme"

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Navbar />
        <Explore />
    </ThemeProvider>
  )
}

export default App
