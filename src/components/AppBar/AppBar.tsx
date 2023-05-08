import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import { ImageContainer, LogoIconSmall } from "../../styles/Styles";
import { Button, Grid, Typography } from "@mui/material";
import theme from "../../Utils/Theme";

import MarcoLogo from "../../Assets/MarcoLogo.png";

const drawerWidth = 180;

const navbarItems = [
  // {
  //   path: "/",
  //   title: "Dashboard",
  // },
  {
    path: "/",
    title: "Museos",
  },
  {
    path: "/obras",
    title: "Obras",
  },
  {
    path: "/locaciones",
    title: "Locaciones",
  },
];

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}
      >
        <Toolbar>
          <Grid container alignItems="flex-end">
            <Grid item>
              <ImageContainer paddingRight="0.2rem" marginLeft="-0.5rem">
                <LogoIconSmall src={MarcoLogo} alt="Museo Marco logo" />
              </ImageContainer>
            </Grid>
            <Grid item>
              <Typography
                paddingBottom="0.1rem"
                fontSize="1.3rem"
                fontWeight="600"
              >
                Kids
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          background: "black",
        }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.light,
            color: "white",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", paddingTop: "0.5rem" }}>
          <Grid
            container
            direction="column"
            padding="0.5rem 0 0.5rem 0"
            spacing={1}
          >
            {navbarItems.map((item, index) => {
              return (
                <Grid item>
                  <Link to={item.path}>
                    <Button
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Typography
                        fontSize="1.2rem"
                        fontWeight="700"
                        align="center"
                        color="white"
                        textTransform="none"
                      >
                        {item.title}
                      </Typography>
                    </Button>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
