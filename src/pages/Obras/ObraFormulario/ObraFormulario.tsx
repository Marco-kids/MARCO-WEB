import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../../Dashboard/DashboardStyles";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { GuardarModal } from "../../Museos/MuseosStyles";
import theme from "../../../Utils/Theme";

import {
  deleteObra,
  getAllObras,
  getObraByID,
  guardarObra,
  updateObra,
} from "../../../Services/ObrasRequests";
import { Obra } from "../../../Types/Types";
import { APIurl, makeImageURL } from "../../../Utils/Parser";

const ObraFormulario = () => {
  const { id } = useParams();
  const [editarFlag, setEditarFlag] = useState(true);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [allObras, setAllObras] = useState<Obra[]>([]);

  // Informacion obra
  const [nombre, setNombre] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [file, setFile] = useState<any>(null);
  const [imagen, setImagen] = useState<any>(null);
  const [previewImagen, setPreviewImagen] = useState<string>();

  const navigate = useNavigate();
  const params = useParams();

  const initialNombre = useRef("");
  const initialAutor = useRef("");
  const initialDescripcion = useRef("");

  useEffect(() => {
    if (id === "create") {
      setEditarFlag(false);
    } else {
      getObra();
    }
    fetchObras();
  }, [id]);

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
  };

  const getObra = async () => {
    const obra: Obra = await getObraByID(params.id!);
    setNombre(obra.nombre);
    setAutor(obra.autor);
    setDescripcion(obra.descripcion);

    setPreviewImagen(
      `${APIurl}/uploads/${obra.imagen.slice(obra.imagen.indexOf("s") + 2)}`
    );

    initialNombre.current = obra.nombre;
    initialAutor.current = obra.autor;
    initialDescripcion.current = obra.descripcion;
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    setFile(file);
  };

  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imagen = e.currentTarget.files![0];
    setImagen(imagen);
  };

  const onDeleteObra = async () => {
    await deleteObra(id!);
    onCloseModal();
  };

  const onGuardarObra = async () => {
    const img = imagen.name.slice(imagen.name.lastIndexOf(".") + 1);
    if (
      nombre === "" ||
      autor === "" ||
      descripcion === "" ||
      file === null ||
      imagen === null
    ) {
      alert("Se deben llenar todos los datos de la Obra para poder guardarla");
      return;
    } else if (file.name.slice(file.name.lastIndexOf(".") + 1) !== "usdz") {
      alert("El modelo debe ser un archivo .USDZ valido");
      return;
    } else if (!(img === "jpeg" || img === "jpg" || img === "png")) {
      alert("La imagen debe ser un archivo .JPEG, JPG o PNG valido");
      return;
    }

    for (let i = 0; i < allObras.length; i++) {
      if (allObras[i].nombre === nombre) {
        alert(
          `Ya existe una obra con el nombre: ${nombre}. Selecciona un nombre diferente`
        );
        return;
      }
    }

    let formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("autor", autor);
    formData.append("descripcion", descripcion);
    formData.append("file", file);
    formData.append("imagen", imagen);

    await guardarObra(formData);
    setOpen(true);
  };

  const onUpdateObra = async () => {
    if (nombre === "" || autor === "" || descripcion === "") {
      alert(
        "Se debe llenar el nombre, autor y descripcion para actualizar la obra"
      );
      return;
    }

    for (let i = 0; i < allObras.length; i++) {
      if (allObras[i].nombre === nombre && allObras[i]._id !== id) {
        alert(
          `Ya existe una obra con el nombre: ${nombre}. Selecciona un nombre diferente`
        );
        return;
      }
    }

    try {
      if (initialNombre.current !== nombre) {
        await updateObra(id!, "nombre", nombre);
      }
    } catch {}

    try {
      if (initialAutor.current !== autor) {
        await updateObra(id!, "autor", autor);
      }
    } catch {}

    try {
      if (initialDescripcion.current !== descripcion) {
        await updateObra(id!, "descripcion", descripcion);
      }
    } catch {}

    setOpen(true);
  };

  const onCloseModal = async () => {
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
              inputProps={{ maxLength: 100 }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Escribe..."
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              fullWidth
            />
          </Grid>

          <Grid item container paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Autor
            </Typography>
            <TextField
              inputProps={{ maxLength: 100 }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Escribe..."
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item container paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Descripcion
            </Typography>
            <TextField
              inputProps={{ maxLength: 200 }}
              id="outlined-multiline-static"
              multiline
              rows={2}
              placeholder="Escribe..."
              fullWidth
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Grid>

          {editarFlag ? (
            ""
          ) : (
            <Grid item container paddingBottom="1rem" direction="column">
              <Grid item>
                <Typography fontSize="1.5rem" fontWeight="700">
                  Modelo
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  name="File"
                  margin="dense"
                  type="file"
                  onChange={handleFileInputChange}
                  sx={{
                    height: "100%",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                  fullWidth
                />
              </Grid>

              <Grid item>
                <Typography fontSize="1rem" fontWeight="500">
                  El modelo debe ser un archivo .USDZ válido
                </Typography>
              </Grid>
            </Grid>
          )}

          {editarFlag ? (
            ""
          ) : (
            <Grid item container paddingBottom="1rem" direction="column">
              <Grid item>
                <Typography fontSize="1.5rem" fontWeight="700">
                  Imagen
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  name="File"
                  margin="dense"
                  type="file"
                  onChange={handleImageInputChange}
                  sx={{
                    height: "100%",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                  fullWidth
                />
              </Grid>

              <Grid item>
                <Typography fontSize="1rem" fontWeight="500">
                  Toma una captura de pantalla del modelo y subela aqui
                </Typography>
              </Grid>
            </Grid>
          )}
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
            {previewImagen ? (
              <img
                src={previewImagen}
                style={{
                  width: "80%",
                  height: "50vh",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  boxShadow: "0.2rem 0.2rem 1rem 0.2rem rgba(0,0,0,0.2)",
                }}
              />
            ) : (
              ""
            )}

            {imagen ? (
              <img
                src={URL.createObjectURL(imagen)}
                style={{
                  width: "80%",
                  height: "50vh",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  boxShadow: "0.2rem 0.2rem 1rem 0.2rem rgba(0,0,0,0.2)",
                }}
              />
            ) : (
              ""
            )}
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
            onClick={editarFlag ? () => onUpdateObra() : () => onGuardarObra()}
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
              {nombre}
            </Typography>
          </Typography>

          <Grid container justifyContent="flex-end">
            <Button variant="contained" onClick={() => onDeleteObra()}>
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
