import Layout from "../../components/layout/Layout";
import {useContext, useState} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import React from "react";
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import { TableContainer, Table , TableHead,TableRow, TableCell, TableBody, TableFooter, TablePagination } from '@mui/material';


const Index = () => {
  const router = useRouter();
  const [Search, setSearch] = useState('')
  const {datosMaestro,Eliminar} = useContext(DatosContext)
  let datos = []
  console.log(datosMaestro)

  const Searcher = (e) => {
    setSearch(e.target.value)
  }

  if (!Search) {
    datos = datosMaestro
  }else {
    datos = datosMaestro.filter((dato) => dato.Seudonimo.toLowerCase().includes(Search.toLocaleLowerCase())) 
  }
  const tableStyling = {
    padding:"0 10px",
    position:"sticky",
  }
  
  const columns = [
    {headerName: "Acciones", width:200},
    {headerName: "Contratado", width:100},
    {headerName: "Ejecutado En"},
    {headerName: "Consecutivo"},
    {headerName: "Oferta", width:200},
    {headerName: "Linea de Negocio"},
    {headerName: "Seudonimo", width:300},
    {headerName: "Nombre del proyecto", width:800},
    {field: "DescripcionBreve", headerName: "Descripcion Breve",width: 900,},
    {field: "ClienteDirecto", headerName: "Cliente Directo", width: 300 },
    {field: "ContactoCliente", headerName: "Contacto Cliente", width: 300 },
    {field: "ClienteFinal", headerName: "Cliente Final", width: 300 },
    {field: "Director", headerName: "Director", width: 100 },
    {field: "Coordinador", headerName: "Coordinador", width: 200 },
    {field: "Contrato", headerName: "Contrato", width: 300 },
    {field: "FechaInicioContractual",headerName: "Fecha Inicio Contractual",width: 300,},
    {field: "FechaFinalContractual", headerName: "Fecha Terminación Contractual",width: 300,},
    {headerName:"Plazo Contractual", width:200},
    {field: "FechaInicioReal", headerName: "Fecha Inicio Real", width: 300 },
    {field: "FechaFinalReal",headerName: "Fecha Terminación Real",width: 300,},
    {headerName:"Plazo Real", width:200},
    {field: "ParticipacionOPTIMA", headerName: "Participación Optima",width: 200,},
    {field: "ValorContratoSinIVA", headerName: "Valor Contratado sin IVA",width: 200,},
    {field: "IVA", headerName: "IVA",width: 100, },
    {field: "OTROSSI1", headerName: "OTROSSI 1", width: 200 },
    {field: "OTROSSI2", headerName: "OTROSSI 2", width: 200 },
    {field: "OTROSSI3", headerName: "OTROSSI 3", width: 200 },
    {field: "OTROSSI4", headerName: "OTROSSI 4", width: 200 },
    {field: "OTROSSI5", headerName: "OTROSSI 5", width: 200 },
    {field: "OTROSSI6", headerName: "OTROSSI 6", width: 200 },
    {field: "OTROSSI7", headerName: "OTROSSI 7", width: 200 },
    {field: "OTROSSI8", headerName: "OTROSSI 8", width: 200 },
    {field: "OTROSSI9", headerName: "OTROSSI 9", width: 200 },
    {field: "OTROSSI10", headerName: "OTROSSI 10", width: 200 },
    {field: "OTROSSI11", headerName: "OTROSSI 11", width: 200 },
    {field: "OTROSSI12", headerName: "OTROSSI 12", width: 200 },
    {field: "TotalOtrossi", headerName: "TOTAL OTROSSI", width: 200 },
    {field: "ValorTotalContratado",headerName: "Valor Total Contratado sin IVA",width: 300,},
    {field: "PCO", headerName: "PCO", width:300 },
    {field: "Administracion", headerName: "Administración", width: 300 },
    {field: "Imprevistos", headerName: "Imprevistos", width: 300 },
    {field: "UtilidadBruta", headerName: "Utilidad Bruta", width: 300 },
    {field: "PorcentAnticipoContractural",headerName: "% Anticipo Contractual", width: 100,},
    {field: "AnticipoContractual",headerName: "valor Anticipo Contractual",width: 300,},
    {field: "AnticiposPagadosxElCliente",headerName: "ANTICIPOS PAGADOS POR EL CLIENTE",width: 300,},
    {field: "ValorTotalFacturadoSinIVA",headerName: "Valor Total Facturado Sin IVA",width: 300,},
    {field: "IVAFacturado",headerName: "IVA FACTURADO",width: 300,},
    {field: "RetegantiaPorcent",headerName: "% Retegantia",width: 100,},
    {field: "ValorReteGantia",headerName: "Valor Retegantia",width: 300,},
    {field: "ValorPendientePorFacturarSinIVA",headerName: "Valor Pendiente Ejecutar o Facturar",width: 300,},
    {field: "FacturasPagadsPorElCliente",headerName: "Neto Ingresado Al Banco",width: 300,},
    {field: "AnticipoAmortizadoPorElCliente",headerName: "Valor Anticipo Amortizado Por El Cliente",width: 300,},
    {field: "SaldoAnticipoPorAmortizar",headerName: "Saldo Anticipo Por Amortizar",width: 300,},
    {field:"RetencionesYDescuentos", headerName:"VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)"},
    {field: "FacturacionPendientedePago", headerName: "Neto Facturas Pendientes de pago",width: 300,},
    {field: "AnticiposPendientesDePago",headerName: "valor anticipo Pendientes de pago",width: 300,},
    {field: "RelacionFacturadoContratado",headerName: "Relación Facturado / Contratado",width: 200,},
    {headerName: "Estado"},
  ]

  return (
    <Layout>
      <p>Maestro Historico</p>
      <Button
        variant="contained"
        onClick={() => router.push("/Maestro-historico/Crear")}
      >
        Crear
      </Button>
      <br />
      <TextField fullWidth margin="dense"  value={Search} onChange={Searcher} label="Buscar" />
      <br />
      <div style={{ height: 500, width: "100%" }}>
      <TableContainer >
        <Table sx={{width:"max-content"}} aria-label="simple table">
          <TableHead >
            <TableRow>
              {
                columns.map(c => (
                  <TableCell sx={{...tableStyling, width:(c.width)}}  key={c.headerName} >{c.headerName}</TableCell>
                ))
              } 
            </TableRow>
          </TableHead>
          <TableBody sx={{width:"max-content"}}>
          
            {
              datos.map(dato => (
                <TableRow key={dato.id}>
                <TableCell ><Button variant="contained" size="small" color="success" onClick={() => router.push(`/Maestro-historico/${dato.id}`)}>Editar</Button><Button onClick={() => Eliminar(dato.id)} size="small" variant="contained" color="error">Eliminar</Button></TableCell>
                <TableCell>{dato.Contratado}</TableCell>
                <TableCell>{dato.Ejecutado}</TableCell>
                <TableCell>{dato.Consecutivo}</TableCell>
                <TableCell>{dato.Oferta}</TableCell>
                <TableCell>{dato.LineaNegocio}</TableCell>
                <TableCell style={{
                        position: 'sticky',
                        left: 0,
                        background: 'white',
                        zIndex: 800,
                    }}>{dato.Seudonimo}</TableCell>
                <TableCell>{dato.Nombre}</TableCell>
                <TableCell>{dato.DescripcionBreve}</TableCell>
                <TableCell>{dato.ClienteDirecto}</TableCell>
                <TableCell>{dato.ContactoCliente}</TableCell>
                <TableCell>{dato.ClienteFinal}</TableCell>
                <TableCell>{dato.Director}</TableCell>
                <TableCell>{dato.Coordinador}</TableCell>
                <TableCell>{dato.Contrato}</TableCell>
                <TableCell>{dato.FechaInicioContractual}</TableCell>
                <TableCell>{dato.FechaFinalContractual}</TableCell>
                <TableCell>{dato.PlazoContractual}</TableCell>
                <TableCell>{dato.FechaInicioReal}</TableCell>
                <TableCell>{dato.FechaFinalReal}</TableCell>
                <TableCell>{dato.PlazoReal}</TableCell>
                <TableCell>{dato.ParticipacionOPTIMA}</TableCell>
                <TableCell>{dato.ValorContratoSinIVA}</TableCell>
                <TableCell>{dato.IVA}</TableCell>
                <TableCell>{dato.OTROSSI1}</TableCell>
                <TableCell>{dato.OTROSSI2}</TableCell>
                <TableCell>{dato.OTROSSI3}</TableCell>
                <TableCell>{dato.OTROSSI4}</TableCell>
                <TableCell>{dato.OTROSSI5}</TableCell>
                <TableCell>{dato.OTROSSI6}</TableCell>
                <TableCell>{dato.OTROSSI7}</TableCell>
                <TableCell>{dato.OTROSSI8}</TableCell>
                <TableCell>{dato.OTROSSI9}</TableCell>
                <TableCell>{dato.OTROSSI10}</TableCell>
                <TableCell>{dato.OTROSSI11}</TableCell>
                <TableCell>{dato.OTROSSI12}</TableCell>
                <TableCell>{dato.TotalOtrossi}</TableCell>
                <TableCell>{dato.ValorTotalContratado}</TableCell>
                <TableCell>{dato.PCO}</TableCell>
                <TableCell>{dato.Administracion}</TableCell>
                <TableCell>{dato.Imprevistos}</TableCell>
                <TableCell>{dato.UtilidadBruta}</TableCell>
                <TableCell>{dato.PorcentAnticipoContractural}</TableCell>
                <TableCell>{dato.AnticipoContractual}</TableCell>
                <TableCell>{dato.AnticiposPagadosxElCliente}</TableCell>
                <TableCell>{dato.ValorTotalFacturadoSinIVA}</TableCell>
                <TableCell>{dato.IVAFacturado}</TableCell>
                <TableCell>{dato.RetegantiaPorcent}</TableCell>
                <TableCell>{dato.ValorReteGantia}</TableCell>
                <TableCell>{dato.ValorPendientePorFacturarSinIVA}</TableCell>
                <TableCell>{dato.FacturasPagadsPorElCliente}</TableCell>
                <TableCell>{dato.AnticipoAmortizadoPorElCliente}</TableCell>
                <TableCell>{dato.SaldoAnticipoPorAmortizar}</TableCell>
                <TableCell>{dato.RetencionesYDescuentos}</TableCell>
                <TableCell>{dato.FacturacionPendientedePago}</TableCell>
                <TableCell>{dato.AnticiposPendientesDePago}</TableCell>
                <TableCell>{dato.RelacionFacturadoContratado}</TableCell>
                <TableCell>{dato.Estado}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </Layout>
  );
};

export default Index;
