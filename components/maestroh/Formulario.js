import React from "react";
import Box from "@mui/material/Box";
import { FormGroup, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";

const Formulario = () => {
  return (
    <>
      <FormGroup>
        <FormLabel>INFORMACIÓN BASICA DEL PROYECTO</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
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
          <TextField label="Participacion OPTIMA" />
          <TextField label="Valor contrato sin IVA" />
          <TextField label="IVA" />
          <TextField label="OTROSI 1" />
          <TextField label="OTROSI 2" />
          <TextField label="OTROSI 3" />
          <TextField label="OTROSI 4" />
          <TextField label="OTROSI 5" />
          <TextField label="OTROSI 6" />
          <TextField label="OTROSI 7" />
          <TextField label="OTROSI 8" />
          <TextField label="OTROSI 9" />
          <TextField label="OTROSI 10" />
          <TextField label="OTROSI 11" />
          <TextField label="OTROSI 12" />
          <TextField label="PCO" />
          <TextField label="Administración" />
          <TextField label="Imprevistos" />
          <TextField label="Utilidad Bruta" />
          <TextField label="% ANTICIPO CONTRACTUAL" />
        </Box>
      </FormGroup>
      <br />
      <FormGroup>
        <FormLabel>FACTURACION</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
          <TextField label=" Anticipos Pagados Por El Cliente" />
          <TextField label="Valor Total Facturado Sin IVA" />
          <TextField label="IVA Facturacion" />
          <TextField label="% Retegantia" />
          <TextField label="Facturas Pagadas Por El Cliente" />
          <TextField label="Anticipo Amortizado Por El Cliente" />
          <TextField label="Retenciones Y Descuentos Aplicados Por El Cliente (Sin Amortiacion De Anticipo)" />
        </Box>
      </FormGroup>
    </>
  );
};

export default Formulario;
