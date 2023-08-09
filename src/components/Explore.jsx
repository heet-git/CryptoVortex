import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import homeImgLight from "/public/home-img-light.jpg"
import homeImgDark from "/public/home-img-dark.jpg"

function Explore(){
    return(
        <Container maxWidth="xl" disableGutters>
            <Box
                sx={{
                    backgroundImage: `url(${homeImgLight})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                    textAlign: "center",
                    display:{xs: "none", md: "flex"},
                    }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "600",
                        maxWidth: "lg"
                    }}
                >
                    Dive into the CryptoVortex: 
                    A Whirlwind of Trading Opportunities
                </Typography>

            </Box>

            {/* <Stack 
                direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}> */}
                <Typography variant="h6" color="primary">Item 1</Typography>
                <Typography variant="h6" color="primary">Item 2</Typography>
                <Typography variant="h6" color="primary">Item 3</Typography>
            {/* </Stack> */}

            {/* Mobile view */}
            <Box
                component="img"
                src={homeImgLight}
                sx={{
                    width:"100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    height: 500,
                    display:{md: "none", xs: "flex"}
                    }}
            />
        </Container>
    )
}

export default Explore