import React, {useState, useEffect} from 'react';
import '../styles/Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import SearchAppBar from '../components/SearchBar';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomId,
} from '@mui/x-data-grid-generator';
import Checkbox from '@mui/material/Checkbox';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const zonas = [
  { zona:"Sala 1", value: 1 },
  { zona:"Sala 2", value: 2 },
  { zona:"Sala 3", value: 3 },
  { zona:"Sala 4", value: 4 },
  { zona:"Sala 5A", value: 5 },
  { zona:"Sala 5B", value: 6 },
  { zona:"Sala 5C", value: 7 },
  { zona:"Sala 5D", value: 8 },
  { zona:"Patio Esculturas", value: 9 },
  { zona:"Patio Central", value: 10 },
  { zona:"Sala 6", value: 11 },
  { zona:"Sala 7", value: 12 },
  { zona:"Sala 8", value: 13 },
  { zona:"Sala 9", value: 14 },
  { zona:"Sala 10", value: 15 },
  { zona:"Sala 11", value: 16 },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, titulo: 'Titulo', autor: 'Autor', descripcion: 'Descripción', latitud: '', longitud: '', link: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="inherit" startIcon={<AddIcon />} onClick={handleClick}>
        Añadir obra
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};


function Table() {
  const [isLoading, setIsLoading] = useState();
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [rows, setRows] = useState([]);

  const columns = [
    {
      field: 'nombre', headerName: 'Titulo', width: 230, headerClassName: 'super-app-theme--header',
      headerAlign: 'center', editable: true,
    },
    {
      field: 'autor', headerName: 'Autor', width: 230, headerClassName: 'super-app-theme--header',
      headerAlign: 'center', editable: true,
    },
    {
      field: 'descripcion',
      headerName: 'Descripcion',
      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'zona',
      headerName: 'Zona',
      type: 'number',
      width: 125,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'latitud',
      headerName: 'Latitud',
      type: 'number',
      width: 125,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'longitud',
      headerName: 'Longitud',
      type: 'number',
      width: 125,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'link',
      headerName: 'Modelo de la obra',
      type: 'number',
      width: 220,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      editable: true,
    },
    //edicion de las piezas
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      headerClassName: 'super-app-theme--header',
      width: 170,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancelar"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,

          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Borrar"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <Checkbox {...label} icon={<ClearOutlinedIcon />} checkedIcon={< CheckOutlinedIcon />} color="default" />
        ];
      },
    },
  ];

  useEffect(() => {
    fetch("http://10.14.255.70:10205/api/all-obras")
    //fetch("http://localhost:8080/api/all-obras")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        setIsLoading(false); 
      });
  }, []);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (_id) => () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.Edit } });

  };

  const handleSaveClick = async (_id) => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.View } });
    //setRows(rows.filter((row) => row._id !== _id));
    handleUpdateObra();
    /*fetch("http://10.14.255.70:10205/api/delete-obra/" + _id, {
          method: "DELETE",
        }).then(function (res) {
          if (res.ok) {
            alert("Elemento borrado ");
          } else if (res.status == 403) {
            alert("Obra inexistente");
          }
        }, function (e) {
          alert("Server Error");
    });*/
  };

  const handleUpdateObra = () => () => {
    console.log(rows);
    /*setRows(rows.filter((row) => row._id !== _id));
    fetch("http://10.14.255.70:10205/api/delete-obra/" + _id, {
          method: "DELETE",
        }).then(function (res) {
          if (res.ok) {
            alert("Elemento borrado ");
          } else if (res.status == 403) {
            alert("Obra inexistente");
          }
        }, function (e) {
          alert("Server Error");
    });*/
  };

  const handleDeleteClick = (_id) => () => {
    const bodyId = {
      id: _id,
    };
    console.log("JSON.stringify(bodyId)");
    console.log(JSON.stringify(bodyId));
    /*let formData = new FormData();
    formData.append('id', _id);*/
    setRows(rows.filter((row) => row._id !== _id));
    fetch("http://10.14.255.70:10205/api/delete-obra/" + _id, {
    //fetch("http://localhost:8080/api/delete-obra/" + _id, {
          method: "DELETE",
        }).then(function (res) {
          if (res.ok) {
            alert("Elemento borrado ");
          } else if (res.status == 403) {
            alert("Obra inexistente");
          }
        }, function (e) {
          alert("Server Error");
    });
  };

  const handleCancelClick = (_id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [_id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row._id === _id);
    setRows(rows.filter((row) => row._id !== _id));
    /*if (editedRow.isNew) {
      setRows(rows.filter((row) => row._id !== _id));
    }*/
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
    return updatedRow;
  };


  return (
    <div style={{ height: 1000, width: '100%', justifyContent: 'center', backgroundColor: 'rgba(165, 16, 108, 0.20)' }}>


      <SearchAppBar>

      </SearchAppBar>

      <Box sx={{
        //color al header
        height: 600, width: '100%', '& .super-app-theme--header': {
          backgroundColor: 'rgba(165, 16, 108, .9)',
          color: 'rgba(255, 255, 255, 1)',
          
        },
        height: 750,
        width: '100%', 
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
          fontWeight: 'bold',
        },
        

      }}>
        <DataGrid

          rows={rows}
          columns={columns}
          editMode="row"
          getRowId={(row) => row._id}
          rowModesModel={rowModesModel}
          onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          componentsProps={{
            toolbar: { setRows, setRowModesModel },
          }}
          experimentalFeatures={{ newEditingApi: true }}
          //checkboxSelection

          //Color a las celdas
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'rgba(165, 16, 108, 1)',
            '& .MuiDataGrid-cell:hover': {
              color: 'rgba(165, 16, 108, 1)',
            },
            bgcolor: 'rgba(165, 16, 108, 0.10)',
            '& .MuiDataGrid-cell:hover': {
              color: 'rgba(165, 16, 108, 0.30)',
            },

          }}


        />
      </Box>

    </div>
  );
}

export default Table;
