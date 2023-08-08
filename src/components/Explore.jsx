import React from "react";
import { Box, Container, Typography } from "@mui/material";
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
                    backgroundColor: "white",
                    minHeight: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                    textAlign: "center",
                    display:{xs: "none", md: "flex"},
                    border: '1px solid red'
                    }}
            >
                <Typography
                    variant="h4"
                    sx={{border: '1px solid red'}}
                >
                    Dive into the CryptoVortex: A Whirlwind of Trading Opportunities
                </Typography>

            </Box>
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