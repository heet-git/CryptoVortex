import React from 'react';
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


const pages = ['Explore', 'Learn', 'News', 'About'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    return (
        <AppBar position="static" elevation={1}>
            <Container maxWidth="xl" >
            <Toolbar disableGutters>

            {/* Desktop View */}
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
                    color: "Primary",
                    textDecoration: "none",
                }}
                >
                CryptoVortex
                </Typography>

                {/* Mobile View */}

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, padding: 0, margin: 0}}>
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
                        justifyContent: 'center',
                        }}
                        >
                        {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}
                        >
                            <Typography 
                            textAlign="center"  
                            sx={{color:'black'}}>
                            {page}
                            </Typography>
                        </MenuItem>
                        ))}
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Button variant='text' sx={{color:'black'}}>Sign in</Button>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Button variant='contained'>Get started</Button>
                        </MenuItem>
                    </Menu>
                </Box>
                
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr:2,
                        display: { xs: "flex", md: "none" },
                        alignItems:"center",
                        flexGrow: 1,
                        fontWeight: 600,
                        color: "black",
                        textDecoration: "none",
                    }}
                >
                    CryptoVortex
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center'}}>
                    {pages.map((page) => (
                    <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block"}}
                    >
                    {page}
                    </Button>
                    ))}
                </Box>
                <Box sx={{display: {xs: "none", md:"block"} }} >
                <Button variant='text' sx={{color:'black'}}>Sign in</Button>
                <Button variant='contained'>Get started</Button>
                </Box>

            </Toolbar>
        </Container>
    </AppBar>
    );
}
export default Navbar;