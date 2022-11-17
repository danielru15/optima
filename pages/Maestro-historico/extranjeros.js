import React from 'react'
import Layout from '../../components/layout/Layout'
import {useContext, useState} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';



const Extranjeros = () => {
  const {datosMaestroE,Eliminar,formatodivisa} = useContext(DatosContext)
  const [Search, setSearch] = useState('')
  const router = useRouter();
  let datos = []

  const Searcher = (e) => {
    setSearch(e.target.value)
  }

  if (!Search) {
    datos = datosMaestroE
  }else {
    datos = datosMaestroE.filter((dato) => dato.Seudonimo.toLowerCase().includes(Search.toLocaleLowerCase())) 
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  const usdPrice = {
    type: 'number',
    valueFormatter: ({ value }) => currencyFormatter.format(value),
    cellClassName: 'font-tabular-nums',
  }

  const columns = [
    {headerName: "Acciones", width:200, type:"actions", renderCell:(params)=> <div>
      <Button variant="contained" size="small" color="success" onClick={() => router.push(`/Maestro-historico/${params.row.id}`)}>Editar</Button><Button onClick={() => Eliminar(params.id)} size="small" variant="contained" color="error">Eliminar</Button>
    </div>},
    {field:"Contratado", headerName: "Contratado", width:100},
    {field:"Ejecutado", headerName: "Ejecutado En"},
    {field:"Consecutivo", headerName: "Consecutivo"},
    {field:"Oferta", headerName: "Oferta", width:200},
    {field:"LineaNegocio", headerName: "Linea de Negocio"},
    {field:"Seudonimo", headerName: "Seudonimo", width:300},
    {field:"Nombre", headerName: "Nombre del proyecto", width:800},
    {field: "DescripcionBreve", headerName: "Descripcion Breve",width: 900,},
    {field: "ClienteDirecto", headerName: "Cliente Directo", width: 300 },
    {field: "ContactoCliente", headerName: "Contacto Cliente", width: 300 },
    {field: "ClienteFinal", headerName: "Cliente Final", width: 300 },
    {field: "Director", headerName: "Director", width: 100 },
    {field: "Coordinador", headerName: "Coordinador", width: 200 },
    {field: "Contrato", headerName: "Contrato", width: 300 },
    {field: "FechaInicioContractual",headerName: "Fecha Inicio Contractual",width: 300, type:"date"},
    {field: "FechaFinalContractual", headerName: "Fecha Terminación Contractual",width: 300,type:"date"},
    {field:"PlazoContractual", headerName:"Plazo Contractual", width:200},
    {field: "FechaInicioReal", headerName: "Fecha Inicio Real", width: 300,type:"date" },
    {field: "FechaFinalReal",headerName: "Fecha Terminación Real",width: 300,type:"date",},
    {field:"PlazoReal", headerName:"Plazo Real", width:200},
    {field: "ParticipacionOPTIMA", headerName: "Participación Optima",width: 200,valueFormatter: ({ value }) => `${value}%`},
    {field: "ValorContratoSinIVA", headerName: "Valor Contratado sin IVA",width: 200,...usdPrice },
    {field: "IVA", headerName: "IVA",width: 200,...usdPrice  },
    {field: "OTROSSI1", headerName: "OTROSSI 1", width: 200,...usdPrice, },
    {field: "OTROSSI2", headerName: "OTROSSI 2", width: 200,...usdPrice  },
    {field: "OTROSSI3", headerName: "OTROSSI 3", width: 200,...usdPrice },
    {field: "OTROSSI4", headerName: "OTROSSI 4", width: 200,...usdPrice  },
    {field: "OTROSSI5", headerName: "OTROSSI 5", width: 200,...usdPrice  },
    {field: "OTROSSI6", headerName: "OTROSSI 6", width: 200,...usdPrice  },
    {field: "OTROSSI7", headerName: "OTROSSI 7", width: 200,...usdPrice  },
    {field: "OTROSSI8", headerName: "OTROSSI 8", width: 200,...usdPrice  },
    {field: "OTROSSI9", headerName: "OTROSSI 9", width: 200,...usdPrice  },
    {field: "OTROSSI10", headerName: "OTROSSI 10", width: 200,...usdPrice  },
    {field: "OTROSSI11", headerName: "OTROSSI 11", width: 200,...usdPrice  },
    {field: "OTROSSI12", headerName: "OTROSSI 12", width: 200,...usdPrice  },
    {field: "TotalOtrossi", headerName: "TOTAL OTROSSI", width: 200,...usdPrice  },
    {field: "ValorTotalContratado",headerName: "Valor Total Contratado sin IVA",width: 300,...usdPrice },
    {field: "PCO", headerName: "PCO", width:300,...usdPrice  },
    {field: "Administracion", headerName: "Administración", width: 300,...usdPrice  },
    {field: "Imprevistos", headerName: "Imprevistos", width: 300,...usdPrice  },
    {field: "UtilidadBruta", headerName: "Utilidad Bruta", width: 300,...usdPrice  },
    {field: "PorcentAnticipoContractural",headerName: "% Anticipo Contractual", width: 200,valueFormatter: ({ value }) => `${value}%`},
    {field: "AnticipoContractual",headerName: "valor Anticipo Contractual",width: 300,...usdPrice },
    {field: "AnticiposPagadosxElCliente",headerName: "ANTICIPOS PAGADOS POR EL CLIENTE",width: 300,...usdPrice },
    {field: "ValorTotalFacturadoSinIVA",headerName: "Valor Total Facturado Sin IVA",width: 300,...usdPrice },
    {field: "IVAFacturado",headerName: "IVA FACTURADO",width: 300,...usdPrice },
    {field: "RetegantiaPorcent",headerName: "% Retegantia",width: 100,valueFormatter: ({ value }) => `${value}%`},
    {field: "ValorReteGantia",headerName: "Valor Retegantia",width: 300,...usdPrice },
    {field: "ValorPendientePorFacturarSinIVA",headerName: "Valor Pendiente Ejecutar o Facturar",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'saldo-x-amortizar' : '' },
    {field: "FacturasPagadsPorElCliente",headerName: "Neto Ingresado Al Banco",width: 300,...usdPrice },
    {field: "AnticipoAmortizadoPorElCliente",headerName: "Valor Anticipo Amortizado Por El Cliente",width: 300,...usdPrice },
    {field: "SaldoAnticipoPorAmortizar",headerName: "Saldo Anticipo Por Amortizar",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'saldo-x-amortizar' : '' },
    {field:"RetencionesYDescuentos", headerName:"VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)",...usdPrice, width:500 },
    {field: "FacturacionPendientedePago", headerName: "Neto Facturas Pendientes de pago",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'pendiente-pago' : '' },
    {field: "AnticiposPendientesDePago",headerName: "valor anticipo Pendientes de pago",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'pendiente-pago' : '' },
    {field: "RelacionFacturadoContratado",headerName: "Relación Facturado / Contratado",width: 200,valueFormatter: ({ value }) => `${Math.round(value)}%`, },
    {field:"Estado", headerName: "Estado" },
  ]

  return (
    <Layout>
      <p>Maestro Historico Extranjeros</p>
      <Button
        variant="contained"
        onClick={() => router.push("/Maestro-historico/crearE")}
      >Crear</Button>
      <br />
      <TextField fullWidth margin="dense"  value={Search} onChange={Searcher} label="Buscar" />
      <br />
      <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={datos}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5,10,25,50]}
      />
      </div>
    </Layout>
  )
}

export default Extranjeros