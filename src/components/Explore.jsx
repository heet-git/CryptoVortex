import React, {useEffect, useState} from "react";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import homeImgLight from "/public/home-img-light.jpg"
import homeImgDark from "/public/home-img-dark.jpg"


function Explore(){
    
    const [coins, setCoins] = useState([])


    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C30d%2C200d%2C1y&locale=en&precision=2'
    
    useEffect(()=>{
        async function getCoins(){
            const response = await fetch(url)
            if(!response.ok)
            throw new Error ({
                message: "failed to fetch data",
                statusText: response.statusText,
                status: response.status
            })
            const data = await response.json()
            setCoins(data)
        }
        getCoins()
    }, [])

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
            {coins.slice(0, 4).map((coin, index) => (
                <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={coin.image} alt={coin.name} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {coin.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {coin.current_price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
    
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