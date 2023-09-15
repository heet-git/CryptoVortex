import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import aboutImg from "/public/about-img.jpg"
import aboutCoins from "/public/about-coins.jpg"
import { stats } from '../data/data';

function About() {
  return (
    <Container 
      disableGutters 
      maxWidth= {{xs: "xs", md: "xl"}}>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          my: "5rem",
          px:"7rem",
          height: {xs: "25em", md: "50em"}
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
                fontWeight: "600"
              }}
            >
              About CryptoVortex
            </Typography>

            <Typography
              fontSize="1.1rem"
              lineHeight="1.7"
              textAlign="center"
              pt="1rem"
            >
              In a rapidly evolving digital landscape, cryptocurrency has emerged as the future of finance. At CryptoVortex, we understand the intricate tapestry of blockchain technology and the potential of decentralized finance. Our mission? To provide a seamless and secure trading platform that empowers both novice and experienced traders.
            </Typography>

        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          px: "7rem",
          py: "5rem"
        }}
        >
          <Box
            display="flex"
          >
            <Typography
              variant="h3"
            >
                CryptoVortex helps customers to make right choice
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                maxWidth:"30%",
                pl: "2rem",
                fontSize:"1.1rem",
                lineHeight:"1.7"
              }}
            >
              Our platform leverages state-of-the-art encryption and innovative features, ensuring a smooth trading experience. With real-time data analytics, comprehensive market insights, and a user-centric interface, we make cryptocurrency trading accessible and efficient for all.
            </Typography>
          </Box>
          <Box>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 1, sm: 2, md: 4 }}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{
                    justifyContent:"space-between",
                    pt: 7,
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
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          my: "5rem",
          px:"7rem",
          height:"30em"
        }}>

        <Box
          maxWidth="50%"
        >
          <Typography
            variant="h3"
          >
              Start investing in future!
          </Typography>

          <Typography
            variant="subtitle1"
            fontSize="1.1rem"
            lineHeight="1.7"
            
            pt="1rem"

          >
              Whether you're delving into the world of cryptocurrency for the first time or are a seasoned trader seeking enhanced tools, CryptoVortex is dedicated to meeting your needs. Join us on this exciting journey into the future of finance and discover the endless possibilities of the crypto realm.
          </Typography>

          <Button variant="contained" size="large" 
            sx={{
              backgroundColor:"#4E4FEB",
              color: "#fff",
              mt: 5,
              paddingX: 10,
              borderRadius: "25px"
          }} >
          Sign up
          </Button>
        </Box>
        <Box
          component="img"
          src= {aboutCoins}
          sx={{ 
            height: "100%", 
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.7)",
            borderRadius: "10px"
            }}
        ></Box>
      </Box>
    </Container>
  )
}
export default About
