import React, { useEffect, useState } from "react";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../../Dashboard/DashboardStyles";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  Grid,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import PalomaIMG from "../../../Assets/paloma.jpg";
import { GuardarModal } from "../../Museos/MuseosStyles";
import theme from "../../../Utils/Theme";

const ObraFormulario = () => {
  const { id } = useParams();
  const [editarFlag, setEditarFlag] = useState(true);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (id === "create") {
      setEditarFlag(false);
    }
  }, [id]);

  const onFileDrop = () => {
    console.log("file dropped");
  };

  const onCloseModal = () => {
    navigate("/obras");
  };

  return (
    <GridPageContainer container direction="column">
      <GridTitleContainer
        item
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <GridTitle color="primary">
          {editarFlag ? "Editar" : "Agregar"} Obra
        </GridTitle>
      </GridTitleContainer>

      <Grid
        item
        container
        minHeight="80vh"
        boxShadow="0.2rem 0.2rem 0.5rem 0.1rem rgba(0,0,0,0.1)"
        borderRadius="1rem"
        marginTop="1rem"
        position="relative"
      >
        <Grid item container xs={6} direction="column" padding="2rem">
          <Grid item container paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Nombre
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Escribe..."
              fullWidth
            />
          </Grid>

          <Grid item container paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Descripcion
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Escribe..."
              fullWidth
            />
          </Grid>

          <Grid item container paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Modelo
            </Typography>

            <Input
              type="file"
              name="hola"
              onChange={onFileDrop}
              style={{
                width: "100%",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            ></Input>

            <Typography fontSize="1rem" fontWeight="500">
              El modelo debe ser un archivo .USDZ válido
            </Typography>
          </Grid>

          <Grid item container paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Imagen
            </Typography>

            <Input
              type="file"
              name="hola"
              onChange={onFileDrop}
              style={{
                width: "100%",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            ></Input>

            <Typography fontSize="1rem" fontWeight="500">
              Toma una captura de pantalla del modelo y subela aqui
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={6}
          direction="column"
          padding="2rem"
          alignItems="center"
        >
          <Grid item padding="1rem 0 1rem 0">
            <Typography fontSize="1.5rem" fontWeight="700">
              Imagen
            </Typography>
          </Grid>

          <Grid item container justifyContent="center">
            <img
              src={PalomaIMG}
              style={{
                width: "70%",
                objectFit: "cover",
                borderRadius: "1rem",
                boxShadow: "0.2rem 0.2rem 1rem 0.2rem rgba(0,0,0,0.2)",
              }}
            />
          </Grid>
        </Grid>

        <Grid position="absolute" bottom="2rem" right="2rem">
          {editarFlag ? (
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "1rem", marginRight: "1rem" }}
              onClick={() => setOpenDelete(true)}
            >
              <Typography fontSize="2rem" textTransform="none" fontWeight="700">
                Eliminar
              </Typography>
            </Button>
          ) : (
            ""
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "1rem" }}
            onClick={() => setOpen(true)}
          >
            <Typography fontSize="2rem" textTransform="none" fontWeight="700">
              Guardar
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={() => onCloseModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <GuardarModal>
          <Typography fontSize="2rem" display="flex">
            La&nbsp;
            <Typography
              fontSize="2rem"
              fontWeight="700"
              color={theme.palette.primary.main}
            >
              Obra&nbsp;
            </Typography>
            se ha guardado con exito
          </Typography>
        </GuardarModal>
      </Modal>

      <Modal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <GuardarModal>
          <Typography fontSize="2rem" display="flex" paddingBottom="1rem">
            Borrar obra:&nbsp;
            <Typography
              fontSize="2rem"
              fontWeight="700"
              color={theme.palette.primary.main}
            >
              PALOMA
            </Typography>
          </Typography>

          <Grid container justifyContent="flex-end">
            <Button variant="contained" onClick={() => onCloseModal()}>
              <Typography fontSize="1.5rem" textTransform="none">
                Confirmar
              </Typography>
            </Button>
          </Grid>
        </GuardarModal>
      </Modal>
    </GridPageContainer>
  );
};
export default ObraFormulario;