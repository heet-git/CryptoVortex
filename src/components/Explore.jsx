import React from "react";
import { Box, Container } from "@mui/material";
import homeImgLight from "/public/home-img-light.jpg"
import homeImgDark from "/public/home-img-dark.jpg"

function Explore(){
    return(
        <Container maxWidth="xl" disableGutters>
            <Box
                component="img"
                src={homeImgLight}
                sx={{
                    width:"100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    height: 500,
                    display:{xs: "none", md: "flex"}
                    }}
            />
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