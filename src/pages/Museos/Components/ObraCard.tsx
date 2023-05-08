import React from "react";
import { Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";

const CardContainer = styled(Grid)(({ theme }) => ({
  boxShadow: "0.2rem 0.2rem 0.5rem 0.1rem rgba(0,0,0,0.1)",
  borderRadius: "1rem",
}));

const CardIconContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
  borderRadius: "50%",
  backgroundColor: "#E63E6B",
  width: "3rem",
  height: "3rem",
}));

const CardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "15vh",
  objectFit: "cover",
  borderRadius: "1rem 1rem 0 0",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: "600",
  padding: "0 0.5rem 0 0.5rem",
  color: "black",
  textTransform: "none",
}));

const ObraCard = (props: { id: number; titulo: string; img: any }) => {
  return (
    <CardContainer container direction="column">
      <Grid item position="relative">
        {/* <CardIconContainer
          container
          justifyContent="center"
          alignItems="center"
        >
          <EditIcon
            sx={{
              width: "2rem",
              height: "2rem",
              color: "white",
            }}
          />
        </CardIconContainer> */}
        <CardImage src={props.img} alt="" />
      </Grid>
      <Grid item alignSelf="center">
        <CardTitle>{props.titulo}</CardTitle>
      </Grid>
    </CardContainer>
  );
};

export default ObraCard;
