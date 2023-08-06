import React from "react"
import Navbar from "./common/Navbar"
import { ThemeProvider, createTheme } from "@mui/material"


const Theme = createTheme({
typography: {
    "fontFamily": `'DM Sans', "Roboto", "sans-serif"`,
},
palette: {
    primary: {
      main: '#fff',
    },
    text: {
      primary: '#fff'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'black'
        }
      }
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Navbar />
    </ThemeProvider>
  )
}

export default App
