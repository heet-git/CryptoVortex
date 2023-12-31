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
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent={{ xs: 'flex-start', md: 'space-between' }}
                py={{ xs: 5, md: 10 }}
                px={{ xs: 3, md: 0}}
            >
                <Box>
                    <Box display='flex' flexDirection='row'>
                        <Avatar src={logoImg}></Avatar>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 700,
                                textDecoration: 'none',
                                color: '#4E4FEB',
                                
                            }}
                        >
                            CryptoVortex
                        </Typography>
                    </Box>
                    <Typography
                        variant='subtitle2'
                        display='block'
                        color='#74879C'
                        ml={4}
                    >
                        <CopyrightIcon fontSize='small'/>
                        2023 CryptoVortex
                    </Typography>
                </Box>
                
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 2, md: 6 }}
                    justifyContent="space-between"
                >
                    <Box 
                        display= {{xs:"block", md: "flex"}}
                    >
                        <Stack
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                            ml= "2rem"
                            mt= {{xs: 2, md: 0}}
                        >
                            <Typography variant='h6' fontWeight={600} fontFamily="lato">
                                Company
                            </Typography>
                            <Button size="medium" color="inherit">
                                About us
                            </Button>
                            <Button size="medium" color="inherit">
                                Career
                            </Button>
                            <Button size="medium" color="inherit">
                                Terms
                            </Button>
                        </Stack>
                        
                        <Stack
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                            ml= "2rem"
                        >
                            <Typography variant='h6' fontWeight={600} fontFamily="lato">
                                Support
                            </Typography>
                            <Button size="medium" color="inherit">
                                Contact support
                            </Button>
                            <Button size="medium" color="inherit">
                                FAQs
                            </Button>
                            <Button size="medium" color="inherit">
                                Request Form
                            </Button>
                        </Stack>
                        <Stack
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                            ml= "2rem"
                        >
                            <Typography variant='h6' fontWeight={600} fontFamily="lato">
                                Learn
                            </Typography>
                            <Button size="medium" color="inherit">
                                Tips & Tutorials
                            </Button>
                            <Button size="medium" color="inherit">
                                Crypto basics
                            </Button>
                            <Button size="medium" color="inherit">
                                What is blockchain?
                            </Button>
                        </Stack>
                    </Box>
                    <Stack>
                        <Typography variant='h6' fontWeight={600} textAlign='center' fontFamily="lato">
                            Social
                        </Typography>
                        <Box
                            display='flex'
                            justifyContent={{ xs: 'center', md: 'flex-start' }}
                            alignItems='center'
                        >
                            <Button size="medium" color="inherit">
                                <FacebookIcon />
                            </Button>
                            <Button size="medium" color="inherit">
                                <InstagramIcon />
                            </Button>
                            <Button size="medium" color="inherit">
                                <TwitterIcon />
                            </Button>
                            <Button size="medium" color="inherit">
                                <RedditIcon />
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}

export default Footer