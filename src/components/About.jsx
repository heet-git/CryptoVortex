import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import aboutImg from "/public/about-img.jpg"

function About(props) {
  return (
    <Container>
      <Box
        textAlign="center"
        my="5rem"
      >
        <Typography variant="h4"
          sx={{
            fontWeight: "600"
          }}
        >
          About CryptoVortex
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${aboutImg})`,
            
          }}
        >

        </Box>
      </Box>

    </Container>
  )
}
export default About
