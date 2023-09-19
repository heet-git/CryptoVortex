import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import VerifiedIcon from '@mui/icons-material/Verified';
import homeImgLight from "/public/home-img-light.jpg"
import GoogleLogin from '/public/google-login.png'
import AppleLogin from '/public/apple-login.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {features, stats} from "../data/data";
import { getCoins } from "../assets/Api";

function Home(){  
    
    const [coins, setCoins] = useState([])

    useEffect(()=>{
            const fetchCoins = async () =>{
                try{
                    const coinsData = await getCoins()
                    setCoins(coinsData)
                } catch (error){
                    console.log('Error fetching coins data:', error)
                }
            }
            fetchCoins()

            const intervalId = setInterval(fetchCoins, 45000)
            return () => clearInterval(intervalId)
        },[])

    function addCommas(price){
        const inFormat = parseFloat(price).toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
        return inFormat
    }

    return(
        <Container 
            maxWidth="xl" 
            disableGutters
            sx={{
            "@media (max-width: 600px)": {
            maxWidth: "xs"
            }
        }}>
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
                    "@media (max-width: 600px)": {
                        backgroundImage: "none",
                        minHeight: 300,
                        },
                }}
                >
                <div
                    style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "600",
                            maxWidth: "lg",
                            mb: 5,
                            "@media (max-width: 600px)": {
                                my: "1.5rem",
                                fontSize: "2.5rem"
                            },
                        }}>
                    Dive into the CryptoVortex:
                    <br />
                    A Whirlwind of Trading Opportunities
                    </Typography>
                    
                    <Box
                    sx={{
                        "@media (max-width: 600px)": {
                            flexDirection: "column",
                            m: "3rem",
                        },
                    }}
                    >
                    <Button
                        variant="contained"
                        sx={{
                        m: 1,
                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.6)'
                        }}
                    >
                        <AccountCircleIcon
                        sx={{
                            mr: "0.5rem"
                        }}
                        />Sign up with Email
                    </Button>
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
                    <Stack direction="row"
                        sx={{
                            // Mobile view styles
                            "@media (max-width: 600px)": {
                            flexDirection: "column",
                            },
                        }}
                    >
                        <Button
                        variant="contained"
                        sx={{
                            m: 1,
                            backgroundColor: '#fff',
                            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.6)',
                        }}
                        >
                        <img src={GoogleLogin} alt="Google Login"
                            style={{ height: '20px', marginRight: '5px' }} />
                        Sign in with Google
                        </Button>
                        <Button
                        variant="contained"
                        sx={{
                            m: 1,
                            backgroundColor: '#fff',
                            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.6)',
                        }}
                        >
                        <img src={AppleLogin} alt="Apple Login"
                            style={{ height: '20px', marginRight: '5px' }} />
                        Sign in with Apple
                        </Button>
                    </Stack>
                    </Box>
                </div>
            </Box>


            <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 2, md: 4 }}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{
                    justifyContent:"space-evenly",
                    paddingY: 7,
                    backgroundColor:'#4E4FEB',
                    textAlign: {xs: "center", md: ""},
                }}
            >
                {stats.map((item, index) => (
                    <Box key={index}>
                        <Typography variant="h4" fontWeight='500' color= '#fff'>{item.number}</Typography>
                        <Typography variant="body1" color= '#fff'>{item.description}</Typography>
                    </Box>
                ))}
            </Stack>
            <Box>
                <Typography
                    variant="h3"
                    fontWeight= "600"
                    mt= "5rem"
                    sx={{
                        textAlign: 'center',
                        "@media(max-width:600px)":{
                            my: "3rem",
                            fontSize: "2.5rem"
                        }
                    }}
                >Trending  <TrendingUpTwoToneIcon fontSize="large"/>
                </Typography>
            
                <Stack
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={{ xs: 1, sm: 2}}
                    justifyContent= "space-evenly"
                    m= {{xs: "4rem", md: "5rem"}}
                    mt= {{xs: "2rem"}}
                >    
                    {coins.slice(0, 5).map((coin, index) => (
                        <Card key={index}
                        variant="outlined"
                        sx={{
                            maxWidth: "100%",
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
                                    marginTop: "1rem",
                                    padding: "2rem",
                                    "@media (max-width: 600px)":{
                                        width: "40%",
                                        p: "1rem",
                                        margin: "auto"
                                        }
                                    }}
                                >
                                <CardMedia 
                                    component="img" 
                                    image={coin.image} 
                                    alt={coin.name} 
                                    sx={{ 
                                        borderRadius: "10px",
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
                                            sx={{
                                                ml: 1,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            ({coin.symbol})
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                    Price: {addCommas(coin.current_price)}
                                    </Typography>

                                    <Typography variant="subtitle2" noWrap>
                                    Market cap: {addCommas(coin.market_cap)}
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
            }}
            >
                <Typography
                    variant="h3"
                    fontWeight="600"
                    mt= "5rem"
                    sx={{
                        "@media(max-width:600px)":{
                            m: "3rem",
                            fontSize: "2rem"
                        }
                    }}  
                > A crypto exchange you can trust
                <VerifiedIcon 
                    sx={{
                        ml: 1, 
                        fontSize: {xs: "1.5rem", md: "2rem"}
                        }}/>
                </Typography>

                <Stack 
                    direction="row"
                    sx={{
                        "@media (max-width:600px)":{
                            flexDirection: "column",
                            m: 6
                        }
                    }}>
                    {features.map((item, index) => (
                        <Box key={index}
                            sx={{
                                mt: 5,
                                p: 3,
                                "@media (max-width:600px)":{
                                    my:2,
                                    p:0
                                }
                            }}>
                            <img 
                                src={item.featureImg}
                                alt={`Image ${index}`}
                                style={{ width: '70px', height: '70px' }}
                                />
                            <Typography
                                variant="h5"
                                fontWeight="600"
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
            
            <Box 
                display="flex" 
                justifyContent='space-evenly' 
                alignItems="flex-start" 
                p= "1rem" 
                backgroundColor='#f5f5f5'
                sx={{
                    "@media (max-width:600px)":{
                        flexDirection: "column",
                        p: "2.5rem"
                    }
                }}>
                <Stack maxWidth= "35rem">
                    <Typography 
                        variant="h3" 
                        fontWeight={600} 
                        mb={5}
                        sx={{
                            "@media (max-width:600px)":{
                                fontSize:"2rem",
                                textAlign: "center"
                            }
                        }}>
                        Start trading today!
                    </Typography>
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" alignItems="center" marginBottom="3rem">
                            <img
                            src="/verify-user.png"
                            alt="verification"
                            style={{
                                width: "3.5rem",
                                height: "3.5rem",
                                marginRight: "1.5rem",
                            }}
                            />
                            <div>
                                <Typography variant="h5" fontWeight={600}>
                                Verify your identity
                                </Typography>
                                <Typography variant="subtitle1">
                                Provide a valid government issued id to verify your identity and secure
                                your account.
                                </Typography>
                            </div>
                        </Box>
                        <Box display="flex" alignItems="center" marginBottom="3rem">
                            <img
                            src="/add-fund.png"
                            alt="Add fund"
                            style={{
                                width: "3.5rem",
                                height: "3.5rem",
                                marginRight: "1.5rem",
                            }}
                            />
                            <div>
                                <Typography variant="h5" fontWeight={600}>
                                Add fund to your account
                                </Typography>
                                <Typography variant="subtitle1">
                                Variety of options available to easily add funds to your crypto account.
                                </Typography>
                            </div>
                        </Box>
                        <Box display="flex" alignItems="center" marginBottom="3rem">
                            <img
                            src="/trading-user.png"
                            alt="Start trading"
                            style={{
                                width: "3.5rem",
                                height: "3.5rem",
                                marginRight: "1.5rem",
                            }}
                            />
                            <div>
                                <Typography variant="h5" fontWeight={600}>
                                Start trading crypto
                                </Typography>
                                <Typography variant="subtitle1">
                                Once funds added to the account you're all set to buy or sell crypto.
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                </Stack>
                <Box
                sx={{
                    "@media (max-width:600px)":{
                        margin: "auto"
                    }
                }}>
                    <img src="/mobile-view.png" alt="Mobile view"
                        style={{maxHeight: "30rem", borderRadius: "20px",
                        boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.6)"}}
                    />            
                </Box>
            </Box>    
        </Container>
    )
}

export default Home

