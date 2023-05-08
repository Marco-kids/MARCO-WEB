import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const EliminarModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "",
  backgroundColor: "white",
  borderRadius: "1rem",
  boxShadow: "0.2rem 0.2rem 0.5rem 0.1rem rgba(0,0,0,0.5)",
  padding: "2rem",
}));
