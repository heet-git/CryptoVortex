import { createTheme } from "@mui/material"

const customFonts = {
    chakraPetch: "'Chakra Petch', sans-serif",
    lato: "'Lato', 'Roboto', sans-serif"
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

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

export {Theme, darkTheme}