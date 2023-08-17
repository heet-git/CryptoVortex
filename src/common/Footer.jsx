import React from 'react';
import { Box, Container, Stack, Typography, Avatar } from '@mui/material';


function Footer() {
    return (
        <Container>
            <Box>
                <Box>
                    <Avatar src='/public/logo.png'/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            fontWeight: 700,
                            textDecoration: "none",
                            color: '#4E4FEB'
                        }}
                        > CryptoVortex
                    </Typography>
                </Box>
                <Stack>

                </Stack>
            </Box>
        </Container>
    )
}

export default Footer