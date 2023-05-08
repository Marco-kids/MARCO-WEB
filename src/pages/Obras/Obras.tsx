import React from "react";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../Dashboard/DashboardStyles";
import { Button, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IconText } from "./ObrasStyle";
import ObraCard from "./Components/ObraCard";

import PalomaIMG from "../../Assets/paloma.jpg";

const MUSEUM_OBRAS = [
  {
    id: 1,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 5,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 6,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 7,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 8,
    titulo: "Paloma",
    img: PalomaIMG,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const Obras = () => {
  return (
    <GridPageContainer container direction="column">
      <GridTitleContainer
        item
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <GridTitle color="primary">Obras</GridTitle>
        <Button variant="contained" sx={{ borderRadius: "2rem" }}>
          <IconText>Agregar</IconText>
          <AddIcon sx={{ width: "2rem", height: "2rem" }} />
        </Button>
      </GridTitleContainer>
      <Grid item container paddingTop="1rem" alignItems="center">
        <Typography paddingRight="1rem" fontSize="1.5rem" fontWeight="600">
          Buscar:
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Escribe..."
        />
      </Grid>
      <Grid item>
        <Grid container spacing={5} paddingTop="1rem">
          {MUSEUM_OBRAS.map((obra) => {
            return (
              <Grid item xs={3}>
                <Button
                  sx={{
                    width: "100%",
                    padding: 0,
                    borderRadius: "1rem",
                  }}
                >
                  <ObraCard
                    id={obra.id}
                    titulo={obra.titulo}
                    img={obra.img}
                    descripcion={obra.descripcion}
                  />
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </GridPageContainer>
  );
};
export default Obras;
