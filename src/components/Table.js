import React from 'react';
import { useEffect, useState } from "react";
import '../styles/Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid } from '@mui/x-data-grid';


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
    fetch("http://localhost:8080/api/obra")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRows(data);
        setIsLoading(false); 
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row) => row._id}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  );
}

export default Table;
