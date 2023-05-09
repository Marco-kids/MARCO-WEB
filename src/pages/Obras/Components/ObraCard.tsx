import React from "react";
import { Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  CardContainer,
  CardDescripcion,
  CardIconContainer,
  CardImage,
  CardTitle,
} from "./ObraCardStyles";

const ObraCard = (props: {
  id: string;
  titulo: string;
  imagen: string;
  descripcion: string;
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
        <CardImage src={props.imagen} alt="" />
      </Grid>
      <Grid item alignSelf="center">
        <CardTitle>{props.titulo}</CardTitle>
        <CardDescripcion>{props.descripcion}</CardDescripcion>
      </Grid>
    </CardContainer>
  );
};

export default ObraCard;
