import React from "react"
import Navbar from "./components/Navbar"
import { ThemeProvider } from '@mui/material/styles';
import Theme from "./assets/Theme";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar/>
      <h1>Hello there</h1>
    </ThemeProvider>
  )
}

export default App
