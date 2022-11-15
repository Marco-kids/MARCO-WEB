import React from 'react';
import { useEffect, useState } from "react";
import '../styles/Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";


function Table() {

  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [rows, setRows] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Titulo', width: 130 },
    { field: 'autor', headerName: 'Autor', width: 130 },
    {
      field: 'descripcion',
      headerName: 'Descripcion',
      width: 90,
    },
    {
      field: 'latitud',
      headerName: 'Latitud',
      //type: 'number',
      width: 90,
    },
    {
      field: 'longitud',
      headerName: 'Longitud',
      //type: 'number',
      width: 90,
    },
    {
      field: 'modelo',
      headerName: 'Modelo',
      //type: 'number',
      width: 90,
    },
  ];

  useEffect(() => {
    fetch("http://10.14.255.70:10205/api/obra")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRows(data);
        setIsLoading(false); 
      });
  }, []);

  return (
    <div style={{ height: 1000, width: '100%' }}>

      
      <Box sx={{
        //color al header
        height: 600, width: '100%', '& .super-app-theme--header': {
          backgroundColor: 'rgba(161, 43, 74, 1)',
          color: 'rgba(255, 255, 255, 1)'
          
        },
      }}>
        <DataGrid

          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
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

export default Table;
