import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
// MUI Components
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import Iconupload from "@mui/icons-material/FileUpload";
import InputLabel from "@mui/material/InputLabel";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//import 'react-widgets/dist/css/react-widgets.css'
//Custom component
import ImageSlider from "../components/ImageSlider.js";

function Add() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [autor, setAutor] = useState();
  const [descripcion, setDescripcion] = useState();
  const [zona, setZona] = useState();
  const [file, setFile] = useState();

  const handleSelect = (event) => {
    setZona(event.target.value);
  };

  const goBack = async () => {
    navigate("/table");
    try {
    } catch (err) {
      console.error(err);
    }
  };
  async function handleFileInputChange(e) {
    const files = e.target.files;
    const file = files[0];
    setFile(file);
  }

  const handleAdd = async () => {
    if (title && autor && zona && descripcion && file) {
      let formData = new FormData();
      formData.append("nombre", title);
      formData.append("autor", autor);
      //formData.append('latitud', latitud);
      //formData.append('longitud', longitud);
      formData.append("zona", zona);
      formData.append("descripcion", descripcion);
      formData.append("file", file);

      try {
        console.log(formData);
        //fetch("http://10.14.255.70:10205/api/create-obra", {
        fetch("http://189.205.248.189/marcokids/api/api/api/create-obra", {
          method: "POST",
          body: formData,
        }).then(
          function (res) {
            if (res.ok) {
              alert("Obra Creada");
              navigate("/table");
            } else if (res.status == 402) {
              alert("Alguno de los campos esta vacio");
            }
          },
          function (e) {
            alert("Error en servidor");
          }
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Es necesario llenar todos los campos del formulario");
    }
  };

  useEffect(() => {}, []);

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      sx={{ backgroundColor: "#FFF" }}
    >
      <Grid item xs={4}>
        <ImageSlider />
      </Grid>

      <Grid item xs={2}>
        <Box
          alignItems={"centerr"}
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#661C30", m: 3 }}
          >
            Titulo
          </Typography>
        </Box>

        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#661C30", m: 3 }}
          >
            Autor
          </Typography>
        </Box>

        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#661C30", m: 3 }}
          >
            Descripcion
          </Typography>
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            color: "#F9A1B8",
            display: "flex",
            width: "50%",
            mt: 10,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#661C30", m: 3 }}
          >
            Zona
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
            m: 1,
          }}
        >
          <TextField
            margin="dense"
            variant="outlined"
            type="text"
            required={true}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ width: "100%", m: 1, backgroundColor: "#F9A1B8" }}
          />
        </Box>

        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
            m: 1,
          }}
        >
          <TextField
            required
            margin="dense"
            variant="outlined"
            type="text"
            onChange={(e) => setAutor(e.target.value)}
            sx={{ width: "100%", m: 1, backgroundColor: "#F9A1B8" }}
          />
        </Box>

        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
            m: 1,
          }}
        >
          <TextField
            required
            margin="dense"
            variant="outlined"
            type="text"
            //label="Descripcion de la obra"
            multiline
            rows={5}
            onChange={(e) => setDescripcion(e.target.value)}
            sx={{ width: "100%", backgroundColor: "#F9A1B8" }}
          />
        </Box>

        <Box
          alignItems={"center"}
          sx={{
            justifyContent: "left",
            color: "#F9A1B8",
            display: "flex",
            width: "50%",
            display: "flex",
            m: 1,
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Zona</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={zona}
              label="Zona"
              onChange={handleSelect}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <ListSubheader>Planta Baja</ListSubheader>
              <MenuItem value={1}>Sala 1</MenuItem>
              <MenuItem value={2}>Sala 2</MenuItem>
              <MenuItem value={3}>Sala 3</MenuItem>
              <MenuItem value={4}>Sala 4</MenuItem>
              <MenuItem value={5}>Sala 5A</MenuItem>
              <MenuItem value={6}>Sala 5B</MenuItem>
              <MenuItem value={7}>Sala 5C</MenuItem>
              <MenuItem value={8}>Sala 5D</MenuItem>
              <MenuItem value={9}>Patio Esculturas</MenuItem>
              <MenuItem value={10}>Patio Central</MenuItem>
              <ListSubheader>Planta Alta</ListSubheader>
              <MenuItem value={11}>Sala 6</MenuItem>
              <MenuItem value={12}>Sala 7</MenuItem>
              <MenuItem value={13}>Sala 8</MenuItem>
              <MenuItem value={14}>Sala 9</MenuItem>
              <MenuItem value={15}>Sala 10</MenuItem>
              <MenuItem value={16}>Sala 11</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            color: "#F9A1B8",
            display: "flex",
            width: "50%",
          }}
        >
          <TextField
            height="100%"
            name="File"
            margin="dense"
            alt="File"
            type="file"
            accept=".usdz"
            onChange={handleFileInputChange}
            sx={{
              width: "100%",
              color: "#F9A1B8",
              m: 2,
              width: "100%",
              backgroundColor: "#F9A1B8",
              ":hover": {
                color: "white",
                backgroundColor: "#E63E6B",
              },
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={8}>
        <Box
          sx={{
            display: "flex",
            m: 1,
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "20%",
              m: 5,
              color: "#707070",
              backgroundColor: "#EAEAEA",
              ":hover": {
                color: "white",
                backgroundColor: "#E63E6B",
              },
            }}
            type="submit"
            variant="contained"
            size="small"
            onClick={goBack}
            // onClick={cancel}
          >
            Cancel
          </Button>

          <Button
            sx={{
              width: "20%",
              m: 5,
              color: "white",
              backgroundColor: "#F9A1B8",
              ":hover": {
                color: "white",
                backgroundColor: "#E63E6B",
              },
            }}
            type="submit"
            variant="contained"
            size="small"
            id="createButton"
            onClick={handleAdd}
          >
            Añadir
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Add;
