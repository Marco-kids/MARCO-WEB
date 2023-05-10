import React, { ChangeEvent, useEffect, useRef, useState } from "react";
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
import { Locacion, Museo, Obra } from "../../../Types/Types";
import { getAllObras } from "../../../Services/ObrasRequests";
import { getAllLocaciones } from "../../../Services/LocacionesRequests";
import {
  activateMuseo,
  deleteMuseo,
  getMuseoById,
  guardarMuseo,
  updateLocationsById,
  updateObrasById,
} from "../../../Services/MuseoRequests";

const MuseoFormulario = () => {
  const { id } = useParams();
  const [editarFlag, setEditarFlag] = useState(true);

  const [allObras, setAllObras] = useState<Obra[]>([]);
  const [allLocations, setAllLocations] = useState<Locacion[]>([]);

  const [nombre, setNombre] = useState<string>("");
  const [obrasName, setObrasName] = useState<string[]>([]);
  const [locacionesName, setLocacionesName] = useState<string[]>([]);
  const [imagen, setImagen] = useState<any>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const initialActivate = useRef(false);

  useEffect(() => {
    if (id === "create") {
      setEditarFlag(false);
    } else {
      getMuseo();
    }

    getAllValues();
  }, [id]);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const getAllValues = async () => {
    const obras = await getAllObras();
    const locaciones = await getAllLocaciones();

    setAllObras(obras.data);
    setAllLocations(locaciones.data);
  };

  const getMuseo = async () => {
    const museo: Museo = await getMuseoById(params.id!);

    let listaObras: string[] = [];
    for (let i = 0; i < museo.obras.length; i++) {
      listaObras.push(museo.obras[i].nombre);
    }

    let listaLocaciones: string[] = [];
    for (let i = 0; i < museo.locations.length; i++) {
      listaLocaciones.push(museo.locations[i].nombre);
    }

    initialActivate.current = museo.isActive;
    setNombre(museo.nombre);
    setObrasName(listaObras);
    setLocacionesName(listaLocaciones);
    setIsActive(museo.isActive);
  };

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

  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imagen = e.currentTarget.files![0];
    setImagen(imagen);
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

  const onGuardarMuseo = async () => {
    const img = imagen.name.slice(imagen.name.lastIndexOf(".") + 1);
    if (nombre === "" || imagen === null) {
      alert("Se deben llenar todos los datos del Museo para poder guardarla");
      return;
    } else if (!(img === "jpeg" || img === "jpg" || img === "png")) {
      alert("La imagen debe ser un archivo .JPEG, JPG o PNG valido");
      return;
    }

    const listaObrasId: string[] = [];
    const listaLocacionesId: string[] = [];

    for (let i = 0; i < obrasName.length; i++) {
      for (let j = 0; j < allObras.length; j++) {
        if (obrasName[i] === allObras[j].nombre) {
          listaObrasId.push(`"${allObras[j]._id}"`);
        }
      }
    }

    for (let i = 0; i < locacionesName.length; i++) {
      for (let j = 0; j < allLocations.length; j++) {
        if (locacionesName[i] === allLocations[j].nombre) {
          listaLocacionesId.push(`"${allLocations[j]._id}"`);
        }
      }
    }

    if (listaObrasId.length !== listaLocacionesId.length) {
      alert(
        "El numero de OBRAS seleccionadas debe ser igual al numero de LOCACIONES seleccionadas"
      );
      return;
    }

    let formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("obras", `[${listaObrasId}]`);
    formData.append("locations", `[${listaLocacionesId}]`);
    formData.append("imagen", imagen);
    await guardarMuseo(formData);

    setOpen(true);
  };

  const onEditMuseo = async () => {
    const listaObrasId: string[] = [];
    for (let i = 0; i < obrasName.length; i++) {
      for (let j = 0; j < allObras.length; j++) {
        if (obrasName[i] === allObras[j].nombre) {
          listaObrasId.push(`${allObras[j]._id}`);
        }
      }
    }

    const listaLocacionesId: string[] = [];
    for (let i = 0; i < locacionesName.length; i++) {
      for (let j = 0; j < allLocations.length; j++) {
        if (locacionesName[i] === allLocations[j].nombre) {
          listaLocacionesId.push(`${allLocations[j]._id}`);
        }
      }
    }

    if (listaObrasId.length !== listaLocacionesId.length) {
      alert(
        "El numero de OBRAS seleccionadas debe ser igual al numero de LOCACIONES seleccionadas"
      );
      return;
    }

    if (initialActivate.current === false && isActive === true) {
      await onActivateMuseum();
    }

    await updateObrasById(id!, listaObrasId);
    await updateLocationsById(id!, listaLocacionesId);

    setOpen(true);
  };

  const onDeleteMuseo = async () => {
    await deleteMuseo(id!);

    onCloseModal();
  };

  const onActivateMuseum = async () => {
    await activateMuseo(id!);

    onCloseModal();
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
              inputProps={{ maxLength: 100 }}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              fullWidth
              disabled={editarFlag}
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
                {allObras.map((obra) => (
                  <MenuItem key={obra._id} value={obra.nombre}>
                    <Checkbox checked={obrasName.indexOf(obra.nombre) > -1} />
                    <ListItemText primary={obra.nombre} />
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
                {allLocations.map((locacion) => (
                  <MenuItem key={locacion._id} value={locacion.nombre}>
                    <Checkbox
                      checked={locacionesName.indexOf(locacion.nombre) > -1}
                    />
                    <ListItemText primary={locacion.nombre} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {editarFlag ? (
            ""
          ) : (
            <Grid item container paddingBottom="1rem">
              <Typography fontSize="1.5rem" fontWeight="700">
                Imagen
              </Typography>

              <Input
                type="file"
                name="hola"
                onChange={handleImageInputChange}
                style={{
                  width: "100%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              ></Input>
            </Grid>
          )}

          <Grid item paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Estado:&nbsp;
              <span style={{ color: "#E63E6B" }}>
                {isActive ? "Activo" : "Inactivo"}
              </span>
            </Typography>

            {!editarFlag ? (
              <Typography fontSize="0.8rem" fontWeight="400">
                Para activar el museo, primero se debe crear exitosamente. Haga
                click en "Guardar"
              </Typography>
            ) : (
              ""
            )}
            <Switch
              disabled={!editarFlag}
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
            />
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
            onClick={editarFlag ? () => onEditMuseo() : () => onGuardarMuseo()}
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
          <Typography
            fontSize="2rem"
            display="flex"
            flexDirection="column"
            paddingBottom="1rem"
          >
            Borrar museo:&nbsp;
            <Typography
              fontSize="2rem"
              fontWeight="700"
              color={theme.palette.primary.main}
            >
              {nombre}
            </Typography>
          </Typography>

          <Grid container justifyContent="flex-end">
            <Button variant="contained" onClick={() => onDeleteMuseo()}>
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
