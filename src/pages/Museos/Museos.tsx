import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "./MuseosStyles";
import { IconText } from "../Obras/ObrasStyle";

import AddIcon from "@mui/icons-material/Add";
import MuseoCard from "./Components/MuseoCard";
import ObraCard from "./Components/ObraCard";
import LocacionesCard from "./Components/LocacionesCard";
import { Link } from "react-router-dom";
import { Locacion, Museo, Obra } from "../../Types/Types";
import { getAllMuseos } from "../../Services/MuseoRequests";
import { makeImageURL } from "../../Utils/Parser";

const Museos = () => {
  const [museos, setMuseos] = useState<Museo[]>([]);

  useEffect(() => {
    getMuseos();
  }, []);

  const getMuseos = async () => {
    const results = await getAllMuseos();

    let listaMuseos: Museo[] = [];
    for (let i = 0; i < results.data.length; i++) {
      let listaObras: Obra[] = [];
      for (let j = 0; j < results.data[i].obras.length; j++) {
        listaObras.push({
          autor: results.data[i].obras[j].autor,
          descripcion: results.data[i].obras[j].descripcion,
          modelo: results.data[i].obras[j].modelo,
          nombre: results.data[i].obras[j].nombre,
          _id: results.data[i].obras[j]._id,
          imagen: makeImageURL(results.data[i].obras[j].imagen),
        });
      }

      let listaLocaciones: Locacion[] = [];
      for (let k = 0; k < results.data[i].locations.length; k++) {
        listaLocaciones.push({
          _id: results.data[i].locations[k]._id,
          nombre: results.data[i].locations[k].nombre,
          screenshot: makeImageURL(results.data[i].locations[k].screenshot),
          ARWorldMap: results.data[i].locations[k].ARWorldMap,
        });
      }

      listaMuseos.push({
        _id: results.data[i]._id,
        nombre: results.data[i].nombre,
        obras: listaObras,
        locations: listaLocaciones,
        isActive: results.data[i].isActive,
        imagen: makeImageURL(results.data[i].imagen),
      });
    }
    setMuseos(listaMuseos);
  };

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
      {museos.map((museo) => {
        return (
          <Grid item container spacing={4} padding="1.5rem 0 0 0">
            <Grid item xs={3}>
              <Link to={`/museos/${museo._id}`}>
                <Button
                  sx={{
                    width: "100%",
                    padding: 0,
                    borderRadius: "1rem",
                  }}
                >
                  <MuseoCard
                    id={museo._id}
                    titulo={museo.nombre}
                    img={museo.imagen}
                    estatus={museo.isActive}
                  />
                </Button>
              </Link>
            </Grid>
            <Grid item container xs={9} direction="column">
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    fontSize="1.8rem"
                    color="#E63E6B"
                    fontWeight="700"
                  >
                    Obras
                  </Typography>
                </Grid>
                <Grid item container spacing={2}>
                  {museo.obras.map((obra) => {
                    return (
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            padding: 0,
                            borderRadius: "1rem",
                            width: "100%",
                          }}
                          disabled
                        >
                          <ObraCard
                            id={obra._id}
                            titulo={obra.nombre}
                            img={obra.imagen}
                          />
                        </Button>
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
                  {museo.locations.map((locacion) => {
                    return (
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            padding: 0,
                            borderRadius: "1rem",
                            width: "100%",
                          }}
                          disabled
                        >
                          <LocacionesCard
                            id={locacion._id}
                            titulo={locacion.nombre}
                            img={locacion.screenshot}
                          />
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </GridPageContainer>
  );
};
export default Museos;
