import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

export const GridPageContainer = styled(Grid)(({ theme }) => ({
  widt: "100%",
  padding: "0 1rem 0 1rem",
}));

export const GridTitleContainer = styled(Grid)(({ theme }) => ({
  borderBottom: "0.3rem solid #E63E6B",
}));

export const GridTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "600",
}));

export const SelectedOption = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "2rem",
  color: "white",
  fontSize: "1.3rem",
  fontWeight: "600",
  padding: "0.5rem 1rem 0.5rem 1rem",
  textAlign: "center",
}));

export const GuardarModal = styled(Box)(({ theme }) => ({
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
