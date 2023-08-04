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

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px