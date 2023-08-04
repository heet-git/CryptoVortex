import React from "react"
import Navbar from "./common/Navbar"
import { ThemeProvider, createTheme } from "@mui/material"

const Theme = createTheme({
typography: {
    "fontFamily": `'DM Sans', "Roboto", "sans-serif"`,
    "Color": "black"
},
palette: {
    primary: {
      main: '#FFF',
    },
    text:{
      primary: '#000'
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Navbar/>
    </ThemeProvider>
  )
}

export default App
