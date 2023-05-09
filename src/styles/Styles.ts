import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const ImageContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
}));

export const LogoIcon = styled("img")(({ theme }) => ({
  height: "4rem",
  width: "auto",
  padding: "1rem",
}));

export const LogoIconSmall = styled("img")(({ theme }) => ({
  height: "3rem",
  width: "auto",
}));

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
