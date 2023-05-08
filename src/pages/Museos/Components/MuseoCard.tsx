import React from "react";
import { Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
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
  height: "45vh",
  objectFit: "cover",
  borderRadius: "1rem 1rem 0 0",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "600",
  padding: "0 0.5rem 0 0.5rem",
  color: "black",
  textTransform: "none",
}));

const CardStatus = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "1rem",
  left: "1rem",
  backgroundColor: "#3BB98C",
  padding: "0.3rem 1rem 0.3rem 0.5rem",
  borderRadius: "1rem",
  textTransform: "none",
  color: "white",
}));

const MuseoCard = (props: {
  id: number;
  titulo: string;
  img: any;
  estatus: string;
}) => {
  return (
    <CardContainer container direction="column">
      <Grid item position="relative">
        <CardIconContainer
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
        </CardIconContainer>

        <CardStatus container alignItems="center" width="auto">
          <Grid item>
            <CheckIcon
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                color: "white",
                margin: "-0.3rem 0 -0.4rem 0",
              }}
            />
          </Grid>
          <Grid item paddingLeft="0.3rem">
            <Typography>Activo</Typography>
          </Grid>
        </CardStatus>

        <CardImage src={props.img} alt="" />
      </Grid>
      <Grid item alignSelf="center">
        <CardTitle>{props.titulo}</CardTitle>
      </Grid>
    </CardContainer>
  );
};

export default MuseoCard;
