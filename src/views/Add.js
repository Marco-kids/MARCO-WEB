import React from 'react';
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
// MUI Components
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import Iconupload from '@mui/icons-material/FileUpload';

function Add() {

  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/table");
    try {
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async () => {
    try {
        fetch("http://localhost:8080/api/create-obra")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            navigate("/table");
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
              required
              margin="dense"
              variant="outlined"
              type="text"
              //label="Campo requerido"
              //defaultValue={currentRfi ? currentRfi.title : ''}
              //onChange={(e) => setTitle(e.target.value)}
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
              //label="Autor de la obra"
              //defaultValue={currentRfi ? currentRfi.title : ''}
              //onChange={(e) => setTitle(e.target.value)}
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
              //label="Latitud"
              //defaultValue={currentRfi ? currentRfi.title : ''}
              //onChange={(e) => setTitle(e.target.value)}
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
              //label="Longitud"
              //defaultValue={currentRfi ? currentRfi.title : ''}
              //onChange={(e) => setTitle(e.target.value)}
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
              //defaultValue={currentRfi ? currentRfi.question : ''}
              //onChange={(e) => setQuestion(e.target.value)}
              sx={{ width: "100%", backgroundColor: "#F9A1B8" }}
              // error={questionError}
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
              <input name="filefield" multiple="multiple" accept="image/*" type="file" style = {{display: "none"}} />
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
              //onClick={createRfi}
            >
              Añadir
            </Button>
          </Box>
        </Grid>
    </Grid>
  );
}

export default Add;