import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import aboutImg from "/public/about-img.jpg"
import aboutCoins from "/public/about-coins.jpg"
import { stats } from '../data/data';
import { border } from '@chakra-ui/react';

function About() {
  return (
    <Container
      maxWidth="xl" 
      disableGutters
      sx={{
        "@media (max-width: 600px)": {
          maxWidth: "xs"
        }
      }}
      >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          my: {xs: "5rem", md: "5rem"},
          px: {xs: "0", md: "7rem"},
          height: {xs: "auto", md: "50em"},
        }}>

        <Box
          component="img"
          src= {aboutImg}
          sx={{
            display: {xs: 'none', sm: "flex"}, 
            height: "100%", 
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.7)",
            borderRadius: "10px"
            }}
        ></Box>

        <Box
            display="flex"   
            flexDirection="column"
            alignItems="center"
            px="3rem"
          >

            <Typography variant="h3"
              sx={{
                fontWeight: "600",
                "@media (max-width: 600px)":{
                  fontSize: "2rem",
                  flexWrap: "nowrap",
                  textAlign: "center"
                }
              }}
            >
              About CryptoVortex
            </Typography>

            <Typography
              fontSize={{xs: "1rem", md: "1.1rem"}}
              lineHeight="1.7"
              textAlign="center"
              mt="1rem"
            >
              In a rapidly evolving digital landscape, cryptocurrency has emerged as the future of finance. At CryptoVortex, we understand the intricate tapestry of blockchain technology and the potential of decentralized finance. Our mission? To provide a seamless and secure trading platform that empowers both novice and experienced traders.
            </Typography>

        </Box>
      </Box>
                {/* {{xs: "", md: ""}} */}
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          px: {xs: "3rem", md: "7rem"},
          py: {xs: "5rem", md: "5rem"}
        }}
        >
          <Box
            display= {{xs: "block", md: "flex"}}
            textAlign= "center">
            <Typography
              variant= "h3"
              fontSize={{xs: "2rem"}}>
                CryptoVortex helps customers to make right choice
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                maxWidth: {xs: "100%", md: "30%"},
                pl: {xs: "0", md: "2rem"},
                mt: {xs: "1rem", md: "0"},
                fontSize: {xs: "1rem", md: "1.1rem"},
                lineHeight:"1.7"
              }}
            >
              Our platform leverages state-of-the-art encryption and innovative features, ensuring a smooth trading experience. With real-time data analytics, comprehensive market insights, and a user-centric interface, we make cryptocurrency trading accessible and efficient for all.
            </Typography>
          </Box>
          <Box>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 2, md: 4 }}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{
                    justifyContent:"space-between",
                    pt: 7,
                    textAlign: {xs: "center", md: ""}
                }}
            >
                {stats.map((item, index) => (
                    <Box key={index}>
                        <Typography variant="h4" fontWeight='500'>{item.number}</Typography>
                        <Typography variant="body1">{item.description}</Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
      </Box>

      <Box
        display= "flex"
        flexDirection={{xs:"column-reverse", md: "row"}}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          my: "5rem",
          px: {xs: "3rem", md: "7rem"},
          height:{xs: "auto", md: "30em"},
        }}>

        <Box maxWidth= {{xs: "auto", md: "50%"}} textAlign={{xs: "center", md:"left"}}>

          <Typography
            variant="h3"
            fontSize={{xs: "2rem"}}
          > Start investing in future!
          </Typography>

          <Typography
            variant="subtitle1"
            lineHeight="1.7"
            pt="1rem"
            textAlign={{xs: "center", md:"left"}}
          >
              Whether you're delving into the world of cryptocurrency for the first time or are a seasoned trader seeking enhanced tools, CryptoVortex is dedicated to meeting your needs. Join us on this exciting journey into the future of finance and discover the endless possibilities of the crypto realm.
          </Typography>

          <Button variant="contained" size="large"
            sx={{
              backgroundColor:"#4E4FEB",
              color: "#fff",
              mt: 5,
              paddingX: 10,
              borderRadius: "25px",
          }}> Sign up
          </Button>

        </Box>
        <Box
          component="img"
          src= {aboutCoins}
          sx={{ 
            height: {xs: "300px", md:"100%"}, 
            mb: {xs: "3rem"},
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.7)",
            borderRadius: "10px"
            }}
        ></Box>
      </Box>
    </Container>
  )
}
export default About
