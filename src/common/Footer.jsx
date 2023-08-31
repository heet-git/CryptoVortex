import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import CopyrightIcon from '@mui/icons-material/Copyright';
import logoImg from '/public/logo.png'

function Footer() {
    return (
        <Container>
            <Box 
                display='flex' 
                justifyContent='space-between'
                sx={{
                    paddingY: 10
                }}
                >
                <Box>
                    <Box display='flex' flexDirection='row' alignItems='center'>
                    <Avatar src={logoImg}></Avatar>
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
                            color: '#4E4FEB',
                        }}
                        > CryptoVortex
                    </Typography>
                    </Box>
                    <Typography 
                        variant='subtitle2' 
                        display='block' 
                        ml={5}
                        mt={1}
                        color='#74879C'>
                        <CopyrightIcon fontSize='30px'/> 
                        2023 CryptoVortex
                    </Typography>
                </Box>
                <Stack 
                    direction='row'
                    spacing={6}
                    >
                        <Stack 
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}>
                            <Typography variant='h6' fontWeight={600} p={1}>Company</Typography>
                            <Button size="medium" color="inherit">About us</Button>
                            <Button size="medium" color="inherit">Career</Button>
                            <Button size="medium" color="inherit">Terms</Button>
                        </Stack>
                        <Stack 
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}>
                            <Typography variant='h6' fontWeight={600} p={1}>Support</Typography>
                            <Button size="medium" color="inherit">Contact support</Button>
                            <Button size="medium" color="inherit">FAQs</Button>
                            <Button size="medium" color="inherit">Request Form</Button>
                        </Stack>
                        <Stack 
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}>
                            <Typography variant='h6' fontWeight={600} p={1}>Learn</Typography>
                            <Button size="medium" color="inherit">Tips & Tutorials</Button>
                            <Button size="medium" color="inherit">Crypto basics</Button>
                            <Button size="medium" color="inherit">What is blockchain?</Button>
                        </Stack>
                        <Stack>
                            <Typography variant='h6' fontWeight={600} p={1} textAlign='center'>Social</Typography>
                                <Box
                                    display='flex'
                                    alignItems='flex-start'
                                    > 
                                    <Button size="medium" color="inherit"><FacebookIcon/></Button>
                                    <Button size="medium" color="inherit"><InstagramIcon/></Button>
                                    <Button size="medium" color="inherit"><TwitterIcon/></Button>
                                    <Button size="medium" color="inherit"><RedditIcon/></Button>
                                </Box>
                        </Stack>
                </Stack>
            </Box>
        </Container>
    )
}

export default Footer