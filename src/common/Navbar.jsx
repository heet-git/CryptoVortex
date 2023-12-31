import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuSharpIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import logoImg from '/public/logo.png'
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [mode, setMode] = useState(true)

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    function changeMode(){
        setMode(!mode)
    }

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>

                    <Box display="flex" alignItems="center">
                        
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
                            > 
                            <Avatar src={logoImg}></Avatar>
                            CryptoVortex
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, p: 0, m: 0}}>
                        <IconButton
                            size="small"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuSharpIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                justifyContent: "center"
                                }}>
                                <NavLink to="/explore" onClick={handleCloseNavMenu}>
                                    <MenuItem>
                                        <Typography sx={{ color: 'black' }}>
                                            Explore
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                                <NavLink to="/news" onClick={handleCloseNavMenu}>
                                    <MenuItem>
                                        <Typography sx={{ color: 'black' }}>
                                            News
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                                <NavLink to="/about" onClick={handleCloseNavMenu}>
                                    <MenuItem>
                                        <Typography sx={{ color: 'black' }}>
                                            About
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Button 
                                    variant="outlined" 
                                    sx={{ 
                                        color: "black",
                                        fontSize: "1rem"
                                        }}>
                                    Sign in</Button>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Button 
                                    variant='contained'
                                    sx={{
                                        backgroundColor: "#4E4FEB",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        borderRadius: "20px"
                                        }}>
                                    Get started</Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: "flex", md: "none" },
                            textAlign:"center",
                            flexGrow: 1.5,
                            fontWeight: 700,
                            color: '#4E4FEB',
                            textDecoration: "none",
                        }}
                    >
                        <Avatar src={logoImg}></Avatar>CryptoVortex
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center'}}>
                        <NavLink to="/explore" onClick={handleCloseNavMenu}>
                            <MenuItem>
                                <Typography
                                    variant="subtitle1"
                                    textAlign="center" 
                                    sx={{ color: 'black' }}>
                                    Explore
                                </Typography>
                            </MenuItem>
                        </NavLink>
                        <NavLink to="/news" onClick={handleCloseNavMenu}>
                            <MenuItem>
                                <Typography
                                    variant="subtitle1"
                                    textAlign="center" 
                                    sx={{ color: 'black' }}>
                                    News
                                </Typography>
                            </MenuItem>
                        </NavLink>
                        <NavLink to="/about" onClick={handleCloseNavMenu}>
                            <MenuItem>
                                <Typography
                                    variant="subtitle1"
                                    textAlign="center" 
                                    sx={{ color: 'black' }}>
                                    About
                                </Typography>
                            </MenuItem>
                        </NavLink>
                    </Box>
                    
                    <Box>
                        <IconButton onClick={()=> (changeMode())}>
                            {mode ? <LightModeTwoToneIcon /> : <NightlightTwoToneIcon />}
                        </IconButton>
                    </Box>

                    <Box sx={{display: {xs: "none", md:"block"}}} >
                        <Button variant='text' sx={{color:'black', paddingRight: 2}}>Sign in</Button>
                        <Button variant='contained'
                        sx={{
                            backgroundColor: "#4E4FEB",
                            color: "#fff",
                            borderRadius: "20px",
                        }}
                        >Get started</Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;