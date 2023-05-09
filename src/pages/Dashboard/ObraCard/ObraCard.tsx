import React from "react";
import { Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PalomaIMG from "../../../Assets/paloma.jpg";
import {
  CardContainer,
  CardIconContainer,
  CardImage,
  CardTitle,
} from "./ObraCardStyles";

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
