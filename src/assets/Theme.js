import { createTheme } from "@mui/material"

const customFonts = {
    chakraPetch: "'Chakra Petch', sans-serif",
    lato: "'Lato', 'Roboto', sans-serif"
}

const Theme = createTheme({
    typography: {
        "fontFamily": customFonts.lato,
        h5:{
            "fontFamily": customFonts.chakraPetch,
        },
        h6:{
            "fontFamily": customFonts.chakraPetch,
        },
        button:{
            textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: '#fff',
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#000',
                },
            }
        }
    },
})

export default Theme

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px