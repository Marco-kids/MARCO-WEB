import React, { useState } from "react";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../Dashboard/DashboardStyles";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import LocacionCard from "./Components/LocacionCard";
import PatioIMG from "../../Assets/patio.jpg";
import { EliminarModal } from "./LocacionesStyle";
import theme from "../../Utils/Theme";

const MUSEUM_OBRAS = [
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
  {
    id: 5,
    titulo: "Patio",
    img: PatioIMG,
  },
  {
    id: 6,
    titulo: "Patio",
    img: PatioIMG,
  },
  {
    id: 7,
    titulo: "Patio",
    img: PatioIMG,
  },
  {
    id: 8,
    titulo: "Patio",
    img: PatioIMG,
  },
];

const Obras = () => {
  const [openDelete, setOpenDelete] = useState(false);

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
        />
      </Grid>
      <Grid item>
        <Grid container spacing={5} paddingTop="1rem">
          {MUSEUM_OBRAS.map((obra) => {
            return (
              <Grid item xs={3}>
                <LocacionCard
                  openModal={setOpenDelete}
                  id={obra.id}
                  titulo={obra.titulo}
                  img={obra.img}
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
          <Typography fontSize="2rem" display="flex" paddingBottom="1rem">
            Borrar museo:&nbsp;
            <Typography
              fontSize="2rem"
              fontWeight="700"
              color={theme.palette.primary.main}
            >
              PATIO
            </Typography>
          </Typography>

          <Grid container justifyContent="flex-end">
            <Button variant="contained" onClick={() => onCloseModal()}>
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
