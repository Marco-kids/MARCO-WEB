import React from "react";
import { useEffect, useState } from "react";
import "../styles/Table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { USDZLoader } from "three-usdz-loader";

function ModelRender() {
  const loader = new USDZLoader();
  const [isLoading, setIsLoading] = useState(true);
  const group = new THREE.Group();

  // Add the group to the scene
  this.scene.add(group);

  // Load your file. File is of type File
  //const loadedModel = await loader.loadFile(file, group);

  // Later on, if you need to cleanup the model from the scene, simply use
  //loadedModel.clean()

  useEffect(() => {
    fetch("http://189.205.248.189/marcokids/api/api/obra")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRows(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          //color al header
          height: "100%",
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "rgba(161, 43, 74, 1)",
            color: "rgba(255, 255, 255, 1)",
          },
        }}
      ></Box>
    </div>
  );
}

export default ModelRender;
