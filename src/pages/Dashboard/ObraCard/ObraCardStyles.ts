import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const CardContainer = styled(Grid)(({ theme }) => ({
  boxShadow: "0.2rem 0.2rem 0.5rem 0.1rem rgba(0,0,0,0.1)",
  borderRadius: "1rem",
}));

export const CardIconContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
  borderRadius: "50%",
  backgroundColor: "#E63E6B",
  width: "3rem",
  height: "3rem",
}));

export const CardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "25vh",
  objectFit: "cover",
  borderRadius: "1rem 1rem 0 0",
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: "600",
  padding: "0 0.5rem 0.5rem 0.5rem",
  color: "black",
  textTransform: "none",
}));
