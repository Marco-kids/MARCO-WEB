import React from "react";
import { Button, Grid } from "@mui/material";
import PalomaIMG from "../../../Assets/paloma.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CardContainer,
  CardIconContainer,
  CardImage,
  CardTitle,
} from "./LocacionCardStyle";

const LocacionCard = (props: {
  id: number;
  titulo: string;
  img: any;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
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
            onClick={() => props.openModal(true)}
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

        <CardImage src={props.img} alt="" />
      </Grid>
      <Grid item alignSelf="center">
        <CardTitle>{props.titulo}</CardTitle>
      </Grid>
    </CardContainer>
  );
};

export default LocacionCard;
