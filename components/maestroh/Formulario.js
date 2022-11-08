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
    Actualizar,
    setContratado,
    Contratado,
    setEjecutado,
    Ejecutado,
    setNombre,
    Nombre,
    setRetencionesYDescuentos,
    RetencionesYDescuentos,
    setAnticipoAmortizadoPorElCliente,
    AnticipoAmortizadoPorElCliente,
    setFacturasPagadsPorElCliente,
    FacturasPagadsPorElCliente,
    setRetegantiaPorcent,
    RetegantiaPorcent,
    setValorTotalFacturadoSinIVA,
    ValorTotalFacturadoSinIVA,
    setAnticiposPagadosxElCliente,
    AnticiposPagadosxElCliente,
    setPorcentAnticipoContractural,
    PorcentAnticipoContractural,
    setUtilidadBruta,
    UtilidadBruta,
    setImprevistos,
    Imprevistos,
    setAdministracion,
    Administracion,
    setPCO,
    PCO,
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
    OTROSSI1,
OTROSSI2,
OTROSSI3,
OTROSSI4,
OTROSSI5,
OTROSSI6,
OTROSSI7,
OTROSSI8,
OTROSSI9,
OTROSSI10,
OTROSSI11,
OTROSSI12,
ValorContratoSinIVA,
ParticipacionOPTIMA,
Contrato,
Coordinador,
Director,
ClienteFinal,
ClienteDirecto,
DescripcionBreve,
LineaNegocio,
Oferta,
Seudonimo,
ContactoCliente,
FechaiC,
FechafC,
FechafR,
FechaiR,
Consecutivo,
    CrearDatos,
    datosMaestro} = useContext(DatosContext)
  const {push, query} = useRouter();


  useEffect(() => {
    if(query.id){
      const encontrado = datosMaestro.find(dato => dato.id === query.id)
      setContratado(encontrado.Contratado)
      setEjecutado(encontrado.Ejecutado)
      setNombre(encontrado.Nombre)
      setRetencionesYDescuentos(encontrado.RetencionesYDescuentos)
    setAnticipoAmortizadoPorElCliente(encontrado.AnticipoAmortizadoPorElCliente)
    setFacturasPagadsPorElCliente(encontrado.FacturasPagadsPorElCliente)
    setRetegantiaPorcent(encontrado.RetegantiaPorcent)
    setValorTotalFacturadoSinIVA(encontrado.ValorTotalFacturadoSinIVA)
    setPorcentAnticipoContractural(encontrado.PorcentAnticipoContractural)
    setUtilidadBruta(encontrado.UtilidadBruta)
    setImprevistos(encontrado.Imprevistos)
    setAdministracion(encontrado.Administracion)
    setPCO(encontrado.PCO)
    setOTROSSI2(encontrado.OTROSSI1)
    setOTROSSI1(encontrado.OTROSSI2)
    setOTROSSI3(encontrado.OTROSSI3)
    setOTROSSI4(encontrado.OTROSSI4)
    setOTROSSI5(encontrado.OTROSSI5)
    setOTROSSI6(encontrado.OTROSSI6)
    setOTROSSI7(encontrado.OTROSSI7)
    setOTROSSI8(encontrado.OTROSSI8)
    setOTROSSI9(encontrado.OTROSSI9)
    setOTROSSI10(encontrado.OTROSSI10)
    setOTROSSI11(encontrado.OTROSSI11)
    setOTROSSI12(encontrado.OTROSSI12)
    setValorContratoSinIVA(encontrado.ValorContratoSinIVA)
    setParticipacionOPTIMA(encontrado.ParticipacionOPTIMA)
    setContrato(encontrado.Contrato)
    setCoordinador(encontrado.Coordinador)
    setDirector(encontrado.Director)
    setClienteFinal(encontrado.ClienteFinal)
    setClienteDirecto(encontrado.ClienteDirecto)
    setDescripcionBreve(encontrado.DescripcionBreve)
    setLineaNegocio(encontrado.LineaNegocio)
    setOferta(encontrado.Oferta)
    setSeudonimo (encontrado.Seudonimo)
    setContactoCliente(encontrado.ContactoCliente)
    setFechaiC(encontrado.FechaiC)
    setFechafC(encontrado.FechafC)
    setFechafR(encontrado.FechafR)
    setFechaiR(encontrado.FechaiR)
    setConsecutivo(encontrado.Consecutivo)

    console.log(encontrado)
    }
  }, [])
  
  const handleSubmit = (e) => {
    let id = query.id
    e.preventDefault()
    if(!query.id){
    CrearDatos(Contratado)
    }else {
      Actualizar(id)
      push('/')
    }
  }

 
  
  return (
    <form  onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>INFORMACION DEL PROYECTO</FormLabel>
        <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
        <TextField   label="Contratado" onChange={e => setContratado(e.target.value)} value={Contratado}/>
        <TextField label="Ejecutado En" onChange={e => setEjecutado(e.target.value)} value={Ejecutado}/>
        <TextField label="Consecutivo" onChange={e => setConsecutivo(e.target.value)}  type="number" value={Consecutivo}/>
        <TextField label="Oferta" onChange={e => setOferta(e.target.value)} value={Oferta} />
        <TextField label="Linea de Negocio" onChange={e => setLineaNegocio(e.target.value)} value={LineaNegocio}/>
        <TextField label="Seudonimo" onChange={e => setSeudonimo(e.target.value)} value={Seudonimo}/>
          <TextField label="Nombre" onChange={e => setNombre(e.target.value)}value={Nombre} />
          <TextField
            label="Descripcion breve"
            onChange={e => setDescripcionBreve(e.target.value)}
            value={DescripcionBreve}
          />
          <TextField
            label="Cliente directo"
            onChange={e => setClienteDirecto(e.target.value)} 
            value={ClienteDirecto}
          />
          <TextField
            label="Contacto cliente"
            onChange={e => setContactoCliente(e.target.value)} 
            value={ContactoCliente}
          />
          <TextField
            label="Cliente final"
            onChange={e => setClienteFinal(e.target.value)}
            value={ClienteFinal}
          />
          <TextField
            label="Director"
            onChange={e => setDirector(e.target.value)}
            value={Director}
          />
          <TextField
            label="Coordinador"
            onChange={e => setCoordinador(e.target.value)} 
            value={Coordinador}
          />
          <TextField
            label="Contrato"
            onChange={e => setContrato(e.target.value)}
            value={Contrato}
          />
          <TextField
            label="Fecha Inicio Contractural"
            type="date"
            onChange={e => setFechaiC(e.target.value)}
            value={FechaiC}
          />
          <TextField
            label="Fecha Final Contractural"
            type="date"
            onChange={e => setFechafC(e.target.value)}
            value={FechafC}
          />
          <TextField
            label="Fecha Inicio Real"
            type="date"
            onChange={e => setFechaiR(e.target.value)}
            value={FechaiR}
          />
          <TextField
            label="Fecha Final Real"
            type="date"
            onChange={e => setFechafR(e.target.value)}
            value={FechafR}
          />
          <TextField
            label="Participacion OPTIMA"
            type="number"
            onChange={e => setParticipacionOPTIMA(e.target.value)}
            value={ParticipacionOPTIMA}
          />
          <TextField
            label="Valor contrato sin IVA"
            type="number"
            onChange={e => setValorContratoSinIVA(e.target.value)}
            value={ValorContratoSinIVA}
          />
          <TextField
            label="OTROSI 1"
            type="number"
            onChange={e => setOTROSSI1(e.target.value)}
            value={OTROSSI1}
          />
          <TextField
            label="OTROSI 2"
            type="number"
            onChange={e => setOTROSSI2(e.target.value)}
            value={OTROSSI2}
          />
          <TextField
            label="OTROSI 3"
            type="number"
            onChange={e => setOTROSSI3(e.target.value)} 
            value={OTROSSI3}
          />
          <TextField
            label="OTROSI 4"
            type="number"
            onChange={e => setOTROSSI4(e.target.value)}
            value={OTROSSI4}
          />
          <TextField
            label="OTROSI 5"
            type="number"
            onChange={e => setOTROSSI5(e.target.value)}
            value={OTROSSI5}
          />
          <TextField
            label="OTROSI 6"
            type="number"
            onChange={e => setOTROSSI6(e.target.value)}
            value={OTROSSI6}
          />
          <TextField
            label="OTROSI 7"
            type="number"
            onChange={e => setOTROSSI7(e.target.value)}
            value={OTROSSI7}
          />
          <TextField
            label="OTROSI 8"
            type="number"
            onChange={e => setOTROSSI8(e.target.value)}
            value={OTROSSI8}
          />
          <TextField
            label="OTROSI 9"
            type="number"
            onChange={e => setOTROSSI9(e.target.value)}
            value={OTROSSI9}
          />
          <TextField
            label="OTROSI 10"
            type="number"
            onChange={e => setOTROSSI10(e.target.value)}
            value={OTROSSI10}
          />
          <TextField
            label="OTROSI 11"
            type="number"
            onChange={e => setOTROSSI11(e.target.value)}
            value={OTROSSI11}
          />
          <TextField
            label="OTROSI 12"
            type="number"
            onChange={e => setOTROSSI12(e.target.value)}
            value={OTROSSI12}
          />
          <TextField
            label="PCO"
            type="number"
            onChange={e => setPCO(e.target.value)}
            value={PCO}
          />
          <TextField
            label="Administración"
            type="number"
            onChange={e => setAdministracion(e.target.value)}
            value={Administracion}
          />
          <TextField
            label="Imprevistos"
            type="number"
            onChange={e => setImprevistos(e.target.value)}
            value={Imprevistos}
          />
          <TextField
            label="Utilidad Bruta"
            type="number"
            onChange={e => setUtilidadBruta(e.target.value)}
            value={UtilidadBruta}
          />
          <TextField
            label="% ANTICIPO CONTRACTUAL"
            type="number"
            onChange={e => setPorcentAnticipoContractural(e.target.value)} 
            value={PorcentAnticipoContractural}
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
            value={AnticiposPagadosxElCliente}
          />
          <TextField
            label="Valor Total Facturado Sin IVA"
            type="number"
            onChange={e => setValorTotalFacturadoSinIVA(e.target.value)}
            value={ValorTotalFacturadoSinIVA}
          />
          <TextField
            label="% Retegantia"
            type="number"
            onChange={e => setRetegantiaPorcent(e.target.value)}
            value={RetegantiaPorcent}
          />
          <TextField
            label="Facturas Pagadas Por El Cliente"
            type="number"
            onChange={e => setFacturasPagadsPorElCliente(e.target.value)}
            value={FacturasPagadsPorElCliente}
          />
          <TextField
            label="Anticipo Amortizado Por El Cliente"
            type="number"
            onChange={e => setAnticipoAmortizadoPorElCliente(e.target.value)}
            value={AnticipoAmortizadoPorElCliente}
          />
          <TextField
            label="Retenciones Y Descuentos Aplicados Por El Cliente (Sin Amortiacion De Anticipo)"
            type="number"
            onChange={e => setRetencionesYDescuentos(e.target.value)}
            value={RetencionesYDescuentos}
          />
        </Box>
      </FormGroup>
      <br />
      <Button variant="contained" type="submit">
        {query.id ? 'Actualizar' : 'Crear'}
      </Button>
      <Button onClick={() => push("/Maestro-historico")}>
        Cancelar
      </Button>
    </form>
  );
};

export default Formulario;
