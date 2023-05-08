import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../../../styles/Styles";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  Input,
  ListItemText,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { GuardarModal, SelectedOption } from "../MuseosStyles";
import theme from "../../../Utils/Theme";
import { useNavigate } from "react-router-dom";

const OBRAS_ARRAY = [
  "Paloma",
  "Pirinola",
  "Volcanica",
  "Piramide",
  "Dodecaedro",
  "Prisma",
  "Obra 7",
  "Obra 8",
  "Obra 9",
  "Obra 10",
  "Obra 11",
  "Obra 12",
];

const LOCACIONES_ARRAY = [
  "Marco - Patio 1",
  "Marco - Patio 2",
  "Marco - Patio 3",
  "Marco - Patio 4",
  "Marco - Patio 5",
  "Marco - Patio 6",
  "Marco - Patio 7",
  "Marco - Patio 8",
  "Marco - Patio 9",
  "Marco - Patio 10",
  "Marco - Patio 11",
  "Marco - Patio 12",
];

const MuseoFormulario = () => {
  const { id } = useParams();
  const [editarFlag, setEditarFlag] = useState(true);
  const [obrasName, setObrasName] = useState<string[]>([]);
  const [locacionesName, setLocacionesName] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (id === "create") {
      setEditarFlag(false);
    }
  }, [id]);

  const handleChangeObra = (event: SelectChangeEvent<typeof obrasName>) => {
    const {
      target: { value },
    } = event;
    setObrasName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeLocacion = (event: SelectChangeEvent<typeof obrasName>) => {
    const {
      target: { value },
    } = event;
    setLocacionesName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onFileDrop = () => {
    console.log("file dropped");
  };

  const getSelectedObras = () => {
    let listaObras: JSX.Element[] = [];
    obrasName.forEach((obra) => {
      listaObras.push(
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <SelectedOption>{obra}</SelectedOption>
        </Grid>
      );
    });

    return listaObras;
  };

  const getSelectedLocaciones = () => {
    let listaLocaciones: JSX.Element[] = [];
    locacionesName.forEach((locacion) => {
      listaLocaciones.push(
        <Grid item xs={4}>
          <SelectedOption>{locacion}</SelectedOption>
        </Grid>
      );
    });

    return listaLocaciones;
  };

  const onCloseModal = () => {
    navigate("/");
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
          {editarFlag ? "Editar" : "Agregar"} Museo
        </GridTitle>
      </GridTitleContainer>
      <Grid
        item
        container
        minHeight="70vh"
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
              Obras
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={obrasName}
                onChange={handleChangeObra}
                renderValue={(selected) => selected.join(", ")}
                fullWidth
              >
                {OBRAS_ARRAY.map((obraName) => (
                  <MenuItem key={obraName} value={obraName}>
                    <Checkbox checked={obrasName.indexOf(obraName) > -1} />
                    <ListItemText primary={obraName} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item container paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Locaciones
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={locacionesName}
                onChange={handleChangeLocacion}
                renderValue={(selected) => selected.join(", ")}
                fullWidth
              >
                {LOCACIONES_ARRAY.map((locacionName) => (
                  <MenuItem key={locacionName} value={locacionName}>
                    <Checkbox
                      checked={locacionesName.indexOf(locacionName) > -1}
                    />
                    <ListItemText primary={locacionName} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
          </Grid>

          <Grid item paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Activo
            </Typography>
            <Switch />
          </Grid>
        </Grid>

        <Grid item container xs={6} direction="column" padding="2rem">
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            minHeight="25vh"
          >
            <Grid item paddingBottom="1rem">
              <Typography fontSize="1.5rem" fontWeight="700">
                Obras
              </Typography>
            </Grid>

            <Grid item container direction="row" spacing={3}>
              {getSelectedObras()}
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignItems="center"
            minHeight="25vh"
          >
            <Grid item padding="1rem 0 1rem 0">
              <Typography fontSize="1.5rem" fontWeight="700">
                Locaciones
              </Typography>
            </Grid>

            <Grid item container direction="row" spacing={3}>
              {getSelectedLocaciones()}
            </Grid>
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
            El&nbsp;
            <Typography
              fontSize="2rem"
              fontWeight="700"
              color={theme.palette.primary.main}
            >
              Museo&nbsp;
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
            Borrar museo:&nbsp;
            <Typography
              fontSize="2rem"
              fontWeight="700"
              color={theme.palette.primary.main}
            >
              MARCO
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

export default MuseoFormulario;
