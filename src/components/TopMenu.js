import * as React from 'react';
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from "../assets/logo.png"


const pages = ['Instrucciones', 'Tabla', 'Añadir obra'];
const settings = ['Perfil', 'Cerrar Sesion'];

function TopMenu() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  const handleChangeView = async (page) => {
    handleCloseNavMenu();
    navigate("/table");
    try {
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppBar position="static" 
        sx = {{backgroundColor: "#E63E6B"
            ,}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box 
        component="img" 
        src={Logo} 
        sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            mr: 1, 
            width: "20%",
            justifySelf: "center",
         }}
        />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/table");
                  }}
                >
                  
                  <Typography textAlign="center" >
                    Instrucciones
                  </Typography>
            </MenuItem>
            <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/table");
                  }}
                >
                  
                  <Typography textAlign="center" >
                    Tabla
                  </Typography>
            </MenuItem>
            <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/add");
                  }}
                >
                  
                  <Typography textAlign="center" >
                    Añadir Obra
                  </Typography>
            </MenuItem>
            </Menu>
          </Box>
          <Box component="img" src={Logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: "20%" }}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/table");
                  }}
                >
                  
                  <Typography textAlign="center" >
                    Instrucciones
                  </Typography>
            </MenuItem>
            <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/table");
                  }}
                >
                  
                  <Typography textAlign="center" >
                    Tabla
                  </Typography>
            </MenuItem>
            <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/add");
                  }}
                >
                  
                  <Typography textAlign="center" >
                    Añadir Obra
                  </Typography>
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Marco" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopMenu;
