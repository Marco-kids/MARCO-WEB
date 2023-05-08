import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../../../styles/Styles";
import {
  Checkbox,
  FormControl,
  Grid,
  Input,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

interface Obra {
  id: string;
  nombre: string;
}

const OBRAS_ARRAY = [
  "Obra 1",
  "Obra 2",
  "Obra 3",
  "Obra 4",
  "Obra 5",
  "Obra 6",
];

const LOCACIONES_ARRAY = [
  "Locacion 1",
  "Locacion 2",
  "Locacion 3",
  "Locacion 4",
  "Locacion 5",
  "Locacion 6",
];

const MuseoFormulario = () => {
  const { id } = useParams();
  const [editarFlag, setEditarFlag] = useState(true);
  const [obrasName, setObrasName] = useState<string[]>([]);
  const [locacionesName, setLocacionesName] = useState<string[]>([]);

  useEffect(() => {
    if (id === "create") {
      setEditarFlag(false);
    }
  }, [id]);

  const handleChangeObra = (event: SelectChangeEvent<typeof obrasName>) => {
    const {
      target: { value },
    } = event;
    setObrasName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeLocacion = (event: SelectChangeEvent<typeof obrasName>) => {
    const {
      target: { value },
    } = event;
    setLocacionesName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onFileDrop = () => {
    console.log("file dropped");
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
          {editarFlag ? "Editar" : "Agregar"} Museo
        </GridTitle>
      </GridTitleContainer>
      <Grid
        item
        container
        minHeight="70vh"
        boxShadow="0.2rem 0.2rem 0.5rem 0.1rem rgba(0,0,0,0.1)"
        borderRadius="1rem"
        marginTop="1rem"
      >
        <Grid item container xs={6} direction="column" padding="2rem">
          <Grid item paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Nombre
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Escribe..."
              fullWidth
            />
          </Grid>

          <Grid item paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Obras
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={obrasName}
                onChange={handleChangeObra}
                renderValue={(selected) => selected.join(", ")}
                fullWidth
              >
                {OBRAS_ARRAY.map((obraName) => (
                  <MenuItem key={obraName} value={obraName}>
                    <Checkbox checked={obrasName.indexOf(obraName) > -1} />
                    <ListItemText primary={obraName} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Locaciones
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={locacionesName}
                onChange={handleChangeLocacion}
                renderValue={(selected) => selected.join(", ")}
                fullWidth
              >
                {LOCACIONES_ARRAY.map((locacionName) => (
                  <MenuItem key={locacionName} value={locacionName}>
                    <Checkbox
                      checked={locacionesName.indexOf(locacionName) > -1}
                    />
                    <ListItemText primary={locacionName} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Imagen
            </Typography>

            <Input
              type="file"
              name="hola"
              onChange={onFileDrop}
              style={{
                width: "100%",

                cursor: "pointer",
              }}
            ></Input>
          </Grid>

          <Grid item paddingBottom="1rem">
            <Typography fontSize="1.5rem" fontWeight="700">
              Activo
            </Typography>
            <Switch defaultChecked />
          </Grid>
        </Grid>

        <Grid item container xs={6} direction="column" padding="2rem">
          <Grid item container></Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </GridPageContainer>
  );
};

export default MuseoFormulario;
