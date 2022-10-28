import React, { useEffect, useState } from "react";
import {useContext} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormGroup, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";

const Formulario = () => {
  const {Contratado, setContratado, CrearDatos} = useContext(DatosContext)
  const router = useRouter();


  const handleChange = (e) => {
    setContratado(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Contratado)
    CrearDatos(Contratado)
  }
  return (
    <form  onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>INFORMACION DEL PROYECTO</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
          <TextField label="Nombre" onChange={handleChange} />
          <TextField label="Seudonimo" onChange={handleChange} />
          <TextField label="Oferta" onChange={handleChange} />
          <TextField label="Linea de Negocio" onChange={handleChange} />
          <TextField
            label="Descripcion breve"
            onChange={handleChange} 
          />
          <TextField
            label="Cliente directo"
            onChange={handleChange} 
          />
          <TextField
            label="Cliente final"
            onChange={handleChange} 
          />
          <TextField
            label="Director"
            onChange={handleChange} 
          />
          <TextField
            label="Coordinador"
            onChange={handleChange} 
          />
          <TextField
            label="Contrato"
            onChange={handleChange} 
          />
          <TextField
            label="Participacion OPTIMA"
            onChange={handleChange} 
          />
          <TextField
            label="Valor contrato sin IVA"
            onChange={handleChange} 
          />
          <TextField
            label="IVA"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 1"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 2"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 3"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 4"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 5"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 6"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 7"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 8"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 9"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 10"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 11"
            onChange={handleChange} 
          />
          <TextField
            label="OTROSI 12"
            onChange={handleChange} 
          />
          <TextField
            label="PCO"
            onChange={handleChange} 
          />
          <TextField
            label="Administración"
            onChange={handleChange} 
          />
          <TextField
            label="Imprevistos"
            onChange={handleChange} 
          />
          <TextField
            label="Utilidad Bruta"
            onChange={handleChange} 
          />
          <TextField
            label="% ANTICIPO CONTRACTUAL"
            onChange={handleChange} 
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
