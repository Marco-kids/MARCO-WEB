import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

import Dashboard from "../pages/Dashboard/Dashboard";
import Museos from "../pages/Museos/Museos";
import Obras from "../pages/Obras/Obras";
import Locaciones from "../pages/Locaciones/Locaciones";
import MuseoFormulario from "../pages/Museos/MuseoFormulario/MuseoFormulario";
import ObraFormulario from "../pages/Obras/ObraFormulario/ObraFormulario";

export const AppBarContainer = styled(Box)(({ theme }) => ({
  padding: "1rem",
  marginTop: "4rem",
}));

const AppRouter = () => {
  return (
    <AppBarContainer component="main" width="100%">
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Museos />} />
        <Route path="/museos/:id" element={<MuseoFormulario />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/obras/:id" element={<ObraFormulario />} />
        <Route path="/locaciones" element={<Locaciones />} />
      </Routes>
    </AppBarContainer>
  );
};

export default AppRouter;
