import React from 'react';
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
// MUI Components
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import Iconupload from '@mui/icons-material/FileUpload';

function Add() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [autor, setAutor] = useState();
  const [descripcion, setDescripcion] = useState();
  const [latitud, setLatitud] = useState();
  const [longitud, setLongitud] = useState();
  const [file, setFile] = useState();

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
    let formData = new FormData();
    formData.append('nombre', title);
    formData.append('autor', autor);
    formData.append('latitud', latitud);
    formData.append('longitud', longitud);
    formData.append('descripcion', descripcion);
    formData.append('file', file);

    try {
        console.log(formData);
        fetch("http://192.168.1.66:8080/api/create-obra", {
          method: "POST",
          body: formData
        }).then(function (res) {
          if (res.ok) {
            alert("Obra Creada");
            navigate("/table");
          } else if (res.status == 402) {
            alert("Alguno de los campos esta vacio");
          }
        }, function (e) {
          alert("Error en servidor");
        });

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {

  }, []);

  return (
    <Grid
        container item xs={12} justifyContent="center" sx={{ backgroundColor: "#FFF" }}>

        <Grid item xs={12}>
          <Box
            alignItems = {"center"} 
            sx={{
              display: "flex",
              m: 1,
            }}
          >
            <Typography 
                variant="h5" 
                fontWeight="bold"
                sx={{ color: "#661C30" }}>
                Titulo
            </Typography>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              required={true}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ width: "50%", m: 1, backgroundColor: "#F9A1B8"  }}
            />

            <Typography 
                variant="h5" 
                fontWeight="bold"
                sx={{ color: "#661C30" }}>
                Autor
            </Typography>

            <TextField
              required
              margin="dense"
              variant="outlined"
              type="text"
       
              onChange={(e) => setAutor(e.target.value)}
              sx={{  width: "50%", m: 1, backgroundColor: "#F9A1B8" }}
            />
          </Box>

          <Box
            alignItems = {"center"} 
            sx={{
              display: "flex",
              m: 1,
            }}
          >
            <Typography 
                variant="h5" 
                fontWeight="bold"
                sx={{ color: "#661C30" }}>
                Latitud
            </Typography>

            <TextField
              required
              margin="dense"
              variant="outlined"
              type="text"
              
              onChange={(e) => setLatitud(e.target.value)}
              sx={{ width: "50%", m: 1, backgroundColor: "#F9A1B8"  }}
            />
            <Typography 
                variant="h5" 
                fontWeight="bold"
                sx={{ color: "#661C30" }}>
                Longitud
            </Typography>

            <TextField
              required
              margin="dense"
              variant="outlined"
              type="text"
              
              onChange={(e) => setLongitud(e.target.value)}
              sx={{ width: "50%", m: 1, backgroundColor: "#F9A1B8"  }}
            />
          </Box>

          
        </Grid>

        <Grid item xs={12}>
            <Typography 
                variant="h5" 
                fontWeight="bold"
                sx={{ color: "#661C30", m:1 }}>
                Descripcion
            </Typography>

          <Box
            alignItems = {"center"} 
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
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
                color: "#F9A1B8",
              display: "flex",
              width: "50%"
            }}
          >
            <Button variant="outlined" aria-label="upload picture" component="label" label="upload"
              sx={{
                color: "#F9A1B8",
                m: 1,
                width: "100%",
                ':hover': {
                  color: 'white',
                  backgroundColor: "#E63E6B"
                },
              }}
            >
              <input 
              name="file" 
              multiple="multiple" 
              accept=".usdz" 
              type="file" 
              style = {{display: "none"}}
              onChange={handleFileInputChange} />
              <Iconupload /> Sube el modelo
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
            }}
          >
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              m: 1,
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ width: '20%', m:5,
                    color: "#707070",
                    backgroundColor: "#EAEAEA",
                    ':hover': {
                      color: 'white',
                      backgroundColor: "#E63E6B"
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
              sx={{ width: '20%', m:5,
                    color: "white",
                    backgroundColor: "#F9A1B8",
                    ':hover': {
                      color: 'white',
                      backgroundColor: "#E63E6B"
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