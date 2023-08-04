import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
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
        <AppBar position="static">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    color: "black",
                    textDecoration: "none",
                }}
                >
                CryptoVortex
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, padding: 0, margin: 0, color: 'black'}}>
                <IconButton
                    size="small"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuSharpIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
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
                    }}
                >
                    {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu} 
                    >
                        <Typography textAlign="center">{page}</Typography>  /// here is the issue. 
                    </MenuItem>
                    ))}
                </Menu>
                </Box>

                {/* Mobile View */}

                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 1,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "black",
                        textDecoration: "none",
                    }}
                >
                    CryptoVortex
                </Typography>
                
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                    {pages.map((page) => (
                    <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    >
                    {page}
                    </Button>
                    ))}
                </Box>

            </Toolbar>
        </Container>
    </AppBar>
    );
}
export default Navbar;