import React from "react";
import { Button, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CardContainer,
  CardIconContainer,
  CardImage,
  CardTitle,
} from "./LocacionCardStyle";
import { Locacion } from "../../../Types/Types";

const LocacionCard = (props: {
  id: string;
  titulo: string;
  imagen: string;
  openModal: (locacion: Locacion) => void;
}) => {
  return (
    <CardContainer container direction="column">
      <Grid item position="relative">
        <CardIconContainer
          container
          justifyContent="center"
          alignItems="center"
        >
          <Button
            sx={{ borderRadius: "50%", width: "3rem", height: "3rem" }}
            onClick={() =>
              props.openModal({
                _id: props.id,
                nombre: props.titulo,
                screenshot: props.imagen,
                ARWorldMap: "",
              })
            }
          >
            <DeleteIcon
              sx={{
                width: "2rem",
                height: "2rem",
                color: "white",
              }}
            />
          </Button>
        </CardIconContainer>

        <CardImage src={props.imagen} alt="" />
      </Grid>
      <Grid item alignSelf="center">
        <CardTitle>{props.titulo}</CardTitle>
      </Grid>
    </CardContainer>
  );
};

export default LocacionCard;
