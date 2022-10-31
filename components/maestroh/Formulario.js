import React, { useEffect, useState } from "react";
import {useContext} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormGroup, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";

const Formulario = () => {
  const {
    Contratado,
    setContratado,
    setEjecutado,
    setNombre,
    setRetencionesYDescuentos,
    setAnticipoAmortizadoPorElCliente,
    setFacturasPagadsPorElCliente,
    setRetegantiaPorcent,
    setValorTotalFacturadoSinIVA,
    setAnticiposPagadosxElCliente,
    setPorcentAnticipoContractural,
    setUtilidadBruta,
    setImprevistos,
    setAdministracion,
    setPCO,
    setOTROSSI1,
    setOTROSSI2,
    setOTROSSI3,
    setOTROSSI4,
    setOTROSSI5,
    setOTROSSI6,
    setOTROSSI7,
    setOTROSSI8,
    setOTROSSI9,
    setOTROSSI10,
    setOTROSSI11,
    setOTROSSI12,
    setValorContratoSinIVA,
    setParticipacionOPTIMA,
    setContrato,
    setCoordinador,
    setDirector,
    setClienteFinal,
    setClienteDirecto,
    setDescripcionBreve,
    setLineaNegocio,
    setOferta,
    setSeudonimo ,
    setContactoCliente,
    setFechaiC,
    setFechafC,
    setFechafR,
    setFechaiR,
    setConsecutivo,
    CrearDatos,
    datosMaestro} = useContext(DatosContext)
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault()
    CrearDatos(Contratado)
  }
  return (
    <form  onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>INFORMACION DEL PROYECTO</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
        <TextField label="Contratado" onChange={e => setContratado(e.target.value)} />
        <TextField label="Ejecutado En" onChange={e => setEjecutado(e.target.value)} />
        <TextField label="Consecutivo" onChange={e => setConsecutivo(e.target.value)}  type="number"/>
        <TextField label="Oferta" onChange={e => setOferta(e.target.value)} />
        <TextField label="Linea de Negocio" onChange={e => setLineaNegocio(e.target.value)} />
        <TextField label="Seudonimo" onChange={e => setSeudonimo(e.target.value)} />
          <TextField label="Nombre" onChange={e => setNombre(e.target.value)} />
          <TextField
            label="Descripcion breve"
            onChange={e => setDescripcionBreve(e.target.value)}
          />
          <TextField
            label="Cliente directo"
            onChange={e => setClienteDirecto(e.target.value)} 
          />
          <TextField
            label="Contacto cliente"
            onChange={e => setContactoCliente(e.target.value)} 
          />
          <TextField
            label="Cliente final"
            onChange={e => setClienteFinal(e.target.value)}
          />
          <TextField
            label="Director"
            onChange={e => setDirector(e.target.value)}
          />
          <TextField
            label="Coordinador"
            onChange={e => setCoordinador(e.target.value)} 
          />
          <TextField
            label="Contrato"
            onChange={e => setContrato(e.target.value)}
          />
          <TextField
            label="Fecha Inicio Contractural"
            type="date"
            onChange={e => setFechaiC(e.target.value)}
          />
          <TextField
            label="Fecha Final Contractural"
            type="date"
            onChange={e => setFechafC(e.target.value)}
          />
          <TextField
            label="Fecha Inicio Real"
            type="date"
            onChange={e => setFechaiR(e.target.value)}
          />
          <TextField
            label="Fecha Final Real"
            type="date"
            onChange={e => setFechafR(e.target.value)}
          />
          <TextField
            label="Participacion OPTIMA"
            type="number"
            onChange={e => setParticipacionOPTIMA(e.target.value)}
          />
          <TextField
            label="Valor contrato sin IVA"
            type="number"
            onChange={e => setValorContratoSinIVA(e.target.value)}
          />
          <TextField
            label="OTROSI 1"
            type="number"
            onChange={e => setOTROSSI1(e.target.value)}
          />
          <TextField
            label="OTROSI 2"
            type="number"
            onChange={e => setOTROSSI2(e.target.value)}
          />
          <TextField
            label="OTROSI 3"
            type="number"
            onChange={e => setOTROSSI3(e.target.value)} 
          />
          <TextField
            label="OTROSI 4"
            type="number"
            onChange={e => setOTROSSI4(e.target.value)}
          />
          <TextField
            label="OTROSI 5"
            type="number"
            onChange={e => setOTROSSI5(e.target.value)}
          />
          <TextField
            label="OTROSI 6"
            type="number"
            onChange={e => setOTROSSI6(e.target.value)}
          />
          <TextField
            label="OTROSI 7"
            type="number"
            onChange={e => setOTROSSI7(e.target.value)}
          />
          <TextField
            label="OTROSI 8"
            type="number"
            onChange={e => setOTROSSI8(e.target.value)}
          />
          <TextField
            label="OTROSI 9"
            type="number"
            onChange={e => setOTROSSI9(e.target.value)}
          />
          <TextField
            label="OTROSI 10"
            type="number"
            onChange={e => setOTROSSI10(e.target.value)}
          />
          <TextField
            label="OTROSI 11"
            type="number"
            onChange={e => setOTROSSI11(e.target.value)}
          />
          <TextField
            label="OTROSI 12"
            type="number"
            onChange={e => setOTROSSI12(e.target.value)}
          />
          <TextField
            label="PCO"
            type="number"
            onChange={e => setPCO(e.target.value)}
          />
          <TextField
            label="Administración"
            type="number"
            onChange={e => setAdministracion(e.target.value)}
          />
          <TextField
            label="Imprevistos"
            type="number"
            onChange={e => setImprevistos(e.target.value)}
          />
          <TextField
            label="Utilidad Bruta"
            type="number"
            onChange={e => setUtilidadBruta(e.target.value)}
          />
          <TextField
            label="% ANTICIPO CONTRACTUAL"
            type="number"
            onChange={e => setPorcentAnticipoContractural(e.target.value)} 
          />
        </Box>
      </FormGroup>
      <br />
      <FormGroup>
        <FormLabel>FACTURACION</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
          <TextField
            label=" Anticipos Pagados Por El Cliente"
            type="number"
            onChange={e => setAnticiposPagadosxElCliente(e.target.value)}
          />
          <TextField
            label="Valor Total Facturado Sin IVA"
            type="number"
            onChange={e => setValorTotalFacturadoSinIVA(e.target.value)}
          />
          <TextField
            label="% Retegantia"
            type="number"
            onChange={e => setRetegantiaPorcent(e.target.value)}
          />
          <TextField
            label="Facturas Pagadas Por El Cliente"
            type="number"
            onChange={e => setFacturasPagadsPorElCliente(e.target.value)}
          />
          <TextField
            label="Anticipo Amortizado Por El Cliente"
            type="number"
            onChange={e => setAnticipoAmortizadoPorElCliente(e.target.value)}
          />
          <TextField
            label="Retenciones Y Descuentos Aplicados Por El Cliente (Sin Amortiacion De Anticipo)"
            type="number"
            onChange={e => setRetencionesYDescuentos(e.target.value)}
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
