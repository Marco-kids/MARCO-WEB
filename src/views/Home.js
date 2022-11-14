import React from "react";
import { Outlet } from "react-router";
import Grid from "@mui/material/Grid";
import TopMenu from "../components/TopMenu";

const drawerWidthLeft = 240;

const Home = () => {
  return (
    <>
      <TopMenu/>
      <Grid
        container
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
        }}
      >
        <Outlet />
      </Grid>
    </>
  );
}

export default Home;