import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

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

            <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{
                justifyContent:"space-evenly",
                py: 4,
                m: 1,
                }}
                >
                <Box>
                    <Typography variant="h4">$1 billion</Typography>
                    <Typography variant="body1">Quarterly volume traded</Typography>
                </Box>
                <Box>
                    <Typography variant="h4">20+</Typography>
                    <Typography variant="body1">Cryptocurrencies listed</Typography>
                </Box>
                <Box>
                    <Typography variant="h4">1 million</Typography>
                    <Typography variant="body1">Registered users</Typography>
                </Box>
                <Box>
                    <Typography variant="h4">&lt;0.1%</Typography>
                    <Typography variant="body1">Lowest transaction fees</Typography>
                </Box>
            </Stack>

            <Box>
                <Typography
                variant="h4"
                >Trending</Typography>
            
            <Stack
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{
                    justifyContent:"space-evenly",
                    py: 4,
                    m: 1,
                }}
            >
            
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Coin
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Coin info
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Coin
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Coin info
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Coin
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Coin info
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Coin
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Coin info
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            </Stack>
            </Box>
            {/* Mobile view */}
            {/* <Box
                component="img"
                src={homeImgLight}
                sx={{
                    width:"100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    height: 500,
                    display:{md: "none", xs: "flex"}
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
            </Box>         */}
        </Container>
    )
}

export default Explore