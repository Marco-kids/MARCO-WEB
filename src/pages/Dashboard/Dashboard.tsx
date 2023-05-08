import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ObraCard from "./ObraCard/ObraCard";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "./DashboardStyles";

import PalomaIMG from "../../Assets/paloma.jpg";
import PatioIMG from "../../Assets/patio.jpg";

const MUSEUM_OPCIONES = [
  {
    id: 1,
    nombre: "Marco",
  },
  {
    id: 2,
    nombre: "TEC",
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

const Dashboard = () => {
  const [museumSelected, setMuseumSelected] = useState(MUSEUM_OPCIONES[0].id);

  const handleChange = (event: SelectChangeEvent) => {
    setMuseumSelected(parseInt(event.target.value));
  };

  return (
    <GridPageContainer container direction="column">
      <GridTitleContainer item>
        <GridTitle color="primary">Dashboard</GridTitle>
      </GridTitleContainer>
      <Grid item>
        <Grid
          container
          justifyContent="flex-end"
          padding="1rem 1rem 0 1rem"
          alignItems="center"
        >
          <Grid item padding="0 1rem 0 0">
            <Typography fontSize="1.4rem" fontWeight="700">
              Museo:
            </Typography>
          </Grid>
          <Grid item width="20%">
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={museumSelected}
                onChange={handleChange}
                sx={{ fontSize: "1.2rem" }}
              >
                {MUSEUM_OPCIONES.map((museum) => {
                  return <MenuItem value={museum.id}>{museum.nombre}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  fontSize="2rem"
                  fontWeight="600"
                  paddingBottom="0.5rem"
                  marginTop="-2rem"
                >
                  Obras
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={5}>
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
                          />
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  fontSize="2rem"
                  fontWeight="600"
                  padding="0 0 0.5rem 0"
                >
                  Locaciones
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={5}>
                  {MUSEUM_LOCACIONES.map((obra) => {
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
                          />
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GridPageContainer>
  );
};
export default Dashboard;
