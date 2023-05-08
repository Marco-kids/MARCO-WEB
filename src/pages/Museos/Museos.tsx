import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "./MuseosStyles";
import { IconText } from "../Obras/ObrasStyle";

import AddIcon from "@mui/icons-material/Add";
import MuseoIMG from "../../Assets/MarcoIndoors.jpg";
import PalomaIMG from "../../Assets/paloma.jpg";
import PatioIMG from "../../Assets/patio.jpg";
import MuseoCard from "./Components/MuseoCard";
import ObraCard from "./Components/ObraCard";
import LocacionesCard from "./Components/LocacionesCard";
import { Link } from "react-router-dom";

const MUSEOS = [
  {
    id: 1,
    nombre: "Museo Marco",
    img: MuseoIMG,
    estatus: "Activo",
  },
  {
    id: 2,
    nombre: "TEC",
    img: MuseoIMG,
    estatus: "Desactivada",
  },
];

const MUSEUM_OBRAS = [
  {
    id: 1,
    titulo: "Paloma",
    img: PalomaIMG,
  },
  {
    id: 2,
    titulo: "Paloma",
    img: PalomaIMG,
  },
  {
    id: 3,
    titulo: "Paloma",
    img: PalomaIMG,
  },
  {
    id: 4,
    titulo: "Paloma",
    img: PalomaIMG,
  },
];

const MUSEUM_LOCACIONES = [
  {
    id: 1,
    titulo: "Patio",
    img: PatioIMG,
  },
  {
    id: 2,
    titulo: "Patio",
    img: PatioIMG,
  },
  {
    id: 3,
    titulo: "Patio",
    img: PatioIMG,
  },
  {
    id: 4,
    titulo: "Patio",
    img: PatioIMG,
  },
];

const Museos = () => {
  return (
    <GridPageContainer container direction="column">
      <GridTitleContainer
        item
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <GridTitle color="primary">Museos</GridTitle>
        <Link to="/museos/create">
          <Button variant="contained" sx={{ borderRadius: "2rem" }}>
            <IconText>Agregar</IconText>
            <AddIcon sx={{ width: "2rem", height: "2rem" }} />
          </Button>
        </Link>
      </GridTitleContainer>
      <Grid item container spacing={4} padding="1.5rem 0 0 0">
        <Grid item xs={3}>
          <Link to={`/museos/${MUSEOS[0].id}`}>
            <Button
              sx={{
                width: "100%",
                padding: 0,
                borderRadius: "1rem",
              }}
            >
              <MuseoCard
                id={MUSEOS[0].id}
                titulo={MUSEOS[0].nombre}
                img={MUSEOS[0].img}
                estatus={MUSEOS[0].estatus}
              />
            </Button>
          </Link>
        </Grid>
        <Grid item container xs={9} direction="column">
          <Grid item container direction="column">
            <Grid item>
              <Typography fontSize="1.8rem" color="#E63E6B" fontWeight="700">
                Obras
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              {MUSEUM_OBRAS.map((obra) => {
                return (
                  <Grid item xs={3}>
                    {/* <Link to={`/obras/${obra.id}`}> */}
                    <Button
                      sx={{ padding: 0, borderRadius: "1rem", width: "100%" }}
                      disabled
                    >
                      <ObraCard
                        id={obra.id}
                        titulo={obra.titulo}
                        img={obra.img}
                      />
                    </Button>
                    {/* </Link> */}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                fontSize="1.8rem"
                color="#E63E6B"
                fontWeight="700"
                paddingTop="0.5rem"
              >
                Locaciones
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              {MUSEUM_LOCACIONES.map((obra) => {
                return (
                  <Grid item xs={3}>
                    <Button
                      sx={{ padding: 0, borderRadius: "1rem", width: "100%" }}
                      disabled
                    >
                      <LocacionesCard
                        id={obra.id}
                        titulo={obra.titulo}
                        img={obra.img}
                      />
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GridPageContainer>
  );
};
export default Museos;
