import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormGroup, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";

const Formulario = () => {
  const router = useRouter();
  const [datos, setDatos] = useState("");
  const [crearDatos, SetCrearDatos] = useState([""]);

  const handleChange = (e) => {
    setDatos(e.target.value);
  };

  const agregar = (e) => {
    e.preventDefault();
    SetCrearDatos(...crearDatos, datos);
  };

  useEffect(() => {
    console.log(crearDatos);
  }),
    [];

  return (
    <form onSubmit={agregar}>
      <FormGroup>
        <FormLabel>INFORMACION DEL PROYECTO</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
          <TextField label="Nombre" onChange={handleChange} />
          <TextField label="Seudonimo" onChange={handleChange} />
          <TextField label="Oferta" onChange={handleChange} />
          <TextField label="Linea de Negocio" onChange={handleChange} />
          <TextField
            label="Descripcion breve"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Cliente directo"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Cliente final"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Director"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Coordinador"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Contrato"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Participacion OPTIMA"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Valor contrato sin IVA"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="IVA"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 1"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 2"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 3"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 4"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 5"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 6"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 7"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 8"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 9"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 10"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 11"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="OTROSI 12"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="PCO"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Administración"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Imprevistos"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Utilidad Bruta"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="% ANTICIPO CONTRACTUAL"
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
      </FormGroup>
      <br />
      <FormGroup>
        <FormLabel>FACTURACION</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
          <TextField
            label=" Anticipos Pagados Por El Cliente"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Valor Total Facturado Sin IVA"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="IVA Facturacion"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="% Retegantia"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Facturas Pagadas Por El Cliente"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Anticipo Amortizado Por El Cliente"
            onChange={(e) => console.log(e.target.value)}
          />
          <TextField
            label="Retenciones Y Descuentos Aplicados Por El Cliente (Sin Amortiacion De Anticipo)"
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
      </FormGroup>
      <br />
      <Button variant="contained" type="submit">
        Crear
      </Button>
      <Button onClick={() => router.push("/Maestro-historico")}>
        Cancelar
      </Button>
    </form>
  );
};

export default Formulario;
