import React, { useState, useEffect } from "react";
import "../styles/Table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import SearchAppBar from "../components/SearchBar";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";
import { randomId } from "@mui/x-data-grid-generator";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        titulo: "Titulo",
        autor: "Autor",
        descripcion: "Descripción",
        latitud: "",
        longitud: "",
        link: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "Titulo" },
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
  const [rowId, setRowId] = useState(null);

  const columns = [
    {
      field: "nombre",
      headerName: "Titulo",
      width: 220,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "autor",
      headerName: "Autor",
      width: 220,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "descripcion",
      headerName: "Descripcion",
      width: 300,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "zona",
      headerName: "Zona",
      type: "number",
      width: 220,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "link",
      headerName: "Modelo de la obra",
      type: "number",
      width: 220,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      editable: true,
    },
    //edicion de las piezas
    {
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      headerClassName: "super-app-theme--header",
      width: 220,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Borrar"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    fetch("http://189.205.248.189/marcokids/api/api/api/all-obras")
      //189.205.248.189/marcokids
      //fetch("http://189.205.248.189/marcokids/api/api/all-obras")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        setIsLoading(false);
      });
  }, []);

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

  const handleUpdateObra = (params) => {
    //setRows(rows.filter((row) => row._id !== _id));
    try {
      //fetch("http://10.14.255.70:10205/api/create-obra", {
      let body = {
        id: params.id,
        field: params.field,
        value: params.value,
      };
      // let body = new FormData();
      // body.append('id', params.id);
      // body.append('field', params.field);
      // body.append('value', params.value);
      // console.log(body);
      fetch("http://189.205.248.189/marcokids/api/api/api/update-obra", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(
        function (res) {
          console.log(res);
          // if (res.ok) {
          //   alert("Obra actualizada");
          //   //navigate("/table");
          // }
        },
        function (e) {
          alert("Error en servidor");
        }
      );
    } catch (err) {
      console.error(err);
    }
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
    //fetch("http://http://189.205.248.189/marcokids/api/api/delete-obra/" + _id, {
    fetch("http://189.205.248.189/marcokids/api/api/api/delete-obra/" + _id, {
      method: "DELETE",
    }).then(
      function (res) {
        if (res.ok) {
          alert("Elemento borrado ");
        } else if (res.status == 403) {
          alert("Obra inexistente");
        }
      },
      function (e) {
        alert("Server Error");
      }
    );
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
    <div
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "rgba(165, 16, 108, 0.20)",
      }}
    >
      <SearchAppBar
        setSearchQuery={(value) => {
          // let newRows = rows.map(row =>{
          //   return row.name.includes(value) || row.id.includes(value);
          // })
          // let newRows = (rows.filter((row) => row.nombre.toLowerCase() === value || row.zona.toLowerCase() === value));
          // let newRows = (rows.filter((row) => row.nombre.toLowerCase() === value || row.zona.toLowerCase() === value));
          //console.log(newRows)
        }}
      />
      <Box
        sx={{
          //color al header
          height: "100%",
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "#fd5880",
            color: "rgba(255, 255, 255, 1)",
          },
          height: 750,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
            fontWeight: "bold",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          //editMode="row"
          getRowId={(row) => row._id}
          //experimentalFeatures={{ newEditingApi: true }}
          /*componentsProps={{
            toolbar: { setRows, setRowModesModel },
          }}*/
          //Color a las celdas
          sx={{
            borderColor: "#E63E6B",
            "& .MuiDataGrid-cell:hover": {
              color: "rgba(165, 16, 108, 1)",
            },
            bgcolor: "#f4ede7",
            "& .MuiDataGrid-cell:hover": {
              color: "rgba(165, 16, 108, 0.30)",
            },
          }}
          onCellEditCommit={(params) => {
            setRowId(params.id);
            handleUpdateObra(params);
          }}
        />
      </Box>
    </div>
  );
}

export default Table;
