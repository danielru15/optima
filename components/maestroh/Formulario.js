import React from "react";
import Box from "@mui/material/Box";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import TextField from "@mui/material/TextField";

const Formulario = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Contratado" />
      <TextField label="Ejecutado En" />
      <TextField label="Nombre" />
      <TextField label="Seudonimo" />
      <TextField label="Oferta" />
      <TextField label="Linea de Negocio" />
      <TextField label="Descripcion breve" />
      <TextField label="Cliente directo" />
      <TextField label="Cliente final" />
      <TextField label="Director" />
      <TextField label="Coordinador" />
      <TextField label="Contrato" />
      <input type="date" label="fecha inico contractual" />
      <TextField label="Participacion OPTIMA" />
    </Box>
  );
};

export default Formulario;
