import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid } from '@mui/x-data-grid';


const rows = [
  { id: 1, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 2, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 3, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 4, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 5, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
  { id: 6, titulo: 'Estatua Libertad', autor: 'Frederic Auguste', descripcion: 'bla bla bla', latitud: -100.232132, longitud: -100.232132 },
];


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'titulo', headerName: 'Titulo', width: 130 },
  { field: 'autor', headerName: 'Autor', width: 130 },
  {
    field: 'descripcion',
    headerName: 'Descripcion',
    width: 90,
  },
  {
    field: 'latitud',
    headerName: 'Latitud',
    type: 'number',
    width: 90,
  },
  {
    field: 'longitud',
    headerName: 'Longitud',
    type: 'number',
    width: 90,
  },

];




function App() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      
    <DataGrid
    
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  );
}

export default App;
