import { createTheme } from "@mui/material"

const Theme = createTheme({
typography: {
    "fontFamily": `'DM Sans', "Roboto", "sans-serif"`,
    "Color": "black"
},
palette: {
    primary: {
    main: '#fff', 
    },
    text: {
    primary: '#00000',
    },
},
})

export default Theme