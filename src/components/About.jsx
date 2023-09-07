import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import aboutImg from "/public/about-img.jpg"

function About(props) {
  return (
    <Container disableGutters>
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

      <Box
        my="10rem"
        >
          <Box
            display="flex"
          >
            <Typography
              variant="h4"
            >
                  CryptoVortex helps customers to make right choice
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                maxWidth:"30%",
                pl: "2rem"
              }}
            >
              Our platform leverages state-of-the-art encryption and innovative features, ensuring a smooth trading experience. With real-time data analytics, comprehensive market insights, and a user-centric interface, we make cryptocurrency trading accessible and efficient for all.
            </Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Typography>item 1</Typography>
              <Typography>item 1</Typography>
              <Typography>item 1</Typography>
          </Stack>
        </Box>
      </Box>

    </Container>
  )
}
export default About
