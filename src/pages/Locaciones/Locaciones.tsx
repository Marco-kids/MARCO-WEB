import React, { useEffect, useState } from "react";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../Dashboard/DashboardStyles";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import LocacionCard from "./Components/LocacionCard";
import { EliminarModal } from "./LocacionesStyle";
import theme from "../../Utils/Theme";
import { Locacion } from "../../Types/Types";
import {
  deleteLocacion,
  getAllLocaciones,
} from "../../Services/LocacionesRequests";
import { makeImageURL } from "../../Utils/Parser";

const Obras = () => {
  const [openDelete, setOpenDelete] = useState(false);

  const [locaciones, setLocaciones] = useState<Locacion[]>([]);
  const [showLocaciones, setShowLocacion] = useState<Locacion[]>([]);
  const [selectedLocacion, setSelectedLocacion] = useState<Locacion>();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchLocaciones = async () => {
    const response = await getAllLocaciones();
    let listaLocaciones: Locacion[] = [];

    for (let i = 0; i < response.data.length; i++) {
      listaLocaciones.push({
        _id: response.data[i]._id,
        nombre: response.data[i].nombre,
        screenshot: makeImageURL(response.data[i].screenshot),
        ARWorldMap: "",
      });
    }

    setLocaciones(listaLocaciones);
    setShowLocacion(listaLocaciones);
  };

  const searchLocaciones = async () => {
    let listaLocaciones: Locacion[] = [];
    for (let i = 0; i < locaciones.length; i++) {
      if (locaciones[i].nombre.includes(searchTerm)) {
        listaLocaciones.push(locaciones[i]);
      }
    }

    setShowLocacion(listaLocaciones);
  };

  useEffect(() => {
    searchLocaciones();
  }, [searchTerm]);

  useEffect(() => {
    fetchLocaciones();
  }, [openDelete]);

  const onOpenModal = (locacion: Locacion) => {
    setSelectedLocacion(locacion);
    setOpenDelete(true);
  };

  const onDeleteLocacion = async () => {
    await deleteLocacion(selectedLocacion!._id);
    onCloseModal();
  };

  const onCloseModal = () => {
    setOpenDelete(false);
  };

  return (
    <GridPageContainer container direction="column">
      <GridTitleContainer
        item
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <GridTitle color="primary">Locaciones</GridTitle>
      </GridTitleContainer>
      <Grid item container paddingTop="1rem" alignItems="center">
        <Typography paddingRight="1rem" fontSize="1.5rem" fontWeight="600">
          Buscar:
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Escribe..."
          inputProps={{ maxLength: 100 }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Grid container spacing={5} paddingTop="1rem">
          {showLocaciones.map((locacion) => {
            return (
              <Grid item xs={3}>
                <LocacionCard
                  openModal={onOpenModal}
                  id={locacion._id}
                  titulo={locacion.nombre}
                  imagen={locacion.screenshot}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Modal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EliminarModal>
          <Typography
            fontSize="1.2rem"
            display="flex"
            paddingBottom="1rem"
            flexDirection="column"
            fontWeight="700"
          >
            Borrar locacion:&nbsp;
            <Typography
              fontSize="2rem"
              fontWeight="700"
              color={theme.palette.primary.main}
            >
              {selectedLocacion!.nombre}
            </Typography>
          </Typography>

          <Grid container justifyContent="flex-end">
            <Button variant="contained" onClick={() => onDeleteLocacion()}>
              <Typography fontSize="1.5rem" textTransform="none">
                Confirmar
              </Typography>
            </Button>
          </Grid>
        </EliminarModal>
      </Modal>
    </GridPageContainer>
  );
};
export default Obras;
