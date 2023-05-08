import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import {
  GridPageContainer,
  GridTitle,
  GridTitleContainer,
} from "../../../styles/Styles";

const MuseoFormulario = () => {
  const { id } = useParams();
  const [editarFlag, setEditarFlag] = useState(true);

  useEffect(() => {
    if (id === "create") {
      setEditarFlag(false);
    }
  }, [id]);

  return (
    <GridPageContainer container direction="column">
      <GridTitleContainer
        item
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <GridTitle color="primary">Museos</GridTitle>
      </GridTitleContainer>
    </GridPageContainer>
  );
};

export default MuseoFormulario;
