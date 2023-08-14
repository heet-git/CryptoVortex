import React, {useEffect, useState} from "react";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import homeImgLight from "/public/home-img-light.jpg"
import homeImgDark from "/public/home-img-dark.jpg"

import algorithmImg from "/public/algorithms.png"
import diversificationImg from "/public/diversification.png"
import securityImg from "/public/security.png"
import growImg from "/public/grow.png"

const features = [
    {
        featureImg: diversificationImg,
        featureTitle: 'Portfolio Diversification',
        description:'Maximize your profits by diversifying your crypto portfolio effortlessly',
    },
    {
        featureImg: algorithmImg,
        featureTitle: 'Smart Trading',
        description: 'Our advanced trading algorithms leverage AI and machine learning to execute trades based on your chosen strategies',
    },
    {
        featureImg: securityImg,
        featureTitle: 'Secure One-Click Transactions',
        description: 'Execute trades swiftly without compromising on security. With multi-factor authentication and robust encryption, your transactions are safeguarded from unauthorized access',
    },
    {
        featureImg: growImg,
        featureTitle:'Learn and Thrive',
        description:'Elevate your trading skills with our rich educational resources',
    },
]


function Explore(){
    
    const [coins, setCoins] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y&locale=en&precision=2'
    
    useEffect(() => {
        async function getCoins() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error({
                        message: "failed to fetch data",
                        statusText: response.statusText,
                        status: response.status,
                    });
                }
            const data = await response.json();
            setCoins(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    getCoins();
    const intervalId = setInterval(() => {
        getCoins();
    }, 5 * 60 * 1000);

    return () =>{
        clearInterval(intervalId)
    }
}, []);

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

            <Box
                sx={{
                    p: 3,
                }}
            >
                <Typography
                    variant="h4"
                    mb={3}
                    ml={5}
                >Trending 
                
                <TrendingUpTwoToneIcon
                    fontSize="large"
                /></Typography>
            
                <Stack
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={{ xs: 1, sm: 2}}
                    justifyContent= "space-evenly"
                >    
                    {coins.slice(0, 5).map((coin, index) => (
                        <Card key={index}
                        variant="outlined"
                        sx={{
                            maxWidth: "15%",
                            borderRadius: "10px",
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                        >
                            <CardActionArea>
                                <Typography variant="subtitle1"
                                sx={{ml: 2, mt: 1}}
                                >
                                Rank: {coin.market_cap_rank}
                                </Typography>

                                <Box
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    marginTop: 2,
                                    padding: 4
                                    }}
                                >
                                <CardMedia 
                                    component="img" 
                                    image={coin.image} 
                                    alt={coin.name} 
                                    sx={{ 
                                        borderRadius: "10px"
                                    }}
                                    />
                                </Box>
                                <CardContent>
                                    <Box sx={{display: "flex"}}>
                                        <Typography variant="h6" component="div">
                                            {coin.name}
                                        </Typography>
                                        <Typography 
                                            variant="overline"
                                            sx={{ml: 1,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            ({coin.symbol})
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                    Price: ${coin.current_price}
                                    </Typography>

                                    <Typography variant="subtitle2" noWrap>
                                    Market cap: ${coin.market_cap}
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
        
                </Stack>
            </Box>
            
            <Box>
                <Typography
                    variant="h4"
                >
                    A crypto exchange you can trust
                </Typography>
                <Stack direction="row">
                    {features.map((item, index) => (
                        <Box key={index}>
                            <img src={item.featureImg} alt={`Image ${index}`}/>
                            <Typography
                            variant="h6"
                            >
                                {item.featureTitle}
                            </Typography>
                            <Typography
                            variant="body1"
                            >
                                {item.description}
                            </Typography>
                        </Box>
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