import React from "react"
import Navbar from "./common/Navbar"
import { ThemeProvider, createTheme } from "@mui/material"
import Explore from "./components/Explore"

const customFonts = {
  chakraPetch: "'Chakra Petch', sans-serif",
  raleway: "'Raleway', 'Roboto', sans-serif"
}

const Theme = createTheme({
typography: {
    "fontFamily": customFonts.raleway,
    h5:{
      "fontFamily": customFonts.chakraPetch,
    },
    h6:{
      "fontFamily": customFonts.chakraPetch,
    },
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
        <Explore />
    </ThemeProvider>
  )
}

export default App
