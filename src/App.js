import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { palette, spacing } from '@mui/system';


const rows = [
  { id: 1, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 2, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 3, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 4, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 5, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 6, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
];


const columns = [
  {
    field: 'id', headerName: 'ID', width: 50, headerClassName: 'super-app-theme--header',
    headerAlign: 'center'
  },
  {
    field: 'titulo', headerName: 'Titulo', width: 185, headerClassName: 'super-app-theme--header',
    headerAlign: 'center'
  },
  {
    field: 'autor', headerName: 'Autor', width: 185, headerClassName: 'super-app-theme--header',
    headerAlign: 'center'
  },
  {
    field: 'descripcion',
    headerName: 'Descripcion',
    width: 250,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'latitud',
    headerName: 'Latitud',
    type: 'number',
    width: 120,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'longitud',
    headerName: 'Longitud',
    type: 'number',
    width: 120,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },

];



function App() {
  return (
    <div style={{ height: 1000, width: '100%' }}>

      
      <Box sx={{
        //color al header
        height: 600, width: '65%', '& .super-app-theme--header': {
          backgroundColor: 'rgba(161, 43, 74, 1)',
          color: 'rgba(255, 255, 255, 1)'
          
        },
      }}>
        <DataGrid

          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection

          //Color a las celdas
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'rgba(161, 43, 74, 1)',
            '& .MuiDataGrid-cell:hover': {
              color: 'rgba(161, 43, 74, 1)',
            },
            bgcolor: 'rgba(230, 62, 107, 0.35)',
            '& .MuiDataGrid-cell:hover': {
              color: 'rgba(230, 62, 107, 1)',
            },
            
            
          }}

          

          
        />
      </Box>

    </div>
  );
}

export default App;
