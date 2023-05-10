import React, { useEffect, useState } from "react";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../Dashboard/DashboardStyles";
import { Button, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IconText } from "./ObrasStyle";
import ObraCard from "./Components/ObraCard";
import { Link } from "react-router-dom";

import { getAllObras } from "../../Services/ObrasRequests";
import { Obra } from "../../Types/Types";
import { makeImageURL } from "../../Utils/Parser";

const Obras = () => {
  const [allObras, setAllObras] = useState<Obra[]>([]);
  const [showObras, setShowObras] = useState<Obra[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchObras = async () => {
    const results = await getAllObras();

    let listaObras: Obra[] = [];
    for (let i = 0; i < results.data.length; i++) {
      listaObras.push({
        autor: results.data[i].autor,
        descripcion: results.data[i].descripcion,
        modelo: results.data[i].modelo,
        nombre: results.data[i].nombre,
        _id: results.data[i]._id,
        imagen: makeImageURL(results.data[i].imagen),
      });
    }

    setAllObras(listaObras);
    setShowObras(listaObras);
  };

  const searchObras = async () => {
    let listaObras: Obra[] = [];
    for (let i = 0; i < allObras.length; i++) {
      if (allObras[i].nombre.includes(searchTerm)) {
        listaObras.push(allObras[i]);
      }
    }

    setShowObras(listaObras);
  };

  useEffect(() => {
    fetchObras();
  }, []);

  useEffect(() => {
    searchObras();
  }, [searchTerm]);

  return (
    <GridPageContainer container direction="column">
      <GridTitleContainer
        item
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <GridTitle color="primary">Obras</GridTitle>
        <Link to="/obras/create">
          <Button variant="contained" sx={{ borderRadius: "2rem" }}>
            <IconText>Agregar</IconText>
            <AddIcon sx={{ width: "2rem", height: "2rem" }} />
          </Button>
        </Link>
      </GridTitleContainer>
      <Grid item container paddingTop="1rem" alignItems="center">
        <Typography paddingRight="1rem" fontSize="1.5rem" fontWeight="600">
          Buscar:
        </Typography>
        <TextField
          inputProps={{ maxLength: 100 }}
          id="outlined-basic"
          variant="outlined"
          placeholder="Escribe..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Grid container spacing={5} paddingTop="1rem">
          {showObras.map((obra) => {
            return (
              <Grid item xs={3}>
                <Link to={`/obras/${obra._id}`}>
                  <Button
                    sx={{
                      width: "100%",
                      padding: 0,
                      borderRadius: "1rem",
                    }}
                  >
                    <ObraCard
                      id={obra._id}
                      titulo={obra.nombre}
                      imagen={obra.imagen}
                      descripcion={obra.descripcion}
                    />
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </GridPageContainer>
  );
};
export default Obras;
