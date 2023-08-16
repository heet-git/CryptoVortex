import React, {useEffect, useState} from "react";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppleLogin from '/public/apple-login.png'
import GoogleLogin from '/public/google-login.png'
import homeImgLight from "/public/home-img-light.jpg"
import homeImgDark from "/public/home-img-dark.jpg"
import features from "../data/features";

const stats = [
    {
        number: '$1 billion',
        description: 'Quarterly volume traded',
    },
    {
        number: '20+',
        description: 'Cryptocurrencies' ,
    },
    {
        number: '1 million',
        description: 'Registered users' ,
    },
    {
        number: '<0.1%',
        description: 'Lowest transaction fee',
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
                    minHeight: 550,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                    textAlign: "center",
                    }}>
                <div
                    style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "600",
                        maxWidth: "lg",
                        mb: 5
                    }}
                >
                    Dive into the CryptoVortex: 
                    A Whirlwind of Trading Opportunities
                </Typography>
                
                <Box 
                    sx={{
                    }}>
                    <Button variant="contained" sx={{m: 1}}><AccountCircleIcon/>Sign up with Email</Button>
                    <Typography
                        variant="body1"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: 800
                        }}
                        >
                        <span
                            style={{
                            flexGrow: 1,
                            borderBottom: '1px solid #000',
                            marginRight: '8px',
                            }}
                        ></span>
                        OR
                        <span
                            style={{
                            flexGrow: 1,
                            borderBottom: '1px solid #000',
                            marginLeft: '8px',
                            }}
                        ></span>
                        </Typography>
                    <Stack direction="row" >
                    <Button variant="contained" sx={{m: 1}}><img src={GoogleLogin} alt="Google Login" style={{ height: '20px', marginRight: '5px' }}/> Sign in with Google</Button>
                    <Button variant="contained" sx={{m: 1}}><img src={AppleLogin} alt="Apple Login" style={{ height: '20px', marginRight: '5px' }} /> Sign in with Apple</Button>
                    </Stack>
                </Box>
                </div>
            </Box>

            <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{
                    justifyContent:"space-evenly",
                    paddingY: 7,
                    backgroundColor:'#4E4FEB'
                }}
            >
                {stats.map((item, index) => (
                    <Box key={index}>
                        <Typography variant="h4" fontWeight='500' color= '#fff'>{item.number}</Typography>
                        <Typography variant="body1" color= '#fff'>{item.description}</Typography>
                    </Box>
                ))}
            </Stack>
            <Box
                sx={{
                    p: 3,
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="600"
                    my={5}
                    sx={{textAlign: 'center'}}
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
            
            <Box
            sx={{
                textAlign: 'center',
                p: 3,
                mt: 2
            }}
            >
                <Typography
                    variant="h4"
                    fontWeight="600"
                    my={5}
                > A crypto exchange you can trust
                </Typography>

                <Stack direction="row">
                    {features.map((item, index) => (
                        <Box key={index}
                            sx={{
                                p: 3,
                            }}>
                            <img 
                                src={item.featureImg}
                                alt={`Image ${index}`}
                                style={{ width: '70px', height: '70px' }}
                                />
                            <Typography
                                variant="h6"
                                mt={1.5}

                            >
                                {item.featureTitle}
                            </Typography>
                            <Typography
                            variant="body1">
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