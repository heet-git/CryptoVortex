import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import aboutImg from "/public/about-img.jpg"

function About(props) {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        my= "5rem"
      >
        <Box
          component="img"
          src= {aboutImg}
          sx={{
            height: "100%",
            width: "50%"
          }}
        ></Box>
        <Box
          display="flex"   
          flexDirection="column"
          alignItems="center"
          px="3rem"
        >
          <Typography variant="h4"
            sx={{
              fontWeight: "600"
            }}
          >
            About CryptoVortex
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            pt="1rem"
          >
            In a rapidly evolving digital landscape, cryptocurrency has emerged as the future of finance. At CryptoVortex, we understand the intricate tapestry of blockchain technology and the potential of decentralized finance. Our mission? To provide a seamless and secure trading platform that empowers both novice and experienced traders.
          </Typography>
      </Box>
      </Box>

    </Container>
  )
}
export default About
